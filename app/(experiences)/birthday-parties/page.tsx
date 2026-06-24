'use client'

import ExperiencePageLayout from '@/components/ExperiencePageLayout'

export default function BirthdayPartiesPage() {
  return (
    <ExperiencePageLayout
      heroImageAlt="Birthday party paintball in North Wales"
      contentImageAlt="Kids celebrating a birthday paintball party"
      heroEyebrow="Birthday Parties"
      heroH1="A Birthday They'll Never Stop Talking About"
      heroSub="An unforgettable birthday with a difference — for kids and grown-ups alike."
      h2="The Wow Factor, Guaranteed"
      paragraphs={[
        "At Paintball Wales, we believe every child — and every grown-up — deserves an incredible birthday. That's why we've kept things simple, with no hidden extras.",
        'We offer set packages and all-inclusive unlimited ammo options. Call us for the full breakdown — we challenge you to find a better outdoor activity birthday anywhere in North Wales.',
        "And unlike the cinema, you're welcome to bring your own food. Pack a picnic and birthday cake — eat what you want, and make a proper day out of it.",
      ]}
      callout="We're the longest-established paintball park in North Wales. We're local, we're family-run, and we genuinely care. Your child's birthday is safe in our hands."
      includedCards={[
        {
          icon: '🎂',
          title: 'Flexible Packages',
          description:
            'Options for every group size. No hidden extras. Call us for the full breakdown.',
        },
        {
          icon: '🍕',
          title: 'Bring Your Own Food',
          description:
            "Pack a picnic, bring the birthday cake. We're not the cinema — eat what you like.",
        },
        {
          icon: '👾',
          title: 'COD Missions & More',
          description:
            'The games you know from your console — played for real in the Snowdonia woods.',
        },
        {
          icon: '🏆',
          title: 'Awards Presentation',
          description:
            'Day ends with an awards ceremony and team photos. Perfect for parents to capture.',
        },
      ]}
      ctaHeading="Book the Birthday They'll Never Forget"
      ctaSubheading="Call us and we'll find the right package for your group."
    />
  )
}
