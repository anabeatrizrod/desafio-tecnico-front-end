// components/section.tsx
import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  containerClassName?: string
}

export function Section({
  id,
  children,
  className = "py-16 md:py-20 lg:py-32",
  containerClassName = "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
}: SectionProps) {
  return (
    <section id={id} className={className}>
      <div className={containerClassName}>
        {children}
      </div>
    </section>
  )
}