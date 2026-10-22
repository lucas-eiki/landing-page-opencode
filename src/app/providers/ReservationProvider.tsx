import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { scrollToSection } from '../../shared/lib/scroll'
import { ReservationContext } from './reservation-context'

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [selectedEditionId, setSelectedEditionId] = useState<string | null>(null)

  const requestReservation = useCallback((editionId?: string) => {
    if (editionId) {
      setSelectedEditionId(editionId)
    }
    scrollToSection('lista')
    window.requestAnimationFrame(() => {
      const target =
        document.getElementById('edition') ?? document.getElementById('certificate-title')
      if (target instanceof HTMLElement) {
        target.focus({ preventScroll: true })
      }
    })
  }, [])

  const clearSelection = useCallback(() => {
    setSelectedEditionId(null)
  }, [])

  const value = useMemo(
    () => ({
      selectedEditionId,
      setSelectedEditionId,
      requestReservation,
      clearSelection,
    }),
    [selectedEditionId, requestReservation, clearSelection],
  )

  return <ReservationContext.Provider value={value}>{children}</ReservationContext.Provider>
}
