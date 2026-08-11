import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/Button'
import { navLinks } from '../data/content'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-sky/30 bg-cream/90 shadow-[var(--shadow-soft)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-2 rounded-2xl text-xl font-bold text-ink sm:text-2xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span aria-hidden="true" className="text-2xl sm:text-3xl">
            🧸
          </span>
          <span>Little Learners</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-2xl px-4 py-2 font-semibold text-ink-soft transition-colors hover:bg-white/70 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm" href="#parents">
            Parent Login
          </Button>
          <Button variant="primary" size="sm" href="#learn">
            Start Learning
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex rounded-2xl bg-white p-2.5 text-ink shadow-[var(--shadow-soft)] lg:hidden"
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
          className="border-t border-sky/20 bg-cream/98 px-4 py-4 backdrop-blur-md lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-lg font-semibold text-ink hover:bg-sky-soft"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <Button variant="secondary" href="#parents" onClick={() => setOpen(false)}>
              Parent Login
            </Button>
            <Button variant="primary" href="#learn" onClick={() => setOpen(false)}>
              Start Learning
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
