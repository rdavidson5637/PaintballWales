import Image from 'next/image'
import Link from 'next/link'

const experienceLinks = [
  { href: '/your-day', label: 'Your Day' },
  { href: '/stag-hen', label: 'Stag & Hen' },
  { href: '/birthday-parties', label: 'Birthday Parties' },
  { href: '/kids-low-impact', label: 'Kids & Low Impact' },
  { href: '/team-building', label: 'Team Building' },
  { href: '/roadshow', label: 'Paintball Roadshow' },
]

const infoLinks = [
  { href: '/faq', label: 'FAQ' },
  { href: '/#find-us', label: 'Find Us' },
  { href: '/#contact', label: 'Contact' },
]

function FacebookIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Image
              src="/logo.png"
              alt="Paintball Wales logo"
              height={40}
              width={140}
              className="h-10 w-auto"
            />
            <p className="mt-3 text-sm text-muted">
              North Wales&apos; Premier Paintball Adventure
            </p>
            <p className="mt-2 text-xs text-muted">
              As seen on BBC, Radio 1 &amp; S4C
            </p>
          </div>

          <div>
            <h2 className="font-display text-sm uppercase text-yellow">
              Experiences
            </h2>
            <ul className="mt-4">
              {experienceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-1 text-sm text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm uppercase text-yellow">
              Information
            </h2>
            <ul className="mt-4">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-1 text-sm text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm uppercase text-yellow">
              Get in Touch
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="tel:01248340000"
                  className="text-lg font-bold text-white transition-colors hover:text-yellow"
                >
                  01248 340000
                </a>
              </li>
              <li>
                <a
                  href="tel:07557340000"
                  className="text-sm text-white transition-colors hover:text-yellow"
                >
                  07557 340000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@paintballwales.com"
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  info@paintballwales.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/PaintballWales/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
                >
                  <FacebookIcon />
                  Follow us on Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-black py-4 text-center text-xs text-muted">
        © 2025 Paintball Wales. All rights reserved. | A4244, Llanberis, North
        Wales
      </div>
    </footer>
  )
}
