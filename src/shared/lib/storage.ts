import type { WaitlistEntry } from '../model/waitlist-entry'

export interface StorageReadResult {
  entry: WaitlistEntry | null
  available: boolean
}

function getStorage(): Storage | null {
  try {
    if (typeof window === 'undefined') return null
    return window.localStorage
  } catch {
    return null
  }
}

function isWaitlistEntry(value: unknown): value is WaitlistEntry {
  if (!value || typeof value !== 'object') return false
  const entry = value as Record<string, unknown>
  return (
    typeof entry.id === 'string' &&
    typeof entry.name === 'string' &&
    typeof entry.email === 'string' &&
    typeof entry.editionId === 'string' &&
    typeof entry.protocol === 'string' &&
    typeof entry.createdAt === 'string' &&
    typeof entry.position === 'number'
  )
}

export function readStoredReservation(key: string): StorageReadResult {
  const storage = getStorage()
  if (!storage) return { entry: null, available: false }

  try {
    const raw = storage.getItem(key)
    if (!raw) return { entry: null, available: true }

    const parsed: unknown = JSON.parse(raw)
    if (!isWaitlistEntry(parsed)) {
      storage.removeItem(key)
      return { entry: null, available: true }
    }

    return { entry: parsed, available: true }
  } catch {
    return { entry: null, available: false }
  }
}

export function saveStoredReservation(key: string, entry: WaitlistEntry): boolean {
  const storage = getStorage()
  if (!storage) return false

  try {
    storage.setItem(key, JSON.stringify(entry))
    return true
  } catch {
    return false
  }
}

export function clearStoredReservation(key: string): void {
  const storage = getStorage()
  if (!storage) return

  try {
    storage.removeItem(key)
  } catch {
    // Clearing is best effort; the in-memory state still resets.
  }
}
