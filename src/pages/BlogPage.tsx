import { useState } from 'react'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/Reveal'
import { blogPage, getCategoryLabel, type BlogCategory } from '../data/blog'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('all')

  const filtered =
    activeCategory === 'all'
      ? blogPage.posts
      : blogPage.posts.filter((post) => post.category === activeCategory)

  return (
    <main>
      <PageHero
        badge={blogPage.hero.badge}
        title={blogPage.hero.title}
        subtitle={blogPage.hero.subtitle}
        backgroundImage={blogPage.hero.backgroundImage}
      />

      <section className="bg-background-50 px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            {blogPage.categories.map((cat) => (
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

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {filtered.map((post, i) => (
              <Reveal key={post.id} delay={i * 80}>
                <article className="group cursor-pointer overflow-hidden rounded-2xl border border-background-200/70 bg-background-50 transition-all duration-500 hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden md:h-52">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-background-50/90 px-3 py-1 text-xs font-medium text-foreground-900">
                      {getCategoryLabel(post.category)}
                    </span>
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="mb-3 line-clamp-2 font-heading text-base font-semibold leading-snug text-foreground-900 transition-colors group-hover:text-primary-600 md:text-lg">
                      {post.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-foreground-500">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-foreground-400">
                      <span>
                        {post.author} · {post.role}
                      </span>
                      <span>
                        {post.date} · {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
