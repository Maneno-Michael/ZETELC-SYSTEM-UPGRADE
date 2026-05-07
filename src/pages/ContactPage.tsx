import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { SectionHeader } from '@/components/SectionHeader'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email').or(z.literal('')),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactForm = z.infer<typeof contactSchema>

const services = [
  'CCTV Camera Systems',
  'Biometric Hardware & Software',
  'Electric Fence Installation',
  'Electric Bell Systems',
  'Electrical Materials Supply',
  'White Board & General Supplies',
  'Access Control Systems',
  'Other / General Enquiry',
]

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (_data: ContactForm) => {
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitted(true)
    reset()
  }

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch for a free consultation and quotation. Our team is ready to help."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      {/* Contact options */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              { icon: Phone, title: 'Call Us', detail: '0717 170 170', sub: '0716 098 646', action: 'tel:0717170170', label: 'Call Now', color: 'bg-primary' },
              { icon: MessageCircle, title: 'WhatsApp', detail: '0717 170 170', sub: 'Quick responses', action: 'https://wa.me/254717170170', label: 'Chat Now', color: 'bg-green-500' },
              { icon: Mail, title: 'Email Us', detail: 'zetelcsystems@gmail.com', sub: 'We reply within 24 hours', action: 'mailto:zetelcsystems@gmail.com', label: 'Send Email', color: 'bg-secondary' },
              { icon: Clock, title: 'Working Hours', detail: 'Mon–Sat: 8am–6pm', sub: 'Emergency support available', action: null, label: null, color: 'bg-orange-500' },
            ].map((contact) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className={`w-12 h-12 ${contact.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <contact.icon size={22} className="text-white" />
                </div>
                <h3 className="font-semibold text-primary text-sm mb-1">{contact.title}</h3>
                <p className="text-foreground/80 text-sm font-medium">{contact.detail}</p>
                <p className="text-muted-foreground text-xs mb-3">{contact.sub}</p>
                {contact.action && contact.label && (
                  <a
                    href={contact.action}
                    target={contact.action.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-secondary text-xs font-semibold hover:text-accent transition-colors"
                  >
                    {contact.label} <ArrowRight size={12} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Form + contact info */}
          <div className="grid lg:grid-cols-[1fr_400px] gap-12">
            {/* Contact form */}
            <div>
              <SectionHeader badge="Get in Touch" title="Send Us a Message" subtitle="Fill in the form and we'll get back to you within one business day." center={false} />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-secondary/10 border border-secondary/30 rounded-xl p-10 text-center"
                >
                  <CheckCircle size={48} className="text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Message Received!</h3>
                  <p className="text-muted-foreground mb-6">Thank you for contacting ZETELC SYSTEMS. We&apos;ll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                      <input
                        {...register('name')}
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-background"
                      />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label>
                      <input
                        {...register('phone')}
                        placeholder="07XX XXX XXX"
                        className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-background"
                      />
                      {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="your@email.com (optional)"
                      className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-background"
                    />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Service Needed *</label>
                    <select
                      {...register('service')}
                      className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-background"
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <p className="text-destructive text-xs mt-1">{errors.service.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      placeholder="Describe your security needs, property type, and any specific requirements…"
                      className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none bg-background"
                    />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 disabled:opacity-60 transition-colors"
                  >
                    {isSubmitting ? 'Sending…' : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact card */}
            <div className="space-y-5">
              {/* Contact person */}
              <div className="bg-primary rounded-xl p-6 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-secondary/60 flex items-center justify-center text-xl font-bold shrink-0">KD</div>
                  <div>
                    <div className="font-bold text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>Kipchirchir Dennis Ngeno</div>
                    <div className="text-secondary text-sm">Sales Person &amp; Technician</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <a href="tel:0717170170" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm">
                    <Phone size={15} className="text-secondary shrink-0" /> 0717 170 170
                  </a>
                  <a href="tel:0716098646" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm">
                    <Phone size={15} className="text-secondary shrink-0" /> 0716 098 646
                  </a>
                  <a href="mailto:zetelcsystems@gmail.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm">
                    <Mail size={15} className="text-secondary shrink-0" /> zetelcsystems@gmail.com
                  </a>
                  <a href="https://wa.me/254717170170" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm">
                    <MessageCircle size={15} className="text-secondary shrink-0" /> WhatsApp Chat
                  </a>
                </div>
              </div>

              {/* Why contact us */}
              <div className="bg-white border border-border rounded-xl p-5 shadow-sm">
                <h3 className="font-semibold text-primary mb-3 text-sm">Why Contact ZETELC SYSTEMS?</h3>
                <div className="space-y-2.5">
                  {[
                    'Free site survey and consultation',
                    'Transparent, no-hidden-cost quotations',
                    'Fast response — same-day in most cases',
                    'Certified and experienced technicians',
                    'Quality products with warranty',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={14} className="text-secondary shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick WhatsApp */}
              <a
                href="https://wa.me/254717170170?text=Hello%20ZETELC%20SYSTEMS%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full py-3.5 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={20} /> Chat on WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
