import { Link } from 'react-router-dom'
import Button from '../components/Button/Button'
import AccentCard from '../components/Card/AccentCard'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import StatsBanner from '../features/stats/StatsBanner'
import TeamGrid from '../features/team/TeamGrid'
import { WHERE_GNF_FITS, PROGRAMS, MISSION_QUADRANTS } from '../features/programs/programsData'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBanner />
      <WhereGnfFitsSection />
      <VisionSection />
      <ProgramsOverviewSection />
      <MissionModelSection />
      <TeamGrid />
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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-brand/70" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-white/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32">
        <span className="inline-block bg-brand/20 text-white/80 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 mb-8">
          Nonprofit · Est. 2026
        </span>

        <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
          Empowering nurses,{' '}
          <span className="text-brand-light">home and abroad.</span>
        </h1>

        <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          The Global Nursing Foundation opens U.S. and Canadian RN licensure pathways for internationally educated nurses — and funds nursing education in low-income countries.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 text-white/30" aria-hidden="true">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-white/20" />
        </div>
      </div>
    </section>
  )
}

function WhereGnfFitsSection() {
  return (
    <section className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="The Gap"
          title="Where GNF fits in"
          subtitle="The nursing workforce crisis isn't about shortage of talent. It's about structural barriers that keep qualified nurses from reaching patients."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WHERE_GNF_FITS.map((item) => (
            <AccentCard key={item.id} heading={item.heading} body={item.body} />
          ))}
        </div>
      </div>
    </section>
  )
}

function VisionSection() {
  return (
    <section className="py-24 bg-navy" aria-label="Our vision">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-white/40 mb-8">
          Our Vision
        </span>
        <blockquote>
          <p className="font-display font-bold text-2xl md:text-3xl text-white leading-relaxed italic">
            "Global Nursing Foundation empowers nurses across the globe to learn, grow, and lead by opening international licensure pathways and expanding access to education. We help nurses step into their full potential, because{' '}
            <span className="text-brand-light">strengthening nurses anywhere strengthens health everywhere.</span>"
          </p>
        </blockquote>
      </div>
    </section>
  )
}

function ProgramsOverviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="Our Programs"
          title="Two pillars. One mission."
          subtitle="GNF supports nurses at every stage — whether they're pursuing licensure abroad or building their future at home."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="bg-neutral rounded-2xl p-8 flex flex-col"
            >
              <div
                className={`w-10 h-10 rounded-lg mb-5 flex items-center justify-center ${
                  program.id === 'pathway-abroad' ? 'bg-brand/10' : 'bg-green/10'
                }`}
              >
                <span className="text-xl" aria-hidden="true">
                  {program.id === 'pathway-abroad' ? '🌎' : '🌱'}
                </span>
              </div>
              <h3
                className={`font-display font-bold text-xl mb-3 ${
                  program.id === 'pathway-abroad' ? 'text-navy' : 'text-green'
                }`}
              >
                {program.title}
              </h3>
              <p className="text-dark/70 leading-relaxed flex-1">{program.description}</p>
              <div className="mt-6">
                <Link
                  to={program.ctaTo}
                  className="text-sm font-semibold text-brand hover:text-brand-dark inline-flex items-center gap-1 group"
                >
                  {program.ctaLabel}
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
          ))}
        </div>
      </div>
    </section>
  )
}

function MissionModelSection() {
  return (
    <section className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="Mission & Model"
          title="How GNF works"
          subtitle="A sustainable model that serves nurses while funding global education."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MISSION_QUADRANTS.map((item) => (
            <AccentCard key={item.id} heading={item.heading} body={item.body} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaBannerSection() {
  return (
    <section className="bg-brand py-20" aria-label="Call to action">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
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
      </div>
    </section>
  )
}
