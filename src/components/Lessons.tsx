import { useCallback, useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, Volume2 } from 'lucide-react'
import {
  getLessonCategory,
  isLessonCategoryId,
  lessonCategories,
  type LessonCategoryId,
} from '../data/lessons'
import { speak } from '../utils/speak'
import { Button } from './ui/Button'
import { Section } from './ui/Section'

function readCategoryFromHash(): LessonCategoryId {
  const hash = window.location.hash.replace('#', '')
  if (hash.startsWith('lesson-')) {
    const id = hash.slice('lesson-'.length)
    if (isLessonCategoryId(id)) return id
  }
  if (hash === 'featured' || hash === 'lessons') return 'letters'
  return 'letters'
}

export function Lessons() {
  const [categoryId, setCategoryId] = useState<LessonCategoryId>('letters')
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const category = useMemo(() => getLessonCategory(categoryId), [categoryId])
  const items = category.items
  const lesson = items[index] ?? items[0]
  const progress = Math.round(((index + 1) / items.length) * 100)

  const selectCategory = useCallback((id: LessonCategoryId) => {
    setCategoryId(id)
    setIndex(0)
    setFlipped(false)
    const nextHash = `lesson-${id}`
    if (window.location.hash.replace('#', '') !== nextHash) {
      window.history.replaceState(null, '', `#${nextHash}`)
    }
  }, [])

  useEffect(() => {
    const syncFromHash = () => {
      const next = readCategoryFromHash()
      selectCategory(next)
      if (window.location.hash.startsWith('#lesson-') || window.location.hash === '#featured') {
        document.getElementById('lessons')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [selectCategory])

  const goTo = (nextIndex: number) => {
    setFlipped(false)
    setIndex((nextIndex + items.length) % items.length)
  }

  const speakLesson = () => {
    if (categoryId === 'numbers' && lesson.hint) {
      speak(lesson.hint.replace('Count:', 'Number'))
      return
    }
    if (categoryId === 'letters') {
      speak(`${lesson.label}. ${lesson.word}. ${lesson.sentence}`)
      return
    }
    if (categoryId === 'animals' && lesson.hint) {
      speak(`${lesson.word}. ${lesson.hint}`)
      return
    }
    speak(`${lesson.word}. ${lesson.sentence}`)
  }

  const headline =
    categoryId === 'letters'
      ? `${lesson.label} is for ${lesson.word} ${lesson.emoji}`
      : categoryId === 'numbers'
        ? `Number ${lesson.word}`
        : `${lesson.word} ${lesson.emoji}`

  return (
    <Section id="lessons" ariaLabelledBy="lessons-heading" className="overflow-hidden">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sky-soft via-white to-blush/30 p-5 shadow-[var(--shadow-card)] sm:p-8 lg:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sun/50 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-lilac/40 blur-2xl"
        />

        <div className="relative">
          <p className="mb-3 inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-bold text-lilac-deep shadow-[var(--shadow-soft)]">
            Interactive Lessons
          </p>
          <h2
            id="lessons-heading"
            className="text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl"
          >
            Today&apos;s Lesson
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-ink-soft">
            Explore every topic with flip cards, sounds, and simple English sentences.
          </p>

          {/* Category tabs */}
          <div
            className="mt-6 flex gap-2 overflow-x-auto pb-2"
            role="tablist"
            aria-label="Lesson topics"
          >
            {lessonCategories.map((cat) => {
              const selected = cat.id === categoryId
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={`shrink-0 rounded-2xl px-4 py-2.5 text-sm font-bold transition-all sm:text-base ${
                    selected
                      ? `${cat.accent} text-white shadow-[var(--shadow-soft)]`
                      : 'bg-white text-ink-soft hover:bg-sky-soft'
                  }`}
                  onClick={() => selectCategory(cat.id)}
                >
                  <span aria-hidden="true">{cat.emoji}</span> {cat.title}
                </button>
              )
            })}
          </div>

          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-ink-soft">
                {category.emoji} {category.title} · {index + 1} of {items.length}
              </p>
              <h3 className="mt-2 text-balance text-3xl font-semibold text-ink sm:text-4xl">
                {headline}
              </h3>
              <p className="mt-4 text-lg text-ink-soft sm:text-xl">{lesson.sentence}</p>
              {lesson.hint ? (
                <p className="mt-3 inline-flex rounded-2xl bg-white/80 px-4 py-2 text-base font-semibold text-ink shadow-[var(--shadow-soft)]">
                  {categoryId === 'animals' ? `Sound: ${lesson.hint}` : lesson.hint}
                </p>
              ) : null}

              {/* Progress */}
              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between text-sm font-bold text-ink-soft">
                  <span>Lesson progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${category.cardGradient} transition-all duration-300`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Item picker */}
              <div
                className="mt-6 grid max-h-48 grid-cols-6 gap-2 overflow-y-auto rounded-[1.5rem] bg-white/60 p-3 sm:grid-cols-8 md:grid-cols-10"
                role="tablist"
                aria-label={`${category.title} items`}
              >
                {items.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={
                      categoryId === 'letters'
                        ? `Letter ${item.label}, ${item.word}`
                        : item.word
                    }
                    className={`rounded-xl px-1 py-2 text-sm font-bold transition-all sm:text-base ${
                      i === index
                        ? `${category.accent} text-white shadow-[var(--shadow-soft)]`
                        : 'bg-white text-ink-soft hover:bg-sky-soft'
                    }`}
                    onClick={() => goTo(i)}
                  >
                    {categoryId === 'letters' || categoryId === 'numbers'
                      ? item.label
                      : item.emoji}
                  </button>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="primary" size="lg" onClick={() => setFlipped((f) => !f)}>
                  {flipped ? 'Hide Card' : 'Start Lesson'}
                </Button>
                <Button variant="secondary" size="lg" onClick={speakLesson}>
                  <Volume2 size={18} aria-hidden="true" />
                  Hear It
                </Button>
                <Button variant="soft" size="lg" onClick={() => goTo(index + 1)}>
                  Next
                  <ChevronRight size={18} aria-hidden="true" />
                </Button>
              </div>
            </div>

            {/* Flip card */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex w-full max-w-sm items-center justify-between gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  aria-label="Previous item"
                  onClick={() => goTo(index - 1)}
                >
                  <ChevronLeft size={18} aria-hidden="true" />
                  Prev
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  aria-label="Next item"
                  onClick={() => goTo(index + 1)}
                >
                  Next
                  <ChevronRight size={18} aria-hidden="true" />
                </Button>
              </div>

              <button
                type="button"
                onClick={() => setFlipped((f) => !f)}
                className="relative h-72 w-full max-w-sm sm:h-80"
                style={{ perspective: '1000px' }}
                aria-label={
                  flipped
                    ? `Showing ${lesson.word}. Tap to flip back.`
                    : `Showing ${categoryId === 'letters' ? `letter ${lesson.label}` : lesson.word}. Tap to reveal.`
                }
              >
                <div
                  className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${
                    flipped ? '[transform:rotateY(180deg)]' : ''
                  }`}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-[2rem] bg-white p-6 shadow-[var(--shadow-float)] [backface-visibility:hidden]">
                    {categoryId === 'colors' && lesson.color ? (
                      <span
                        className="mb-4 h-20 w-20 rounded-full border-4 border-white shadow-[var(--shadow-soft)] ring-2 ring-sky/30"
                        style={{ backgroundColor: lesson.color }}
                        aria-hidden="true"
                      />
                    ) : null}
                    <span
                      className="text-7xl font-bold text-sky-deep sm:text-8xl"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {categoryId === 'letters' || categoryId === 'numbers'
                        ? lesson.label
                        : lesson.emoji}
                    </span>
                    <span className="mt-3 flex items-center gap-2 text-ink-soft">
                      <Volume2 size={18} aria-hidden="true" />
                      Tap to reveal
                    </span>
                  </div>

                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-center rounded-[2rem] bg-gradient-to-br ${category.cardGradient} p-6 shadow-[var(--shadow-float)] [backface-visibility:hidden] [transform:rotateY(180deg)]`}
                  >
                    {categoryId === 'colors' && lesson.color ? (
                      <span
                        className="mb-3 h-16 w-16 rounded-full border-4 border-white/80 shadow-[var(--shadow-soft)]"
                        style={{ backgroundColor: lesson.color }}
                        aria-hidden="true"
                      />
                    ) : null}
                    <span className="text-center text-6xl sm:text-7xl" aria-hidden="true">
                      {lesson.emoji}
                    </span>
                    <span
                      className="mt-3 text-center text-3xl font-bold text-ink sm:text-4xl"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {lesson.word}
                    </span>
                    {categoryId === 'letters' ? (
                      <span className="mt-2 text-lg font-bold text-ink/80">
                        {lesson.label} → {lesson.word}
                      </span>
                    ) : null}
                    {categoryId === 'animals' && lesson.hint ? (
                      <span className="mt-2 rounded-full bg-white/80 px-3 py-1 text-sm font-bold text-ink">
                        {lesson.hint}
                      </span>
                    ) : null}
                  </div>
                </div>
              </button>

              <p className="text-center text-sm font-semibold text-ink-soft">
                {category.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Keep old anchor working */}
      <div id="featured" className="sr-only" aria-hidden="true" />
    </Section>
  )
}
