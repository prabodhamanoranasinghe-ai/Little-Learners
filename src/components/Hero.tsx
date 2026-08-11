import { Button } from './ui/Button'
import { FloatingElement } from './ui/FloatingElement'
import { HeroIllustration } from './illustrations/HeroIllustration'

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8 lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-playful" aria-hidden="true" />

      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-sky/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-40 h-72 w-72 rounded-full bg-blush/25 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="animate-fade-up text-center lg:text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-sm font-bold text-ink-soft shadow-[var(--shadow-soft)]">
            <span aria-hidden="true">✨</span> English for little explorers
          </p>
          <h1
            id="hero-heading"
            className="text-balance text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Learning English is Fun!
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft sm:text-xl lg:mx-0">
            Discover letters, words, numbers, animals, colors and more with Little
            Learners.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button variant="primary" size="lg" href="#learn">
              Start Learning 🚀
            </Button>
            <Button variant="secondary" size="lg" href="#learn">
              Explore Lessons
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative rounded-[2rem] bg-white/60 p-4 shadow-[var(--shadow-float)] backdrop-blur-sm sm:p-6">
            <HeroIllustration className="h-auto w-full" />

            <FloatingElement className="left-2 top-8 sm:left-0 sm:top-12" animation="float">
              A
            </FloatingElement>
            <FloatingElement
              className="right-4 top-4 sm:right-2 sm:top-8"
              animation="float-delayed"
            >
              B
            </FloatingElement>
            <FloatingElement
              className="bottom-24 left-0 sm:bottom-28 sm:-left-4"
              animation="bob"
            >
              C
            </FloatingElement>
            <FloatingElement
              className="right-0 top-1/3 sm:-right-3"
              animation="float-slow"
            >
              🍎
            </FloatingElement>
            <FloatingElement
              className="bottom-16 right-8 sm:bottom-20 sm:right-6"
              animation="wiggle"
            >
              🐶
            </FloatingElement>
            <FloatingElement
              className="left-1/4 top-2 sm:top-0"
              animation="float-delayed"
            >
              ⭐
            </FloatingElement>
            <FloatingElement
              className="bottom-8 left-1/3 text-base sm:text-xl"
              animation="float"
            >
              123
            </FloatingElement>
          </div>
        </div>
      </div>
    </section>
  )
}
