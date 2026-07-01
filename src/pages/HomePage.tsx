import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import heroBg from '../assets/hero_background2.webm'
import Button from '../components/Button/Button'
import AccentCard from '../components/Card/AccentCard'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import StatsBanner from '../features/stats/StatsBanner'
import FadeIn from '../components/FadeIn/FadeIn'
import { MISSION_QUADRANTS } from '../features/programs/programsData'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBanner />
      <MissionModelSection />
      <CtaBannerSection />
    </>
  )
}

function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      aria-label="Hero"
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
          Nonprofit · Est. 2026
        </motion.span>

        <motion.h1
          className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Empowering nurses,{' '}
          <span className="text-brand-light">home and abroad.</span>
        </motion.h1>

        

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Button variant="primary" size="lg" className="text-base">
            Get Started
          </Button>
          <Link to="/programs">
            <Button
              variant="ghost"
              size="lg"
              className="text-base text-white border-white hover:bg-white hover:text-navy"
            >
              Learn More
            </Button>
          </Link>
        </motion.div>

        {/* Animated mouse scroll indicator */}
        <motion.div
          className="mt-20 flex flex-col items-center gap-3 text-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          aria-hidden="true"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
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
  return (
    <section className="py-20 bg-neutral m-5 rounded-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <SectionHeader
            eyebrow="Mission & Model"
            title="How GNF works"
            subtitle="A sustainable model that serves nurses while funding global education."
          />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MISSION_QUADRANTS.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.1}>
              <AccentCard heading={item.heading} body={item.body} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaBannerSection() {
  return (
    <section className="bg-brand py-20 m-5 rounded-lg" aria-label="Call to action">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <FadeIn>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            Your next step starts here.
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Join thousands of internationally educated nurses walking the validation journey together.
          </p>
          <Button
            variant="ghost"
            size="lg"
            className="text-base bg-white text-brand border-white hover:bg-brand hover:text-white hover:border-white"
          >
            Get Started
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
