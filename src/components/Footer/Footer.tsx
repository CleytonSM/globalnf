import { Link } from 'react-router-dom'
import { NAV_LINKS, SOCIAL_LINKS } from '../../utils/constants'
import SocialIcon from '../SocialIcon/SocialIcon'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo + tagline */}
          <div>
            <div className="font-display font-extrabold text-xl tracking-tight mb-3">
              <span className="text-brand">G</span>NF
            </div>
            <p className="text-white/60 text-sm font-medium mb-2 italic">
              Empowering nurses, home and abroad.
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Global Nursing Foundation empowers internationally educated nurses to obtain U.S. RN licensure and supports nursing education in low-income countries.
            </p>
          </div>

          {/* Column 2: Site links */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-white/50 mb-4">
              Navigation
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {NAV_LINKS.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-white/70 hover:text-brand transition-colors text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Social + contact */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-white/50 mb-4">
              Connect
            </h3>
            <div className="flex gap-3 mb-6">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={icon}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-brand hover:border-brand transition-colors"
                >
                  <SocialIcon name={icon} />
                </a>
              ))}
            </div>
            <address className="not-italic text-white/50 text-sm space-y-1">
              <p>contact@globalnursingfoundation.org</p>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">
            © 2026 Global Nursing Foundation. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            501(c)(3) nonprofit organization
          </p>
        </div>
      </div>
    </footer>
  )
}

