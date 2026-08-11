import { useState } from 'react'
import { ExternalLink, Play } from 'lucide-react'
import { socialLinks, videos } from '../data/content'
import { Button } from './ui/Button'
import { Section, SectionHeading } from './ui/Section'

const FACEBOOK_PAGE_PLUGIN = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
  socialLinks.facebook,
)}&tabs=timeline&width=500&height=720&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`

function getEmbedSrc(video: (typeof videos)[number]) {
  const href = encodeURIComponent(video.url)
  return `https://www.facebook.com/plugins/video.php?href=${href}&show_text=false&width=320&height=560&t=0`
}

function VideoCard({ video }: { video: (typeof videos)[number] }) {
  const [playing, setPlaying] = useState(false)

  return (
    <article className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
      <div className="relative aspect-[9/14] overflow-hidden bg-cloud sm:aspect-[9/13]">
        {playing ? (
          <iframe
            title={video.title}
            src={getEmbedSrc(video)}
            className="absolute inset-0 h-full w-full border-0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br ${video.gradient} p-6 text-center`}
            aria-label={`Play ${video.title} Facebook reel`}
          >
            <span className="text-6xl drop-shadow-sm" aria-hidden="true">
              {video.emoji}
            </span>
            <span className="mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-sky-deep shadow-[var(--shadow-card)] transition-transform group-hover:scale-110">
              <Play size={28} fill="currentColor" aria-hidden="true" />
            </span>
            <span className="mt-4 rounded-full bg-white/85 px-3 py-1 text-sm font-bold text-ink">
              Play Facebook Reel
            </span>
            <span className="absolute bottom-3 right-3 rounded-xl bg-ink/75 px-2.5 py-1 text-sm font-bold text-white">
              {video.duration}
            </span>
          </button>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 w-fit rounded-full bg-sky-soft px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-ink-soft">
          Facebook Reel
        </span>
        <h3 className="text-xl font-semibold text-ink">{video.title}</h3>
        <p className="mt-2 flex-1 text-ink-soft">{video.description}</p>
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-sky-deep hover:underline"
        >
          Open on Facebook
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
        subtitle="Watch Facebook learning reels — new posts from our page appear in the live feed below."
      />

      {/* Live Facebook feed — updates automatically when new content is posted */}
      <div className="mb-10 overflow-hidden rounded-[2rem] bg-white p-4 shadow-[var(--shadow-card)] sm:p-6">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-lilac-deep">
              Live from Facebook
            </p>
            <h3 className="text-2xl font-semibold text-ink">Latest posts & reels</h3>
            <p className="mt-1 text-ink-soft">
              This feed updates automatically when new videos are added on Facebook.
            </p>
          </div>
          <Button
            variant="secondary"
            size="sm"
            href={socialLinks.facebookReels}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Reels Tab
          </Button>
        </div>

        <div className="mx-auto flex max-w-[500px] justify-center overflow-hidden rounded-[1.5rem] bg-cloud">
          <iframe
            title="Little Learners Facebook page feed"
            src={FACEBOOK_PAGE_PLUGIN}
            width="500"
            height="720"
            className="max-w-full border-0"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>

      <h3 className="mb-5 text-center text-2xl font-semibold text-ink sm:text-left">
        Featured Facebook Reels
      </h3>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-4 rounded-[1.75rem] bg-gradient-to-br from-lilac/40 to-sky-soft p-8 text-center shadow-[var(--shadow-soft)] sm:flex-row sm:text-left">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-ink">New reel on Facebook?</h3>
          <p className="mt-2 text-ink-soft">
            It will show up in the live Facebook feed above. Featured cards can also be
            updated with the new reel link anytime.
          </p>
        </div>
        <Button
          variant="primary"
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Facebook Page
        </Button>
      </div>
    </Section>
  )
}
