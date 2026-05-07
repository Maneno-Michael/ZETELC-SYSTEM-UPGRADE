import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { SectionHeader } from '@/components/SectionHeader'

const categories = ['All', 'CCTV', 'Biometric', 'Electric Fence', 'Bell Systems', 'Electrical']

const galleryItems = [
  // CCTV
  { id: 1, category: 'CCTV', title: 'IP Dome Camera Installation', location: 'Office Building, Nairobi', img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80', brand: 'TIANDY' },
  { id: 2, category: 'CCTV', title: 'Multi-Camera DVR Setup', location: 'Retail Store, Mombasa', img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&q=80', brand: 'DAHUA' },
  { id: 3, category: 'CCTV', title: 'Outdoor PTZ Camera', location: 'Industrial Complex, Nakuru', img: 'https://images.unsplash.com/photo-1565117131175-a3f0d6e0da54?w=600&q=80', brand: 'HikVision' },
  { id: 4, category: 'CCTV', title: 'IP Camera Network Install', location: 'School Campus, Eldoret', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', brand: 'UNV' },
  { id: 5, category: 'CCTV', title: 'Bullet Camera Perimeter', location: 'Warehouse, Thika', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80', brand: 'TIANDY' },
  // Biometric
  { id: 6, category: 'Biometric', title: 'Fingerprint Access Terminal', location: 'Corporate Office, Nairobi', img: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=600&q=80', brand: 'ZKTeco' },
  { id: 7, category: 'Biometric', title: 'Face Recognition Gate', location: 'Government Office, Nairobi', img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80', brand: 'HikVision' },
  { id: 8, category: 'Biometric', title: 'Attendance System Setup', location: 'Manufacturing Plant, Athi River', img: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=600&q=80', brand: 'ZKTeco' },
  // Electric Fence
  { id: 9, category: 'Electric Fence', title: 'Perimeter Electric Fence', location: 'Residential Estate, Karen', img: 'https://images.unsplash.com/photo-1558618047-f4e90a8b8e7f?w=600&q=80', brand: 'Nemtek' },
  { id: 10, category: 'Electric Fence', title: 'Commercial Fence System', location: 'Factory Complex, Industrial Area', img: 'https://images.unsplash.com/photo-1564866657315-7c41cddc2bdb?w=600&q=80', brand: 'Nemtek' },
  // Bell Systems
  { id: 11, category: 'Bell Systems', title: 'School Bell Controller', location: 'Primary School, Thika', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80', brand: 'Custom' },
  { id: 12, category: 'Bell Systems', title: 'Factory Alarm Bell System', location: 'Factory, Nairobi Industrial', img: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=600&q=80', brand: 'Custom' },
  // Electrical
  { id: 13, category: 'Electrical', title: 'Cable Management Project', location: 'Data Center, Westlands', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80', brand: 'Various' },
  { id: 14, category: 'Electrical', title: 'Control Panel Installation', location: 'Office Block, CBD Nairobi', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80', brand: 'Various' },
  { id: 15, category: 'Electrical', title: 'Network & Power Cabling', location: 'Hospital, Nairobi', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80', brand: 'Various' },
]

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <div>
      <PageHero
        title="Project Gallery"
        subtitle="A showcase of our completed installations across Kenya — real projects, real results."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Gallery' }]}
      />

      {/* Stats */}
      <section className="py-10 px-4 bg-primary/5 border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { val: '500+', label: 'Projects Completed' },
            { val: '47+', label: 'Counties Served' },
            { val: '200+', label: 'Happy Clients' },
            { val: '6', label: 'Trusted Brands' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-extrabold text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>{s.val}</div>
              <div className="text-muted-foreground text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Our Work" title="Completed Installations" subtitle="Browse projects across all our service categories." />

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white border border-border text-muted-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        parent.style.background = 'hsl(215 70% 22%)'
                        parent.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:white;font-size:14px;font-weight:600;padding:16px;text-align:center">${item.title}</div>`
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-3 right-3">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <ExternalLink size={14} className="text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-primary/80 text-white text-xs rounded-md font-medium">{item.category}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-primary text-sm mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-xs mb-2">{item.location}</p>
                  <span className="px-2 py-0.5 bg-secondary/10 text-secondary text-xs rounded-full font-medium">Brand: {item.brand}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
