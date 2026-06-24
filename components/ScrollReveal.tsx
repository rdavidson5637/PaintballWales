'use client'

import { useRef } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

type ScrollRevealProps = {
  children: React.ReactNode
  className?: string
  initialVisible?: boolean
}

export default function ScrollReveal({
  children,
  className = '',
  initialVisible = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useScrollReveal(ref)
  const show = initialVisible || isVisible

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        show ? 'translate-y-0' : 'translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  )
}
