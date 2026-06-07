import Reveal from '../components/Reveal'
import { privacyPolicy } from '../data/legal'

export default function PrivacyPage() {
  return (
    <main>
      <section className="bg-background-50 px-6 pb-12 pt-28 md:px-10 md:pb-16 md:pt-36">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h1 className="mb-2 font-heading text-2xl font-bold text-foreground-900 md:text-4xl">
              {privacyPolicy.title}
            </h1>
            <p className="mb-10 text-sm text-foreground-400">
              시행일: {privacyPolicy.lastUpdated}
            </p>
          </Reveal>

          <div className="flex flex-col gap-8">
            {privacyPolicy.sections.map((section, i) => (
              <Reveal key={section.title} delay={i * 40}>
                <div>
                  <h3 className="mb-3 font-heading text-base font-semibold text-foreground-900 md:text-lg">
                    {section.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground-600">{section.content}</p>
                  {section.items && section.items.length > 0 && (
                    <ul className="mt-3 flex flex-col gap-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="relative pl-5 text-sm leading-relaxed text-foreground-600 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-foreground-300"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
