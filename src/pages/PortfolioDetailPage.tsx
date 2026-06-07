import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { getPortfolioDetail, portfolioDetails } from '../data/portfolioDetails'

export default function PortfolioDetailPage() {
  const { id } = useParams()
  const project = id ? getPortfolioDetail(Number(id)) : undefined

  if (!project) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-background-50 px-6">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold text-foreground-900">
            프로젝트를 찾을 수 없습니다
          </h1>
          <Link
            to="/#portfolio"
            className="mt-4 inline-block cursor-pointer rounded-full bg-primary-500 px-6 py-2 text-sm font-medium whitespace-nowrap text-background-50 transition-colors hover:bg-primary-600"
          >
            포트폴리오로 돌아가기
          </Link>
        </div>
      </main>
    )
  }

  const related = project.relatedProjects
    .map((rid) => portfolioDetails[rid])
    .filter(Boolean)

  return (
    <main>
      <section className="relative overflow-hidden bg-background-950 pt-24 md:pt-28">
        <div className="absolute inset-0">
          <img
            src={project.heroImage}
            alt={project.title}
            className="h-full w-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-950 via-background-950/80 to-background-950/40" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
          <Link
            to="/#portfolio"
            className="mb-6 inline-flex items-center gap-1 text-sm text-background-50/60 transition hover:text-background-50"
          >
            <i className="ri-arrow-left-line" />
            포트폴리오
          </Link>
          <span className="mb-4 inline-block rounded-full bg-primary-500/20 px-3 py-1 text-xs font-medium text-primary-300">
            {project.categoryLabel}
          </span>
          <h1 className="font-heading text-2xl font-bold leading-tight text-background-50 md:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-background-50/70">
            <span>
              <i className="ri-building-line mr-1" />
              {project.clientName}
            </span>
            <span>
              <i className="ri-briefcase-line mr-1" />
              {project.industry}
            </span>
            <span>
              <i className="ri-calendar-line mr-1" />
              {project.duration}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-background-50 px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-heading text-xl font-bold text-foreground-900 md:text-2xl">
              Overview
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground-600 md:text-base">
              {project.overview}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background-100 px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-background-200/70 bg-background-50 p-6 md:p-8">
              <h3 className="font-heading text-lg font-semibold text-foreground-900">
                Challenge
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-600">
                {project.challenge}
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-background-200/70 bg-background-50 p-6 md:p-8">
              <h3 className="font-heading text-lg font-semibold text-foreground-900">
                Solution
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-600">
                {project.solution}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background-50 px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center font-heading text-xl font-bold text-foreground-900 md:text-2xl">
              Tech Stack
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {project.techStack.map((group, i) => (
              <Reveal key={group.name} delay={i * 80}>
                <div className="rounded-2xl border border-background-200/70 p-5">
                  <h4 className="text-sm font-semibold text-foreground-900">{group.name}</h4>
                  <ul className="mt-3 space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-xs text-foreground-500">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-950 px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center font-heading text-xl font-bold text-background-50 md:text-2xl">
              Results
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {project.results.map((result, i) => (
              <Reveal key={result.label} delay={i * 80}>
                <div className="text-center">
                  <p className="font-heading text-2xl font-bold text-primary-400 md:text-3xl">
                    {result.value}
                  </p>
                  <p className="mt-1 text-xs text-background-50/60 md:text-sm">{result.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-100 px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <blockquote className="rounded-2xl border border-background-200/70 bg-background-50 p-8 md:p-10">
              <i className="ri-double-quotes-l text-3xl text-primary-400" />
              <p className="mt-4 text-sm leading-relaxed text-foreground-700 md:text-base">
                {project.testimonial.quote}
              </p>
              <footer className="mt-6">
                <p className="text-sm font-semibold text-foreground-900">
                  {project.testimonial.author}
                </p>
                <p className="text-xs text-foreground-500">{project.testimonial.role}</p>
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-background-50 px-6 py-12 md:px-10 md:py-16">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="font-heading text-xl font-bold text-foreground-900 md:text-2xl">
                Related Projects
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {related.map((rel, i) => (
                <Reveal key={rel.id} delay={i * 80}>
                  <Link
                    to={`/portfolio/${rel.id}`}
                    className="group flex gap-4 overflow-hidden rounded-2xl border border-background-200/70 bg-white p-4 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <img
                      src={rel.heroImage}
                      alt={rel.title}
                      className="h-24 w-32 flex-shrink-0 rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-xs text-primary-600">{rel.categoryLabel}</p>
                      <h3 className="mt-1 line-clamp-2 font-heading text-sm font-semibold text-foreground-900 group-hover:text-primary-600">
                        {rel.title}
                      </h3>
                      <p className="mt-1 text-xs text-foreground-500">{rel.clientName}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
