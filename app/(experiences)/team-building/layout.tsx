import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team Building Paintball | Paintball Wales',
  description:
    'Corporate and group team building paintball in North Wales. MBA-qualified staff. Call 01248 340000.',
}

export default function TeamBuildingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
