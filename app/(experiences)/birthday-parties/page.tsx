'use client'

import ExperiencePageLayout from '@/components/ExperiencePageLayout'

export default function BirthdayPartiesPage() {
  return (
    <ExperiencePageLayout
      heroImageAlt="Birthday party paintball in North Wales"
      contentImageAlt="Kids celebrating a birthday paintball party"
      heroEyebrow="Birthday Parties"
      heroH1="A Birthday They'll Never Stop Talking About"
      heroSub="The most cost-effective birthday with a difference — for kids and grown-ups alike."
      h2="The Wow Factor, Without the Wow Price"
      paragraphs={[
        "At Paintball Wales, we believe every child — and every grown-up — deserves an incredible birthday. That's why we've made our packages genuinely affordable, with no hidden extras and no complicated pricing.",
        'Set packages start at just £12.50 per player. All-Inclusive Unlimited Ammo packages from just £20 per player. We challenge you to find better value for an outdoor activity birthday anywhere in North Wales.',
        "And unlike the cinema, we don't charge you for the food. Bring your own picnic and birthday cake — save money, eat what you want, and make a proper day out of it.",
      ]}
      callout="We're the longest-established paintball park in North Wales. We're local, we're family-run, and we genuinely care. Your child's birthday is safe in our hands."
      includedCards={[
        {
          icon: '🎂',
          title: 'Set Packages from £12.50',
          description:
            'Affordable for groups. No hidden costs. Call us for the full breakdown.',
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
      ctaSubheading="Call us and we'll find the right package for your group and budget."
    />
  )
}
