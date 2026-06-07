export type NavLink = {
  label: string
  path: string
  homeHash: string
}

export const mainNavLinks: NavLink[] = [
  { label: 'About', path: '/about', homeHash: '/about' },
  { label: 'Services', path: '/#services', homeHash: '#services' },
  { label: 'Portfolio', path: '/#portfolio', homeHash: '#portfolio' },
  { label: 'Contact', path: '/#contact', homeHash: '#contact' },
]

export function resolveNavHref(pathname: string, link: NavLink): string {
  if (pathname === '/') return link.homeHash
  return link.path
}

export function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, '')
  if (!id) {
    scrollToTop()
    return
  }

  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

export function scrollToTop(behavior: ScrollBehavior = 'smooth') {
  window.scrollTo({ top: 0, behavior })
}

export function isHashHref(href: string): boolean {
  return href.startsWith('#') || href.startsWith('/#')
}

export function parseHashFromHref(href: string): string | null {
  if (href.startsWith('/#')) return href.slice(1)
  if (href.startsWith('#')) return href
  return null
}
