import { cn } from '../../utils/cn'

type AccentCardProps = {
  heading: string
  body: string
  className?: string
  accentColor?: 'brand' | 'navy' | 'green'
}

const accentClasses = {
  brand: 'border-l-brand',
  navy: 'border-l-navy',
  green: 'border-l-green',
}

export default function AccentCard({
  heading,
  body,
  className,
  accentColor = 'brand',
}: AccentCardProps) {
  return (
    <div
      className={cn(
        'bg-white border-l-4 rounded-card p-6 shadow-sm',
        accentClasses[accentColor],
        className,
      )}
    >
      <h3 className="font-display font-bold text-navy text-lg mb-2">{heading}</h3>
      <p className="text-dark/80 leading-relaxed">{body}</p>
    </div>
  )
}
