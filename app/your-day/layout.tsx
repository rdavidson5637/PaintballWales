import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Day | Paintball Wales',
  description:
    'Find out what to expect on your paintball day at Paintball Wales — kit, game zones and more.',
}

export default function YourDayLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
