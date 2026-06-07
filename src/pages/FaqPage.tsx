import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/Reveal'
import { faqPage, type FaqCategory } from '../data/faq'

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  delay,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  delay: number
}) {
  return (
    <Reveal delay={delay}>
      <div className="overflow-hidden rounded-xl border border-background-200/70 bg-background-50">
        <button
          type="button"
          onClick={onToggle}
          className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="pr-4 text-sm font-medium text-foreground-900 md:text-base">
            {question}
          </span>
          <div
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-background-100 text-foreground-500 transition-transform duration-300"
            style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
          >
            <i className="ri-add-line text-lg" />
          </div>
        </button>
        {isOpen && (
          <div className="border-t border-background-200/70 px-6 pb-5 pt-3">
            <p className="text-sm leading-relaxed text-foreground-600">{answer}</p>
          </div>
        )}
      </div>
    </Reveal>
  )
}

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('all')
  const [openId, setOpenId] = useState<number | null>(1)

  const filtered =
    activeCategory === 'all'
      ? faqPage.items
      : faqPage.items.filter((item) => item.category === activeCategory)

  return (
    <main>
      <PageHero
        badge={faqPage.hero.badge}
        title={faqPage.hero.title}
        subtitle={faqPage.hero.subtitle}
        backgroundImage={faqPage.hero.backgroundImage}
        minHeight="min-h-[300px] md:min-h-[380px]"
      />

      <section className="bg-background-50 px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            {faqPage.categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`cursor-pointer rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-primary-500 text-background-50'
                    : 'bg-background-100 text-foreground-600 hover:bg-background-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {filtered.map((item, i) => (
              <FaqItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openId === item.id}
                onToggle={() => setOpenId(openId === item.id ? null : item.id)}
                delay={i * 60}
              />
            ))}
          </div>

          <Reveal>
            <div className="mt-12 rounded-2xl bg-background-100 p-8 text-center">
              <p className="text-sm text-foreground-600">
                원하는 답변을 찾지 못하셨나요?
              </p>
              <Link
                to="/#contact"
                className="mt-4 inline-block rounded-lg bg-primary-500 px-6 py-2.5 text-sm font-semibold text-background-50 transition hover:bg-primary-600"
              >
                직접 문의하기
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
