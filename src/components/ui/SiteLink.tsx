import type { MouseEvent, ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { parseHashFromHref, scrollToHash, scrollToTop } from '../../lib/navigation'

type SiteLinkProps = {
  href: string
  className?: string
  onClick?: () => void
  children: ReactNode
}

export default function SiteLink({ href, className, onClick, children }: SiteLinkProps) {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.()

    const hash = parseHashFromHref(href)

    if (hash) {
      e.preventDefault()

      if (pathname === '/') {
        scrollToHash(hash)
        window.history.replaceState(null, '', hash)
        return
      }

      navigate({ pathname: '/', hash: hash.replace(/^#/, '') })
      return
    }

    if (href === pathname) {
      e.preventDefault()
      scrollToTop()
    }
  }

  if (parseHashFromHref(href)) {
    return (
      <a href={href} className={className} onClick={handleClick}>
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
