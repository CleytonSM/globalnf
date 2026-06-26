import type { JourneyColumn, Audience } from '../../types/journey'

export const JOURNEY_COLUMNS: JourneyColumn[] = [
  {
    id: 'learning',
    label: 'Learning, Community & Tools',
    color: 'teal',
    items: [
      { text: 'Learning modules' },
      { text: 'Peer community', note: '20k member target' },
      { text: 'AI Validation Assistant (Flo)' },
      { text: 'Medical Terminology Course' },
    ],
  },
  {
    id: 'pre-process',
    label: 'Pre-Process',
    color: 'blue',
    items: [
      { text: 'Basic English course', note: 'Non-English speakers only' },
    ],
  },
  {
    id: 'pre-board',
    label: 'Pre-Board',
    color: 'blue-gray',
    items: [
      { text: 'Register with CGFNS' },
      { text: 'Submit transcripts' },
      { text: 'Submit license verification' },
      { text: 'English proficiency test + GNF prep discount' },
      { text: 'Receive CGFNS certificate' },
    ],
  },
  {
    id: 'board',
    label: 'Board',
    color: 'rust',
    items: [
      { text: 'Register with state board', note: 'SSN required; check NLC' },
      { text: 'Background check' },
      { text: 'Receive ATT letter' },
      { text: 'Schedule + sit NCLEX + receive results' },
      { text: 'Apply for CGFNS VisaScreen' },
    ],
  },
  {
    id: 'post-board',
    label: 'Post-Board',
    color: 'purple',
    items: [
      { text: 'Visa pathway', note: 'EB-3 Schedule A · TN CA/MX' },
      { text: 'Secure employer sponsorship', note: 'Before visa filing' },
      { text: 'Resume + interview prep' },
      { text: 'NLC planning', note: 'Multi-state practice options' },
    ],
  },
]

export const AUDIENCES: Audience[] = [
  {
    id: 'us-unlicensed',
    label: 'Nurses already in the U.S.',
    description: 'You\'re here but haven\'t completed licensure yet. We help you finish what you started.',
    icon: '🇺🇸',
  },
  {
    id: 'english-abroad',
    label: 'English-speaking nurses abroad',
    description: 'You practice in an English-speaking country and are ready to pursue U.S. licensure.',
    icon: '🌎',
  },
  {
    id: 'non-english-abroad',
    label: 'Non-English-speaking nurses abroad',
    description: 'You practice internationally and need language and credential support before starting the validation process.',
    icon: '🌍',
  },
  {
    id: 'nursing-students',
    label: 'Nursing students',
    description: 'You\'re still in school but planning your global career. We help you build the roadmap now.',
    icon: '🎓',
  },
]
