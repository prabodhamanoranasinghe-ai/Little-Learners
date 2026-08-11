import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import { activities } from '../data/content'
import type { LessonCategoryId } from '../data/lessons'
import { ActivityGame } from './ActivityGame'
import { Button } from './ui/Button'
import { Section, SectionHeading } from './ui/Section'

export function Activities() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <Section id="activities" ariaLabelledBy="activities-heading" className="bg-cloud/60">
      <SectionHeading
        id="activities-heading"
        title="Let's Play & Learn! 🎮"
        subtitle="Fun interactive activities that help words stick in a playful way."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => {
          const isOpen = activeId === activity.id
          return (
            <article
              key={activity.id}
              className={`flex flex-col rounded-[1.75rem] ${activity.color} p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]`}
            >
              <div
                className="mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-4xl shadow-[var(--shadow-soft)]"
                aria-hidden="true"
              >
                {activity.emoji}
              </div>
              <h3 className="text-xl font-semibold text-ink">{activity.title}</h3>
              <p className="mt-2 flex-1 text-ink-soft">{activity.description}</p>

              {!isOpen ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  <Button
                    variant="soft"
                    size="sm"
                    onClick={() => setActiveId(activity.id)}
                  >
                    <Sparkles size={16} aria-hidden="true" />
                    Play Now
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    href={`#lesson-${activity.lessonId}`}
                  >
                    Open Lesson
                  </Button>
                </div>
              ) : (
                <>
                  <ActivityGame
                    lessonId={activity.lessonId as LessonCategoryId}
                    title={activity.title}
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2 self-start"
                    onClick={() => setActiveId(null)}
                  >
                    Close Game
                  </Button>
                </>
              )}
            </article>
          )
        })}
      </div>
    </Section>
  )
}
