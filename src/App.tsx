import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Categories } from './components/Categories'
import { Lessons } from './components/Lessons'
import { Grammar } from './components/grammar/Grammar'
import { HowItWorks } from './components/HowItWorks'
import { Videos } from './components/Videos'
import { Activities } from './components/Activities'
import { Parents } from './components/Parents'
import { WhyUs } from './components/WhyUs'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-playful">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-2xl focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:shadow-[var(--shadow-card)]"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Categories />
        <Lessons />
        <Grammar />
        <HowItWorks />
        <Videos />
        <Activities />
        <Parents />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
