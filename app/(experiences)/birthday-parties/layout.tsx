import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Birthday Party Paintball | Paintball Wales',
  description:
    'The most cost-effective birthday party in North Wales. Packages from £12.50 per player. Call 01248 340000.',
}

export default function BirthdayPartiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
