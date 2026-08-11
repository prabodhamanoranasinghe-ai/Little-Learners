import { useCallback, useEffect, useMemo, useState } from 'react'
import { grammarYears, getGrammarLesson } from '../data/grammar'

const STORAGE_KEY = 'little-learners-grammar-progress-v1'

export interface LessonProgress {
  completed: boolean
  quizScore: number
  quizTotal: number
  stars: number
  lastStep?: 'learn' | 'examples' | 'practice' | 'game' | 'quiz'
}

export interface GrammarProgressState {
  lessons: Record<string, LessonProgress>
  unlockedYears: string[]
  currentLessonId: string
}

const defaultState = (): GrammarProgressState => ({
  lessons: {},
  unlockedYears: ['year-1'],
  currentLessonId: grammarYears[0].lessons[0].id,
})

function loadState(): GrammarProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState()
    const parsed = JSON.parse(raw) as GrammarProgressState
    return {
      ...defaultState(),
      ...parsed,
      unlockedYears: parsed.unlockedYears?.length
        ? parsed.unlockedYears
        : ['year-1'],
    }
  } catch {
    return defaultState()
  }
}

function yearCompleted(yearId: string, lessons: Record<string, LessonProgress>) {
  const year = grammarYears.find((y) => y.id === yearId)
  if (!year) return false
  return year.lessons.every((l) => lessons[l.id]?.completed)
}

export function useGrammarProgress() {
  const [state, setState] = useState<GrammarProgressState>(defaultState)

  useEffect(() => {
    setState(loadState())
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const isYearUnlocked = useCallback(
    (yearId: string) => state.unlockedYears.includes(yearId),
    [state.unlockedYears],
  )

  const unlockYear = useCallback((yearId: string) => {
    setState((prev) => ({
      ...prev,
      unlockedYears: prev.unlockedYears.includes(yearId)
        ? prev.unlockedYears
        : [...prev.unlockedYears, yearId],
    }))
  }, [])

  const unlockAllYears = useCallback(() => {
    setState((prev) => ({
      ...prev,
      unlockedYears: grammarYears.map((y) => y.id),
    }))
  }, [])

  const setCurrentLesson = useCallback((lessonId: string) => {
    setState((prev) => ({ ...prev, currentLessonId: lessonId }))
  }, [])

  const saveLessonProgress = useCallback(
    (lessonId: string, patch: Partial<LessonProgress>) => {
      setState((prev) => {
        const existing = prev.lessons[lessonId] ?? {
          completed: false,
          quizScore: 0,
          quizTotal: 0,
          stars: 0,
        }
        const nextLesson = { ...existing, ...patch }
        const lessons = { ...prev.lessons, [lessonId]: nextLesson }

        let unlockedYears = [...prev.unlockedYears]
        // Auto-unlock next year when current year fully completed
        grammarYears.forEach((year, index) => {
          if (yearCompleted(year.id, lessons)) {
            const next = grammarYears[index + 1]
            if (next && !unlockedYears.includes(next.id)) {
              unlockedYears.push(next.id)
            }
          }
        })

        return {
          ...prev,
          lessons,
          unlockedYears,
          currentLessonId: lessonId,
        }
      })
    },
    [],
  )

  const completeLesson = useCallback(
    (lessonId: string, quizScore: number, quizTotal: number) => {
      const ratio = quizTotal ? quizScore / quizTotal : 0
      const stars = ratio >= 1 ? 3 : ratio >= 0.66 ? 2 : 1
      saveLessonProgress(lessonId, {
        completed: true,
        quizScore,
        quizTotal,
        stars,
        lastStep: 'quiz',
      })
    },
    [saveLessonProgress],
  )

  const stats = useMemo(() => {
    const allLessons = grammarYears.flatMap((y) => y.lessons)
    const completed = allLessons.filter((l) => state.lessons[l.id]?.completed).length
    const stars = Object.values(state.lessons).reduce((sum, l) => sum + (l.stars || 0), 0)
    return {
      completed,
      total: allLessons.length,
      stars,
      percent: Math.round((completed / allLessons.length) * 100),
    }
  }, [state.lessons])

  const continueInfo = useMemo(() => {
    const { year, lesson } = getGrammarLesson(state.currentLessonId)
    const progress = state.lessons[lesson.id]
    const lessonIndex = year.lessons.findIndex((l) => l.id === lesson.id)
    const doneInYear = year.lessons.filter((l) => state.lessons[l.id]?.completed).length
    const yearPercent = Math.round((doneInYear / year.lessons.length) * 100)
    const activePercent = Math.round(((lessonIndex + 1) / year.lessons.length) * 100 * 0.65)
    return {
      year,
      lesson,
      lessonIndex,
      percent: progress?.completed ? Math.max(yearPercent, 1) : Math.max(yearPercent, activePercent),
      progress,
    }
  }, [state.currentLessonId, state.lessons])

  return {
    state,
    stats,
    continueInfo,
    isYearUnlocked,
    unlockYear,
    unlockAllYears,
    setCurrentLesson,
    saveLessonProgress,
    completeLesson,
  }
}
