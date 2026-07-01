import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import FadeIn from '../components/FadeIn/FadeIn'
import { TEAM_MEMBERS } from '../features/team/teamData'

const stagger = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
})

export default function AboutPage() {
  return (
    <>
      <FounderStorySection />
      <TeamBiosSection />
    </>
  )
}

function FounderStorySection() {
  return (
    <section className="bg-navy py-32 px-6" aria-label="Founder story">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.span
              className="inline-block text-xs font-semibold uppercase tracking-widest text-white/40 mb-6"
              {...stagger(0.1)}
            >
              Founder Story
            </motion.span>
            <motion.h1
              className="font-display font-extrabold text-4xl md:text-5xl text-white mb-6 leading-tight"
              {...stagger(0.3)}
            >
              Built by someone who walked this path
            </motion.h1>
            <motion.div
              className="space-y-4 text-white/70 leading-relaxed"
              {...stagger(0.45)}
            >
              <p>
                Sabrina Elias left Brazil with a nursing degree, clinical experience, and a desire to practice in the United States. She began the validation process — and stopped, just short of completion.
              </p>
              <p>
                Fifteen years later, she returned to finish what she started. This time, she earned her PhD from Johns Hopkins. Her MSN and BSN from the University of São Paulo, and her RN licensure in Maryland. Her clinical and research career has spanned WHO, NIH, and MedStar Health.
              </p>
              <p>
                What she learned along the way — about the process, the obstacles, and the absence of real support — became the blueprint for GNF.
              </p>
            </motion.div>

            <motion.blockquote
              className="mt-8 border-l-4 border-brand pl-6"
              {...stagger(0.6)}
            >
              <p className="text-white italic text-lg leading-relaxed font-display">
                "I began the Global Nursing Foundation to empower other nurses to create their own destiny, both at home and abroad. Let's walk this path together."
              </p>
              <footer className="mt-3 text-white/50 text-sm">
                — Sabrina Elias, PhD, MSN, RN · Founder & Executive Director
              </footer>
            </motion.blockquote>
          </div>

          <motion.div
            className="flex justify-center"
            {...stagger(0.5)}
          >
            <div className="w-80 h-96 rounded-2xl overflow-hidden border border-white/20">
              <img
                src={TEAM_MEMBERS.find((m) => m.id === 'sabrina-elias')!.photo}
                alt="Sabrina Elias, Founder & Executive Director"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TeamBiosSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <SectionHeader
            eyebrow="The Founding Team"
            title="Meet the people behind GNF"
            subtitle="Six founding members with backgrounds in nursing, education, law, technology, and international mobility — united by a shared mission."
          />
        </FadeIn>
        <div className="space-y-16">
          {TEAM_MEMBERS.map((member, index) => {
            const initials = member.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2)
            const isEven = index % 2 === 0

            return (
              <FadeIn key={member.id} delay={0.05}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'md:[&>*:first-child]:order-2'
                  }`}
                >
                  {/* Bio */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.credentials.split(',').map((cred) => (
                        <span
                          key={cred.trim()}
                          className="bg-brand/10 text-brand text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {cred.trim()}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-display font-bold text-2xl text-navy mb-1">{member.name}</h2>
                    <p className="text-muted text-sm mb-5">{member.title}</p>
                    <p className="text-dark/70 leading-relaxed">{member.bio}</p>
                    {member.linkedIn && (
                      <a
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-brand hover:underline"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    )}
                  </div>

                  {/* Avatar */}
                  <div className={`flex justify-center ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                    <div className="w-56 h-56 rounded-2xl bg-neutral border border-gray-200 flex items-center justify-center">
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      ) : (
                        <div className="text-center">
                          <div className="w-20 h-20 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-3">
                            <span className="font-display font-bold text-2xl text-brand">{initials}</span>
                          </div>
                          <p className="text-muted text-xs">{member.name}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
