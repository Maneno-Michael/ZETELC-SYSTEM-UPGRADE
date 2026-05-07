import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { CheckCircle, Shield, Target, Eye, Heart, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { SectionHeader } from '@/components/SectionHeader'

const values = [
  { icon: Shield, title: 'Integrity', desc: 'We maintain the highest standards of honesty and transparency in all our dealings.' },
  { icon: Target, title: 'Precision', desc: 'Meticulous attention to detail in every installation — from cable routing to configuration.' },
  { icon: Eye, title: 'Vigilance', desc: 'Constant awareness of the latest security technologies to deliver cutting-edge solutions.' },
  { icon: Heart, title: 'Client Focus', desc: 'Your security and satisfaction drive every decision we make as a company.' },
]

const team = [
  {
    name: 'Kipchirchir Dennis Ngeno',
    role: 'Sales Person & Technician',
    desc: 'Lead security technician and sales expert with hands-on experience in CCTV, biometrics, and electric fence installations across Kenya.',
    initials: 'KD',
  },
]

const milestones = [
  { year: '2016', event: 'ZETELC SYSTEMS founded with a focus on CCTV installation.' },
  { year: '2018', event: 'Expanded to biometric systems and access control solutions.' },
  { year: '2020', event: 'Added electric fence installation to our service portfolio.' },
  { year: '2022', event: 'Became authorized dealers for TIANDY and DAHUA brands.' },
  { year: '2024', event: 'Reached 500+ successful installations across Kenya.' },
]

export function AboutPage() {
  return (
    <div>
      <PageHero
        title="About ZETELC SYSTEMS"
        subtitle="A trusted name in security and digitization solutions across Kenya."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
      />

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionHeader badge="Who We Are" title="Protecting What Matters Most" center={false} />
            <p className="text-muted-foreground leading-relaxed mb-5">
              ZETELC SYSTEMS is a professional security and digitization solutions company based in Kenya. We specialize in the supply, installation, and maintenance of CCTV cameras, biometric systems, electric fencing, electric bell systems, and other security technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of certified technicians brings years of hands-on experience to every project. We work with Kenya&apos;s homes, schools, businesses, and institutions to create safer, smarter environments that give clients peace of mind.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '500+', label: 'Installations Completed' },
                { val: '200+', label: 'Satisfied Clients' },
                { val: '6', label: 'Premium Brands' },
                { val: '24/7', label: 'Support Available' },
              ].map((s) => (
                <div key={s.label} className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="text-2xl font-extrabold text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>{s.val}</div>
                  <div className="text-muted-foreground text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-primary rounded-xl text-white">
                <Target size={28} className="text-secondary mb-3" />
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Our Mission</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  To deliver reliable, affordable, and professional security and digitization solutions that empower Kenyan homes and businesses.
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-xl text-white">
                <Eye size={28} className="text-white/80 mb-3" />
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Our Vision</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  To be Kenya&apos;s most trusted provider of security and digitization solutions, known for quality, integrity, and innovation.
                </p>
              </div>
              <div className="col-span-2 p-6 bg-white border-2 border-primary/15 rounded-xl">
                <h3 className="font-bold text-primary text-lg mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>What Sets Us Apart</h3>
                <div className="space-y-2">
                  {[
                    'Certified and experienced installation team',
                    'Genuine products from authorized distributors',
                    'Post-installation support and maintenance',
                    'Competitive pricing with transparent quotations',
                  ].map((p) => (
                    <div key={p} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle size={14} className="text-secondary shrink-0" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 section-gradient">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Our Values" title="The Principles Behind Our Work" subtitle="Four values guide everything we do at ZETELC SYSTEMS." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-6 border border-border shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-bold text-primary mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Our Team" title="Meet the Experts" subtitle="Dedicated professionals committed to your security." />
          <div className="flex justify-center">
            {team.map((member) => (
              <div key={member.name} className="bg-white border border-border rounded-2xl overflow-hidden shadow-md max-w-sm w-full">
                <div className="bg-primary h-40 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-secondary/80 border-4 border-white flex items-center justify-center text-3xl font-bold text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    {member.initials}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-primary text-xl mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>{member.name}</h3>
                  <p className="text-secondary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 hero-gradient">
        <div className="max-w-3xl mx-auto">
          <SectionHeader badge="Our Journey" title="How We've Grown" subtitle="Key milestones on our path to becoming Kenya's trusted security partner." light />
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-white/20" />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative flex items-center gap-6 mb-8 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} flex-row`}
              >
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-secondary border-2 border-white -translate-x-1/2" />
                <div className={`ml-12 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:pl-10'}`}>
                  <div className="bg-white/10 border border-white/15 rounded-xl p-4" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                    <div className="text-secondary font-bold text-lg mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>{m.year}</div>
                    <p className="text-white/80 text-sm">{m.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>Partner With Us Today</h2>
          <p className="text-white/80 mb-6">Join hundreds of satisfied clients who trust ZETELC SYSTEMS for their security needs.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-secondary font-bold rounded-lg hover:bg-white/90 transition-colors">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
