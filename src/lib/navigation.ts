export type NavLink = {
  label: string
  path: string
  homeHash: string
}

export const mainNavLinks: NavLink[] = [
  { label: 'About', path: '/about', homeHash: '#history' },
  { label: 'Services', path: '/#services', homeHash: '#services' },
  { label: 'Portfolio', path: '/#portfolio', homeHash: '#portfolio' },
  { label: 'Contact', path: '/#contact', homeHash: '#contact' },
]

export function resolveNavHref(pathname: string, link: NavLink): string {
  if (pathname === '/') return link.homeHash
  if (link.path.startsWith('/#')) return link.path
  return link.path
}

export function isExternalHash(href: string): boolean {
  return href.startsWith('#')
}
