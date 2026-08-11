import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/Button'
import { navLinks } from '../data/content'

function sectionFromHash(hash: string) {
  const value = hash.replace('#', '')
  if (!value) return 'home'
  if (value.startsWith('lesson-') || value === 'featured' || value === 'lessons') return 'learn'
  if (value.startsWith('grammar')) return 'grammar'
  if (value === 'parents') return 'about'
  return value
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const syncActive = () => setActive(sectionFromHash(window.location.hash))
    syncActive()
    window.addEventListener('hashchange', syncActive)
    return () => window.removeEventListener('hashchange', syncActive)
  }, [])

  const goTo = (href: string) => {
    setOpen(false)
    // Force hash update even if clicking the same section again
    if (window.location.hash === href) {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    window.location.hash = href
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-sky/30 bg-cream/95 shadow-[var(--shadow-soft)] backdrop-blur-md'
          : 'bg-cream/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            goTo('#home')
          }}
          className="flex shrink-0 items-center gap-2 rounded-2xl text-lg font-bold text-ink sm:text-2xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span aria-hidden="true" className="text-2xl sm:text-3xl">
            🧸
          </span>
          <span>Little Learners</span>
        </a>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main">
          {navLinks.map((link) => {
            const key = link.href.slice(1)
            const isActive = active === key
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  goTo(link.href)
                }}
                className={`rounded-2xl px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-sky-soft text-ink'
                    : 'text-ink-soft hover:bg-white/70 hover:text-ink'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <Button
            variant="ghost"
            size="sm"
            href="#parents"
            onClick={(e) => {
              e.preventDefault()
              goTo('#parents')
            }}
          >
            Parent Login
          </Button>
          <Button
            variant="primary"
            size="sm"
            href="#learn"
            onClick={(e) => {
              e.preventDefault()
              goTo('#learn')
            }}
          >
            Start Learning
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex rounded-2xl bg-white p-2.5 text-ink shadow-[var(--shadow-soft)] xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-sky/20 bg-cream/98 px-4 py-4 backdrop-blur-md xl:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => {
              const key = link.href.slice(1)
              const isActive = active === key
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-2xl px-4 py-3 text-lg font-semibold ${
                    isActive ? 'bg-sky-soft text-ink' : 'text-ink hover:bg-sky-soft'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    goTo(link.href)
                  }}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <Button
              variant="secondary"
              href="#parents"
              onClick={(e) => {
                e.preventDefault()
                goTo('#parents')
              }}
            >
              Parent Login
            </Button>
            <Button
              variant="primary"
              href="#learn"
              onClick={(e) => {
                e.preventDefault()
                goTo('#learn')
              }}
            >
              Start Learning
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
