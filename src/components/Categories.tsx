import { ArrowRight } from 'lucide-react'
import { categories } from '../data/content'
import { Button } from './ui/Button'
import { Section, SectionHeading } from './ui/Section'

export function Categories() {
  return (
    <Section id="learn" ariaLabelledBy="learn-heading" className="bg-cloud/60">
      <SectionHeading
        id="learn-heading"
        title="What Do You Want to Learn Today?"
        subtitle="Pick a colorful topic and start exploring new English words."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <article
            key={category.id}
            className={`group flex flex-col rounded-[1.75rem] ${category.color} p-6 shadow-[var(--shadow-soft)] ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] ${category.ring}`}
          >
            <div
              className={`mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${category.accent} text-3xl shadow-[var(--shadow-soft)] transition-transform duration-300 group-hover:scale-110`}
              aria-hidden="true"
            >
              {category.emoji}
            </div>
            <h3 className="text-xl font-semibold text-ink">{category.title}</h3>
            <p className="mt-2 flex-1 text-ink-soft">{category.description}</p>
            <p className="mt-3 rounded-2xl bg-white/70 px-3 py-2 text-sm font-semibold text-ink">
              Example: {category.example}
            </p>
            <Button
              variant="secondary"
              size="sm"
              className="mt-5 w-full"
              href={`#lesson-${category.id}`}
            >
              Learn Now
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </article>
        ))}
      </div>
    </Section>
  )
}
