type SectionHeadingProps = {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <h2 className="font-display text-4xl font-extrabold uppercase text-white md:text-5xl">
        {children}
      </h2>
      <div className="yellow-underline mx-auto" />
    </div>
  )
}
