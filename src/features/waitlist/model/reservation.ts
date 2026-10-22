import type { WaitlistEntry } from '../../../shared/model/waitlist-entry'
import type { ReservationValues } from './validation'

export const RESERVATION_STORAGE_KEY = 'casa-seixo:reservation:v1'

function hash(input: string): number {
  let value = 0
  for (let index = 0; index < input.length; index += 1) {
    value = (value * 31 + input.charCodeAt(index)) >>> 0
  }
  return value
}

function createId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `reservation-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
}

export function createWaitlistEntry(
  values: ReservationValues,
  editionId: string,
): WaitlistEntry {
  const now = new Date()
  const seed = hash(`${values.email.trim().toLowerCase()}|${values.name.trim()}|${now.toISOString()}`)
  const position = 12480 + (hash(values.email.trim().toLowerCase()) % 480) + 1
  const protocol = `CS-${now.getFullYear()}-${String(seed % 1_000_000).padStart(6, '0')}`

  return {
    id: createId(),
    name: values.name.trim(),
    email: values.email.trim(),
    editionId,
    protocol,
    createdAt: now.toISOString(),
    position,
  }
}
