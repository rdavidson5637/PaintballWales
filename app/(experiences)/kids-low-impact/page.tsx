'use client'

import ExperiencePageLayout from '@/components/ExperiencePageLayout'

export default function KidsLowImpactPage() {
  return (
    <ExperiencePageLayout
      heroImageAlt="Kids low impact paintball in Snowdonia"
      contentImageAlt="Young players enjoying low impact paintball"
      heroEyebrow="Kids & Low Impact"
      heroH1="All the Thrills. A Lot Less Sting."
      heroSub="Safe, supervised, and seriously good fun for younger players."
      h2="We Treat Every Child Like They're Our Own"
      paragraphs={[
        'We feel genuinely privileged to be trusted with your most precious possession — your child. Our low impact paintball option is designed to give younger players the full thrill of the game, with paintballs that hit a lot gentler.',
        "You've seen them play Call of Duty on the PlayStation. Now they can experience those same missions for real — in the actual woods, with real equipment, with our experienced and fully DBS-checked staff.",
        "We've been running kids' sessions for over 20 years. Our Young Dragonz regulars come back again and again — and their friends end up booking their own birthday parties with us too.",
      ]}
      callout="Suitable for boys and girls. Affordable for groups. Perfect for birthday parties. Call us to discuss the right setup for your group's age range."
      includedCards={[
        {
          icon: '🛡️',
          title: 'Low Impact Paintballs',
          description:
            'All the fun, a much gentler hit. Perfect for younger and first-time players.',
        },
        {
          icon: '👶',
          title: 'All Ages Welcome',
          description:
            "We'll advise on the right format for your group's age range. Just give us a call.",
        },
        {
          icon: '🏅',
          title: 'DBS-Checked Staff',
          description:
            'Every member of our team is professionally qualified and DBS checked.',
        },
        {
          icon: '🎮',
          title: 'Real Game Missions',
          description:
            'COD-style missions played for real in woodland terrain. Genuinely unforgettable.',
        },
      ]}
      ctaHeading="Safe, Fun, and Seriously Good Value"
      ctaSubheading="Call us to discuss the best low impact setup for your group."
    />
  )
}
