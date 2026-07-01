import type { TranslationKey } from './types'

export const AUDIENCE_TRANSLATION_KEYS = {
  'us-unlicensed': 'usUnlicensed',
  'english-abroad': 'englishAbroad',
  'non-english-abroad': 'nonEnglishAbroad',
  'nursing-students': 'nursingStudents',
} as const satisfies Record<string, string>

export const ECOSYSTEM_FEATURE_KEYS = {
  community: 'community',
  flo: 'flo',
  'medical-terminology': 'medicalTerminology',
} as const satisfies Record<string, string>

export const IN_COUNTRY_HIGHLIGHT_KEYS = {
  educationGrants: 'educationGrants',
  programDevelopment: 'programDevelopment',
  missionFunded: 'missionFunded',
} as const

export const WAITLIST_BENEFIT_KEYS = {
  peerSupport: 'peerSupport',
  structuredGuidance: 'structuredGuidance',
  floAssistant: 'floAssistant',
} as const

export function audienceLabelKey(id: string): TranslationKey {
  return `programs.audiences.${AUDIENCE_TRANSLATION_KEYS[id as keyof typeof AUDIENCE_TRANSLATION_KEYS]}.label` as TranslationKey
}

export function audienceDescriptionKey(id: string): TranslationKey {
  return `programs.audiences.${AUDIENCE_TRANSLATION_KEYS[id as keyof typeof AUDIENCE_TRANSLATION_KEYS]}.description` as TranslationKey
}

export function journeyColumnLabelKey(id: string): TranslationKey {
  const keyMap: Record<string, string> = {
    learning: 'learning',
    'pre-process': 'preProcess',
    'pre-board': 'preBoard',
    board: 'board',
    'post-board': 'postBoard',
  }
  return `programs.journey.columns.${keyMap[id]}.label` as TranslationKey
}

export function journeyItemTextKey(columnId: string, itemId: string): TranslationKey {
  const columnKeyMap: Record<string, string> = {
    learning: 'learning',
    'pre-process': 'preProcess',
    'pre-board': 'preBoard',
    board: 'board',
    'post-board': 'postBoard',
  }
  return `programs.journey.columns.${columnKeyMap[columnId]}.items.${itemId}.text` as TranslationKey
}

export function journeyItemNoteKey(columnId: string, itemId: string): TranslationKey {
  const columnKeyMap: Record<string, string> = {
    learning: 'learning',
    'pre-process': 'preProcess',
    'pre-board': 'preBoard',
    board: 'board',
    'post-board': 'postBoard',
  }
  return `programs.journey.columns.${columnKeyMap[columnId]}.items.${itemId}.note` as TranslationKey
}

export function ecosystemHeadingKey(id: string): TranslationKey {
  return `programs.ecosystem.features.${ECOSYSTEM_FEATURE_KEYS[id as keyof typeof ECOSYSTEM_FEATURE_KEYS]}.heading` as TranslationKey
}

export function ecosystemBodyKey(id: string): TranslationKey {
  return `programs.ecosystem.features.${ECOSYSTEM_FEATURE_KEYS[id as keyof typeof ECOSYSTEM_FEATURE_KEYS]}.body` as TranslationKey
}

export function inCountryHighlightLabelKey(id: string): TranslationKey {
  return `programs.inCountry.highlights.${id}.label` as TranslationKey
}

export function inCountryHighlightDescKey(id: string): TranslationKey {
  return `programs.inCountry.highlights.${id}.desc` as TranslationKey
}

export function waitlistBenefitLabelKey(id: string): TranslationKey {
  return `community.waitlist.benefits.${id}.label` as TranslationKey
}

export function waitlistBenefitDescKey(id: string): TranslationKey {
  return `community.waitlist.benefits.${id}.desc` as TranslationKey
}

export function waitlistStatusKey(value: string): TranslationKey {
  const keyMap: Record<string, string> = {
    'us-unlicensed': 'usUnlicensed',
    'english-abroad': 'englishAbroad',
    'non-english-abroad': 'nonEnglishAbroad',
    'nursing-student': 'nursingStudent',
  }
  return `community.waitlist.form.statusOptions.${keyMap[value]}` as TranslationKey
}
