import Reveal from '../Reveal'
import { historySection } from '../../data/site'

export default function HistorySection() {
  return (
    <section id="history" className="bg-background-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-500">
            {historySection.label}
          </p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-foreground-900 md:text-4xl">
            {historySection.title}
          </h2>
          <p className="mt-4 max-w-2xl text-foreground-500">{historySection.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {historySection.cards.map((card, i) => (
            <Reveal key={card.label} delay={i * 100}>
              <div className="rounded-2xl border border-background-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">
                <p className="font-heading text-5xl font-bold text-primary-500 md:text-6xl">
                  {card.value}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-foreground-600">
                  {card.label}
                </p>
                <p className="mt-4 text-foreground-600">{card.description}</p>
                <p className="mt-2 text-xs text-foreground-400">{card.subtext}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="relative mt-20 md:mt-24">
          <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-background-200 md:block" />
          <div className="grid gap-10 md:grid-cols-3">
            {historySection.timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 120}>
                <div className="relative text-center md:pl-8 md:text-left">
                  <div className="mx-auto mb-3 h-3 w-3 rounded-full bg-primary-500 md:absolute md:top-2 md:-left-0 md:mb-0 md:-translate-x-1/2" />
                  <span className="font-heading text-2xl font-bold text-primary-500 md:text-3xl">
                    {item.year}
                  </span>
                  <h4 className="mt-2 text-base font-semibold text-foreground-900 md:text-lg">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-500">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
