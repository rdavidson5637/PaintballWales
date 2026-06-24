import Image from 'next/image'
import { IMAGES } from '@/lib/images'

type ImagePlaceholderProps = {
  className?: string
  showLogo?: boolean
}

/** Solid green block for image slots awaiting client photos */
export default function ImagePlaceholder({
  className = '',
  showLogo = false,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center bg-[#1a4d2e] ${className}`}
      aria-hidden={!showLogo}
    >
      {showLogo && (
        <Image
          src={IMAGES.logo}
          alt="Paintball Wales logo"
          width={220}
          height={80}
          className="h-auto w-3/4 max-w-[220px] object-contain p-6"
        />
      )}
    </div>
  )
}
