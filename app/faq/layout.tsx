import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQs | Paintball Wales',
  description:
    "Common questions about paintball at Paintball Wales, North Wales. Can't find your answer? Call 01248 340000.",
}

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
