import type { LanguageCode } from '../../types/language'
import type { TranslationDictionary } from '../types'
import { en } from './en'
import { es } from './es'
import { pt } from './pt'

export const translations: Record<LanguageCode, TranslationDictionary> = {
  en,
  pt,
  es,
}

export { en, pt, es }
