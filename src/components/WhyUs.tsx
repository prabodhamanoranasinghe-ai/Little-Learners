import { features } from '../data/content'
import { Section, SectionHeading } from './ui/Section'

export function WhyUs() {
  return (
    <Section ariaLabelledBy="why-heading" className="bg-cloud/50">
      <SectionHeading
        id="why-heading"
        title="Why Little Learners?"
        subtitle="A gentle place where curiosity turns into confident English."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <article
            key={feature.title}
            className={`rounded-[1.75rem] ${feature.color} p-6 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1`}
          >
            <div className="text-4xl" aria-hidden="true">
              {feature.emoji}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-ink">{feature.title}</h3>
            <p className="mt-2 text-ink-soft">{feature.description}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
