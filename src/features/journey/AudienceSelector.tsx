import { cn } from '../../utils/cn'
import { AUDIENCES } from './journeyData'
import { useTranslation } from '../../hooks/useTranslation'
import { audienceDescriptionKey, audienceLabelKey } from '../../i18n/programsKeys'
import type { AudienceType } from '../../types/journey'

type AudienceSelectorProps = {
  selected: AudienceType
  onSelect: (id: AudienceType) => void
}

export default function AudienceSelector({ selected, onSelect }: AudienceSelectorProps) {
  const { t } = useTranslation()

  return (
    <div
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
      role="tablist"
      aria-label={t('programs.audience.selectorAria')}
    >
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
              {t(audienceLabelKey(audience.id))}
            </p>
            <p className="text-muted text-xs leading-relaxed">{t(audienceDescriptionKey(audience.id))}</p>
          </button>
        )
      })}
    </div>
  )
}
