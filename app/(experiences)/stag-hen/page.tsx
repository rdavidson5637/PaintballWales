'use client'

import ExperiencePageLayout from '@/components/ExperiencePageLayout'

export default function StagHenPage() {
  return (
    <ExperiencePageLayout
      heroImageAlt="Stag and hen party paintball in Snowdonia"
      contentImageAlt="Group celebrating a stag do at Paintball Wales"
      heroEyebrow="Stag & Hen Dos"
      heroH1="Your Last Night of Freedom Deserves the Best"
      heroSub="We organise the whole day — you just bring the squad."
      h2="The Ultimate Stag or Hen Day Out"
      paragraphs={[
        "There are some life events you'll remember forever — and your stag or hen do is one of them. At Paintball Wales, we take all the stress off the organiser's shoulders and plan the whole day for you.",
        "From the legendary Chicken Run to Fox 'n' Hounds — where we give the stag or hen a 2-minute head start before hunting them through the woods — we've built an experience you'll all be talking about for years.",
        "And we always keep one thing secret: the surprise finale. Just tell the stag or hen to show up. We'll handle the rest.",
      ]}
      callout="We've been trusted with hundreds of stag and hen parties over 20 years. We know exactly how to make it unforgettable — and how to make sure the organiser looks like a genius."
      includedCards={[
        {
          icon: '🎯',
          title: 'Legendary Chicken Run',
          description:
            'The Paintball Wales classic. The stag or hen runs — everyone else hunts. Pure chaos.',
        },
        {
          icon: '🦊',
          title: "Fox 'n' Hounds",
          description:
            '2-minute head start into the woods. Then the hunt begins. Good luck.',
        },
        {
          icon: '🎉',
          title: 'Surprise Finale',
          description:
            'We keep the best part secret. Trust us — the stag or hen will love it.',
        },
        {
          icon: '📸',
          title: 'Photos on Facebook',
          description:
            'Full day footage and photos available on our Facebook page to share with the group.',
        },
      ]}
      ctaHeading="Make Their Day Unforgettable"
      ctaSubheading="Call us and we'll plan the whole thing for you."
    />
  )
}
