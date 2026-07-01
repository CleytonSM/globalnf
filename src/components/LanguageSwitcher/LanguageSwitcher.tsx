import { useRef, useState } from 'react'
import { ChevronDown, Globe } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { useTranslation } from '../../hooks/useTranslation'
import { useClickOutside } from '../../hooks/useClickOutside'
import { LANGUAGES } from '../../utils/languages'
import type { LanguageCode } from '../../types/language'
import { cn } from '../../utils/cn'

type LanguageSwitcherProps = {
  isScrolled: boolean
  variant: 'desktop' | 'mobile'
}

export default function LanguageSwitcher({ isScrolled, variant }: LanguageSwitcherProps) {
  if (variant === 'mobile') {
    return <LanguageSwitcherMobile />
  }

  return <LanguageSwitcherDesktop isScrolled={isScrolled} />
}

function LanguageSwitcherDesktop({ isScrolled }: { isScrolled: boolean }) {
  const { language, setLanguage } = useLanguage()
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useClickOutside(containerRef, () => setIsOpen(false), isOpen)

  const handleSelect = (code: LanguageCode) => {
    setLanguage(code)
    setIsOpen(false)
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={t('language.select')}
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200',
          isScrolled
            ? 'text-navy/80 hover:bg-navy/5 hover:text-navy'
            : 'text-white/80 hover:bg-white/10 hover:text-white',
        )}
      >
        <Globe className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span className="uppercase tracking-wide">{language}</span>
        <ChevronDown
          className={cn(
            'w-3.5 h-3.5 shrink-0 transition-transform duration-200',
            isOpen && 'rotate-180',
          )}
          aria-hidden="true"
        />
      </button>

      <div
        role="listbox"
        aria-label={t('language.options')}
        className={cn(
          'absolute right-0 top-full z-50 mt-2 min-w-[9rem] origin-top-right rounded-2xl border p-1.5 shadow-xl backdrop-blur-md transition-all duration-200',
          'bg-white/95 border-white/60 shadow-black/10',
          isOpen
            ? 'pointer-events-auto scale-100 opacity-100'
            : 'pointer-events-none scale-95 opacity-0',
        )}
      >
        {LANGUAGES.map(({ code, label }) => {
          const isActive = code === language

          return (
            <button
              key={code}
              type="button"
              role="option"
              aria-selected={isActive}
              onClick={() => handleSelect(code)}
              className={cn(
                'flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition-colors duration-150',
                isActive
                  ? 'bg-brand/10 font-semibold text-brand'
                  : 'text-navy/80 hover:bg-navy/5 hover:text-navy',
              )}
            >
              <span>{label}</span>
              <span className="text-xs uppercase tracking-wide opacity-70">{code}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function LanguageSwitcherMobile() {
  const { language, setLanguage } = useLanguage()
  const { t } = useTranslation()

  return (
    <div className="mt-4 border-t border-gray-200/60 pt-4 text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-navy/40">
        {t('language.label')}
      </p>
      <div className="flex items-center justify-center gap-4">
        {LANGUAGES.map(({ code }) => {
          const isActive = code === language

          return (
            <button
              key={code}
              type="button"
              onClick={() => setLanguage(code)}
              aria-current={isActive ? 'true' : undefined}
              className={cn(
                'inline-flex items-center gap-1.5 text-sm uppercase tracking-wide transition-colors',
                isActive
                  ? 'font-semibold text-brand'
                  : 'font-medium text-navy/50 hover:text-navy',
              )}
            >
              {isActive && <Globe className="w-4 h-4" aria-hidden="true" />}
              {code}
            </button>
          )
        })}
      </div>
    </div>
  )
}
