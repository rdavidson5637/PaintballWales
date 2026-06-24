import SectionHeading from '@/components/SectionHeading'
import ScrollReveal from '@/components/ScrollReveal'

const directions = [
  'Take the A55 North Wales Coast Expressway towards Anglesey',
  'Exit onto the A4244 between Bangor and Caernarfon',
  'Follow signs for Llanberis and PaintballWales.com',
]

const MAPS_DIRECTIONS_URL =
  'https://maps.google.com/?q=Paintball+Wales+North+Wales'

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d612306.5844723862!2d-4.71517908153216!3d53.16722234617112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4865a825188025e9%3A0x5f3441cbf311ba7b!2sPaintball%20Wales%20-%20North%20Wales%2C%20Snowdonia!5e0!3m2!1sen!2suk!4v1567009010229!5m2!1sen!2suk'

export default function FindUs() {
  return (
    <section id="find-us" className="bg-black section-padding">
      <ScrollReveal className="max-container">
        <SectionHeading>How to Find Us</SectionHeading>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <ul className="space-y-4 font-body text-sm text-muted">
              {directions.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded bg-yellow px-6 py-3 font-display text-sm font-bold uppercase text-black transition hover:brightness-110"
            >
              Get Directions
            </a>
          </div>

          <div>
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                title="Paintball Wales location map"
                src={MAP_EMBED_URL}
                width="100%"
                height={350}
                className="h-[350px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-center font-body text-xs text-muted">
              A4244, between Bangor, Caernarfon &amp; Llanberis, North Wales
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
