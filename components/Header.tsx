'use client'

import { useEffect, useState } from 'react'
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

const primaryNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/your-day', label: 'Your Day' },
  { href: '/faq', label: 'FAQ' },
]

const desktopNavLinks = [
  ...primaryNavLinks.slice(0, 2),
  ...experienceLinks,
  primaryNavLinks[2],
]

function linkClass(isActive: boolean) {
  return `font-body text-sm transition-colors ${
    isActive ? 'text-yellow' : 'text-muted hover:text-white'
  }`
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  )
}

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [experiencesOpen, setExperiencesOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
    setExperiencesOpen(false)
  }

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href
  }

  const isExperiencesActive = experienceLinks.some((link) =>
    isActive(link.href)
  )

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
    setExperiencesOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-black/95 backdrop-blur-sm">
      <div className="relative z-50 mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
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

        <nav
          className="hidden min-w-0 items-center gap-x-2 lg:flex lg:gap-x-3 xl:gap-x-4"
          aria-label="Main navigation"
        >
          {desktopNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap text-sm ${linkClass(isActive(link.href))}`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/#contact"
            className="ml-1 shrink-0 whitespace-nowrap rounded bg-yellow px-4 py-2 font-display text-sm font-bold uppercase text-black transition hover:brightness-110 lg:px-6"
          >
            Enquire Now
          </Link>
        </nav>

        <button
          type="button"
          className="relative z-50 rounded p-2 text-white lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
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
        <>
          <button
            type="button"
            className="fixed inset-0 top-16 z-40 bg-black/70 lg:hidden"
            aria-label="Close menu"
            onClick={closeMenu}
          />

          <nav
            id="mobile-nav"
            className="fixed left-0 right-0 top-16 z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-border bg-surface shadow-2xl lg:hidden"
            aria-label="Mobile navigation"
          >
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

              {primaryNavLinks.slice(0, 2).map((link) => (
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

              <li className="border-b border-border">
                <button
                  type="button"
                  className={`flex w-full items-center justify-between py-4 font-body text-sm transition-colors ${
                    isExperiencesActive
                      ? 'text-yellow'
                      : 'text-muted hover:text-white'
                  }`}
                  aria-expanded={experiencesOpen}
                  aria-controls="mobile-experiences"
                  onClick={() => setExperiencesOpen((open) => !open)}
                >
                  <span>Experiences</span>
                  <ChevronIcon open={experiencesOpen} />
                </button>

                {experiencesOpen && (
                  <ul id="mobile-experiences" className="space-y-1 pb-4 pl-4">
                    {experienceLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`block rounded-lg py-3 pl-3 font-body text-sm transition-colors ${
                            isActive(link.href)
                              ? 'bg-black text-yellow'
                              : 'text-muted hover:bg-black hover:text-white'
                          }`}
                          onClick={closeMenu}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <Link
                  href="/faq"
                  className={`block border-b border-border py-4 font-body text-sm transition-colors ${
                    isActive('/faq')
                      ? 'text-yellow'
                      : 'text-muted hover:text-white'
                  }`}
                  onClick={closeMenu}
                >
                  FAQ
                </Link>
              </li>

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
        </>
      )}
    </header>
  )
}
