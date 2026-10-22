import { useCallback, useState } from 'react'
import type { Edition } from '../../../shared/model/edition'

export function useEditions() {
  const [activeEdition, setActiveEdition] = useState<Edition | null>(null)
  const [lastEdition, setLastEdition] = useState<Edition | null>(null)

  const openEdition = useCallback((edition: Edition) => {
    setLastEdition(edition)
    setActiveEdition(edition)
  }, [])

  const closeEdition = useCallback(() => {
    setActiveEdition(null)
  }, [])

  return {
    activeEdition,
    displayedEdition: activeEdition ?? lastEdition,
    openEdition,
    closeEdition,
  }
}
