import { Play } from 'lucide-react'
import { videos } from '../data/content'
import { Button } from './ui/Button'
import { Section, SectionHeading } from './ui/Section'

export function Videos() {
  return (
    <Section id="videos" ariaLabelledBy="videos-heading">
      <SectionHeading
        id="videos-heading"
        title="Learn With Fun Videos 🎬"
        subtitle="Short, colorful clips that make new words stick."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <article
            key={video.id}
            className="group overflow-hidden rounded-[1.75rem] bg-white shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
          >
            <div
              className={`relative flex aspect-video items-center justify-center bg-gradient-to-br ${video.gradient}`}
            >
              <span className="text-6xl drop-shadow-sm" aria-hidden="true">
                {video.emoji}
              </span>
              <button
                type="button"
                className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/10"
                aria-label={`Play ${video.title}`}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-sky-deep shadow-[var(--shadow-card)] transition-transform group-hover:scale-110">
                  <Play size={24} fill="currentColor" aria-hidden="true" />
                </span>
              </button>
              <span className="absolute bottom-3 right-3 rounded-xl bg-ink/75 px-2.5 py-1 text-sm font-bold text-white">
                {video.duration}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-ink">{video.title}</h3>
              <p className="mt-2 text-ink-soft">{video.description}</p>
            </div>
          </article>
        ))}

        {/* CTA card filling grid nicely on large screens */}
        <div className="flex flex-col items-center justify-center rounded-[1.75rem] bg-gradient-to-br from-lilac/40 to-sky-soft p-8 text-center shadow-[var(--shadow-soft)] sm:col-span-2 lg:col-span-1">
          <p className="text-4xl" aria-hidden="true">
            📺
          </p>
          <h3 className="mt-3 text-xl font-semibold text-ink">More adventures await</h3>
          <p className="mt-2 text-ink-soft">Browse the full video library for every topic.</p>
          <Button variant="primary" className="mt-5" href="#videos">
            View All Videos
          </Button>
        </div>
      </div>
    </Section>
  )
}
