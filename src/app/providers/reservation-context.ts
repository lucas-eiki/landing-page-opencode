import { createContext } from 'react'

export interface ReservationContextValue {
  selectedEditionId: string | null
  setSelectedEditionId: (editionId: string | null) => void
  requestReservation: (editionId?: string) => void
  clearSelection: () => void
}

export const ReservationContext = createContext<ReservationContextValue | null>(null)
