'use client'

import ExperiencePageLayout from '@/components/ExperiencePageLayout'

export default function RoadshowPage() {
  return (
    <ExperiencePageLayout
      heroImageAlt="Paintball Roadshow mobile arena at an outdoor event"
      contentImageAlt="Spectators watching the Paintball Roadshow tournament arena"
      heroEyebrow="The Paintball Roadshow"
      heroH1="We Bring the Arena to You"
      heroSub="A spectacular mobile paintball experience for events, shows and festivals."
      h2="Giving Events a Spectacular Edge"
      paragraphs={[
        'The Paintball Roadshow is a fully self-contained, spectator-friendly netted mobile arena system. We take paintball out of the woods and bring it directly to your event, fair, show or festival.',
        "Whether you're running a community event, a university freshers fair, a corporate hospitality day or a full-scale festival, the Paintball Roadshow delivers a genuine tournament-standard arena experience that spectators love to watch as much as players love to play.",
        'For full details on the Roadshow, visit our dedicated site at paintball-roadshow.com.',
      ]}
      beforeCallout={
        <a
          href="http://paintball-roadshow.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded bg-yellow px-6 py-3 font-display text-sm font-bold uppercase text-black transition hover:brightness-110"
        >
          Visit Paintball-Roadshow.com →
        </a>
      }
      callout="Interested in booking the Roadshow for your event? Give us a call and we'll talk through what's involved. We're always happy to help."
      includedGridCols={3}
      includedCards={[
        {
          icon: '🏟️',
          title: 'Full Tournament Arena',
          description:
            "Officially spec'd tournament arena, fully netted and spectator safe.",
        },
        {
          icon: '🚐',
          title: 'Completely Mobile',
          description:
            'Self-contained. We bring everything and set up on site.',
        },
        {
          icon: '👥',
          title: 'Spectator Friendly',
          description:
            'As fun to watch as it is to play. A genuine crowd-puller for any event.',
        },
      ]}
      ctaHeading="Interested in the Roadshow?"
      ctaSubheading="Call us to discuss booking the arena for your event."
    />
  )
}
