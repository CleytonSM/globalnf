import type { LucideIcon } from 'lucide-react'

export type JourneyColumnColor = 'teal' | 'blue' | 'blue-gray' | 'rust' | 'purple'

export interface JourneyItem {
  text: string
  note?: string
}

export interface JourneyColumn {
  id: string
  label: string
  color: JourneyColumnColor
  items: JourneyItem[]
}

export type AudienceType =
  | 'us-unlicensed'
  | 'english-abroad'
  | 'non-english-abroad'
  | 'nursing-students'

export interface Audience {
  id: AudienceType
  label: string
  description: string
  icon: LucideIcon
}
