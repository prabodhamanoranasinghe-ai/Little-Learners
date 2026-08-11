import { Quote } from 'lucide-react'
import { testimonials } from '../data/content'
import { Section, SectionHeading } from './ui/Section'

export function Testimonials() {
  return (
    <Section ariaLabelledBy="testimonials-heading">
      <SectionHeading
        id="testimonials-heading"
        title="What Parents Say"
        subtitle="Real stories from families learning together every day."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <figure
            key={item.name}
            className="flex flex-col rounded-[1.75rem] bg-white p-6 shadow-[var(--shadow-soft)] ring-1 ring-sky/20"
          >
            <Quote className="text-sky-deep" size={28} aria-hidden="true" />
            <blockquote className="mt-4 flex-1 text-lg text-ink-soft">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-sky/15 pt-4">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-soft text-2xl"
                aria-hidden="true"
              >
                {item.emoji}
              </span>
              <div>
                <p className="font-bold text-ink">{item.name}</p>
                <p className="text-sm text-ink-soft">{item.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
