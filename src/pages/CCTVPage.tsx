import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { Camera, CheckCircle, ArrowRight, Shield, Wifi, Eye, Layers, Phone } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { SectionHeader } from '@/components/SectionHeader'

const brands = [
  {
    name: 'TIANDY',
    tagline: 'Professional AI-powered CCTV',
    desc: 'TIANDY offers cutting-edge AI surveillance cameras with deep learning capabilities, ultra-HD resolution, and intelligent analytics for superior security monitoring.',
    features: ['Deep Learning AI Analytics', '4K Ultra HD Resolution', 'Smart Detection (Face, Vehicle)', 'Low Light StarLight Technology', 'Active Deterrence Cameras'],
    color: 'bg-blue-600',
  },
  {
    name: 'DAHUA',
    tagline: 'Smart Surveillance Technology',
    desc: 'Dahua Technology is a world-leading video-centric smart IoT solution provider. Their cameras combine reliability, innovation, and smart features at competitive prices.',
    features: ['WizSense AI Technology', 'Full-color Night Vision', '4K & 8MP Options', 'Perimeter Protection', 'HDCVI & IP Cameras'],
    color: 'bg-red-600',
  },
  {
    name: 'HikVision',
    tagline: "World's Leading CCTV Brand",
    desc: "Hikvision is the world's largest manufacturer of CCTV products. Renowned for reliability, extensive product range, and excellent price-to-performance ratio.",
    features: ['AcuSense Technology', 'ColorVu Full-Color Night', 'Deep Learning Algorithms', 'H.265+ Compression', 'Wide Product Range'],
    color: 'bg-orange-600',
  },
  {
    name: 'UNV / OWLVIEW',
    tagline: 'Reliable & Cost-Effective',
    desc: 'Uniview (UNV) delivers professional-grade IP surveillance products with excellent value for money, trusted by installers and end-users across Africa.',
    features: ['HD IP Camera Range', 'Easy Setup & Configuration', 'Mobile App Monitoring', 'PoE Support', 'Weatherproof Options'],
    color: 'bg-green-600',
  },
]

const useCases = [
  { icon: Shield, title: 'Residential', desc: 'Protect your home with discreet, reliable cameras covering all entry points and perimeters.' },
  { icon: Layers, title: 'Commercial', desc: 'Secure office buildings, retail stores, and commercial premises with scalable systems.' },
  { icon: Eye, title: 'Schools & Campuses', desc: 'Comprehensive campus security with monitoring centers and remote access for administrators.' },
  { icon: Wifi, title: 'Industrial Facilities', desc: 'Robust IP cameras designed for harsh industrial environments with wide coverage.' },
]

export function CCTVPage() {
  return (
    <div>
      <PageHero
        title="CCTV Surveillance Solutions"
        subtitle="Professional surveillance camera installation using Kenya's most trusted brands — TIANDY, DAHUA, HikVision, and UNV/OWLVIEW."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'CCTV Solutions' }]}
      >
        <div className="flex flex-wrap gap-2 mt-5">
          {['TIANDY', 'DAHUA', 'HikVision', 'UNV/OWLVIEW'].map((b) => (
            <span key={b} className="px-3 py-1.5 bg-white/15 border border-white/25 rounded-full text-xs text-white font-semibold" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>{b}</span>
          ))}
        </div>
      </PageHero>

      {/* Why CCTV */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Why CCTV?" title="Protect Your Property 24/7" subtitle="Modern CCTV systems provide constant surveillance, deterrence, and evidence recording." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {useCases.map((u, i) => (
              <motion.div
                key={u.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <u.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-bold text-primary mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>{u.title}</h3>
                <p className="text-muted-foreground text-sm">{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 px-4 section-gradient">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Our Brands" title="Industry-Leading CCTV Brands" subtitle="We are authorized dealers and installers for these globally recognized brands." />
          <div className="space-y-8">
            {brands.map((brand, i) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-8 items-start bg-white rounded-2xl shadow-md border border-border overflow-hidden ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${brand.color} p-8 lg:w-64 shrink-0 flex items-center justify-center min-h-36 w-full`}>
                  <div className="text-center">
                    <div className="text-white font-extrabold text-3xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{brand.name}</div>
                    <div className="text-white/70 text-sm mt-1">{brand.tagline}</div>
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <h3 className="font-bold text-primary text-xl mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>{brand.name} Cameras</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{brand.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {brand.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle size={13} className="text-secondary shrink-0" />
                        <span className="text-foreground/80">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-1.5 mt-4 text-secondary text-sm font-semibold hover:text-accent transition-colors">
                    Get {brand.name} Quote <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Our Process" title="How We Install Your CCTV System" subtitle="A professional, hassle-free installation process from start to finish." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Site Survey', desc: 'We visit your property to assess coverage needs and camera placement.' },
              { step: '02', title: 'Custom Design', desc: 'We design a tailored system with the right cameras for your budget.' },
              { step: '03', title: 'Quotation', desc: 'Transparent, itemized quote with no hidden costs.' },
              { step: '04', title: 'Installation', desc: 'Professional installation by certified technicians.' },
              { step: '05', title: 'Training & Handover', desc: 'We train you on the system and provide ongoing support.' },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative bg-white border border-border rounded-xl p-5 shadow-sm"
              >
                {i < 4 && <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 text-muted-foreground text-2xl z-10">→</div>}
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm mb-3">
                  {step.step}
                </div>
                <h4 className="font-semibold text-primary text-sm mb-1">{step.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Camera size={48} className="text-secondary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>Ready to Install Your CCTV System?</h2>
          <p className="text-white/75 mb-8">Contact us for a free site survey and no-obligation quotation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-accent transition-colors">
              Get Free Survey <ArrowRight size={18} />
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
