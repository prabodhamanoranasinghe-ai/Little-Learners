import { howItWorks } from '../data/content'
import { Section, SectionHeading } from './ui/Section'

export function HowItWorks() {
  return (
    <Section id="about" ariaLabelledBy="how-heading" className="bg-cloud/50">
      <SectionHeading
        id="how-heading"
        title="Learning Made Simple"
        subtitle="Three gentle steps from curiosity to confidence."
      />

      <ol className="grid gap-6 md:grid-cols-3">
        {howItWorks.map((step, index) => (
          <li
            key={step.step}
            className={`relative rounded-[2rem] ${step.color} p-8 shadow-[var(--shadow-soft)]`}
          >
            {index < howItWorks.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 rounded-full bg-white text-center text-sm font-bold text-sky-deep shadow md:block"
              >
                →
              </span>
            ) : null}
            <span
              className="inline-flex rounded-2xl bg-white px-3 py-1 text-sm font-bold text-ink-soft shadow-[var(--shadow-soft)]"
              aria-hidden="true"
            >
              {step.step}
            </span>
            <div className="mt-5 text-4xl" aria-hidden="true">
              {step.emoji}
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-lg text-ink-soft">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
