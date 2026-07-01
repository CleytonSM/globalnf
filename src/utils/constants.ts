export const BRAND_COLOR = '#A52555'
export const NAVY_COLOR = '#0A2D51'
export const GREEN_COLOR = '#006826'

export const NAV_LINKS = [
  { to: '/', labelKey: 'nav.home' },
  { to: '/about', labelKey: 'nav.about' },
  { to: '/programs', labelKey: 'nav.programs' },
  { to: '/community', labelKey: 'nav.community' },
] as const

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/global-nursing-foundation/', icon: 'linkedin' },
  { label: 'Instagram', href: 'https://instagram.com/globalnf', icon: 'instagram' },
  { label: 'X / Twitter', href: 'https://x.com/globalnf', icon: 'twitter' },
  { label: 'Facebook', href: 'https://facebook.com/globalnf', icon: 'facebook' },
  { label: 'YouTube', href: 'https://youtube.com/@globalnf', icon: 'youtube' },
] as const

export const MAX_COMMUNITY_SIZE = 20_000
