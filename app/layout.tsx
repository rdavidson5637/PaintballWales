import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import { Header, Footer, StickyPhoneBar } from '@/components'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-barlow-condensed',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Paintball Wales | North Wales Premier Paintball',
  description:
    'North Wales most established paintball park in the heart of Snowdonia. From £5. Stag & hen, birthdays, kids, team building. Call 01248 340000.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
        <StickyPhoneBar />
      </body>
    </html>
  )
}
