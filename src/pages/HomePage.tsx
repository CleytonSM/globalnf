import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import heroBg from '../assets/hero_background2.webm'
import Button from '../components/Button/Button'
import AccentCard from '../components/Card/AccentCard'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import StatsBanner from '../features/stats/StatsBanner'
import FadeIn from '../components/FadeIn/FadeIn'
import { MISSION_QUADRANTS, PROGRAMS } from '../features/programs/programsData'
import { useTranslation } from '../hooks/useTranslation'
import {
  programDescriptionKey,
  programTitleKey,
  quadrantBodyKey,
  quadrantHeadingKey,
} from '../i18n/homeKeys'
import { Globe2 } from 'lucide-react'
import { Sprout } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBanner />
      <MissionModelSection />
      <ProgramsOverviewSection />
      <CtaBannerSection />
    </>
  )
}

function HeroSection() {
  const { t } = useTranslation()

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      aria-label={t('home.hero.aria')}
    >
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

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32">
        <motion.span
          className="inline-block bg-brand/20 text-white/80 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 mb-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {t('home.hero.badge')}
        </motion.span>

        <motion.h1
          className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {t('home.hero.title')}{' '}
          <span className="text-brand-light">{t('home.hero.titleHighlight')}</span>
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Button variant="primary" size="lg" className="text-base">
            {t('common.getStarted')}
          </Button>
          <Link to="/programs">
            <Button
              variant="ghost"
              size="lg"
              className="text-base text-white border-white hover:bg-white hover:text-navy"
            >
              {t('common.learnMore')}
            </Button>
          </Link>
        </motion.div>

        <motion.div
          className="mt-20 flex flex-col items-center gap-3 text-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          aria-hidden="true"
        >
          <span className="text-xs tracking-widest uppercase">{t('common.scroll')}</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5">
            <motion.div
              className="w-1 h-2 rounded-full bg-white/60"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function MissionModelSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-neutral m-5 rounded-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <SectionHeader
            eyebrow={t('home.mission.eyebrow')}
            title={t('home.mission.title')}
            subtitle={t('home.mission.subtitle')}
          />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MISSION_QUADRANTS.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.1}>
              <AccentCard
                heading={t(quadrantHeadingKey(item.id))}
                body={t(quadrantBodyKey(item.id))}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaBannerSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-brand py-20 m-5 rounded-lg" aria-label={t('home.cta.aria')}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <FadeIn>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            {t('home.cta.title')}
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          <Button
            variant="ghost"
            size="lg"
            className="text-base bg-white text-brand border-white hover:bg-brand hover:text-white hover:border-white"
          >
            {t('common.getStarted')}
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}

function ProgramsOverviewSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-white m-5 rounded-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <SectionHeader
            eyebrow={t('home.programs.eyebrow')}
            title={t('home.programs.title')}
          />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROGRAMS.map((program, i) => (
            <FadeIn key={program.id} delay={i * 0.1}>
              <div className="bg-neutral rounded-2xl p-8 flex flex-col">
                <div
                  className={`w-10 h-10 rounded-lg mb-5 flex items-center justify-center ${
                    program.id === 'pathway-abroad' ? 'bg-brand/10' : 'bg-green/10'
                  }`}
                >
                  {program.id === 'pathway-abroad' ? (
                    <Globe2 className="w-5 h-5 text-brand" aria-hidden="true" />
                  ) : (
                    <Sprout className="w-5 h-5 text-green" aria-hidden="true" />
                  )}
                </div>
                <h3
                  className={`font-display font-bold text-xl mb-3 ${
                    program.id === 'pathway-abroad' ? 'text-navy' : 'text-green'
                  }`}
                >
                  {t(programTitleKey(program.id))}
                </h3>
                <p className="text-dark/70 leading-relaxed flex-1">
                  {t(programDescriptionKey(program.id))}
                </p>
                <div className="mt-6">
                  <Link
                    to={program.ctaTo}
                    className="text-sm font-semibold text-brand hover:text-brand-dark inline-flex items-center gap-1 group"
                  >
                    {t('common.learnMore')}
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
