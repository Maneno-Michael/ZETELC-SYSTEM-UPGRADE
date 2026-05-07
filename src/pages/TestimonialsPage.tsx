import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { Star, Quote, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { SectionHeader } from '@/components/SectionHeader'

const testimonials = [
  {
    name: 'John Kamau',
    role: 'School Principal',
    company: 'Nairobi Preparatory Academy',
    location: 'Nairobi',
    service: 'CCTV & Bell System',
    text: "ZETELC SYSTEMS transformed our school's security completely. They installed a 24-camera CCTV system and an automated bell system that has made administration so much easier. Professional, timely, and excellent value.",
    rating: 5,
    initials: 'JK',
    color: 'bg-blue-500',
  },
  {
    name: 'Mary Wanjiru',
    role: 'Business Owner',
    company: 'Wanjiru Enterprises',
    location: 'Mombasa',
    service: 'Biometric System',
    text: 'The biometric attendance system has revolutionized our HR processes. We can now accurately track employee attendance and integrate directly with payroll. Dennis was very helpful during setup and training.',
    rating: 5,
    initials: 'MW',
    color: 'bg-green-500',
  },
  {
    name: 'Peter Odhiambo',
    role: 'Property Manager',
    company: 'Silverstone Properties',
    location: 'Kisumu',
    service: 'Electric Fence',
    text: 'Our residential estate now has a fully functional electric fence perimeter. ZETELC SYSTEMS did a clean, professional installation. The team was knowledgeable and the service was excellent from start to finish.',
    rating: 5,
    initials: 'PO',
    color: 'bg-orange-500',
  },
  {
    name: 'Alice Mutua',
    role: 'Factory Manager',
    company: 'AgroProcessors Ltd',
    location: 'Thika',
    service: 'CCTV System',
    text: 'We needed a robust surveillance system for our factory floor. ZETELC SYSTEMS installed DAHUA IP cameras throughout our facility with remote monitoring. The system has already paid for itself by deterring theft incidents.',
    rating: 5,
    initials: 'AM',
    color: 'bg-purple-500',
  },
  {
    name: 'Joseph Njoroge',
    role: 'IT Manager',
    company: 'Nairobi Tech Hub',
    location: 'Nairobi',
    service: 'CCTV & Access Control',
    text: 'Excellent installation of HikVision cameras and biometric access control for our co-working space. The system integrates perfectly and the mobile monitoring app works flawlessly. Highly recommend ZETELC.',
    rating: 5,
    initials: 'JN',
    color: 'bg-teal-500',
  },
  {
    name: 'Grace Chebet',
    role: 'Hospital Administrator',
    company: 'Valley General Hospital',
    location: 'Eldoret',
    service: 'Complete Security Solution',
    text: 'ZETELC SYSTEMS did a comprehensive security upgrade for our hospital — CCTV cameras in all public areas, biometric staff access, and electric fence for the compound. Professional team, quality products, great support.',
    rating: 5,
    initials: 'GC',
    color: 'bg-red-500',
  },
]

export function TestimonialsPage() {
  const avgRating = testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length

  return (
    <div>
      <PageHero
        title="Client Testimonials"
        subtitle="Real reviews from real clients across Kenya who trust ZETELC SYSTEMS for their security needs."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Testimonials' }]}
      />

      {/* Rating summary */}
      <section className="py-12 px-4 bg-primary/5 border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-extrabold text-primary mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>{avgRating.toFixed(1)}</div>
            <div className="flex justify-center gap-1 mb-1">
              {Array(5).fill(0).map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
            </div>
            <div className="text-muted-foreground text-sm">Average Rating</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold text-primary mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>200+</div>
            <div className="text-muted-foreground text-sm mt-2">Happy Clients</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold text-primary mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>98%</div>
            <div className="text-muted-foreground text-sm mt-2">Satisfaction Rate</div>
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Reviews" title="What Our Clients Say" subtitle="Hear directly from the businesses and individuals we've helped across Kenya." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <Quote size={24} className="text-secondary/50" />
                  <div className="flex gap-0.5">
                    {Array(t.rating).fill(0).map((_, idx) => (
                      <Star key={idx} size={13} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-foreground/75 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-primary text-sm">{t.name}</div>
                      <div className="text-muted-foreground text-xs">{t.role} · {t.company}</div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="px-1.5 py-0.5 bg-secondary/10 text-secondary text-[10px] rounded font-medium">{t.service}</span>
                        <span className="text-muted-foreground text-[10px]">{t.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 section-gradient">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader badge="Join Them" title="Become Our Next Success Story" subtitle="Ready to experience the ZETELC SYSTEMS difference?" />
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">
              Get Started Today <ArrowRight size={18} />
            </Link>
            <Link to="/gallery" className="inline-flex items-center gap-2 px-7 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
