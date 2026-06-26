import type { Program, QuadrantItem } from '../../types/programs'

export const PROGRAMS: Program[] = [
  {
    id: 'pathway-abroad',
    title: 'Pathway Abroad',
    description:
      'World-class education and community support for internationally trained nurses seeking license validation in the U.S. and Canada.',
    ctaLabel: 'Learn More',
    ctaTo: '/programs',
  },
  {
    id: 'in-country-growth',
    title: 'In-Country Growth',
    description:
      'Grants and programs supporting nursing students\' education and development in low-income countries.',
    ctaLabel: 'Learn More',
    ctaTo: '/programs',
  },
]

export const MISSION_QUADRANTS: QuadrantItem[] = [
  {
    id: 'who-we-serve',
    heading: 'Who We Serve',
    body: 'Internationally educated nurses seeking U.S. or Canadian RN licensure, and nursing students in low-income countries who need educational support to reach their potential.',
  },
  {
    id: 'what-we-do',
    heading: 'What We Do',
    body: 'We provide structured guidance, peer community, AI-powered support, and educational resources that walk nurses through every step of the validation and licensure journey.',
  },
  {
    id: 'how-we-sustain-it',
    heading: 'How We Sustain It',
    body: 'Revenue from paid programs and community memberships is reinvested into the mission — directly funding grants and educational support for nursing students in low-income countries.',
  },
  {
    id: 'why-it-matters',
    heading: 'Why It Matters',
    body: 'The U.S. faces a critical nursing shortage. Internationally educated nurses are a ready, trained workforce. Strengthening nurses anywhere strengthens healthcare everywhere.',
  },
]

export const WHERE_GNF_FITS: QuadrantItem[] = [
  {
    id: 'pipeline-constrained',
    heading: 'Pipeline is constrained — not the talent',
    body: 'International nurses are a ready, trained workforce waiting to enter the U.S. labor market. The barrier isn\'t ability — it\'s access to guidance and support.',
  },
  {
    id: 'demand-rising',
    heading: 'International nurse demand is rising fast',
    body: 'U.S. demand for nurses far exceeds the available workforce, and that gap is widening. Internationally educated nurses are essential to closing it.',
  },
  {
    id: 'validation-barrier',
    heading: 'The validation barrier',
    body: 'Many internationally educated nurses never complete U.S. licensure validation — not for lack of ability, but lack of guidance, community, and structured support.',
  },
  {
    id: 'gnf-closes-gap',
    heading: 'GNF exists to close that gap',
    body: 'We built the community, curriculum, and tools that should have existed from the start — so no nurse has to navigate the validation journey alone.',
  },
]
