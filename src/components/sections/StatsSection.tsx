import Reveal from '../Reveal'
import { statsSection } from '../../data/site'

export default function StatsSection() {
  return (
    <section className="relative flex min-h-[500px] items-center overflow-hidden md:min-h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${statsSection.backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-background-950/75" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <h2 className="font-heading text-center text-2xl font-bold text-background-50 md:text-3xl">
            {statsSection.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
          {statsSection.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-primary-400 md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-background-50/70">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
