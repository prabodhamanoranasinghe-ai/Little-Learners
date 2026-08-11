import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/content'
import { Section, SectionHeading } from './ui/Section'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section id="faq" ariaLabelledBy="faq-heading" className="bg-cloud/50">
      <SectionHeading
        id="faq-heading"
        title="Frequently Asked Questions"
        subtitle="Everything parents usually want to know before getting started."
      />

      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          const panelId = `faq-panel-${index}`
          const buttonId = `faq-button-${index}`

          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-[1.5rem] bg-white shadow-[var(--shadow-soft)]"
            >
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-lg font-bold text-ink transition-colors hover:bg-sky-soft/40 sm:px-6 sm:py-5"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {faq.question}
                  <ChevronDown
                    size={22}
                    className={`shrink-0 text-sky-deep transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="px-5 pb-5 text-ink-soft sm:px-6"
              >
                <p className="text-base leading-relaxed sm:text-lg">{faq.answer}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
