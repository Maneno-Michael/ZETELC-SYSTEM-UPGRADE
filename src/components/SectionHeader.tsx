import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  className?: string
  light?: boolean
  center?: boolean
}

export function SectionHeader({ badge, title, subtitle, className, light, center = true }: SectionHeaderProps) {
  return (
    <div className={cn(center && 'text-center', 'mb-12', className)}>
      {badge && (
        <span className={cn(
          'inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-3',
          light ? 'bg-white/20 text-white' : 'bg-secondary/10 text-secondary'
        )}>
          {badge}
        </span>
      )}
      <h2 className={cn(
        'text-3xl sm:text-4xl font-bold leading-tight',
        light ? 'text-white' : 'text-primary'
      )} style={{ fontFamily: 'Raleway, sans-serif' }}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'mt-3 text-base sm:text-lg max-w-2xl',
          center && 'mx-auto',
          light ? 'text-white/70' : 'text-muted-foreground'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
