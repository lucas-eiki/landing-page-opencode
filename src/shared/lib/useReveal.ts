import { useEffect } from 'react'
import { prefersReducedMotion } from './scroll'

export function useReveal(): void {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('main section > .container, footer > .container'),
    )
    const pending = elements.filter(
      (element) => element.getBoundingClientRect().top > window.innerHeight * 0.88,
    )

    if (pending.length === 0) return

    pending.forEach((element) => element.classList.add('reveal-pending'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('reveal-in')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )

    pending.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      pending.forEach((element) => element.classList.remove('reveal-pending', 'reveal-in'))
    }
  }, [])
}
