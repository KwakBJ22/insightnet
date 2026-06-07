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
          {servicesSection.items.map((item, index) => {
            const reversed = index % 2 === 1
            return (
              <Reveal key={item.id} delay={100}>
                <div
                  className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
                    reversed ? 'md:[direction:rtl]' : ''
                  }`}
                >
                  <div className={reversed ? 'md:[direction:ltr]' : ''}>
                    <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                      <img
                        src={item.image}
                        alt={item.subtitle}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={reversed ? 'md:[direction:ltr]' : ''}>
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
