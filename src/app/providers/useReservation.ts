import { useContext } from 'react'
import { ReservationContext, type ReservationContextValue } from './reservation-context'

export function useReservation(): ReservationContextValue {
  const context = useContext(ReservationContext)
  if (!context) {
    throw new Error('useReservation must be used within a ReservationProvider')
  }
  return context
}
