import { Handshake, Target, Bot } from 'lucide-react'
import heroBg from '../assets/hero_background3.mp4'
import SocialIcon from '../components/SocialIcon/SocialIcon'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import WaitlistForm from '../features/community/WaitlistForm'
import { SOCIAL_LINKS } from '../utils/constants'

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
  return (
    <section className="relative py-32 px-6 text-center overflow-hidden">
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
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
          Community
        </span>
        <h1 className="font-display font-extrabold text-5xl md:text-6xl text-white mb-6 leading-tight">
          You don't have to do this alone
        </h1>
        <p className="text-white/70 text-xl leading-relaxed">
          A peer community of 20,000 nurses — walking the validation journey together, supporting each other at every step.
        </p>
      </div>
    </section>
  )
}

function WaitlistSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: description */}
          <div>
            <SectionHeader align="left" eyebrow="Get Early Access" title="Join the community waitlist" />
            <div className="space-y-5 text-dark/70 leading-relaxed">
              <p>
                The GNF community is being built for internationally educated nurses who are serious about U.S. licensure — and want to walk the path surrounded by people who understand exactly what they're going through.
              </p>
              <p>
                Sign up to get early access, receive updates on community launch, and be among the first to connect with nurses on the same journey.
              </p>
            </div>

            {/* Community features */}
            <div className="mt-8 space-y-4">
              {[
                { icon: Handshake, label: 'Peer-to-peer support', desc: 'Connect with nurses at every stage of the journey' },
                { icon: Target, label: 'Structured guidance', desc: 'Clear resources organized by your step in the process' },
                { icon: Bot, label: 'Flo AI assistant', desc: 'Get answers 24/7 without waiting for office hours' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-4">
                  <Icon className="w-6 h-6 shrink-0 text-brand mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-navy text-sm">{label}</p>
                    <p className="text-muted text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-neutral rounded-2xl p-8">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  )
}

function FloSection() {
  return (
    <section className="py-20 bg-neutral m-4 rounded-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white font-display font-bold text-sm shrink-0">
                F
              </div>
              <div className="bg-gray-50 rounded-xl rounded-tl-none px-4 py-3 text-sm text-dark max-w-xs">
                Hi! I'm Flo — GNF's AI validation assistant. Ask me anything about the CGFNS process, NCLEX, VisaScreen, or your state board requirements.
              </div>
            </div>
            <div className="flex items-start gap-3 flex-row-reverse mb-6">
              <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-display font-bold text-sm shrink-0">
                You
              </div>
              <div className="bg-brand/10 rounded-xl rounded-tr-none px-4 py-3 text-sm text-navy max-w-xs">
                How long does the CGFNS process usually take?
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white font-display font-bold text-sm shrink-0">
                F
              </div>
              <div className="bg-gray-50 rounded-xl rounded-tl-none px-4 py-3 text-sm text-dark max-w-xs">
                Typically 3–6 months from application to certificate. I can walk you through exactly what to prepare to avoid common delays. Ready to start?
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand mb-4">
              Meet Flo
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-navy mb-5 leading-tight">
              Your AI validation assistant, available 24/7
            </h2>
            <p className="text-dark/70 leading-relaxed mb-4">
              Flo is built directly into the GNF community — so whenever you have a question about the validation process, you get a reliable, structured answer immediately.
            </p>
            <p className="text-dark/70 leading-relaxed">
              Process questions at midnight. State board requirements for your specific state. What to do after you receive your ATT letter. Flo knows the journey — and she's here for every step.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <SectionHeader
          eyebrow="Stay Connected"
          title="Follow GNF"
          subtitle="Get updates on community launch, program news, and resources for internationally educated nurses."
        />
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
      </div>
    </section>
  )
}

