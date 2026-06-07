import { useState } from 'react'
import Reveal from '../Reveal'
import { portfolioSection, type PortfolioCategory } from '../../data/site'

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<PortfolioCategory>('all')

  const filtered =
    activeTab === 'all'
      ? portfolioSection.projects
      : portfolioSection.projects.filter((p) => p.category === activeTab)

  return (
    <section id="portfolio" className="bg-background-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold text-foreground-900 md:text-4xl">
            {portfolioSection.title}
          </h2>
          <p className="mt-4 text-foreground-500">{portfolioSection.subtitle}</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap gap-2">
            {portfolioSection.tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  activeTab === tab.id
                    ? 'bg-primary-500 text-background-50'
                    : 'bg-background-200 text-foreground-600 hover:bg-background-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <article className="group overflow-hidden rounded-2xl border border-background-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground-900 group-hover:text-primary-600">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-foreground-500">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-accent-100 px-2 py-0.5 text-[11px] font-medium text-accent-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
