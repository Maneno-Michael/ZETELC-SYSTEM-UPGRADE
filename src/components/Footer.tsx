import { Link } from '@tanstack/react-router'
import { Phone, Mail, MapPin, Shield, Globe, Share2, ExternalLink, MessageCircle } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
                <Shield size={20} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  ZETELC <span className="text-secondary">SYSTEMS</span>
                </div>
              </div>
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-5">
              A solution to your digitization &amp; security needs. Providing professional security installations and digital solutions across Kenya.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Globe, href: '#', label: 'Facebook' },
                { icon: Share2, href: '#', label: 'Twitter' },
                { icon: ExternalLink, href: '#', label: 'LinkedIn' },
                { icon: MessageCircle, href: 'https://wa.me/254717170170', label: 'WhatsApp' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Products & Services', to: '/services' },
                { label: 'CCTV Solutions', to: '/cctv' },
                { label: 'Gallery', to: '/gallery' },
                { label: 'Testimonials', to: '/testimonials' },
                { label: 'Contact Us', to: '/contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/60 text-sm hover:text-secondary transition-colors"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">Our Services</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              {[
                'CCTV Camera Systems',
                'Biometric Hardware & Software',
                'Electric Fence Installation',
                'Electric Bell Systems',
                'Electrical Materials Supply',
                'Access Control Systems',
                'White Board & Supplies',
                'Digital Security Solutions',
              ].map((s) => (
                <li key={s} className="flex items-start gap-1.5">
                  <span className="text-secondary mt-0.5">▸</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={15} className="text-secondary mt-0.5 shrink-0" />
                <div>
                  <a href="tel:0717170170" className="text-white/70 text-sm hover:text-white transition-colors block">0717 170 170</a>
                  <a href="tel:0716098646" className="text-white/70 text-sm hover:text-white transition-colors block">0716 098 646</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={15} className="text-secondary mt-0.5 shrink-0" />
                <a href="mailto:zetelcsystems@gmail.com" className="text-white/70 text-sm hover:text-white transition-colors">
                  zetelcsystems@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-secondary mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">Kenya</span>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle size={15} className="text-secondary mt-0.5 shrink-0" />
                <a href="https://wa.me/254717170170" target="_blank" rel="noreferrer" className="text-white/70 text-sm hover:text-white transition-colors">
                  WhatsApp: 0717 170 170
                </a>
              </div>
            </div>
            <div className="mt-5 p-3 bg-secondary/20 rounded-lg border border-secondary/30">
              <p className="text-sm text-white/80 font-medium">Contact Person</p>
              <p className="text-sm text-white/60">Kipchirchir Dennis Ngeno</p>
              <p className="text-xs text-secondary mt-0.5">Sales Person / Technician</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {year} ZETELC SYSTEMS. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Security &amp; Digitization Solutions Provider — Kenya
          </p>
        </div>
      </div>
    </footer>
  )
}
