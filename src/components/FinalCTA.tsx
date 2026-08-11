import { Button } from './ui/Button'

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sky-deep via-lilac-deep to-blush-deep px-6 py-14 text-center shadow-[var(--shadow-float)] sm:px-10 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-8 top-8 h-24 w-24 rounded-full bg-white/15 blur-xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-6 right-10 h-32 w-32 rounded-full bg-sun/30 blur-2xl"
        />

        <span aria-hidden="true" className="animate-bob text-5xl">
          🚀
        </span>
        <h2
          id="final-cta-heading"
          className="mt-4 text-balance text-3xl font-semibold text-white sm:text-4xl lg:text-5xl"
        >
          Ready to Start Learning?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90 sm:text-xl">
          Let&apos;s discover new words, new ideas and new adventures together!
        </p>
        <Button variant="soft" size="lg" className="mt-8" href="#learn">
          Start Learning 🚀
        </Button>

        <div
          aria-hidden="true"
          className="mt-10 flex flex-wrap items-center justify-center gap-3 text-2xl opacity-90"
        >
          {['🔤', '🍎', '🐶', '⭐', '🎨', '🔢'].map((emoji) => (
            <span
              key={emoji}
              className="rounded-2xl bg-white/15 px-3 py-2 backdrop-blur-sm"
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
