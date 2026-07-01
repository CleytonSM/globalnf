import { useCallback } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'
import type { InterpolationValues, TranslationKey } from '../i18n/types'
import { interpolate, resolveTranslation } from '../i18n/utils'

export function useTranslation() {
  const { language, setLanguage } = useLanguage()

  const t = useCallback(
    (key: TranslationKey, values?: InterpolationValues): string => {
      const message =
        resolveTranslation(translations[language], key) ??
        resolveTranslation(translations.en, key) ??
        key

      return interpolate(message, values)
    },
    [language],
  )

  return { t, language, setLanguage }
}
