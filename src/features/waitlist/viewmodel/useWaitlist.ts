import { useCallback, useEffect, useRef, useState } from 'react'
import { getEditionById } from '../../../shared/data/editions'
import type { WaitlistEntry } from '../../../shared/model/waitlist-entry'
import {
  clearStoredReservation,
  readStoredReservation,
  saveStoredReservation,
} from '../../../shared/lib/storage'
import { useReservation } from '../../../app/providers/useReservation'
import {
  RESERVATION_STORAGE_KEY,
  createWaitlistEntry,
} from '../model/reservation'
import {
  firstErrorField,
  validateReservation,
  type ReservationErrors,
  type ReservationValues,
} from '../model/validation'
import { waitlistContent } from '../model/waitlist-content'

type WaitlistStatus = 'idle' | 'submitting' | 'success'

export function useWaitlist() {
  const { selectedEditionId, setSelectedEditionId, clearSelection } = useReservation()

  const [initialState] = useState(() => {
    const stored = readStoredReservation(RESERVATION_STORAGE_KEY)
    if (!stored.entry) return stored
    const edition = getEditionById(stored.entry.editionId)
    if (!edition || edition.availability !== 'available') {
      return { ...stored, entry: null }
    }
    return stored
  })

  const [values, setValues] = useState<ReservationValues>({
    name: '',
    email: '',
    consent: false,
  })
  const [errors, setErrors] = useState<ReservationErrors>({})
  const [status, setStatus] = useState<WaitlistStatus>(
    initialState.entry ? 'success' : 'idle',
  )
  const [entry, setEntry] = useState<WaitlistEntry | null>(initialState.entry)
  const [storageAvailable, setStorageAvailable] = useState(initialState.available)
  const timerRef = useRef<number | null>(null)
  const submittingRef = useRef(false)

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current)
      }
    }
  }, [])

  const updateField = useCallback(
    <K extends keyof ReservationValues>(field: K, value: ReservationValues[K]) => {
      setValues((current) => ({ ...current, [field]: value }))
      setErrors((current) => {
        if (!current[field]) return current
        const next = { ...current }
        delete next[field]
        return next
      })
    },
    [],
  )

  const selectEdition = useCallback(
    (editionId: string) => {
      setSelectedEditionId(editionId || null)
    },
    [setSelectedEditionId],
  )

  const submit = useCallback(() => {
    if (submittingRef.current) return

    const validation = validateReservation(values, selectedEditionId ?? '')
    if (Object.keys(validation).length > 0) {
      setErrors(validation)
      const first = firstErrorField(validation)
      if (first) {
        const elementId = first === 'editionId' ? 'edition' : first
        window.requestAnimationFrame(() => document.getElementById(elementId)?.focus())
      }
      return
    }

    submittingRef.current = true
    setErrors({})
    setStatus('submitting')

    timerRef.current = window.setTimeout(() => {
      const edition = selectedEditionId ? getEditionById(selectedEditionId) : undefined
      if (!edition || edition.availability !== 'available') {
        submittingRef.current = false
        setStatus('idle')
        setErrors({ editionId: waitlistContent.errors.editionId })
        timerRef.current = null
        return
      }

      const newEntry = createWaitlistEntry(values, edition.id)
      const saved = saveStoredReservation(RESERVATION_STORAGE_KEY, newEntry)
      setStorageAvailable(saved)
      setEntry(newEntry)
      setStatus('success')
      submittingRef.current = false
      timerRef.current = null
    }, 700)
  }, [values, selectedEditionId])

  const reset = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current)
      timerRef.current = null
    }
    submittingRef.current = false
    clearStoredReservation(RESERVATION_STORAGE_KEY)
    setEntry(null)
    setStatus('idle')
    setErrors({})
    setValues({ name: '', email: '', consent: false })
    clearSelection()
  }, [clearSelection])

  const selectedEdition = selectedEditionId ? getEditionById(selectedEditionId) : undefined
  const visibleErrors = { ...errors }
  if (selectedEdition?.availability === 'available') {
    delete visibleErrors.editionId
  }

  return {
    values,
    errors: visibleErrors,
    status,
    entry,
    storageAvailable,
    selectedEditionId,
    updateField,
    selectEdition,
    submit,
    reset,
  }
}
