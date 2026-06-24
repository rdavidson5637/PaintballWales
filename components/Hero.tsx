import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { IMAGES } from '@/lib/images'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      <ScrollReveal
        initialVisible
        className="relative z-10 mx-auto w-full max-w-4xl px-4 py-24 text-center md:px-8"
      >
        <Image
          src={IMAGES.logo}
          alt="Paintball Wales logo"
          width={220}
          height={80}
          className="mx-auto mb-6 h-auto w-[220px]"
          priority
        />

        <p className="font-display text-sm uppercase tracking-widest text-yellow">
          North Wales · Snowdonia
        </p>

        <h1 className="mt-3 break-words font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl md:text-5xl lg:text-7xl">
          North Wales&apos; Premier Paintball Adventure
        </h1>

        <div className="mx-auto mt-6 w-full max-w-3xl space-y-4 break-words text-left font-body text-base leading-relaxed text-muted md:text-lg">
          <p>
            PaintballWales.com is the longest-established dedicated Outdoor
            Activity Paintball Park in North Wales and the Snowdonia National
            Park, as seen on S4C and BBC / Radio 1! Run by players themselves
            with over 20 years experience!
          </p>

          <p className="break-words font-display text-lg font-bold uppercase text-white sm:text-xl md:text-2xl">
            PaintballWales.com – The Ultimate Paintball Experience!!
          </p>

          <p className="font-display text-base font-bold uppercase tracking-wide text-yellow sm:text-lg">
            Always Book Direct!
          </p>

          <p className="flex flex-col gap-1 font-display text-base text-white sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:text-lg">
            <a href="tel:01248340000" className="hover:text-yellow hover:underline">
              Tel. 01248 340000
            </a>
            <span className="hidden text-muted sm:inline">/</span>
            <a href="tel:07557340000" className="hover:text-yellow hover:underline">
              Mob. 07557 340000
            </a>
          </p>

          <p>
            Centrally located in the woods between the sea &amp; the mountains
            at the foot of the beautiful Snowdonia National Park. Perfectly
            situated for North and Mid-Wales, Wirral, Chester, and the Liverpool
            and Manchester area. Even if you&apos;re coming from outside the
            area, our super-friendly staff, fun &apos;n&apos; party
            atmosphere and beautiful location merely 5 mins from the picture
            postcard pretty village of Llanberis at the foot of Mount Snowdon
            are well worth the drive to make a day out of it! PaintballWales.com
            – The Ultimate Paintball Experience!!
          </p>
        </div>

        <Link
          href="#contact"
          className="mt-8 inline-block rounded bg-yellow px-10 py-5 font-display text-xl font-bold uppercase text-black transition hover:brightness-110"
        >
          Enquire Now
        </Link>

        <p className="mt-3 font-body text-xs text-muted">
          No commitment needed to enquire — we&apos;ll call you back
        </p>
      </ScrollReveal>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-yellow">
        <svg
          className="h-8 w-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </section>
  )
}
