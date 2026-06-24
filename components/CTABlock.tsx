'use client'

import Link from 'next/link'

type CTABlockProps = {
  heading?: string
  subheading?: string
}

export default function CTABlock({
  heading = 'Ready to Book Your Day?',
  subheading = "Call us now — we're friendly, we don't bite. We shoot.",
}: CTABlockProps) {
  return (
    <section className="bg-yellow px-4 py-16 text-black">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-4xl font-extrabold uppercase md:text-5xl">
          {heading}
        </h2>
        <p className="mt-2 font-body text-lg opacity-80">{subheading}</p>

        <a
          href="tel:01248340000"
          className="mt-6 block font-display text-5xl font-black hover:underline md:text-6xl"
        >
          01248 340000
        </a>
        <a
          href="tel:07557340000"
          className="mt-2 block font-body text-lg opacity-70 hover:underline"
        >
          07557 340000
        </a>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/#contact"
            className="rounded bg-black px-8 py-4 font-display uppercase text-white transition-colors hover:bg-surface"
          >
            Enquire Online
          </Link>
          <Link
            href="/#find-us"
            className="rounded border border-black px-8 py-4 font-display uppercase text-black transition-colors hover:bg-black/10"
          >
            Find Us
          </Link>
        </div>
      </div>
    </section>
  )
}
