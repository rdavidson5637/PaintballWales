import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Paintball Roadshow | Paintball Wales',
  description:
    'Mobile paintball arena for events and festivals across North Wales. Call 01248 340000.',
}

export default function RoadshowLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
