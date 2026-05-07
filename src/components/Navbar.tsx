import { useState, useEffect } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Menu, X, Phone, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'CCTV Solutions', to: '/cctv' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [currentPath])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'bg-primary',
        scrolled && 'nav-scrolled'
      )}
    >
      {/* Top bar */}
      <div className="bg-primary/80 border-b border-white/10 py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-white/70">
          <span>Kenya&apos;s Trusted Security &amp; Digitization Partner</span>
          <div className="flex items-center gap-4">
            <a href="tel:0717170170" className="flex items-center gap-1 hover:text-white transition-colors">
              <Phone size={11} /> 0717 170 170
            </a>
            <a href="mailto:zetelcsystems@gmail.com" className="hover:text-white transition-colors">
              zetelcsystems@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center shadow-md group-hover:bg-accent transition-colors">
              <Shield size={20} className="text-white" />
            </div>
            <div>
              <span className="font-bold text-lg text-white tracking-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
                ZETELC
              </span>
              <span className="text-secondary text-lg font-bold" style={{ fontFamily: 'Raleway, sans-serif' }}> SYSTEMS</span>
              <div className="text-white/50 text-[9px] leading-none tracking-widest uppercase">Security &amp; Digitization</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-all duration-150',
                  currentPath === link.to
                    ? 'bg-secondary text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-2 px-4 py-2 rounded-md bg-secondary text-white text-sm font-semibold hover:bg-accent transition-colors shadow-sm"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'block px-4 py-2.5 rounded-md text-sm font-medium transition-colors',
                  currentPath === link.to
                    ? 'bg-secondary text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <Link
                to="/contact"
                className="block w-full text-center px-4 py-3 rounded-md bg-secondary text-white text-sm font-semibold hover:bg-accent transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
