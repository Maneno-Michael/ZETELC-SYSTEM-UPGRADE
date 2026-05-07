import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { ArrowRight, MessageCircle, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1676630656246-3047520adfdf?q=80&w=1920',
    title: 'Professional CCTV Installation',
    subtitle: 'High-definition surveillance systems for homes, schools, and commercial premises across Kenya.',
    tags: ['CCTV Systems', 'IP Cameras', 'NVR/DVR'],
  },
  {
    image: 'https://images.unsplash.com/photo-1588007341948-a2ae5cde9470?q=80&w=1920',
    title: 'Secure Electric Fencing',
    subtitle: 'High-security perimeter protection that deters intruders and alerts you instantly.',
    tags: ['Electric Fence', 'Alarm Systems', 'Perimeter Security'],
  },
  {
    image: 'https://images.unsplash.com/photo-1748027869634-fc2e545cfb0c?q=80&w=1920',
    title: 'Biometric Access Control',
    subtitle: 'Modernize your attendance and security with advanced fingerprint and face recognition systems.',
    tags: ['Biometrics', 'Access Control', 'Attendance'],
  },
  {
    image: 'https://images.unsplash.com/photo-1569515501972-26d4f39c8a93?q=80&w=1920',
    title: 'Smart Security Solutions',
    subtitle: 'End-to-end security and digitization solutions tailored to your unique requirements.',
    tags: ['Bell Systems', 'Supplies', 'Consultation'],
  },
]

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear scale-110"
            style={{ 
              backgroundImage: `url(${slides[current].image})`,
              transform: 'scale(1.1) rotate(0.01deg)' 
            }}
          />
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-white/90 text-sm font-medium">ZETELC SYSTEMS — Security & Digitization</span>
              </div>
              
              <h1
                className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                {slides[current].title.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 || i === 2 ? 'text-secondary' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h1>

              <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8">
                {slides[current].subtitle}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {slides[current].tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5 text-sm text-white/70 bg-white/10 px-3 py-1.5 rounded-full border border-white/15 backdrop-blur-sm">
                    <CheckCircle size={13} className="text-secondary" /> {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-lg hover:bg-accent transition-all shadow-lg shadow-secondary/30 scale-100 hover:scale-105"
                >
                  Get a Free Quote <ArrowRight size={20} />
                </Link>
                <a
                  href="https://wa.me/254717170170"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/25 text-white font-bold rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  <MessageCircle size={20} /> WhatsApp Us
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-10 right-10 flex gap-4">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === i ? 'w-10 bg-secondary' : 'w-2 bg-white/30'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
