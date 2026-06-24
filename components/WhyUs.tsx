import SectionHeading from '@/components/SectionHeading'
import ScrollReveal from '@/components/ScrollReveal'

const stats = [
  {
    value: '20+ Years',
    label: 'Experience running paintball in North Wales',
  },
  {
    value: 'From £5',
    label: 'Permanently cheaper prices — no vouchers, no gimmicks',
  },
  {
    value: 'Air Powered',
    label:
      'Tippmann FT-12 markers with air cylinders, not CO₂ — the pro standard',
  },
  {
    value: 'As Seen On',
    label:
      "BBC, Radio 1 & S4C — North Wales' most established paintball park",
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-surface section-padding">
      <ScrollReveal className="max-container">
        <SectionHeading>Why Paintball Wales?</SectionHeading>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-xl border border-border bg-black p-6"
            >
              <p className="font-display text-4xl uppercase text-yellow md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 font-body text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
