import Link from 'next/link'
import SectionHeading from '@/components/SectionHeading'
import ScrollReveal from '@/components/ScrollReveal'

const kitItems = [
  'Tippmann FT-12 Flip-Top semi-automatic marker',
  'Air cylinder system (pro standard — not CO₂)',
  '200 shot hopper',
  'Full-facial anti-fog goggles',
  'Protective lightweight body armour',
  'SWAT-style padded PaintballWales.com jumpsuit',
  'Action battle pack (4×100 or 8×100 shots depending on package)',
  'Optional tactical weapon upgrades available',
]

const gameModes = [
  'COD Missions',
  'Team Deathmatch',
  'Capture the Flag',
  "Fox 'n' Hounds",
  'Chicken Run',
  'Last Man Standing',
  'Storm the Fort',
  'Zombies Haunted Graveyard',
]

export default function YourDay() {
  return (
    <section id="your-day" className="bg-surface section-padding">
      <ScrollReveal className="max-container">
        <SectionHeading>Your Day</SectionHeading>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-sm uppercase tracking-wider text-yellow">
              Your Kit
            </h3>
            <ul className="mt-6 space-y-3">
              {kitItems.map((item) => (
                <li key={item} className="flex gap-3 font-body text-muted">
                  <span className="shrink-0 text-yellow" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-wider text-yellow">
              Game Zones
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {gameModes.map((mode) => (
                <span
                  key={mode}
                  className="rounded-full border border-border bg-black px-4 py-2 font-display text-sm uppercase text-white"
                >
                  {mode}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/your-day"
            className="font-display text-sm uppercase text-yellow hover:underline"
          >
            View Full Day Details →
          </Link>
        </div>
      </ScrollReveal>
    </section>
  )
}
