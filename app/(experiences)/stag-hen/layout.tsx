import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stag & Hen Paintball | Paintball Wales',
  description:
    'Organise the ultimate stag or hen do paintball day in Snowdonia. We plan the whole day for you. Call 01248 340000.',
}

export default function StagHenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
