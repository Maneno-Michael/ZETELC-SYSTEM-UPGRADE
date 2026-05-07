import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import {
  Shield, Camera, Fingerprint, Zap, Bell, Package, ArrowRight,
  CheckCircle, Phone, Star, ChevronRight, MessageCircle, Award, Users, Clock
} from 'lucide-react'
import { SectionHeader } from '@/components/SectionHeader'
import { HeroSlideshow } from '@/components/HeroSlideshow'

const brands = ['TIANDY', 'DAHUA', 'HikVision', 'UNV / OWLVIEW', 'ZKTeco', 'Hikvision IP']

const services = [
  {
    icon: Camera,
    title: 'CCTV Camera Systems',
    desc: 'Professional HD & IP surveillance camera installation and setup. Indoor/outdoor systems for homes, offices, and commercial properties.',
    iconBg: 'bg-primary',
  },
  {
    icon: Fingerprint,
    title: 'Biometric Systems',
    desc: 'Advanced fingerprint and face recognition access control systems. Hardware and software installation for attendance and security.',
    iconBg: 'bg-secondary',
  },
  {
    icon: Zap,
    title: 'Electric Fence',
    desc: 'High-security electric perimeter fencing for residential and commercial premises. Deterrent, detection, and alerting capabilities.',
    iconBg: 'bg-primary',
  },
  {
    icon: Bell,
    title: 'Electric Bell Systems',
    desc: 'Manual and automatic electric bell systems for schools, offices, and industrial facilities. Timed and on-demand configurations.',
    iconBg: 'bg-secondary',
  },
  {
    icon: Package,
    title: 'Electrical Materials',
    desc: 'Supply of quality electrical components, wiring materials, and accessories for security and building installations.',
    iconBg: 'bg-primary',
  },
  {
    icon: Shield,
    title: 'General Supplies',
    desc: 'White boards, projectors, PA systems, and other digital office supplies to complete your digitization journey.',
    iconBg: 'bg-secondary',
  },
]

const testimonials = [
  {
    name: 'John Kamau',
    role: 'School Principal, Nairobi',
    text: 'ZETELC SYSTEMS installed our CCTV and electric bell system flawlessly. The installation was professional and the service outstanding.',
    rating: 5,
  },
  {
    name: 'Mary Wanjiru',
    role: 'Business Owner, Mombasa',
    text: 'The biometric attendance system they installed has transformed our HR operations. Reliable, accurate, and perfectly set up.',
    rating: 5,
  },
  {
    name: 'Peter Odhiambo',
    role: 'Property Manager',
    text: 'Our electric fence from ZETELC SYSTEMS gives us 24/7 peace of mind. Great value and professional workmanship.',
    rating: 5,
  },
]

const stats = [
  { value: '500+', label: 'Installations', icon: Camera },
  { value: '200+', label: 'Happy Clients', icon: Users },
  { value: '8+', label: 'Years Experience', icon: Clock },
  { value: '6', label: 'Brands Supported', icon: Award },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export function HomePage() {
  return (
    <div>
      {/* HERO SLIDESHOW */}
      <HeroSlideshow />

      {/* TRUSTED BRANDS */}
      <section className="py-10 bg-primary/5 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-muted-foreground text-sm uppercase tracking-widest mb-6 font-medium">Trusted Brands We Install &amp; Support</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {brands.map((brand) => (
              <div
                key={brand}
                className="px-5 py-2.5 bg-white border border-border rounded-lg shadow-sm text-primary font-bold text-sm hover:border-secondary hover:text-secondary transition-colors"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="What We Do"
            title="Comprehensive Security & Digitization Solutions"
            subtitle="From surveillance cameras to biometric access control, we deliver end-to-end security systems professionally installed and configured."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl ${svc.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <svc.icon size={24} className="text-white" />
                </div>
                <h3 className="text-primary font-bold text-lg mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>{svc.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{svc.desc}</p>
                <Link to="/services" className="text-secondary text-sm font-medium hover:text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ChevronRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 section-gradient">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionHeader
              badge="Why ZETELC"
              title="Why Choose ZETELC SYSTEMS?"
              subtitle="We combine technical expertise with genuine commitment to deliver security solutions that truly protect what matters most."
              center={false}
            />
            <div className="space-y-4">
              {[
                { title: 'Expert Installation', desc: 'Certified technicians with years of hands-on experience in security system installation.' },
                { title: 'Premium Brands', desc: 'We only work with industry-leading brands: TIANDY, DAHUA, HikVision, and UNV/OWLVIEW.' },
                { title: 'Full-Service Support', desc: "From consultation to installation to after-sales support — we're with you every step." },
                { title: 'Competitive Pricing', desc: 'Quality security solutions at fair, transparent prices with no hidden charges.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm">{item.title}</h4>
                    <p className="text-muted-foreground text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon size={20} className="text-primary" />
                  </div>
                  <div className="text-3xl font-extrabold text-primary mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>{stat.value}</div>
                  <div className="text-muted-foreground text-xs font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-5 green-gradient rounded-xl text-white">
              <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>Ready to Secure Your Property?</h3>
              <p className="text-white/80 text-sm mb-4">Contact us today for a free consultation and site assessment.</p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:0717170170" className="inline-flex items-center gap-2 px-4 py-2 bg-white text-secondary font-semibold text-sm rounded-lg hover:bg-white/90 transition-colors">
                  <Phone size={16} /> Call Now
                </a>
                <a href="https://wa.me/254717170170" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 border border-white/30 text-white font-semibold text-sm rounded-lg hover:bg-white/30 transition-colors">
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="py-20 px-4 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Client Stories" title="What Our Clients Say" subtitle="Trusted by hundreds of clients across Kenya for reliable security solutions." light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/10 border border-white/15 rounded-xl p-6 hover:bg-white/15 transition-all"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <div className="flex gap-1 mb-3">
                  {Array(t.rating).fill(0).map((_, idx) => (
                    <Star key={idx} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/50 text-xs">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-white font-semibold rounded-lg hover:bg-accent transition-colors"
            >
              Read All Reviews <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Start Your Security Upgrade Today
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Talk to our expert team. We&apos;ll assess your needs and provide the best security solution at a competitive price.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-secondary font-bold rounded-lg hover:bg-white/90 transition-colors shadow-lg">
              Get Free Consultation <ArrowRight size={18} />
            </Link>
            <a href="tel:0717170170" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/20 border border-white/30 text-white font-bold rounded-lg hover:bg-white/30 transition-colors">
              <Phone size={18} /> 0717 170 170
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
