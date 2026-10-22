import { useCallback, useState } from 'react'

export function useFaq() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = useCallback((id: string) => {
    setOpenId((current) => (current === id ? null : id))
  }, [])

  return { openId, toggle }
}
