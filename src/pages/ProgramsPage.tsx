import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Bot, BookOpen } from 'lucide-react'
import heroBg from '../assets/hero_background.mp4'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import AudienceSelector from '../features/journey/AudienceSelector'
import JourneyMap from '../features/journey/JourneyMap'
import FadeIn from '../components/FadeIn/FadeIn'
import type { AudienceType } from '../types/journey'

const stagger = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
})

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
          Programs
        </motion.span>
        <motion.h1
          className="font-display font-extrabold text-5xl md:text-6xl text-white mb-6 leading-tight"
          {...stagger(0.3)}
        >
          The Full Journey
        </motion.h1>
        <motion.p
          className="text-white/70 text-xl leading-relaxed"
          {...stagger(0.5)}
        >
          From your first question to your first U.S. paycheck — we walk every step with you.
        </motion.p>
      </div>
    </section>
  )
}

function AudienceSelectorSection() {
  const [selected, setSelected] = useState<AudienceType>('us-unlicensed')

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <SectionHeader
            eyebrow="Where do you start?"
            title="Find your entry point"
            subtitle="Each audience enters the journey at a different point — the curriculum adapts accordingly."
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
  return (
    <section className="py-16 bg-neutral m-5 rounded-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <SectionHeader
            eyebrow="The Validation Journey"
            title="Every step, mapped"
            subtitle="A structured, end-to-end roadmap from credential evaluation to your first day on the floor."
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
  const features = [
    {
      id: 'community',
      icon: Users,
      heading: 'Peer Community',
      body: 'Target: 20,000 members. Nurses supporting nurses through the full journey — from first steps to first paycheck.',
    },
    {
      id: 'flo',
      icon: Bot,
      heading: 'AI Validation Assistant (Flo)',
      body: 'Answers process questions 24/7. Built directly into the community so help is always one message away.',
    },
    {
      id: 'medical-terminology',
      icon: BookOpen,
      heading: 'Medical Terminology Course',
      body: 'Essential for non-English-speaking nurses entering U.S. clinical environments. Practical, focused, and self-paced.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <SectionHeader
            eyebrow="Educational Ecosystem"
            title="Tools built for the journey"
            subtitle="Every resource is designed around one goal: getting you to licensure with confidence."
          />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <FadeIn key={feature.id} delay={i * 0.1}>
              <div className="bg-neutral rounded-2xl p-8">
                <feature.icon className="w-7 h-7 mb-5 text-brand" aria-hidden="true" />
                <h3 className="font-display font-bold text-navy text-lg mb-3">{feature.heading}</h3>
                <p className="text-dark/70 leading-relaxed text-sm">{feature.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function InCountrySection() {
  return (
    <section className="py-20 bg-green/5 border-t-4 border-green m-5 rounded-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green mb-4">
                Second Pillar
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy mb-5 leading-tight">
                In-Country Growth Program
              </h2>
              <p className="text-dark/70 leading-relaxed text-lg mb-6">
                Grants and programs supporting nursing students' education and development in low-income countries.
              </p>
              <p className="text-dark/60 leading-relaxed">
                Revenue from GNF's paid programs and community memberships is reinvested directly into the mission — funding grants and educational resources for nursing students in underserved communities globally.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="bg-white rounded-2xl p-8 border border-green/20">
              <div className="space-y-5">
                {[
                  { label: 'Education grants', desc: 'Direct funding for nursing students in low-income countries' },
                  { label: 'Program development', desc: 'Building curriculum and tools for local nursing schools' },
                  { label: 'Mission-funded', desc: "Sustained by revenue from GNF's U.S. licensure programs" },
                ].map(({ label, desc }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">{label}</p>
                      <p className="text-muted text-sm">{desc}</p>
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
