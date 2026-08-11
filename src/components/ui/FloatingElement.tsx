interface FloatingElementProps {
  children: string
  className?: string
  animation?: 'float' | 'float-delayed' | 'float-slow' | 'bob' | 'wiggle'
}

export function FloatingElement({
  children,
  className = '',
  animation = 'float',
}: FloatingElementProps) {
  const animationClass = {
    float: 'animate-float',
    'float-delayed': 'animate-float-delayed',
    'float-slow': 'animate-float-slow',
    bob: 'animate-bob',
    wiggle: 'animate-wiggle',
  }[animation]

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute select-none rounded-2xl bg-white/90 px-2.5 py-1 text-xl shadow-[var(--shadow-soft)] sm:text-2xl ${animationClass} ${className}`}
    >
      {children}
    </span>
  )
}
