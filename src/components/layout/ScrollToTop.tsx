import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToHash } from '../../lib/navigation'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const timer = window.setTimeout(() => scrollToHash(hash), 50)
      return () => window.clearTimeout(timer)
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
