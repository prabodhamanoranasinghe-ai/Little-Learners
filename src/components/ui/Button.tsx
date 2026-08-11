import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'soft'
type Size = 'sm' | 'md' | 'lg'

type SharedProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-sky-deep to-lilac-deep text-white shadow-[var(--shadow-soft)] hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-white text-ink border-2 border-sky/60 shadow-[var(--shadow-soft)] hover:border-sky-deep hover:-translate-y-0.5',
  ghost: 'bg-transparent text-ink-soft hover:text-ink hover:bg-white/60',
  soft: 'bg-sun text-ink shadow-[var(--shadow-soft)] hover:bg-sun-deep hover:-translate-y-0.5',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-2xl',
  md: 'px-6 py-3 text-base rounded-2xl',
  lg: 'px-8 py-4 text-lg rounded-3xl',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 font-bold font-body transition-all duration-200 focus-visible:outline-none disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`

  if ('href' in props && props.href) {
    const { href, ...rest } = props
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button type={buttonProps.type ?? 'button'} className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
