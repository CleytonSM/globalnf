import { STATS } from './statsData'
import FadeIn from '../../components/FadeIn/FadeIn'
import { useTranslation } from '../../hooks/useTranslation'
import { statLabelKey, statSourceKey } from '../../i18n/homeKeys'

export default function StatsBanner() {
  const { t } = useTranslation()

  return (
    <section className="bg-navy py-20 m-5 rounded-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="text-white/50 text-center text-sm font-semibold uppercase tracking-widest mb-12">
            {t('home.stats.heading')}
          </p>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.id} delay={i * 0.08}>
              <div className="text-center">
                <p className="font-display font-extrabold text-4xl md:text-5xl text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-white/70 text-sm leading-relaxed max-w-[180px] mx-auto">
                  {t(statLabelKey(stat.id))}
                </p>
                <p className="text-white/30 text-xs mt-1">{t(statSourceKey(stat.id))}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
