import { useState } from 'react'
import { JOURNEY_COLUMNS } from './journeyData'
import type { JourneyColumnColor } from '../../types/journey'
import { cn } from '../../utils/cn'

const colorConfig: Record<JourneyColumnColor, { chip: string; dot: string; border: string }> = {
  teal: {
    chip: 'bg-teal-100 text-teal-800',
    dot: 'bg-teal-500',
    border: 'border-teal-200',
  },
  blue: {
    chip: 'bg-blue-100 text-blue-800',
    dot: 'bg-blue-500',
    border: 'border-blue-200',
  },
  'blue-gray': {
    chip: 'bg-slate-100 text-slate-700',
    dot: 'bg-slate-500',
    border: 'border-slate-200',
  },
  rust: {
    chip: 'bg-orange-100 text-orange-800',
    dot: 'bg-orange-500',
    border: 'border-orange-200',
  },
  purple: {
    chip: 'bg-purple-100 text-purple-800',
    dot: 'bg-purple-500',
    border: 'border-purple-200',
  },
}

export default function JourneyMap() {
  const [openColumn, setOpenColumn] = useState<string | null>('learning')

  const handleToggle = (id: string) => {
    setOpenColumn((prev) => (prev === id ? null : id))
  }

  return (
    <>
      {/* Desktop: horizontal grid */}
      <div className="hidden lg:grid grid-cols-5 gap-4" role="region" aria-label="Validation journey map">
        {JOURNEY_COLUMNS.map((col) => {
          const colors = colorConfig[col.color]
          return (
            <div key={col.id} className={cn('rounded-xl border bg-white p-5', colors.border)}>
              <span className={cn('inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5', colors.chip)}>
                {col.label}
              </span>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item.text} className="flex items-start gap-2.5">
                    <span className={cn('w-2 h-2 rounded-full mt-1.5 shrink-0', colors.dot)} aria-hidden="true" />
                    <span className="text-sm text-dark/80 leading-snug">
                      {item.text}
                      {item.note && (
                        <span className="block text-xs text-muted mt-0.5">({item.note})</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      {/* Mobile: accordion */}
      <div className="lg:hidden space-y-3" role="region" aria-label="Validation journey map">
        {JOURNEY_COLUMNS.map((col) => {
          const colors = colorConfig[col.color]
          const isOpen = openColumn === col.id
          return (
            <div key={col.id} className={cn('rounded-xl border overflow-hidden', colors.border)}>
              <button
                className="w-full flex items-center justify-between px-5 py-4 bg-white text-left"
                onClick={() => handleToggle(col.id)}
                aria-expanded={isOpen}
              >
                <span className={cn('text-xs font-semibold px-3 py-1 rounded-full', colors.chip)}>
                  {col.label}
                </span>
                <svg
                  className={cn('w-5 h-5 text-muted transition-transform duration-200', isOpen && 'rotate-180')}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 bg-white border-t border-gray-100">
                  <ul className="space-y-3 pt-4">
                    {col.items.map((item) => (
                      <li key={item.text} className="flex items-start gap-2.5">
                        <span className={cn('w-2 h-2 rounded-full mt-1.5 shrink-0', colors.dot)} aria-hidden="true" />
                        <span className="text-sm text-dark/80 leading-snug">
                          {item.text}
                          {item.note && (
                            <span className="block text-xs text-muted mt-0.5">({item.note})</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}
