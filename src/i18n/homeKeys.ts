import type { TranslationKey } from './types'

export const PROGRAM_TRANSLATION_KEYS = {
  'pathway-abroad': 'pathwayAbroad',
  'in-country-growth': 'inCountryGrowth',
} as const satisfies Record<string, string>

export const QUADRANT_TRANSLATION_KEYS = {
  'who-we-serve': 'whoWeServe',
  'what-we-do': 'whatWeDo',
  'how-we-sustain-it': 'howWeSustainIt',
  'why-it-matters': 'whyItMatters',
} as const satisfies Record<string, string>

export type ProgramTranslationKey =
  (typeof PROGRAM_TRANSLATION_KEYS)[keyof typeof PROGRAM_TRANSLATION_KEYS]

export type QuadrantTranslationKey =
  (typeof QUADRANT_TRANSLATION_KEYS)[keyof typeof QUADRANT_TRANSLATION_KEYS]

export function programTitleKey(id: string): TranslationKey {
  return `home.programs.${PROGRAM_TRANSLATION_KEYS[id as keyof typeof PROGRAM_TRANSLATION_KEYS]}.title` as TranslationKey
}

export function programDescriptionKey(id: string): TranslationKey {
  return `home.programs.${PROGRAM_TRANSLATION_KEYS[id as keyof typeof PROGRAM_TRANSLATION_KEYS]}.description` as TranslationKey
}

export function quadrantHeadingKey(id: string): TranslationKey {
  return `home.mission.quadrants.${QUADRANT_TRANSLATION_KEYS[id as keyof typeof QUADRANT_TRANSLATION_KEYS]}.heading` as TranslationKey
}

export function quadrantBodyKey(id: string): TranslationKey {
  return `home.mission.quadrants.${QUADRANT_TRANSLATION_KEYS[id as keyof typeof QUADRANT_TRANSLATION_KEYS]}.body` as TranslationKey
}

export function statLabelKey(id: string): TranslationKey {
  return `home.stats.items.${id}.label` as TranslationKey
}

export function statSourceKey(id: string): TranslationKey {
  return `home.stats.items.${id}.source` as TranslationKey
}
