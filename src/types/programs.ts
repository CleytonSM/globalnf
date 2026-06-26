export interface Stat {
  value: string
  label: string
  source: string
}

export interface Program {
  id: string
  title: string
  description: string
  ctaLabel: string
  ctaTo: string
}

export interface QuadrantItem {
  id: string
  heading: string
  body: string
}
