import { Link } from 'react-router-dom'
import { footer } from '../../data/site'

function FooterLink({ href, label }: { href: string; label: string }) {
  if (href.startsWith('#')) {
    return (
      <Link to={`/${href}`} className="text-sm text-background-50/60 transition hover:text-primary-400">
        {label}
      </Link>
    )
  }

  if (href.startsWith('/#')) {
    return (
      <Link to={href} className="text-sm text-background-50/60 transition hover:text-primary-400">
        {label}
      </Link>
    )
  }

  return (
    <Link to={href} className="text-sm text-background-50/60 transition hover:text-primary-400">
      {label}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="bg-background-950 text-background-50">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <Link to="/" className="font-heading text-2xl font-bold">
              {footer.brandName.replace('.', '')}
              <span className="text-primary-500">.</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-background-50/70">{footer.slogan}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background-50/90">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-background-50/10 pt-8 text-sm text-background-50/50">
          {footer.copyright}
        </div>
      </div>
    </footer>
  )
}
