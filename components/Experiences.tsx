import Link from 'next/link'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import SectionHeading from '@/components/SectionHeading'
import ScrollReveal from '@/components/ScrollReveal'
const experiences = [
  {
    href: '/stag-hen',
    title: "STAG & HEN DOS",
    description:
      "We organise the whole day for you. Fox 'n' Hounds, the Legendary Chicken Run, and a surprise finale they'll never forget.",
  },
  {
    href: '/birthday-parties',
    title: 'BIRTHDAY PARTIES',
    description:
      'An unforgettable birthday with a difference — bring your own cake and make a day of it.',
  },
  {
    href: '/kids-low-impact',
    title: 'KIDS & LOW IMPACT',
    description:
      'All the thrills with a gentler paintball. Perfect for younger players and first-timers who want in on the action.',
  },
  {
    href: '/team-building',
    title: 'TEAM BUILDING',
    description:
      'Schools, colleges, clubs, corporates and charities welcome. Staff hold professional qualifications up to MBA level and are DBS checked.',
  },
  {
    href: '/your-day',
    title: 'YOUR DAY',
    description:
      "Tippmann FT-12 markers, air-powered (not CO₂), SWAT-style padded jumpsuits, and multiple game zones. Here's what to expect.",
  },
  {
    href: '/roadshow',
    title: 'PAINTBALL ROADSHOW',
    description:
      'We bring a full tournament arena to your event or festival. Spectator-friendly, self-contained, spectacular.',
  },
]

export default function Experiences() {
  return (
    <section id="experiences" className="bg-black section-padding">
      <ScrollReveal className="max-container">
        <SectionHeading>Choose Your Experience</SectionHeading>

        <p className="mb-12 mt-4 text-center font-body text-lg text-muted">
          Whatever the occasion, we&apos;ve got a game for you.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {experiences.map((experience) => (
            <Link
              key={experience.href}
              href={experience.href}
              className="group overflow-hidden rounded-xl border border-border bg-surface transition hover:border-yellow"
            >
              <div className="relative h-[200px]">
                <div className="absolute inset-y-0 left-0 z-10 w-1 bg-yellow" />
                <ImagePlaceholder className="absolute inset-0" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold uppercase text-white transition group-hover:text-yellow">
                  {experience.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                  {experience.description}
                </p>
                <p className="mt-4 font-display text-sm uppercase tracking-wide text-yellow">
                  Find out more →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
