import { ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumbs?: Array<{ label: string; to?: string }>
  children?: ReactNode
}

export function PageHero({ title, subtitle, breadcrumbs, children }: PageHeroProps) {
  return (
    <section className="hero-gradient py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {breadcrumbs && (
          <div className="flex items-center gap-1.5 text-white/50 text-sm mb-4">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={13} />}
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-white/80 transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
          {title}
        </h1>
        {subtitle && <p className="text-white/70 text-lg max-w-2xl">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
