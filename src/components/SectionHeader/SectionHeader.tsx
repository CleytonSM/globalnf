import { cn } from '../../utils/cn'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'inline-block text-xs font-semibold uppercase tracking-widest mb-3',
            light ? 'text-white/60' : 'text-brand',
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'font-display font-bold text-3xl md:text-4xl leading-tight',
          light ? 'text-white' : 'text-navy',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed max-w-2xl',
            align === 'center' && 'mx-auto',
            light ? 'text-white/75' : 'text-muted',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
