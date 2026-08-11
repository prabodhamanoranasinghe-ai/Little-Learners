import { Check } from 'lucide-react'
import { parentBenefits } from '../data/content'
import { Button } from './ui/Button'
import { Section } from './ui/Section'

export function Parents() {
  return (
    <Section id="parents" ariaLabelledBy="parents-heading">
      <div className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blush/30 via-white to-sky-soft p-6 shadow-[var(--shadow-card)] sm:p-10 lg:grid-cols-2 lg:p-14">
        <div>
          <h2
            id="parents-heading"
            className="text-balance text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl"
          >
            Learning Together Makes It Better ❤️
          </h2>
          <p className="mt-5 text-lg text-ink-soft sm:text-xl">
            Little Learners provides simple, age-appropriate English learning content
            that parents can use with their children — warm, visual, and ready in
            minutes.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {parentBenefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 font-semibold text-ink shadow-[var(--shadow-soft)]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint text-ink">
                  <Check size={16} strokeWidth={3} aria-hidden="true" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <Button variant="primary" size="lg" className="mt-8" href="#learn">
            Explore Learning Resources
          </Button>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="rounded-[2rem] bg-white p-6 shadow-[var(--shadow-float)]">
            <div className="flex items-center gap-3 border-b border-sky/20 pb-4">
              <span className="text-4xl" aria-hidden="true">
                👨‍👩‍👧‍👦
              </span>
              <div>
                <p className="font-bold text-ink">Family Learning Time</p>
                <p className="text-sm text-ink-soft">10–15 minutes a day</p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {[
                { label: 'Today: Letter A', emoji: '🅰️', progress: '100%' },
                { label: 'Fruits vocabulary', emoji: '🍌', progress: '70%' },
                { label: 'Animal sounds', emoji: '🦁', progress: '40%' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-cloud p-4">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="font-semibold text-ink">
                      <span aria-hidden="true">{item.emoji}</span> {item.label}
                    </span>
                    <span className="text-sm font-bold text-ink-soft">{item.progress}</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-white">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-sky-deep to-lilac-deep"
                      style={{ width: item.progress }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <span
            aria-hidden="true"
            className="absolute -right-3 -top-3 animate-bob rounded-2xl bg-sun px-3 py-2 text-sm font-bold shadow-[var(--shadow-soft)]"
          >
            Great job! 🌟
          </span>
        </div>
      </div>
    </Section>
  )
}
