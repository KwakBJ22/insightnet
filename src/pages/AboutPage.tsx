import SiteLink from '../components/ui/SiteLink'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/Reveal'
import { aboutPage } from '../data/about'

export default function AboutPage() {
  return (
    <main>
      <PageHero
        badge={aboutPage.hero.badge}
        title={aboutPage.hero.title}
        subtitle={aboutPage.hero.subtitle}
        backgroundImage={aboutPage.hero.backgroundImage}
        minHeight="min-h-[500px] md:min-h-[600px]"
      />

      <section className="bg-background-50 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <Reveal>
            <div className="rounded-2xl border border-background-200/70 bg-background-100 p-8 md:p-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-accent-100 text-accent-600">
                <i className={`${aboutPage.vision.icon} text-2xl`} />
              </div>
              <h2 className="font-heading text-xl font-bold text-foreground-900 md:text-2xl">
                {aboutPage.vision.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground-600 md:text-base">
                {aboutPage.vision.description}
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-background-200/70 bg-background-100 p-8 md:p-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                <i className={`${aboutPage.mission.icon} text-2xl`} />
              </div>
              <h2 className="font-heading text-xl font-bold text-foreground-900 md:text-2xl">
                {aboutPage.mission.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground-600 md:text-base">
                {aboutPage.mission.description}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background-100 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-bold text-foreground-900 md:text-3xl">
              Our Journey
            </h2>
          </Reveal>
          <div className="relative mt-12">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-background-300 md:left-1/2 md:-translate-x-px" />
            {aboutPage.timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 80}>
                <div
                  className={`relative mb-10 flex flex-col md:mb-12 md:flex-row ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div
                    className={`md:w-1/2 ${
                      i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    } pl-10 md:pl-0`}
                  >
                    <span className="font-heading text-lg font-bold text-primary-600">
                      {item.year}
                    </span>
                    <h3 className="mt-1 font-heading text-base font-semibold text-foreground-900 md:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-500">
                      {item.description}
                    </p>
                  </div>
                  <div className="absolute left-4 top-1 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary-500 bg-background-50 md:left-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-50 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-bold text-foreground-900 md:text-3xl">
              Our Values
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {aboutPage.values.map((value, i) => (
              <Reveal key={value.title} delay={i * 80}>
                <div className="rounded-2xl border border-background-200/70 p-6 md:p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-100 text-secondary-600">
                    <i className={`${value.icon} text-xl`} />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground-900 md:text-lg">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-500">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-950 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold text-background-50 md:text-3xl">
              {aboutPage.stats.title}
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            {aboutPage.stats.items.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div>
                  <p className="font-heading text-3xl font-bold text-primary-400 md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-background-50/60">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-50 px-6 py-16 text-center md:px-10">
        <Reveal>
          <p className="text-foreground-500">프로젝트에 대해 이야기해 보세요.</p>
          <SiteLink
            href="/#contact"
            className="mt-4 inline-block rounded-lg bg-primary-500 px-8 py-3 text-sm font-semibold text-background-50 transition hover:bg-primary-600"
          >
            프로젝트 문의하기
          </SiteLink>
        </Reveal>
      </section>
    </main>
  )
}
