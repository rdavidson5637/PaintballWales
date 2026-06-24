import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kids & Low Impact Paintball | Paintball Wales',
  description:
    'Safe, fun paintball for all ages in Snowdonia. DBS-checked staff, low impact options available. Call 01248 340000.',
}

export default function KidsLowImpactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
