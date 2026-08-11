import { footerLinks } from '../data/content'

const socials = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M22.5 7.2a3 3 0 0 0-2.1-2.1C18.6 4.6 12 4.6 12 4.6s-6.6 0-8.4.5A3 3 0 0 0 1.5 7.2 31 31 0 0 0 1 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.8.5 8.4.5 8.4.5s6.6 0 8.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23 12a31 31 0 0 0-.5-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z" />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M17.6 3H20l-6.2 7.1L21 21h-5.6l-4.4-5.8L6 21H3.6l6.7-7.6L3 3h5.7l4 5.3L17.6 3Zm-1 16.2h1.5L7.5 4.7H5.9l10.7 14.5Z" />
      </svg>
    ),
  },
] as const

export function Footer() {
  return (
    <footer id="contact" className="border-t border-sky/20 bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-2xl font-bold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span aria-hidden="true">🧸</span>
              Little Learners
            </a>
            <p className="mt-3 text-lg text-sky-soft">Small steps. Big learning. 🌟</p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white transition-colors hover:bg-sky-deep"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-4 font-bold text-sun">Explore</p>
            <nav aria-label="Footer">
              <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-block rounded-xl py-1.5 text-sky-soft transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-sky-soft sm:flex-row">
          <p>© {new Date().getFullYear()} Little Learners. Made with care for young minds.</p>
          <p>Safe · Positive · Encouraging</p>
        </div>
      </div>
    </footer>
  )
}
