import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import {
  Camera, Fingerprint, Zap, Bell, Package, Layout,
  CheckCircle, ArrowRight, Phone
} from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { SectionHeader } from '@/components/SectionHeader'

const serviceCategories = [
  {
    icon: Camera,
    title: 'CCTV Camera Systems',
    desc: 'End-to-end CCTV surveillance solutions for homes, schools, offices, and commercial properties. We supply, install, configure, and maintain HD and IP camera systems.',
    features: [
      'Indoor & Outdoor IP Cameras',
      'HD & 4K Resolution Options',
      'Night Vision & IR Cameras',
      'Remote Monitoring via Mobile App',
      'NVR/DVR Recording Systems',
      'Cloud & Local Storage Options',
      'PTZ (Pan-Tilt-Zoom) Cameras',
      'Multi-site Monitoring Systems',
    ],
    brands: ['TIANDY', 'DAHUA', 'HikVision', 'UNV/OWLVIEW'],
    cta: '/cctv',
    ctaLabel: 'Explore CCTV Solutions',
    color: 'primary',
  },
  {
    icon: Fingerprint,
    title: 'Biometric Hardware & Software',
    desc: 'Advanced biometric access control systems for precise employee attendance tracking and secure facility access management.',
    features: [
      'Fingerprint Recognition Systems',
      'Face Recognition Terminals',
      'Access Control Door Controllers',
      'Attendance Management Software',
      'Payroll System Integration',
      'Multi-door Access Solutions',
      'Visitor Management Systems',
      'Remote Management Portal',
    ],
    brands: ['ZKTeco', 'HikVision'],
    cta: '/contact',
    ctaLabel: 'Get Biometric Quote',
    color: 'secondary',
  },
  {
    icon: Zap,
    title: 'Electric Fence Systems',
    desc: 'High-security perimeter protection that deters, detects, and alerts. Ideal for residential homes, commercial buildings, schools, and industrial facilities.',
    features: [
      'High-tension Energizer Units',
      'Galvanized Steel Wire Installation',
      'Alarm Integration & Monitoring',
      'Remote Arming/Disarming',
      'Solar-powered Options Available',
      'Gate & Driveway Integration',
      'Compliant with Kenyan Regulations',
      'Maintenance & Repair Services',
    ],
    brands: ['Nemtek', 'Energizer Pro'],
    cta: '/contact',
    ctaLabel: 'Get Fence Quote',
    color: 'primary',
  },
  {
    icon: Bell,
    title: 'Electric Bell Systems',
    desc: 'Reliable manual and automatic electric bell systems for schools, factories, offices, and industrial environments.',
    features: [
      'Fully Automatic Timed Systems',
      'Manual Override Controls',
      'Multi-zone Bell Controllers',
      'Programmable Schedules (up to 100 bells)',
      'Battery Backup Systems',
      'PA System Integration',
      'Weatherproof Outdoor Bells',
      'Custom Bell Tones Available',
    ],
    brands: ['Custom Systems'],
    cta: '/contact',
    ctaLabel: 'Get Bell System Quote',
    color: 'secondary',
  },
  {
    icon: Package,
    title: 'Electrical Materials Supply',
    desc: 'Quality electrical components and materials for security installations and general building electrical work.',
    features: [
      'Security Cable (Coaxial, CAT6, HDMI)',
      'Conduit Pipes & Fittings',
      'Electrical Junction Boxes',
      'Power Supplies & Adaptors',
      'Cable Trays & Management',
      'Switches, Sockets & Breakers',
      'UPS & Battery Backup Systems',
      'Tools & Installation Equipment',
    ],
    brands: ['Various Quality Brands'],
    cta: '/contact',
    ctaLabel: 'Request Materials Quote',
    color: 'primary',
  },
  {
    icon: Layout,
    title: 'White Board & General Supplies',
    desc: 'Complete your office or classroom digitization with high-quality white boards, projectors, and general digital supplies.',
    features: [
      'Interactive White Boards',
      'Standard White Boards (All Sizes)',
      'Projectors & Screens',
      'PA Systems & Speakers',
      'Marker Boards & Cork Boards',
      'Classroom AV Equipment',
      'Office Digital Supplies',
      'Custom Signage & Display Systems',
    ],
    brands: ['Various Brands'],
    cta: '/contact',
    ctaLabel: 'Enquire About Supplies',
    color: 'secondary',
  },
]

export function ServicesPage() {
  return (
    <div>
      <PageHero
        title="Products & Services"
        subtitle="Comprehensive security and digitization solutions for every need — professionally supplied, installed, and supported."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />

      {/* Services list */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {serviceCategories.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              {/* Info */}
              <div>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${svc.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                  <svc.icon size={13} /> {svc.title}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>{svc.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{svc.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {svc.brands.map((b) => (
                    <span key={b} className="px-3 py-1 bg-muted rounded-full text-xs font-semibold text-muted-foreground border border-border">
                      {b}
                    </span>
                  ))}
                </div>
                <Link
                  to={svc.cta}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors ${svc.color === 'primary' ? 'bg-primary text-white hover:bg-primary/90' : 'bg-secondary text-white hover:bg-accent'}`}
                >
                  {svc.ctaLabel} <ArrowRight size={16} />
                </Link>
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {svc.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5 p-3 bg-white border border-border rounded-lg shadow-sm">
                    <CheckCircle size={15} className="text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 hero-gradient">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>Need a Custom Solution?</h2>
          <p className="text-white/75 text-lg mb-8">Every property has unique security needs. Let&apos;s discuss yours.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-accent transition-colors">
              Request a Quote <ArrowRight size={18} />
            </Link>
            <a href="tel:0717170170" className="inline-flex items-center gap-2 px-7 py-3 bg-white/15 border border-white/25 text-white font-bold rounded-lg hover:bg-white/25 transition-colors" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
              <Phone size={18} /> 0717 170 170
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
