import { motion } from 'framer-motion'
import { Handshake, Target, Bot } from 'lucide-react'
import heroBg from '../assets/hero_background3.webm'
import SocialIcon from '../components/SocialIcon/SocialIcon'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import WaitlistForm from '../features/community/WaitlistForm'
import FadeIn from '../components/FadeIn/FadeIn'
import { useTranslation } from '../hooks/useTranslation'
import {
  WAITLIST_BENEFIT_KEYS,
  waitlistBenefitDescKey,
  waitlistBenefitLabelKey,
} from '../i18n/programsKeys'
import { SOCIAL_LINKS } from '../utils/constants'

const stagger = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
})

const WAITLIST_BENEFITS = [
  { id: WAITLIST_BENEFIT_KEYS.peerSupport, icon: Handshake },
  { id: WAITLIST_BENEFIT_KEYS.structuredGuidance, icon: Target },
  { id: WAITLIST_BENEFIT_KEYS.floAssistant, icon: Bot },
] as const

export default function CommunityPage() {
  return (
    <>
      <CommunityHeroSection />
      <WaitlistSection />
      <FloSection />
      <SocialSection />
    </>
  )
}

function CommunityHeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative py-40 px-6 text-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroBg}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy/60" />
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.span
          className="inline-block text-xs font-semibold uppercase tracking-widest text-white/40 mb-6"
          {...stagger(0.1)}
        >
          {t('community.hero.eyebrow')}
        </motion.span>
        <motion.h1
          className="font-display font-extrabold text-5xl md:text-6xl text-white mb-6 leading-tight"
          {...stagger(0.3)}
        >
          {t('community.hero.title')}
        </motion.h1>
      </div>
    </section>
  )
}

function WaitlistSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div>
              <SectionHeader
                align="left"
                eyebrow={t('community.waitlist.eyebrow')}
                title={t('community.waitlist.title')}
              />
              <div className="space-y-5 text-dark/70 leading-relaxed">
                <p>{t('community.waitlist.paragraph1')}</p>
                <p>{t('community.waitlist.paragraph2')}</p>
              </div>
              <div className="mt-8 space-y-4">
                {WAITLIST_BENEFITS.map(({ id, icon: Icon }) => (
                  <div key={id} className="flex items-start gap-4">
                    <Icon className="w-6 h-6 shrink-0 text-brand mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-navy text-sm">{t(waitlistBenefitLabelKey(id))}</p>
                      <p className="text-muted text-sm">{t(waitlistBenefitDescKey(id))}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="bg-neutral rounded-2xl p-8">
              <WaitlistForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function FloSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-neutral m-4 rounded-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white font-display font-bold text-sm shrink-0">
                  F
                </div>
                <div className="bg-gray-50 rounded-xl rounded-tl-none px-4 py-3 text-sm text-dark max-w-xs">
                  {t('community.flo.chat.floIntro')}
                </div>
              </div>
              <div className="flex items-start gap-3 flex-row-reverse mb-6">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-display font-bold text-sm shrink-0">
                  {t('community.flo.chat.you')}
                </div>
                <div className="bg-brand/10 rounded-xl rounded-tr-none px-4 py-3 text-sm text-navy max-w-xs">
                  {t('community.flo.chat.userQuestion')}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white font-display font-bold text-sm shrink-0">
                  F
                </div>
                <div className="bg-gray-50 rounded-xl rounded-tl-none px-4 py-3 text-sm text-dark max-w-xs">
                  {t('community.flo.chat.floReply')}
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand mb-4">
                {t('community.flo.eyebrow')}
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy mb-5 leading-tight">
                {t('community.flo.title')}
              </h2>
              <p className="text-dark/70 leading-relaxed mb-4">{t('community.flo.paragraph1')}</p>
              <p className="text-dark/70 leading-relaxed">{t('community.flo.paragraph2')}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function SocialSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <FadeIn>
          <SectionHeader
            eyebrow={t('community.social.eyebrow')}
            title={t('community.social.title')}
            subtitle={t('community.social.subtitle')}
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a
                key={icon}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-gray-200 text-navy hover:border-brand hover:text-brand transition-colors text-sm font-medium"
              >
                <SocialIcon name={icon} />
                {label}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
