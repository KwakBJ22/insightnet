import { useEffect, useState } from 'react'
import { navLinks } from '../../data/site'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const brand = (
    <>
      insightnet<span className="text-primary-500">.</span>
    </>
  )

  const linkClass = scrolled
    ? 'text-foreground-600 hover:text-primary-500'
    : 'text-background-50/80 hover:text-background-50'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background-50/95 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#"
          className={`font-heading text-xl font-bold tracking-tight whitespace-nowrap transition-colors md:text-2xl ${
            scrolled ? 'text-foreground-900' : 'text-background-50'
          }`}
        >
          {brand}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${linkClass}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-semibold text-background-50 transition hover:bg-primary-600"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          className={`md:hidden ${scrolled ? 'text-foreground-900' : 'text-background-50'}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="메뉴 열기"
        >
          <i className={`ri-${menuOpen ? 'close' : 'menu'}-line text-2xl`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-background-200 bg-background-50 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground-700"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-lg bg-primary-500 px-5 py-2.5 text-center text-sm font-semibold text-background-50"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
