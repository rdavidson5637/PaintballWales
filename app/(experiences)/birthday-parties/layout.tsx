import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Birthday Party Paintball | Paintball Wales',
  description:
    'Unforgettable birthday parties in North Wales. Call 01248 340000.',
}

export default function BirthdayPartiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
