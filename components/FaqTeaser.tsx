'use client'

import Link from 'next/link'
import { useState } from 'react'

import ScrollReveal from '@/components/ScrollReveal'

const faqs = [
  {
    question: 'How do I book?',
    answer:
      "Give us a call and we'll talk through the best option for your group — we won't pressure you into anything, and you don't need to commit until you're ready.",
  },
  {
    question: 'What age can kids play?',
    answer:
      "We welcome players of all ages. Our low impact option is perfect for younger players. Call us and we'll advise on the best setup for your group.",
  },
  {
    question: 'How many people do we need?',
    answer:
      "We cater for groups of all sizes. Whether you're a group of 8 or 80, get in touch and we'll sort something out.",
  },
]

export default function FaqTeaser() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="section-padding bg-black">
      <ScrollReveal className="max-container max-w-3xl">
        <div className="text-center">
          <h2 className="font-display text-4xl font-extrabold uppercase text-white">
            Got Questions?
          </h2>
          <div className="yellow-underline mx-auto" />
        </div>

        <div className="mt-8">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i

            return (
              <div key={faq.question} className="border-b border-border py-5">
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex w-full cursor-pointer items-center justify-between text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg uppercase text-white">
                    {faq.question}
                  </span>
                  <span className="font-display text-2xl text-yellow">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="font-display text-sm uppercase text-yellow hover:underline"
          >
            See all FAQs →
          </Link>
          <p className="mt-3 font-body text-sm text-muted">
            or call us on{' '}
            <a
              href="tel:01248340000"
              className="font-bold text-yellow hover:underline"
            >
              01248 340000
            </a>
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}
