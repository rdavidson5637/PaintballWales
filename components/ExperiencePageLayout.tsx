'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

import CTABlock from '@/components/CTABlock'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import ScrollReveal from '@/components/ScrollReveal'

export type IncludedCard = {
  icon: string
  title: string
  description: string
}

export type ExperiencePageLayoutProps = {
  heroImage?: string
  contentImage?: string
  heroImageAlt: string
  contentImageAlt: string
  heroEyebrow: string
  heroH1: string
  heroSub: string
  h2: string
  paragraphs: string[]
  callout: string
  includedCards?: IncludedCard[]
  includedGridCols?: 2 | 3
  beforeCallout?: ReactNode
  belowMainContent?: ReactNode
  ctaHeading: string
  ctaSubheading: string
}

function ContactBox() {
  return (
    <div className="rounded-xl border border-yellow bg-black p-6">
      <h3 className="font-display text-sm uppercase text-yellow">
        Ready to Book?
      </h3>
      <a
        href="tel:01248340000"
        className="mt-2 block font-display text-3xl font-black text-white hover:underline"
      >
        01248 340000
      </a>
      <hr className="my-4 border-border" />
      <a
        href="tel:07557340000"
        className="block font-body text-lg text-white hover:underline"
      >
        07557 340000
      </a>
      <a
        href="mailto:info@paintballwales.com"
        className="mt-2 block font-body text-sm text-muted transition-colors hover:text-white"
      >
        info@paintballwales.com
      </a>
      <Link
        href="/#contact"
        className="mt-6 block w-full rounded bg-yellow py-3 text-center font-display text-sm font-bold uppercase text-black transition hover:brightness-110"
      >
        Enquire Online
      </Link>
    </div>
  )
}

export default function ExperiencePageLayout({
  heroImage,
  contentImage,
  heroImageAlt,
  contentImageAlt,
  heroEyebrow,
  heroH1,
  heroSub,
  h2,
  paragraphs,
  callout,
  includedCards,
  includedGridCols = 2,
  beforeCallout,
  belowMainContent,
  ctaHeading,
  ctaSubheading,
}: ExperiencePageLayoutProps) {
  const showIncluded = includedCards && includedCards.length > 0
  const includedGridClass =
    includedGridCols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'

  return (
    <main className="w-full max-w-full overflow-x-clip pb-20 pt-16 md:pb-0">
      <section className="relative flex h-[60vh] min-h-[400px] items-center justify-center overflow-hidden bg-black">
        {heroImage ? (
          <Image
            src={heroImage}
            alt={heroImageAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        ) : (
          <ImagePlaceholder className="absolute inset-0" />
        )}
        <div className="absolute inset-0 bg-black/70" />
        <ScrollReveal initialVisible className="relative z-10 px-4 text-center">
          <p className="font-display text-sm uppercase tracking-widest text-yellow">
            {heroEyebrow}
          </p>
          <h1 className="mt-3 break-words font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl md:text-6xl">
            {heroH1}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-muted">
            {heroSub}
          </p>
        </ScrollReveal>
      </section>

      <section
        className={`section-padding bg-surface ${
          showIncluded ? '' : 'pb-20'
        } ${belowMainContent && !showIncluded ? 'mb-20' : ''}`}
      >
        <ScrollReveal initialVisible className="max-container">
          <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
            <div>
              <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
                {h2}
              </h2>
              <div className="yellow-underline mb-6" />
              <div className="space-y-4 font-body text-base leading-relaxed text-muted">
                {paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {beforeCallout}

              <div className="mt-6 rounded-r-lg border-l-4 border-yellow bg-black p-5">
                <p className="font-body text-sm leading-relaxed text-muted">
                  {callout}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                {contentImage ? (
                  <Image
                    src={contentImage}
                    alt={contentImageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 340px"
                  />
                ) : (
                  <ImagePlaceholder className="absolute inset-0" />
                )}
              </div>
              <ContactBox />
            </div>
          </div>

          {belowMainContent}
        </ScrollReveal>
      </section>

      {showIncluded && (
        <section className="section-padding bg-black pb-20">
          <ScrollReveal initialVisible className="max-container">
            <h2 className="text-center font-display text-3xl font-bold uppercase text-white md:text-4xl">
              What&apos;s Included
            </h2>
            <div className="yellow-underline mx-auto mb-12" />
            <div className={`grid gap-6 ${includedGridClass}`}>
              {includedCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border bg-surface p-6"
                >
                  <span className="text-3xl" aria-hidden="true">
                    {card.icon}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold uppercase text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}

      <CTABlock heading={ctaHeading} subheading={ctaSubheading} />
    </main>
  )
}
