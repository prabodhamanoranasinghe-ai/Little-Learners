import { footerLinks } from '../data/content'

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/cutelearn/',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@littlelearners260',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M19.6 7.8a6.7 6.7 0 0 1-3.9-1.2v7.1a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.8a2.9 2.9 0 1 0 2 2.8V2.2h2.8a3.9 3.9 0 0 0 3.9 3.9v1.7Z" />
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
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Little Learners on ${label}`}
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
