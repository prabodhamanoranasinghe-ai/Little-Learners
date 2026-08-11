import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Check,
  ChevronRight,
  Lock,
  Star,
  Unlock,
  Volume2,
  X,
} from 'lucide-react'
import {
  filterYears,
  grammarFilters,
  grammarYears,
  getGrammarLesson,
  getNextLessonId,
  type GrammarFilter,
  type GrammarLesson,
  type GrammarQuestion,
  type GrammarYear,
} from '../../data/grammar'
import { useGrammarProgress } from '../../hooks/useGrammarProgress'
import { speak } from '../../utils/speak'
import { Button } from '../ui/Button'
import { Section, SectionHeading } from '../ui/Section'

type Step = 'learn' | 'examples' | 'practice' | 'game' | 'quiz'

const steps: { id: Step; label: string; emoji: string }[] = [
  { id: 'learn', label: 'Learn', emoji: '📖' },
  { id: 'examples', label: 'Examples', emoji: '👀' },
  { id: 'practice', label: 'Practice', emoji: '🎯' },
  { id: 'game', label: 'Mini Game', emoji: '🎮' },
  { id: 'quiz', label: 'Quiz', emoji: '🏆' },
]

function normalize(value: string) {
  return value.trim().toLowerCase().replace(/[’']/g, "'")
}

function highlightSentence(sentence: string, highlight: string) {
  const idx = sentence.toLowerCase().indexOf(highlight.toLowerCase())
  if (idx < 0) return <>{sentence}</>
  const before = sentence.slice(0, idx)
  const match = sentence.slice(idx, idx + highlight.length)
  const after = sentence.slice(idx + highlight.length)
  return (
    <>
      {before}
      <mark className="rounded-md bg-sun/80 px-1 font-bold text-ink">{match}</mark>
      {after}
    </>
  )
}

function QuestionBlock({
  questions,
  onFinished,
  ctaLabel,
}: {
  questions: GrammarQuestion[]
  onFinished: (score: number, total: number) => void
  ctaLabel: string
}) {
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [done, setDone] = useState(false)
  const scoreRef = useRef(0)
  const current = questions[index]

  const submit = () => {
    if (!current || feedback) return
    const ok = normalize(answer) === normalize(current.answer)
    setFeedback(ok ? 'correct' : 'wrong')
    if (ok) {
      scoreRef.current += 1
      setScore(scoreRef.current)
      speak('Great job!')
    } else {
      speak(`The answer is ${current.answer}`)
    }
  }

  const goNext = () => {
    if (index >= questions.length - 1) {
      setDone(true)
      onFinished(scoreRef.current, questions.length)
      return
    }
    setIndex((i) => i + 1)
    setAnswer('')
    setFeedback(null)
  }

  if (done) {
    return (
      <div className="rounded-[1.5rem] bg-mint/30 p-6 text-center">
        <p className="text-4xl" aria-hidden="true">
          ⭐
        </p>
        <p className="mt-2 text-xl font-bold text-ink">
          You scored {score}/{questions.length}!
        </p>
        <p className="mt-1 text-ink-soft">Wonderful effort — keep going!</p>
      </div>
    )
  }

  return (
    <div className="rounded-[1.5rem] bg-white/80 p-5 shadow-[var(--shadow-soft)]">
      <p className="text-sm font-bold text-ink-soft">
        Question {index + 1} of {questions.length}
      </p>
      <p className="mt-2 text-lg font-semibold text-ink">{current.prompt}</p>

      {current.type === 'mcq' && current.options ? (
        <div className="mt-4 grid gap-2">
          {current.options.map((option) => (
            <button
              key={option}
              type="button"
              disabled={!!feedback}
              onClick={() => setAnswer(option)}
              className={`rounded-2xl px-4 py-3 text-left font-bold transition-all ${
                answer === option
                  ? 'bg-sky-deep text-white'
                  : 'bg-cloud text-ink hover:bg-sky-soft'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <input
          value={answer}
          disabled={!!feedback}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') submit()
          }}
          placeholder="Type your answer"
          className="mt-4 w-full rounded-2xl border-2 border-sky/40 bg-white px-4 py-3 text-lg font-semibold text-ink outline-none focus:border-sky-deep"
          aria-label="Your answer"
        />
      )}

      {feedback ? (
        <p
          className={`mt-4 flex items-center gap-2 font-bold ${
            feedback === 'correct' ? 'text-mint-deep' : 'text-blush-deep'
          }`}
        >
          {feedback === 'correct' ? <Check size={18} /> : <X size={18} />}
          {feedback === 'correct'
            ? 'Yes! Amazing!'
            : `Nice try — answer: ${current.answer}`}
        </p>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2">
        {!feedback ? (
          <Button variant="primary" size="sm" onClick={submit} disabled={!answer.trim()}>
            Check
          </Button>
        ) : (
          <Button variant="soft" size="sm" onClick={goNext}>
            {index >= questions.length - 1 ? ctaLabel : 'Next'}
            <ChevronRight size={16} aria-hidden="true" />
          </Button>
        )}
        <Button variant="ghost" size="sm" onClick={() => speak(current.prompt)}>
          <Volume2 size={16} aria-hidden="true" />
          Hear
        </Button>
      </div>
    </div>
  )
}

function MiniGame({
  lesson,
  onDone,
}: {
  lesson: GrammarLesson
  onDone: () => void
}) {
  const [picked, setPicked] = useState<string[]>([])
  const [finished, setFinished] = useState(false)
  const correctIds = lesson.game.items.filter((i) => i.correct).map((i) => i.id)

  const toggle = (id: string) => {
    if (finished) return
    setPicked((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  const check = () => {
    const ok =
      picked.length === correctIds.length &&
      correctIds.every((id) => picked.includes(id))
    setFinished(true)
    speak(ok ? 'Perfect! You found them all!' : 'Good try! Look at the glowing answers.')
    onDone()
  }

  return (
    <div className="rounded-[1.5rem] bg-white/80 p-5 shadow-[var(--shadow-soft)]">
      <p className="text-lg font-semibold text-ink">{lesson.game.prompt}</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {lesson.game.items.map((item) => {
          const selected = picked.includes(item.id)
          const reveal = finished && item.correct
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggle(item.id)}
              className={`rounded-2xl px-3 py-4 text-center font-bold transition-all ${
                reveal
                  ? 'bg-mint/50 ring-2 ring-mint-deep'
                  : selected
                    ? 'bg-sky-deep text-white'
                    : 'bg-cloud text-ink hover:bg-sky-soft'
              }`}
            >
              <span className="block text-3xl" aria-hidden="true">
                {item.emoji}
              </span>
              <span className="mt-1 block text-sm">{item.label}</span>
            </button>
          )
        })}
      </div>
      {!finished ? (
        <Button variant="primary" size="sm" className="mt-5" onClick={check}>
          Check Answers
        </Button>
      ) : (
        <p className="mt-4 font-bold text-mint-deep">Mini game complete! 🎮⭐</p>
      )}
    </div>
  )
}

function LessonPlayer({
  lesson,
  year,
  onComplete,
  onSelectLesson,
}: {
  lesson: GrammarLesson
  year: GrammarYear
  onComplete: (score: number, total: number) => void
  onSelectLesson: (id: string) => void
}) {
  const [step, setStep] = useState<Step>('learn')
  const [practiceDone, setPracticeDone] = useState(false)
  const [gameDone, setGameDone] = useState(false)
  const [quizDone, setQuizDone] = useState(false)
  const [celebration, setCelebration] = useState(false)

  useEffect(() => {
    setStep('learn')
    setPracticeDone(false)
    setGameDone(false)
    setQuizDone(false)
    setCelebration(false)
  }, [lesson.id])

  return (
    <div className="rounded-[2rem] bg-gradient-to-br from-white via-sky-soft/40 to-blush/20 p-5 shadow-[var(--shadow-card)] sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-lilac-deep">
            Year {year.year} · {year.title}
          </p>
          <h3 className="mt-1 text-2xl font-semibold text-ink sm:text-3xl">
            <span aria-hidden="true">{lesson.emoji}</span> {lesson.title}
          </h3>
          <p className="mt-2 text-ink-soft">{lesson.summary}</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => speak(`${lesson.title}. ${lesson.explanation}`)}
        >
          <Volume2 size={16} aria-hidden="true" />
          Hear lesson
        </Button>
      </div>

      <div className="mt-5 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Lesson steps">
        {steps.map((s) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={step === s.id}
            onClick={() => setStep(s.id)}
            className={`shrink-0 rounded-2xl px-3 py-2 text-sm font-bold transition-all ${
              step === s.id
                ? 'bg-sky-deep text-white shadow-[var(--shadow-soft)]'
                : 'bg-white text-ink-soft hover:bg-sky-soft'
            }`}
          >
            {s.emoji} {s.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {step === 'learn' ? (
          <div className="rounded-[1.5rem] bg-white/85 p-5 shadow-[var(--shadow-soft)]">
            <p className="text-lg leading-relaxed text-ink">{lesson.explanation}</p>
            <Button variant="soft" className="mt-5" onClick={() => setStep('examples')}>
              See Examples
              <ChevronRight size={16} aria-hidden="true" />
            </Button>
          </div>
        ) : null}

        {step === 'examples' ? (
          <div className="grid gap-3">
            {lesson.examples.map((example) => (
              <div
                key={example.sentence}
                className="flex items-center gap-4 rounded-[1.5rem] bg-white/85 p-4 shadow-[var(--shadow-soft)]"
              >
                <span className="text-4xl" aria-hidden="true">
                  {example.emoji}
                </span>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-ink">
                    {highlightSentence(example.sentence, example.highlight)}
                  </p>
                  <button
                    type="button"
                    className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-sky-deep"
                    onClick={() => speak(example.sentence)}
                  >
                    <Volume2 size={14} aria-hidden="true" /> Hear
                  </button>
                </div>
              </div>
            ))}
            <Button variant="soft" className="mt-2 self-start" onClick={() => setStep('practice')}>
              Start Practice
              <ChevronRight size={16} aria-hidden="true" />
            </Button>
          </div>
        ) : null}

        {step === 'practice' ? (
          <QuestionBlock
            key={`${lesson.id}-practice`}
            questions={lesson.practice}
            ctaLabel="Go to Mini Game"
            onFinished={() => {
              setPracticeDone(true)
              setStep('game')
            }}
          />
        ) : null}

        {step === 'game' ? (
          <MiniGame
            key={`${lesson.id}-game`}
            lesson={lesson}
            onDone={() => setGameDone(true)}
          />
        ) : null}

        {step === 'game' && gameDone ? (
          <Button variant="soft" className="mt-4" onClick={() => setStep('quiz')}>
            Take the Quiz
            <ChevronRight size={16} aria-hidden="true" />
          </Button>
        ) : null}

        {step === 'quiz' ? (
          <QuestionBlock
            key={`${lesson.id}-quiz`}
            questions={lesson.quiz}
            ctaLabel="Finish Lesson"
            onFinished={(score, total) => {
              setQuizDone(true)
              setCelebration(true)
              onComplete(score, total)
              speak('Lesson complete! You earned stars!')
            }}
          />
        ) : null}
      </div>

      {celebration ? (
        <div className="mt-6 animate-fade-up rounded-[1.5rem] bg-gradient-to-r from-sun via-mint/50 to-lilac/40 p-5 text-center">
          <p className="text-4xl" aria-hidden="true">
            🏆⭐⭐⭐
          </p>
          <p className="mt-2 text-xl font-bold text-ink">Lesson complete!</p>
          <p className="text-ink-soft">Badge unlocked for {lesson.title}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {getNextLessonId(lesson.id) ? (
              <Button
                variant="primary"
                onClick={() => onSelectLesson(getNextLessonId(lesson.id)!)}
              >
                Next Lesson
              </Button>
            ) : null}
            <Button variant="secondary" onClick={() => setStep('learn')}>
              Review Lesson
            </Button>
          </div>
        </div>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold text-ink-soft">
        <span className={practiceDone ? 'text-mint-deep' : ''}>🎯 Practice {practiceDone ? '✓' : '…'}</span>
        <span className={gameDone ? 'text-mint-deep' : ''}>🎮 Game {gameDone ? '✓' : '…'}</span>
        <span className={quizDone ? 'text-mint-deep' : ''}>🏆 Quiz {quizDone ? '✓' : '…'}</span>
      </div>
    </div>
  )
}

export function Grammar() {
  const {
    stats,
    continueInfo,
    isYearUnlocked,
    unlockYear,
    unlockAllYears,
    setCurrentLesson,
    completeLesson,
    state,
  } = useGrammarProgress()

  const [filter, setFilter] = useState<GrammarFilter | 'all'>('all')
  const [activeYearId, setActiveYearId] = useState(grammarYears[0].id)
  const [activeLessonId, setActiveLessonId] = useState(grammarYears[0].lessons[0].id)
  const [showParentUnlock, setShowParentUnlock] = useState(false)

  const years = useMemo(() => filterYears(filter), [filter])
  const activeYear = getGrammarLesson(activeLessonId).year
  const activeLesson = getGrammarLesson(activeLessonId).lesson

  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === '#grammar' || window.location.hash.startsWith('#grammar-')) {
        document.getElementById('grammar')?.scrollIntoView({ behavior: 'smooth' })
      }
      const match = window.location.hash.match(/^#grammar-(.+)$/)
      if (match) {
        const id = match[1]
        const found = getGrammarLesson(id)
        if (found.lesson.id === id || grammarYears.some((y) => y.id === id)) {
          if (grammarYears.some((y) => y.id === id)) {
            setActiveYearId(id)
            const year = grammarYears.find((y) => y.id === id)!
            setActiveLessonId(year.lessons[0].id)
            setCurrentLesson(year.lessons[0].id)
          } else {
            setActiveYearId(found.year.id)
            setActiveLessonId(found.lesson.id)
            setCurrentLesson(found.lesson.id)
          }
        }
      }
    }
    onHash()
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [setCurrentLesson])

  const selectLesson = (lessonId: string) => {
    const { year, lesson } = getGrammarLesson(lessonId)
    if (!isYearUnlocked(year.id)) return
    setActiveYearId(year.id)
    setActiveLessonId(lesson.id)
    setCurrentLesson(lesson.id)
    window.history.replaceState(null, '', `#grammar-${lesson.id}`)
  }

  return (
    <Section id="grammar" ariaLabelledBy="grammar-heading" className="bg-cloud/50">
      <SectionHeading
        id="grammar-heading"
        title="Learn English Grammar Step by Step 📚"
        subtitle="Start with the basics and grow your English skills one lesson at a time."
      />

      {/* Continue Learning */}
      <div className="mb-8 overflow-hidden rounded-[2rem] bg-gradient-to-r from-sky-deep via-lilac-deep to-blush-deep p-6 text-white shadow-[var(--shadow-float)] sm:p-8">
        <p className="text-sm font-bold uppercase tracking-wide text-white/80">
          Continue Learning
        </p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-sun">
              📚 Year {continueInfo.year.year}
            </p>
            <h3 className="text-2xl font-semibold sm:text-3xl">
              {continueInfo.lesson.emoji} {continueInfo.lesson.title}
            </h3>
            <p className="mt-2 text-white/90">Progress: {continueInfo.percent}%</p>
            <div className="mt-2 h-2.5 max-w-sm overflow-hidden rounded-full bg-white/25">
              <div
                className="h-full rounded-full bg-sun"
                style={{ width: `${Math.min(continueInfo.percent, 100)}%` }}
              />
            </div>
          </div>
          <Button
            variant="soft"
            size="lg"
            onClick={() => selectLesson(continueInfo.lesson.id)}
          >
            Continue Lesson →
          </Button>
        </div>
      </div>

      {/* Progress summary */}
      <div className="mb-8 grid gap-3 sm:grid-cols-3">
        <div className="rounded-[1.5rem] bg-white p-4 shadow-[var(--shadow-soft)]">
          <p className="text-sm font-bold text-ink-soft">⭐ Progress</p>
          <p className="mt-1 text-2xl font-bold text-ink">
            {stats.completed}/{stats.total} lessons
          </p>
        </div>
        <div className="rounded-[1.5rem] bg-white p-4 shadow-[var(--shadow-soft)]">
          <p className="text-sm font-bold text-ink-soft">🏆 Stars earned</p>
          <p className="mt-1 text-2xl font-bold text-ink">{stats.stars}</p>
        </div>
        <div className="rounded-[1.5rem] bg-white p-4 shadow-[var(--shadow-soft)]">
          <p className="text-sm font-bold text-ink-soft">🌱 Path complete</p>
          <p className="mt-1 text-2xl font-bold text-ink">{stats.percent}%</p>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Grammar level filters">
        {grammarFilters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            className={`rounded-2xl px-4 py-2 text-sm font-bold transition-all ${
              filter === item.id
                ? 'bg-lilac-deep text-white'
                : 'bg-white text-ink-soft hover:bg-lilac/20'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Visual learning path */}
      <div className="mb-8 overflow-x-auto pb-2">
        <ol className="flex min-w-max items-stretch gap-3 sm:min-w-0 sm:grid sm:grid-cols-5">
          {grammarYears.map((year, index) => {
            const unlocked = isYearUnlocked(year.id)
            const done = year.lessons.every((l) => state.lessons[l.id]?.completed)
            const visible = filter === 'all' || year.filter === filter
            if (!visible) return null
            return (
              <li key={year.id} className="relative w-56 sm:w-auto">
                {index < grammarYears.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-sky-deep sm:block"
                  >
                    →
                  </span>
                ) : null}
                <button
                  type="button"
                  onClick={() => {
                    if (!unlocked) {
                      setShowParentUnlock(true)
                      setActiveYearId(year.id)
                      return
                    }
                    setActiveYearId(year.id)
                    selectLesson(year.lessons[0].id)
                  }}
                  className={`flex h-full w-full flex-col rounded-[1.75rem] p-5 text-left shadow-[var(--shadow-soft)] transition-all ${
                    year.color
                  } ${activeYearId === year.id ? 'ring-4 ring-sky-deep/40' : ''} ${
                    unlocked ? 'hover:-translate-y-1' : 'opacity-80'
                  }`}
                >
                  <span className="flex items-center justify-between gap-2">
                    <span className="text-3xl" aria-hidden="true">
                      {year.emoji}
                    </span>
                    {unlocked ? (
                      done ? (
                        <Star className="text-sun-deep" fill="currentColor" size={20} />
                      ) : (
                        <Unlock className="text-mint-deep" size={18} />
                      )
                    ) : (
                      <Lock className="text-ink-soft" size={18} />
                    )}
                  </span>
                  <span className="mt-3 text-sm font-bold text-ink-soft">Year {year.year}</span>
                  <span className="text-lg font-semibold text-ink">{year.title}</span>
                  <span className="mt-1 text-sm text-ink-soft">{year.description}</span>
                  <span className="mt-3 inline-flex w-fit rounded-full bg-white/80 px-2.5 py-1 text-xs font-bold text-ink">
                    {year.levelLabel}
                  </span>
                </button>
              </li>
            )
          })}
        </ol>
      </div>

      {/* Parent unlock */}
      <div className="mb-8 rounded-[1.5rem] border border-dashed border-sky/40 bg-white/70 p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-bold text-ink">👨‍👩‍👧‍👦 Parents & Teachers</p>
            <p className="text-sm text-ink-soft">
              Advanced years stay locked until earlier years are finished. You can unlock
              levels manually anytime.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setShowParentUnlock((v) => !v)}
            >
              {showParentUnlock ? 'Hide Unlock Panel' : 'Unlock Levels'}
            </Button>
            <Button variant="soft" size="sm" onClick={unlockAllYears}>
              Unlock All Years
            </Button>
          </div>
        </div>
        {showParentUnlock ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {grammarYears.map((year) => (
              <Button
                key={year.id}
                variant={isYearUnlocked(year.id) ? 'ghost' : 'secondary'}
                size="sm"
                onClick={() => unlockYear(year.id)}
              >
                {isYearUnlocked(year.id) ? '✓' : '🔓'} Year {year.year}
              </Button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.4fr]">
        {/* Lesson list for active year */}
        <div className={`rounded-[2rem] ${activeYear.color} p-5 shadow-[var(--shadow-soft)]`}>
          <h3 className="text-xl font-semibold text-ink">
            {activeYear.emoji} Year {activeYear.year} Lessons
          </h3>
          <p className="mt-1 text-ink-soft">{activeYear.description}</p>
          {!isYearUnlocked(activeYear.id) ? (
            <p className="mt-4 rounded-2xl bg-white/80 p-3 text-sm font-semibold text-ink">
              🔒 This year is locked. Finish the previous year or unlock it as a parent/teacher.
            </p>
          ) : (
            <ul className="mt-4 max-h-[28rem] space-y-2 overflow-y-auto pr-1">
              {activeYear.lessons.map((lesson, index) => {
                const progress = state.lessons[lesson.id]
                const selected = lesson.id === activeLessonId
                return (
                  <li key={lesson.id}>
                    <button
                      type="button"
                      onClick={() => selectLesson(lesson.id)}
                      className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition-all ${
                        selected
                          ? 'bg-white shadow-[var(--shadow-soft)] ring-2 ring-sky-deep/30'
                          : 'bg-white/60 hover:bg-white'
                      }`}
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-soft text-sm font-bold text-ink">
                        {index + 1}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-bold text-ink">
                          {lesson.emoji} {lesson.title}
                        </span>
                        <span className="block truncate text-xs text-ink-soft">
                          {lesson.summary}
                        </span>
                      </span>
                      {progress?.completed ? (
                        <span className="flex items-center gap-0.5 text-sun-deep" aria-label={`${progress.stars} stars`}>
                          {Array.from({ length: progress.stars || 1 }).map((_, i) => (
                            <Star key={i} size={14} fill="currentColor" />
                          ))}
                        </span>
                      ) : null}
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        {isYearUnlocked(activeYear.id) ? (
          <LessonPlayer
            lesson={activeLesson}
            year={activeYear}
            onComplete={(score, total) => completeLesson(activeLesson.id, score, total)}
            onSelectLesson={selectLesson}
          />
        ) : (
          <div className="flex flex-col items-center justify-center rounded-[2rem] bg-white p-8 text-center shadow-[var(--shadow-soft)]">
            <Lock size={40} className="text-ink-soft" />
            <p className="mt-4 text-xl font-bold text-ink">Year {activeYear.year} is locked</p>
            <p className="mt-2 text-ink-soft">
              Complete earlier lessons, or unlock this year for your learner.
            </p>
            <Button variant="primary" className="mt-5" onClick={() => unlockYear(activeYear.id)}>
              Unlock Year {activeYear.year}
            </Button>
          </div>
        )}
      </div>

      {/* Keep years in filtered empty state friendly */}
      {years.length === 0 ? (
        <p className="mt-6 text-center text-ink-soft">No years match this filter.</p>
      ) : null}
    </Section>
  )
}
