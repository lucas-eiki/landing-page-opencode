export type EditionAvailability = 'available' | 'archive'

export interface Edition {
  id: string
  number: string
  name: string
  stone: string
  description: string
  provenance: string
  includes: string[]
  price: number
  availability: EditionAvailability
  image?: string
  alt: string
}
