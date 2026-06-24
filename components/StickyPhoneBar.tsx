import Link from 'next/link'

function PhoneIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  )
}

export default function StickyPhoneBar() {
  return (
    <div className="fixed bottom-0 z-50 flex w-full md:hidden">
      <a
        href="tel:01248340000"
        className="flex w-1/2 items-center justify-center gap-2 bg-yellow py-4 font-display text-sm font-bold uppercase text-black"
      >
        <PhoneIcon />
        Call Us
      </a>
      <Link
        href="/#contact"
        className="flex w-1/2 items-center justify-center gap-2 bg-yellow py-4 font-display text-sm font-bold uppercase text-black"
      >
        <ChatIcon />
        Enquire
      </Link>
    </div>
  )
}
