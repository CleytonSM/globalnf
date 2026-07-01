import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/Logo Only Transparent (Vertical Square).png'
import { useScrolled } from '../../hooks/useScrolled'
import { useTranslation } from '../../hooks/useTranslation'
import { NAV_LINKS } from '../../utils/constants'
import Button from '../Button/Button'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import { cn } from '../../utils/cn'

export default function Navbar() {
  const isScrolled = useScrolled()
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { t } = useTranslation()

  const handleNavToggle = () => setIsMobileOpen((prev) => !prev)
  const handleMobileClose = () => setIsMobileOpen(false)

  return (
    <div className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-6xl">
      {/* Pill bar */}
      <header
        className={cn(
          'flex items-center justify-between px-4 md:px-6 h-14 md:h-16 rounded-full border transition-all duration-300',
          'backdrop-blur-md shadow-lg',
          isScrolled
            ? 'bg-white/80 border-transparent shadow-black/10'
            : 'bg-navy/70 border-white/20 shadow-black/20',
        )}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={handleMobileClose}
          className="flex items-center shrink-0"
          aria-label={t('nav.homeAria')}
        >
        <img
          src={logo}
          alt="Global Nursing Foundation"
          className={cn(
            'h-14 md:h-16 w-auto transition-all duration-300',
            isScrolled ? '' : 'brightness-0 invert',
          )}          
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label={t('nav.main')}
        >
          {NAV_LINKS.map(({ labelKey, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                cn(
                  'px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200',
                  isActive
                    ? isScrolled
                      ? 'bg-brand/10 text-brand'
                      : 'bg-white/15 text-white'
                    : isScrolled
                    ? 'text-navy/80 hover:text-navy hover:bg-navy/5'
                    : 'text-white/75 hover:text-white hover:bg-white/10',
                )
              }
            >
              {t(labelKey)}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher variant="desktop" isScrolled={isScrolled} />
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              'rounded-full',
              !isScrolled && 'text-white border-white/40 hover:bg-white/10 hover:text-white hover:border-white/60',
            )}
          >
            {t('common.login')}
          </Button>
          <Button variant="primary" size="sm" className="rounded-full">
            {t('common.getStarted')}
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={cn(
            'md:hidden p-2 rounded-full transition-colors',
            isScrolled
              ? 'text-navy hover:bg-navy/8'
              : 'text-white hover:bg-white/10',
          )}
          onClick={handleNavToggle}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
        >
          {isMobileOpen ? (
            <X className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </header>

      {/* Mobile dropdown */}
      {isMobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label={t('nav.mobile')}
          className={cn(
            'mt-2 rounded-3xl border px-5 py-5',
            'bg-white/95 backdrop-blur-md border-white/60 shadow-xl shadow-black/10',
            'animate-in fade-in slide-in-from-top-2 duration-200',
          )}
        >
          <nav className="flex flex-col gap-1" aria-label={t('nav.mobileLinks')}>
            {NAV_LINKS.map(({ labelKey, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={handleMobileClose}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-3 rounded-2xl text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-brand/10 text-brand font-semibold'
                      : 'text-navy hover:bg-navy/5',
                  )
                }
              >
                {t(labelKey)}
              </NavLink>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-gray-200/60 flex flex-col gap-2">
            <Button variant="ghost" size="md" className="w-full rounded-2xl">
              {t('common.login')}
            </Button>
            <Button variant="primary" size="md" className="w-full rounded-2xl">
              {t('common.getStarted')}
            </Button>
          </div>

          <LanguageSwitcher variant="mobile" isScrolled={isScrolled} />
        </div>
      )}
    </div>
  )
}
