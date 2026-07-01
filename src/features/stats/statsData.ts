import type { Stat } from '../../types/programs'

export const STATS: Stat[] = [
  {
    id: 'rnVacancies',
    value: '189,100',
    label: 'RN vacancies projected per year',
    source: 'BLS, 2025',
  },
  {
    id: 'hospitalVacancyRate',
    value: '8.6%',
    label: 'national hospital vacancy rate',
    source: 'NSI, 2026',
  },
  {
    id: 'internationallyEducated',
    value: '17%',
    label: 'of U.S. RNs are internationally educated',
    source: 'OECD, 2025',
  },
  {
    id: 'shortageCost',
    value: '$20B',
    label: 'annual cost of nurse shortages',
    source: 'SIA, 2025',
  },
  {
    id: 'applicantsTurnedAway',
    value: '80,162',
    label: 'qualified applicants turned away from nursing programs in 2024',
    source: 'AACN, 2025',
  },
  {
    id: 'rnsRetiring',
    value: '1M+',
    label: 'RNs will retire by 2030',
    source: 'Health Affairs, 2017',
  },
]
