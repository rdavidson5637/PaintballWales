'use client'

import ExperiencePageLayout from '@/components/ExperiencePageLayout'

const equipment = [
  'Tippmann FT-12 Flip-Top marker',
  'Air cylinder system (not CO₂)',
  '200 shot hopper',
  'Full-facial anti-fog goggles',
  'Protective body armour',
  'SWAT-style padded jumpsuit',
  'Action battle pack (4x100 or 8x100 shots)',
  'Optional tactical weapon upgrades',
]

const gameZones = [
  'COD Missions',
  'Team Deathmatch',
  'Capture the Flag',
  "Fox 'n' Hounds",
  'Chicken Run',
  'Last Man Standing',
  'Storm the Fort',
  'Zombies Haunted Graveyard',
]

export default function YourDayPage() {
  return (
    <ExperiencePageLayout
      heroImageAlt="Paintball players kitted up at Paintball Wales"
      contentImageAlt="Full paintball experience in the Snowdonia woods"
      heroEyebrow="Your Day"
      heroH1="Here's What to Expect"
      heroSub="From arrival to awards — a full day of adrenaline in the Snowdonia woods."
      h2="The Full Paintball Experience"
      paragraphs={[
        "From the moment you arrive, we handle everything. Full safety briefing, kit fitting, mission briefing — then it's game on.",
        "We use Tippmann FT-12 Flip-Top semi-automatic markers — the latest model, used by pro players worldwide. And we run on air cylinders, not CO₂, because that's the pro standard and it's better for everyone.",
        "The day ends with an awards presentation and team photos. We'll get them up on our Facebook page so you can share them with everyone who wasn't there — and make them wish they had been.",
      ]}
      callout="Not sure what package is right for your group? Just call us. We'll talk you through everything and help you pick the best option. No payment until you're sure."
      belowMainContent={
        <>
          <div className="mt-10 rounded-xl bg-black p-8">
            <h3 className="mb-6 font-display text-sm uppercase tracking-wider text-yellow">
              Your Kit
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {equipment.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="font-display text-yellow" aria-hidden="true">
                    ✓
                  </span>
                  <span className="font-display text-sm uppercase text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20 mt-6 rounded-xl bg-surface p-8">
            <h3 className="mb-6 font-display text-sm uppercase tracking-wider text-yellow">
              Game Zones
            </h3>
            <div className="flex flex-wrap gap-3">
              {gameZones.map((zone) => (
                <span
                  key={zone}
                  className="rounded-full border border-border bg-black px-4 py-2 font-display text-sm uppercase text-white"
                >
                  {zone}
                </span>
              ))}
            </div>
          </div>
        </>
      }
      ctaHeading="Ready to Play?"
      ctaSubheading="Give us a call — we'll talk you through everything and find the right package for your group."
    />
  )
}
