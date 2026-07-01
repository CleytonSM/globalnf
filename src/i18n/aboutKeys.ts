import type { TranslationKey } from './types'

export const TEAM_TRANSLATION_KEYS = {
  'sabrina-elias': 'sabrinaElias',
  'marcela-padilha': 'marcelaPadilha',
  'karina-elias': 'karinaElias',
  'luana-barillari': 'luanaBarillari',
  'cleyton-martins': 'cleytonMartins',
  'amarildo-damata': 'amarildoDamata',
} as const satisfies Record<string, string>

export function teamTitleKey(id: string): TranslationKey {
  return `about.team.members.${TEAM_TRANSLATION_KEYS[id as keyof typeof TEAM_TRANSLATION_KEYS]}.title` as TranslationKey
}

export function teamBioKey(id: string): TranslationKey {
  return `about.team.members.${TEAM_TRANSLATION_KEYS[id as keyof typeof TEAM_TRANSLATION_KEYS]}.bio` as TranslationKey
}

export function teamPhotoAltKey(id: string): TranslationKey {
  return `about.team.members.${TEAM_TRANSLATION_KEYS[id as keyof typeof TEAM_TRANSLATION_KEYS]}.photoAlt` as TranslationKey
}
