import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Bot, BookOpen } from 'lucide-react'
import heroBg from '../assets/hero_background.webm'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import AudienceSelector from '../features/journey/AudienceSelector'
import JourneyMap from '../features/journey/JourneyMap'
import FadeIn from '../components/FadeIn/FadeIn'
import { useTranslation } from '../hooks/useTranslation'
import {
  ecosystemBodyKey,
  ecosystemHeadingKey,
  inCountryHighlightDescKey,
  inCountryHighlightLabelKey,
  IN_COUNTRY_HIGHLIGHT_KEYS,
} from '../i18n/programsKeys'
import type { AudienceType } from '../types/journey'

const stagger = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
})

const ECOSYSTEM_FEATURES = [
  { id: 'community', icon: Users },
  { id: 'flo', icon: Bot },
  { id: 'medical-terminology', icon: BookOpen },
] as const

const IN_COUNTRY_HIGHLIGHTS = [
  IN_COUNTRY_HIGHLIGHT_KEYS.educationGrants,
  IN_COUNTRY_HIGHLIGHT_KEYS.programDevelopment,
  IN_COUNTRY_HIGHLIGHT_KEYS.missionFunded,
] as const

export default function ProgramsPage() {
  return (
    <>
      <PageHeaderSection />
      <AudienceSelectorSection />
      <JourneyMapSection />
      <EcosystemSection />
      <InCountrySection />
    </>
  )
}

function PageHeaderSection() {
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
          {t('programs.hero.eyebrow')}
        </motion.span>
        <motion.h1
          className="font-display font-extrabold text-5xl md:text-6xl text-white mb-6 leading-tight"
          {...stagger(0.3)}
        >
          {t('programs.hero.title')}
        </motion.h1>
        <motion.p
          className="text-white/70 text-xl leading-relaxed"
          {...stagger(0.5)}
        >
          {t('programs.hero.subtitle')}
        </motion.p>
      </div>
    </section>
  )
}

function AudienceSelectorSection() {
  const [selected, setSelected] = useState<AudienceType>('us-unlicensed')
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <SectionHeader
            eyebrow={t('programs.audience.eyebrow')}
            title={t('programs.audience.title')}
            subtitle={t('programs.audience.subtitle')}
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <AudienceSelector selected={selected} onSelect={setSelected} />
        </FadeIn>
      </div>
    </section>
  )
}

function JourneyMapSection() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-neutral m-5 rounded-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <SectionHeader
            eyebrow={t('programs.journey.eyebrow')}
            title={t('programs.journey.title')}
            subtitle={t('programs.journey.subtitle')}
          />
        </FadeIn>
        <FadeIn delay={0.15}>
          <JourneyMap />
        </FadeIn>
      </div>
    </section>
  )
}

function EcosystemSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <SectionHeader
            eyebrow={t('programs.ecosystem.eyebrow')}
            title={t('programs.ecosystem.title')}
            subtitle={t('programs.ecosystem.subtitle')}
          />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ECOSYSTEM_FEATURES.map((feature, i) => (
            <FadeIn key={feature.id} delay={i * 0.1}>
              <div className="bg-neutral rounded-2xl p-8">
                <feature.icon className="w-7 h-7 mb-5 text-brand" aria-hidden="true" />
                <h3 className="font-display font-bold text-navy text-lg mb-3">
                  {t(ecosystemHeadingKey(feature.id))}
                </h3>
                <p className="text-dark/70 leading-relaxed text-sm">
                  {t(ecosystemBodyKey(feature.id))}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function InCountrySection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-green/5 border-t-4 border-green m-5 rounded-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green mb-4">
                {t('programs.inCountry.eyebrow')}
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy mb-5 leading-tight">
                {t('programs.inCountry.title')}
              </h2>
              <p className="text-dark/70 leading-relaxed text-lg mb-6">
                {t('programs.inCountry.description')}
              </p>
              <p className="text-dark/60 leading-relaxed">
                {t('programs.inCountry.secondaryDescription')}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="bg-white rounded-2xl p-8 border border-green/20">
              <div className="space-y-5">
                {IN_COUNTRY_HIGHLIGHTS.map((id) => (
                  <div key={id} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">{t(inCountryHighlightLabelKey(id))}</p>
                      <p className="text-muted text-sm">{t(inCountryHighlightDescKey(id))}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
