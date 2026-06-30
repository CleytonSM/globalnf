import { STATS } from './statsData'

export default function StatsBanner() {
  return (
    <section className="bg-navy py-20 m-5 rounded-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-white/50 text-center text-sm font-semibold uppercase tracking-widest mb-12">
          The scale of the crisis
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {STATS.map((stat) => (
            <div key={stat.value} className="text-center">
              <p className="font-display font-extrabold text-4xl md:text-5xl text-white mb-2">
                {stat.value}
              </p>
              <p className="text-white/70 text-sm leading-relaxed max-w-[180px] mx-auto">
                {stat.label}
              </p>
              <p className="text-white/30 text-xs mt-1">{stat.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
