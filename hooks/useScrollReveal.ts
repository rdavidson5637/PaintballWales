import { type RefObject, useEffect, useState } from 'react'

/**
 * Intersection Observer scroll-reveal hook.
 * Triggers once when the element enters the viewport and stays visible.
 */
export function useScrollReveal(
  ref: RefObject<Element | null>,
  threshold = 0.05
): boolean {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const reveal = () => setIsVisible(true)

    const rect = element.getBoundingClientRect()
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight

    if (rect.top < viewportHeight && rect.bottom > 0) {
      reveal()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal()
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(element)

    const fallback = window.setTimeout(reveal, 1200)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [ref, threshold])

  return isVisible
}
