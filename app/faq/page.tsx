'use client'

import { useState } from 'react'

import CTABlock from '@/components/CTABlock'
import ScrollReveal from '@/components/ScrollReveal'

const faqGroups = [
  {
    category: 'General',
    items: [
      {
        question: 'How do I book?',
        answer:
          "Give us a call and we'll talk through the best option for your group — we won't pressure you into anything, and you don't need to commit until you're ready to book.",
      },
      {
        question: 'Do I need to book in advance?',
        answer:
          "We recommend booking ahead to secure your preferred date, especially for weekends. That said, give us a call even at short notice and we'll do our best to fit you in.",
      },
      {
        question: 'How long does a session last?',
        answer:
          "A typical paintball session runs for around half a day. The exact timing depends on your group size and package. Call us and we'll give you a full rundown.",
      },
      {
        question: 'Do you run sessions all year round?',
        answer:
          "We run sessions throughout the year, weather permitting. In cases of extreme weather or insufficient player numbers, we'll always give you as much notice as possible and arrange an alternative date.",
      },
    ],
  },
  {
    category: 'Equipment & Safety',
    items: [
      {
        question: 'What equipment do you provide?',
        answer:
          'Everything you need is included: a Tippmann FT-12 semi-automatic marker, air cylinder system, 200 shot hopper, full-facial anti-fog goggles, protective body armour, and our exclusive SWAT-style padded jumpsuit. Tactical weapon upgrades are available as optional extras.',
      },
      {
        question: 'Is it safe?',
        answer:
          'Absolutely. Safety is our top priority. Every player receives a full safety briefing before the game, and all equipment meets professional standards. Our staff are experienced, qualified and DBS checked.',
      },
      {
        question: 'Why do you use air and not CO₂?',
        answer:
          'Air cylinders are the pro standard — they give more consistent performance in all weather conditions and are better for the markers. We made the switch because we care about giving you the best experience, not cutting corners.',
      },
      {
        question: 'What should I wear?',
        answer:
          "Wear comfortable, older clothing you don't mind getting muddy — we're in the woods. We provide padded jumpsuits over the top. Sturdy boots or trainers are recommended. We'll look after the rest.",
      },
    ],
  },
  {
    category: 'Groups & Bookings',
    items: [
      {
        question: "What's the minimum group size?",
        answer:
          "We cater for groups of all sizes. Give us a call and we'll advise on the best format for your numbers.",
      },
      {
        question: 'Can we bring our own food?',
        answer:
          "Absolutely — and we encourage it. Bring a picnic, bring a birthday cake. Make a proper day of it.",
      },
      {
        question: 'Do you cater for mixed age groups?',
        answer:
          "Yes. We have options for all ages, including our low impact paintball for younger players. Call us with your group's age range and we'll recommend the right format.",
      },
      {
        question: 'What happens if we need to cancel?',
        answer:
          "Once confirmed, bookings are strictly non-refundable and non-transferable. However, if we need to postpone due to extreme weather or circumstances outside our control, we'll give you as much notice as possible and arrange an alternative date.",
      },
    ],
  },
  {
    category: 'Kids & Low Impact',
    items: [
      {
        question: 'What age can children play?',
        answer:
          "We welcome players of all ages. Our low impact option is specifically designed for younger players and gives all the fun with a much gentler hit. Call us to discuss what's right for your group.",
      },
      {
        question: 'Is it suitable for birthday parties?',
        answer:
          "It's one of the most popular birthday party options in North Wales. We handle the setup, you bring the cake. Give us a call and we'll sort the rest.",
      },
      {
        question: 'Are your staff DBS checked?',
        answer:
          'Yes. All staff working with young people are fully DBS checked and hold professional qualifications in management and leisure.',
      },
    ],
  },
  {
    category: 'Getting Here',
    items: [
      {
        question: 'Where exactly are you located?',
        answer:
          "We're on the A4244 between Bangor, Caernarfon and Llanberis, at the foot of the Snowdonia National Park — just 5 minutes from the village of Llanberis. Follow signs for PaintballWales.com.",
      },
      {
        question: 'How far are you from [city]?',
        answer:
          "We're about 10 minutes from Bangor, 15 minutes from Caernarfon, 1 hour 15 from Chester, 1 hour 30 from Liverpool, and around 1 hour 45 from Manchester — all via the A55.",
      },
      {
        question: 'Is there parking?',
        answer: "Yes, there's parking on site.",
      },
    ],
  },
]

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  let globalIndex = 0

  return (
    <main className="pb-20 pt-16 md:pb-0">
      <section className="flex h-[40vh] min-h-[320px] items-center justify-center bg-surface section-padding">
        <ScrollReveal initialVisible className="text-center">
          <p className="font-display text-sm uppercase tracking-wider text-yellow">
            Paintball Wales
          </p>
          <h1 className="mt-2 font-display text-5xl font-extrabold uppercase text-white">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 font-body text-lg text-muted">
            Can&apos;t find your answer? Just give us a call — we&apos;re always
            happy to chat.
          </p>
          <a
            href="tel:01248340000"
            className="mt-4 block font-display text-3xl font-black text-yellow hover:underline"
          >
            01248 340000
          </a>
        </ScrollReveal>
      </section>

      <section className="section-padding bg-black pb-20">
        <ScrollReveal initialVisible className="mx-auto max-w-3xl">
          {faqGroups.map((group) => (
            <div key={group.category} className="mb-10">
              <h2 className="mb-4 font-display text-sm uppercase tracking-wider text-yellow">
                {group.category}
              </h2>
              {group.items.map((faq) => {
                const index = globalIndex++
                const isOpen = openIndex === index

                return (
                  <div
                    key={faq.question}
                    className="border-b border-border py-5"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(index)}
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
          ))}

          <div className="mt-12 text-center">
            <p className="font-display text-2xl uppercase text-white">
              Still got questions?
            </p>
            <p className="mt-2 font-body text-base text-muted">
              Just give us a call — we love a good chat.
            </p>
            <a
              href="tel:01248340000"
              className="mt-4 block text-center font-display text-4xl font-black text-yellow hover:underline"
            >
              01248 340000
            </a>
          </div>
        </ScrollReveal>
      </section>

      <CTABlock
        heading="Don't Just Read About It"
        subheading="Pick up the phone and we'll get you booked in. No commitment until you're ready."
      />
    </main>
  )
}
