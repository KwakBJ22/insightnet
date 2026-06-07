import { hero } from '../../data/site'
import SiteLink from '../ui/SiteLink'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background-950/80 via-background-950/60 to-background-950/90" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-28 text-center md:px-10 md:pt-36">
        <p className="mb-6 text-xs font-medium uppercase tracking-widest text-primary-400">
          Since 2004 · Digital Innovation Partner
        </p>
        <h1 className="font-heading text-3xl leading-tight font-bold text-background-50 sm:text-4xl md:text-5xl lg:text-6xl">
          {hero.mainTitle}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-background-50/80 md:text-lg">
          {hero.subTitle}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <SiteLink
            href="#portfolio"
            className="w-full rounded-lg bg-primary-500 px-8 py-3.5 text-sm font-semibold text-background-50 transition hover:bg-primary-600 sm:w-auto"
          >
            {hero.ctaPrimary}
          </SiteLink>
          <SiteLink
            href="#contact"
            className="w-full rounded-lg border border-background-50/30 px-8 py-3.5 text-sm font-semibold text-background-50 transition hover:bg-background-50/10 sm:w-auto"
          >
            {hero.ctaSecondary}
          </SiteLink>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-background-50/60">
        <i className="ri-arrow-down-s-line text-2xl" />
      </div>
    </section>
  )
}
