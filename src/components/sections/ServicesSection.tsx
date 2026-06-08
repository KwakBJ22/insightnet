import Reveal from '../Reveal'
import { servicesSection } from '../../data/site'

export default function ServicesSection() {
  return (
    <section id="services" className="bg-background-100 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold text-foreground-900 md:text-4xl">
            {servicesSection.title}
          </h2>
          <p className="mt-4 max-w-2xl text-foreground-500">{servicesSection.subtitle}</p>
        </Reveal>

        <div className="mt-14 space-y-16 md:space-y-24">
          {servicesSection.items.map((item) => (
              <Reveal key={item.id} delay={100}>
                <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 md:flex-row md:items-center md:justify-center md:gap-6 lg:max-w-5xl lg:gap-8">
                  <div className="shrink-0 md:pr-4 lg:pr-8">
                    <div className="w-full max-w-[240px] rounded-2xl border border-background-200/80 bg-white p-3 shadow-sm sm:max-w-[260px] md:max-w-[220px] lg:max-w-[240px]">
                      <div className="flex aspect-[5/4] items-center justify-center overflow-hidden rounded-xl bg-background-50">
                        <img
                          src={item.image}
                          alt={item.subtitle}
                          className="max-h-full max-w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:-ml-2 md:max-w-md md:pl-0 lg:-ml-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
                      {item.title}
                    </p>
                    <h3 className="font-heading mt-2 text-2xl font-bold text-foreground-900 md:text-3xl">
                      {item.subtitle}
                    </h3>
                    <p className="mt-4 leading-relaxed text-foreground-600">{item.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="rounded-full bg-background-200 px-3 py-1 text-xs font-medium text-foreground-600"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
