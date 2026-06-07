import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SiteLink from '../ui/SiteLink'
import { mainNavLinks, resolveNavHref } from '../../lib/navigation'

export default function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const brand = (
    <>
      insightnet<span className="text-primary-500">.</span>
    </>
  )

  const linkClass = isHome && !scrolled
    ? 'text-background-50/80 hover:text-background-50'
    : 'text-foreground-600 hover:text-primary-500'

  const brandClass =
    isHome && !scrolled ? 'text-background-50' : 'text-foreground-900'

  const menuButtonClass =
    isHome && !scrolled ? 'text-background-50' : 'text-foreground-900'

  const contactLink = resolveNavHref(pathname, {
    label: 'Contact',
    path: '/#contact',
    homeHash: '#contact',
  })

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-background-50/95 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          to="/"
          className={`font-heading text-xl font-bold tracking-tight whitespace-nowrap transition-colors md:text-2xl ${brandClass}`}
        >
          {brand}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {mainNavLinks.map((link) => (
            <SiteLink
              key={link.path}
              href={resolveNavHref(pathname, link)}
              className={`text-sm font-medium transition-colors ${linkClass}`}
            >
              {link.label}
            </SiteLink>
          ))}
          <SiteLink
            href={contactLink}
            className="rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-semibold text-background-50 transition hover:bg-primary-600"
          >
            Contact
          </SiteLink>
        </div>

        <button
          type="button"
          className={`md:hidden ${menuButtonClass}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="메뉴 열기"
        >
          <i className={`ri-${menuOpen ? 'close' : 'menu'}-line text-2xl`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-background-200 bg-background-50 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {mainNavLinks.map((link) => (
              <SiteLink
                key={link.path}
                href={resolveNavHref(pathname, link)}
                className="text-sm font-medium text-foreground-700"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </SiteLink>
            ))}
            <SiteLink
              href={contactLink}
              className="rounded-lg bg-primary-500 px-5 py-2.5 text-center text-sm font-semibold text-background-50"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </SiteLink>
          </div>
        </div>
      )}
    </header>
  )
}
