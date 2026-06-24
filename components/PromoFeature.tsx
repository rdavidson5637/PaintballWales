import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import { IMAGES } from '@/lib/images'

export default function PromoFeature() {
  return (
    <section className="section-padding bg-black">
      <ScrollReveal initialVisible className="max-container">
        <Image
          src={IMAGES.heroPromotional}
          alt="Warrior Woods paintball in Snowdonia — best location, equipment, prices and games"
          width={976}
          height={367}
          className="h-auto w-full rounded-xl"
          sizes="(max-width: 768px) 100vw, 1200px"
          priority
        />
      </ScrollReveal>
    </section>
  )
}
