import About from '@/components/About'
import CTABlock from '@/components/CTABlock'
import Contact from '@/components/Contact'
import Experiences from '@/components/Experiences'
import FaqTeaser from '@/components/FaqTeaser'
import FindUs from '@/components/FindUs'
import Hero from '@/components/Hero'
import PromoFeature from '@/components/PromoFeature'
import ScrollReveal from '@/components/ScrollReveal'
import WhyUs from '@/components/WhyUs'
import YourDay from '@/components/YourDay'

export default function Home() {
  return (
    <main className="w-full max-w-full overflow-x-clip pb-20 pt-16 md:pb-0">
      <Hero />
      <PromoFeature />

      <section className="hidden bg-yellow py-4 md:block">
        <ScrollReveal className="max-container flex items-center justify-between px-4 md:px-8">
          <p className="font-display text-lg font-bold uppercase text-black">
            Questions? Give us a call — we&apos;re always happy to help!
          </p>
          <p className="font-display text-2xl font-black text-black">
            <a href="tel:01248340000" className="hover:underline">
              01248 340000
            </a>
            <span className="mx-2">/</span>
            <a href="tel:07557340000" className="hover:underline">
              07557 340000
            </a>
          </p>
        </ScrollReveal>
      </section>

      <About />
      <WhyUs />
      <Experiences />
      <YourDay />
      <FaqTeaser />
      <FindUs />
      <Contact />
      <CTABlock />
    </main>
  )
}
