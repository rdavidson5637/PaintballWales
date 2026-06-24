'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IMAGES } from '@/lib/images'

const experienceLinks = [
  { href: '/stag-hen', label: 'Stag & Hen' },
  { href: '/birthday-parties', label: 'Birthday Parties' },
  { href: '/kids-low-impact', label: 'Kids & Low Impact' },
  { href: '/team-building', label: 'Team Building' },
  { href: '/roadshow', label: 'Roadshow' },
]

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/your-day', label: 'Your Day' },
  ...experienceLinks,
  { href: '/faq', label: 'FAQ' },
]

function linkClass(isActive: boolean) {
  return `font-body text-sm transition-colors ${
    isActive ? 'text-yellow' : 'text-muted hover:text-white'
  }`
}

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href
  }

  return (
    <header className="fixed top-0 z-50 w-full max-w-[100vw] overflow-x-clip border-b border-border bg-black/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link href="/" onClick={closeMenu} className="shrink-0">
          <Image
            src={IMAGES.logo}
            alt="Paintball Wales logo"
            height={48}
            width={160}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <nav className="hidden min-w-0 items-center gap-x-2 md:flex lg:gap-x-3 xl:gap-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap text-xs lg:text-sm ${linkClass(isActive(link.href))}`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/#contact"
            className="ml-1 shrink-0 whitespace-nowrap rounded bg-yellow px-3 py-2 font-display text-xs font-bold uppercase text-black transition hover:brightness-110 lg:px-6 lg:text-sm"
          >
            Enquire Now
          </Link>
        </nav>

        <button
          type="button"
          className="text-white md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 12h16"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 18h16"
                />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="absolute left-0 top-full max-h-[calc(100vh-4rem)] w-full overflow-y-auto border-b border-border bg-surface md:hidden">
          <ul className="flex flex-col px-4 py-6">
            <li className="mb-6 text-center">
              <a
                href="tel:01248340000"
                className="font-display text-3xl font-bold text-yellow"
                onClick={closeMenu}
              >
                01248 340000
              </a>
            </li>

            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block border-b border-border py-4 font-body text-sm transition-colors ${
                    isActive(link.href)
                      ? 'text-yellow'
                      : 'text-muted hover:text-white'
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/#contact"
                className="mt-4 block rounded bg-yellow py-3 text-center font-display text-sm font-bold uppercase text-black"
                onClick={closeMenu}
              >
                Enquire Now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
