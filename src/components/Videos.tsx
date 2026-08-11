import { useState } from 'react'
import { ExternalLink, Play } from 'lucide-react'
import { socialLinks, videos } from '../data/content'
import { Button } from './ui/Button'
import { Section, SectionHeading } from './ui/Section'

function getEmbedSrc(video: (typeof videos)[number]) {
  if (video.source === 'tiktok') {
    return `https://www.tiktok.com/embed/v2/${video.embedId}?lang=en-US`
  }
  const href = encodeURIComponent(video.url)
  return `https://www.facebook.com/plugins/video.php?href=${href}&show_text=false&width=320&height=560&t=0`
}

function VideoCard({ video }: { video: (typeof videos)[number] }) {
  const [playing, setPlaying] = useState(false)
  const sourceLabel = video.source === 'tiktok' ? 'TikTok' : 'Facebook'

  return (
    <article className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
      <div className="relative aspect-[9/14] overflow-hidden bg-cloud sm:aspect-[9/13]">
        {playing ? (
          <iframe
            title={video.title}
            src={getEmbedSrc(video)}
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br ${video.gradient} p-6 text-center transition-transform`}
            aria-label={`Play ${video.title} from ${sourceLabel}`}
          >
            <span className="text-6xl drop-shadow-sm" aria-hidden="true">
              {video.emoji}
            </span>
            <span className="mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-sky-deep shadow-[var(--shadow-card)] transition-transform group-hover:scale-110">
              <Play size={28} fill="currentColor" aria-hidden="true" />
            </span>
            <span className="mt-4 rounded-full bg-white/85 px-3 py-1 text-sm font-bold text-ink">
              Play on {sourceLabel}
            </span>
            <span className="absolute bottom-3 right-3 rounded-xl bg-ink/75 px-2.5 py-1 text-sm font-bold text-white">
              {video.duration}
            </span>
          </button>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-sky-soft px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-ink-soft">
            {sourceLabel}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-ink">{video.title}</h3>
        <p className="mt-2 flex-1 text-ink-soft">{video.description}</p>
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-sky-deep hover:underline"
        >
          Open original
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

export function Videos() {
  return (
    <Section id="videos" ariaLabelledBy="videos-heading">
      <SectionHeading
        id="videos-heading"
        title="Learn With Fun Videos 🎬"
        subtitle="Real short videos from our TikTok and Facebook — tap play to watch."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-4 rounded-[1.75rem] bg-gradient-to-br from-lilac/40 to-sky-soft p-8 text-center shadow-[var(--shadow-soft)] sm:flex-row sm:text-left">
        <div className="flex-1">
          <p className="text-4xl sm:hidden" aria-hidden="true">
            📱
          </p>
          <h3 className="text-xl font-semibold text-ink">More videos every week</h3>
          <p className="mt-2 text-ink-soft">
            Follow Little Learners on TikTok and Facebook for new learning reels.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            variant="primary"
            href={socialLinks.tiktok}
            target="_blank"
            rel="noopener noreferrer"
          >
            View All on TikTok
          </Button>
          <Button
            variant="secondary"
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Facebook
          </Button>
        </div>
      </div>
    </Section>
  )
}
