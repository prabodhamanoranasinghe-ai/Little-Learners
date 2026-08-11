import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  ariaLabelledBy?: string
}

export function Section({ id, children, className = '', ariaLabelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`relative scroll-mt-24 px-4 py-16 sm:scroll-mt-28 sm:px-6 sm:py-20 lg:px-8 lg:py-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}

interface SectionHeadingProps {
  id?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  id,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 sm:mb-14 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2
        id={id}
        className="text-balance text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft sm:text-xl">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
