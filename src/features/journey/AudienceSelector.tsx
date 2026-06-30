import { cn } from '../../utils/cn'
import { AUDIENCES } from './journeyData'
import type { AudienceType } from '../../types/journey'

type AudienceSelectorProps = {
  selected: AudienceType
  onSelect: (id: AudienceType) => void
}

export default function AudienceSelector({ selected, onSelect }: AudienceSelectorProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4" role="tablist" aria-label="Select your audience type">
      {AUDIENCES.map((audience) => {
        const isActive = audience.id === selected
        return (
          <button
            key={audience.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(audience.id)}
            className={cn(
              'text-left p-5 rounded-xl border-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2',
              isActive
                ? 'border-brand bg-brand/5 shadow-sm'
                : 'border-transparent bg-neutral hover:border-brand/30',
            )}
          >
            <audience.icon className="w-6 h-6 mb-3" aria-hidden="true" />
            <p className={cn('font-display font-bold text-sm mb-1', isActive ? 'text-brand' : 'text-navy')}>
              {audience.label}
            </p>
            <p className="text-muted text-xs leading-relaxed">{audience.description}</p>
          </button>
        )
      })}
    </div>
  )
}
