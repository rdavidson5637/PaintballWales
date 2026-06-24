type SectionHeadingProps = {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <h2 className="break-words px-2 font-display text-3xl font-extrabold uppercase text-white sm:text-4xl md:text-5xl">
        {children}
      </h2>
      <div className="yellow-underline mx-auto" />
    </div>
  )
}
