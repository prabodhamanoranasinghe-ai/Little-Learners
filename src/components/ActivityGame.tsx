import { useMemo, useState } from 'react'
import { Check, RefreshCw, Sparkles, X } from 'lucide-react'
import { getLessonCategory, type LessonCategoryId } from '../data/lessons'
import { speak } from '../utils/speak'
import { Button } from './ui/Button'

function shuffle<T>(items: T[]): T[] {
  const next = [...items]
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[next[i], next[j]] = [next[j], next[i]]
  }
  return next
}

interface ActivityGameProps {
  lessonId: LessonCategoryId
  title: string
}

export function ActivityGame({ lessonId, title }: ActivityGameProps) {
  const category = getLessonCategory(lessonId)
  const [selected, setSelected] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [tries, setTries] = useState(0)
  const [seed, setSeed] = useState(0)

  const activeRound = useMemo(() => {
    void seed
    const pool = shuffle(category.items).slice(0, 4)
    const answer = pool[0]
    const choices = shuffle(pool)
    return { answer, choices }
  }, [category, seed])

  const isCorrect = selected === activeRound.answer.id
  const answered = selected !== null

  const prompt =
    lessonId === 'letters'
      ? `Which picture matches the letter ${activeRound.answer.label}?`
      : lessonId === 'numbers'
        ? `Which one shows the number ${activeRound.answer.label}?`
        : lessonId === 'colors'
          ? `Which one is ${activeRound.answer.word}?`
          : lessonId === 'animals'
            ? `Which animal is the ${activeRound.answer.word}?`
            : `Find the ${activeRound.answer.word}`

  const onChoose = (id: string) => {
    if (answered) return
    setSelected(id)
    setTries((t) => t + 1)
    if (id === activeRound.answer.id) {
      setScore((s) => s + 1)
      speak(`Yes! ${activeRound.answer.word}`)
    } else {
      speak(`Try again. Looking for ${activeRound.answer.word}`)
    }
  }

  const nextRound = () => {
    setSelected(null)
    setSeed((s) => s + 1)
  }

  return (
    <div className="mt-4 rounded-[1.5rem] bg-white/80 p-4 shadow-[var(--shadow-soft)]">
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="font-bold text-ink">{title}</p>
        <p className="text-sm font-semibold text-ink-soft">
          Score {score}/{tries || 0}
        </p>
      </div>
      <p className="mb-4 text-ink-soft">{prompt}</p>

      {lessonId === 'letters' || lessonId === 'numbers' ? (
        <div
          className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-soft text-3xl font-bold text-ink"
          style={{ fontFamily: 'var(--font-display)' }}
          aria-hidden="true"
        >
          {activeRound.answer.label}
        </div>
      ) : null}

      <div className="grid grid-cols-2 gap-2">
        {activeRound.choices.map((choice) => {
          const chosen = selected === choice.id
          const showCorrect = answered && choice.id === activeRound.answer.id
          const showWrong = chosen && !isCorrect

          return (
            <button
              key={choice.id}
              type="button"
              disabled={answered}
              onClick={() => onChoose(choice.id)}
              className={`flex flex-col items-center gap-1 rounded-2xl border-2 px-2 py-3 transition-all ${
                showCorrect
                  ? 'border-mint-deep bg-mint/40'
                  : showWrong
                    ? 'border-blush-deep bg-blush/30'
                    : 'border-transparent bg-cloud hover:border-sky-deep/40'
              }`}
            >
              <span className="text-3xl" aria-hidden="true">
                {choice.emoji}
              </span>
              <span className="text-sm font-bold text-ink">{choice.word}</span>
              {showCorrect ? <Check size={16} className="text-mint-deep" aria-hidden="true" /> : null}
              {showWrong ? <X size={16} className="text-blush-deep" aria-hidden="true" /> : null}
            </button>
          )
        })}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Button variant="secondary" size="sm" onClick={() => speak(prompt)}>
          <Sparkles size={14} aria-hidden="true" />
          Hear Question
        </Button>
        <Button variant="soft" size="sm" onClick={nextRound}>
          <RefreshCw size={14} aria-hidden="true" />
          Next Round
        </Button>
      </div>
    </div>
  )
}
