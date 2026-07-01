import { MapPin, Globe, Globe2, GraduationCap } from 'lucide-react'
import type { JourneyColumn, Audience } from '../../types/journey'

export const JOURNEY_COLUMNS: JourneyColumn[] = [
  {
    id: 'learning',
    label: '',
    color: 'teal',
    items: [
      { id: 'learningModules', text: '' },
      { id: 'peerCommunity', text: '', note: '' },
      { id: 'flo', text: '' },
      { id: 'medicalTerminology', text: '' },
    ],
  },
  {
    id: 'pre-process',
    label: '',
    color: 'blue',
    items: [{ id: 'basicEnglish', text: '', note: '' }],
  },
  {
    id: 'pre-board',
    label: '',
    color: 'blue-gray',
    items: [
      { id: 'registerCgfns', text: '' },
      { id: 'submitTranscripts', text: '' },
      { id: 'submitLicense', text: '' },
      { id: 'englishProficiency', text: '' },
      { id: 'receiveCertificate', text: '' },
    ],
  },
  {
    id: 'board',
    label: '',
    color: 'rust',
    items: [
      { id: 'registerStateBoard', text: '', note: '' },
      { id: 'backgroundCheck', text: '' },
      { id: 'receiveAtt', text: '' },
      { id: 'scheduleNclex', text: '' },
      { id: 'applyVisaScreen', text: '' },
    ],
  },
  {
    id: 'post-board',
    label: '',
    color: 'purple',
    items: [
      { id: 'visaPathway', text: '', note: '' },
      { id: 'employerSponsorship', text: '', note: '' },
      { id: 'resumeInterview', text: '' },
      { id: 'nlcPlanning', text: '', note: '' },
    ],
  },
]

export const AUDIENCES: Audience[] = [
  {
    id: 'us-unlicensed',
    label: '',
    description: '',
    icon: MapPin,
  },
  {
    id: 'english-abroad',
    label: '',
    description: '',
    icon: Globe2,
  },
  {
    id: 'non-english-abroad',
    label: '',
    description: '',
    icon: Globe,
  },
  {
    id: 'nursing-students',
    label: '',
    description: '',
    icon: GraduationCap,
  },
]
