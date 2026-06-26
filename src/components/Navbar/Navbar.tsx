import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useScrolled } from '../../hooks/useScrolled'
import { NAV_LINKS } from '../../utils/constants'
import Button from '../Button/Button'
import { cn } from '../../utils/cn'

export default function Navbar() {
  const isScrolled = useScrolled()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const handleNavToggle = () => setIsMobileOpen((prev) => !prev)
  const handleMobileClose = () => setIsMobileOpen(false)

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-white shadow-md'
            : 'bg-transparent',
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="GNF Home">
            <GnfLogo light={!isScrolled} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  cn(
                    'text-sm font-medium transition-colors duration-200',
                    isActive
                      ? 'text-brand'
                      : isScrolled
                      ? 'text-navy hover:text-brand'
                      : 'text-white/90 hover:text-white',
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                !isScrolled && 'text-white border-white hover:bg-white hover:text-navy',
              )}
            >
              Log In
            </Button>
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={cn(
              'md:hidden p-2 rounded-lg transition-colors',
              isScrolled ? 'text-navy' : 'text-white',
            )}
            onClick={handleNavToggle}
            aria-expanded={isMobileOpen}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Menu</span>
            {isMobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 bg-navy flex flex-col md:hidden">
          <div className="flex items-center justify-between px-6 h-16">
            <Link to="/" onClick={handleMobileClose} aria-label="GNF Home">
              <GnfLogo light />
            </Link>
            <button
              className="text-white p-2"
              onClick={handleMobileClose}
              aria-label="Close navigation"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-2 px-6 pt-8 flex-1" aria-label="Mobile navigation">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={handleMobileClose}
                className={({ isActive }) =>
                  cn(
                    'text-2xl font-display font-bold py-3 border-b border-white/10',
                    isActive ? 'text-brand' : 'text-white',
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="flex flex-col gap-3 px-6 py-8">
            <Button variant="ghost" size="lg" className="w-full text-white border-white hover:bg-white hover:text-navy">
              Log In
            </Button>
            <Button variant="primary" size="lg" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

function GnfLogo({ light }: { light: boolean }) {
  return (
    <div className={cn('font-display font-extrabold text-xl tracking-tight', light ? 'text-white' : 'text-navy')}>
      <span className={light ? 'text-white' : 'text-brand'}>G</span>
      NF
      <span className={cn('ml-2 text-xs font-body font-normal tracking-normal', light ? 'text-white/70' : 'text-muted')}>
        Global Nursing Foundation
      </span>
    </div>
  )
}
