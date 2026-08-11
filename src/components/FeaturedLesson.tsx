import { useState } from 'react'
import { Volume2 } from 'lucide-react'
import { Button } from './ui/Button'
import { Section } from './ui/Section'

const letters = [
  { letter: 'A', word: 'Apple', emoji: '🍎', sentence: 'Apple starts with the letter A.' },
  { letter: 'B', word: 'Ball', emoji: '⚽', sentence: 'Ball starts with the letter B.' },
  { letter: 'C', word: 'Cat', emoji: '🐱', sentence: 'Cat starts with the letter C.' },
] as const

export function FeaturedLesson() {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const lesson = letters[index]

  const next = () => {
    setFlipped(false)
    setIndex((i) => (i + 1) % letters.length)
  }

  return (
    <Section id="featured" ariaLabelledBy="featured-heading" className="overflow-hidden">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sky-soft via-white to-blush/30 p-6 shadow-[var(--shadow-card)] sm:p-10 lg:p-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sun/50 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-lilac/40 blur-2xl"
        />

        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-bold text-lilac-deep shadow-[var(--shadow-soft)]">
              Today&apos;s Lesson
            </p>
            <h2
              id="featured-heading"
              className="text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl"
            >
              {lesson.letter} is for {lesson.word} {lesson.emoji}
            </h2>
            <p className="mt-4 text-lg text-ink-soft sm:text-xl">{lesson.sentence}</p>

            <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Lesson letters">
              {letters.map((item, i) => (
                <button
                  key={item.letter}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  className={`rounded-2xl px-4 py-2 text-lg font-bold transition-all ${
                    i === index
                      ? 'bg-sky-deep text-white shadow-[var(--shadow-soft)]'
                      : 'bg-white text-ink-soft hover:bg-sky-soft'
                  }`}
                  onClick={() => {
                    setIndex(i)
                    setFlipped(false)
                  }}
                >
                  {item.letter}
                </button>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" onClick={() => setFlipped((f) => !f)}>
                Start Lesson
              </Button>
              <Button variant="secondary" size="lg" onClick={next}>
                Next Letter
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setFlipped((f) => !f)}
              className="group relative h-64 w-64 sm:h-72 sm:w-72"
              style={{ perspective: '1000px' }}
              aria-label={
                flipped
                  ? `Showing ${lesson.word}. Tap to show letter ${lesson.letter}.`
                  : `Showing letter ${lesson.letter}. Tap to reveal ${lesson.word}.`
              }
            >
              <div
                className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${
                  flipped ? '[transform:rotateY(180deg)]' : ''
                }`}
              >
                {/* Front */}
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-[2rem] bg-white shadow-[var(--shadow-float)] [backface-visibility:hidden]">
                  <span className="text-8xl font-bold text-sky-deep sm:text-9xl" style={{ fontFamily: 'var(--font-display)' }}>
                    {lesson.letter}
                  </span>
                  <span className="mt-2 flex items-center gap-2 text-ink-soft">
                    <Volume2 size={18} aria-hidden="true" />
                    Tap to reveal
                  </span>
                </div>
                {/* Back */}
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-[2rem] bg-gradient-to-br from-blush to-sun shadow-[var(--shadow-float)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <span className="text-7xl sm:text-8xl" aria-hidden="true">
                    {lesson.emoji}
                  </span>
                  <span
                    className="mt-3 text-3xl font-bold text-ink sm:text-4xl"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {lesson.word}
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}
