import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

const categories = ['All', 'Campus', 'Events', 'Activities', 'Classrooms'];

const galleryImages = [
  { id: 1, category: 'Campus', src: 'https://picsum.photos/seed/campus1/800/600', title: 'Main School Building' },
  { id: 2, category: 'Events', src: 'https://picsum.photos/seed/event1/800/600', title: 'Annual Day Celebration' },
  { id: 3, category: 'Activities', src: 'https://picsum.photos/seed/activity1/800/600', title: 'Science Fair' },
  { id: 4, category: 'Classrooms', src: 'https://picsum.photos/seed/classroom1/800/600', title: 'Smart Classroom Session' },
  { id: 5, category: 'Campus', src: 'https://picsum.photos/seed/campus2/800/600', title: 'School Playground' },
  { id: 6, category: 'Events', src: 'https://picsum.photos/seed/event2/800/600', title: 'Sports Meet' },
  { id: 7, category: 'Activities', src: 'https://picsum.photos/seed/activity2/800/600', title: 'Art Workshop' },
  { id: 8, category: 'Classrooms', src: 'https://picsum.photos/seed/classroom2/800/600', title: 'Library Session' },
  { id: 9, category: 'Campus', src: 'https://picsum.photos/seed/campus3/800/600', title: 'Science Laboratory' },
  { id: 10, category: 'Events', src: 'https://picsum.photos/seed/event3/800/600', title: 'Cultural Program' },
  { id: 11, category: 'Activities', src: 'https://picsum.photos/seed/activity3/800/600', title: 'Yoga Session' },
  { id: 12, category: 'Classrooms', src: 'https://picsum.photos/seed/classroom3/800/600', title: 'Computer Lab' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-blue-900 py-20 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full -ml-32 -mb-32" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Gallery
          </motion.h1>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            A glimpse into the vibrant life and activities at Sharda Gurukul Kalesra.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all shadow-sm ${
                  activeCategory === cat 
                    ? 'bg-orange-500 text-white shadow-lg' 
                    : 'bg-gray-100 text-blue-900 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative group cursor-pointer aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img 
                    src={image.src} 
                    alt={image.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                    <Maximize2 className="text-white mb-3" size={32} />
                    <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                    <span className="text-orange-400 text-xs font-medium uppercase tracking-widest">{image.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Gallery Full View" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
