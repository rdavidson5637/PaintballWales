import Image from 'next/image'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import ScrollReveal from '@/components/ScrollReveal'
import { IMAGES } from '@/lib/images'

export default function About() {
  return (
    <section className="section-padding bg-surface">
      <ScrollReveal className="max-container grid w-full min-w-0 grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <p className="font-display text-sm uppercase tracking-wider text-yellow">
            Established Over 20 Years Ago
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold leading-tight text-white">
            The Ultimate Paintball Experience in the Heart of Snowdonia
          </h2>
          <div className="yellow-underline mb-6" />

          <div className="space-y-4 font-body text-base leading-relaxed text-muted">
            <p>
              PaintballWales.com is the longest-established dedicated outdoor
              paintball park in North Wales and the Snowdonia National Park —
              run by players themselves, with over 20 years of experience.
            </p>
            <p>
              Centrally located in the woods between the sea and the mountains
              at the foot of the Snowdonia National Park. Perfectly situated
              for groups from North and Mid-Wales, the Wirral, Chester,
              Liverpool and Manchester.
            </p>
            <p>
              We&apos;ve been trusted with stag and hen parties, birthday
              bashes, school groups, corporate team-building events and family
              days out. Whatever the occasion — we make it unforgettable.
            </p>
          </div>

          <p className="mt-6 font-body text-xs uppercase tracking-wider text-muted">
            As seen on:
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {['BBC', 'RADIO 1', 'S4C'].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border bg-surface px-3 py-1 font-display text-xs uppercase text-yellow"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-lg">
            <Image
              src={IMAGES.stagDo}
              alt="Stag do group in fancy dress with paintball markers at Paintball Wales"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="flex min-h-[280px] items-stretch md:min-h-[400px]">
          <ImagePlaceholder
            showLogo
            className="w-full rounded-lg"
          />
        </div>
      </ScrollReveal>
    </section>
  )
}
