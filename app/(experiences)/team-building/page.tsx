'use client'

import ExperiencePageLayout from '@/components/ExperiencePageLayout'

export default function TeamBuildingPage() {
  return (
    <ExperiencePageLayout
      heroImageAlt="Team building paintball in North Wales"
      contentImageAlt="Corporate group on a team building paintball day"
      heroEyebrow="Team Building"
      heroH1="Team Building That Actually Works"
      heroSub="Schools, colleges, clubs, corporates, charities — all welcome."
      h2="A Day Out That Actually Brings People Together"
      paragraphs={[
        'Forget conference rooms and trust falls. Paintball Wales delivers team building that people genuinely want to take part in — and actually remember.',
        "Our experienced staff hold professional management and leisure industry qualifications up to MBA level and are fully DBS checked. We're equipped to deliver a structured, purposeful day that meets your goals — whether that's staff bonding, student engagement, charity fundraising or corporate hospitality.",
        'We cater for schools, colleges, universities, clubs, community groups, charity fundraisers, customer and employee rewards, and full corporate hospitality packages.',
      ]}
      callout="Whether you're 10 people or 100, we'll tailor the day around your group. No two team-building sessions are the same."
      includedCards={[
        {
          icon: '🎓',
          title: 'MBA-Qualified Staff',
          description:
            'Our team hold professional management qualifications and are fully DBS checked.',
        },
        {
          icon: '🏢',
          title: 'Corporate Packages',
          description:
            'Customer and employee rewards, hospitality, and structured team challenges available.',
        },
        {
          icon: '🏫',
          title: 'Schools & Colleges',
          description:
            'We regularly host student societies, youth groups, and school activity days.',
        },
        {
          icon: '🤝',
          title: 'Fully Tailored',
          description:
            "We work with you to structure the day around your team's goals and group size.",
        },
      ]}
      ctaHeading="Let's Build Something Together"
      ctaSubheading="Call us to discuss a tailored team-building package for your group."
    />
  )
}
