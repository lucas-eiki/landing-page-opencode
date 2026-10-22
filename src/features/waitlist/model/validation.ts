import { getEditionById } from '../../../shared/data/editions'
import { waitlistContent } from './waitlist-content'

export interface ReservationValues {
  name: string
  email: string
  consent: boolean
}

export type ReservationField = keyof ReservationValues | 'editionId'
export type ReservationErrors = Partial<Record<ReservationField, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export const fieldOrder: ReservationField[] = ['editionId', 'name', 'email', 'consent']

export function validateReservation(
  values: ReservationValues,
  editionId: string,
): ReservationErrors {
  const errors: ReservationErrors = {}

  const edition = editionId ? getEditionById(editionId) : undefined
  if (!edition || edition.availability !== 'available') {
    errors.editionId = waitlistContent.errors.editionId
  }

  if (values.name.trim().length < 2) {
    errors.name = waitlistContent.errors.name
  }

  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = waitlistContent.errors.email
  }

  if (!values.consent) {
    errors.consent = waitlistContent.errors.consent
  }

  return errors
}

export function firstErrorField(errors: ReservationErrors): ReservationField | null {
  return fieldOrder.find((field) => Boolean(errors[field])) ?? null
}
