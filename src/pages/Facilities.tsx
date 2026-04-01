import { School, Microscope, BookOpen, Play, Bus, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const facilitiesList = [
  { 
    title: 'Smart Classrooms', 
    desc: 'Equipped with interactive whiteboards and digital learning tools to make education engaging and effective.',
    icon: <School size={32} className="text-orange-500" />,
    image: 'https://picsum.photos/seed/classroom/800/600'
  },
  { 
    title: 'Science Labs', 
    desc: 'State-of-the-art physics, chemistry, and biology labs for hands-on practical learning and experimentation.',
    icon: <Microscope size={32} className="text-orange-500" />,
    image: 'https://picsum.photos/seed/lab/800/600'
  },
  { 
    title: 'Library', 
    desc: 'A vast collection of books, journals, and digital resources to foster a love for reading and research.',
    icon: <BookOpen size={32} className="text-orange-500" />,
    image: 'https://picsum.photos/seed/library/800/600'
  },
  { 
    title: 'Sports Infrastructure', 
    desc: 'Large playground with facilities for football, cricket, basketball, and indoor sports like table tennis.',
    icon: <Play size={32} className="text-orange-500" />,
    image: 'https://picsum.photos/seed/sports/800/600'
  },
  { 
    title: 'Transport System', 
    desc: 'A fleet of safe and comfortable school buses with GPS tracking and dedicated staff for student safety.',
    icon: <Bus size={32} className="text-orange-500" />,
    image: 'https://picsum.photos/seed/bus/800/600'
  },
  { 
    title: 'Safety & Security', 
    desc: '24/7 CCTV surveillance, fire safety systems, and trained security personnel to ensure a secure campus.',
    icon: <ShieldCheck size={32} className="text-orange-500" />,
    image: 'https://picsum.photos/seed/security/800/600'
  },
];

export default function Facilities() {
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
            World-Class Facilities
          </motion.h1>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Our campus is designed to provide a safe, nurturing, and technologically advanced environment for every student.
          </p>
        </div>
      </section>

      {/* Facilities List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {facilitiesList.map((facility, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="mb-6 p-4 bg-orange-50 rounded-2xl inline-block">
                    {facility.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">{facility.title}</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {facility.desc}
                  </p>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-center space-x-3 text-sm font-medium text-gray-700">
                      <CheckCircle size={18} className="text-green-500 shrink-0" />
                      <span>Modern Infrastructure</span>
                    </li>
                    <li className="flex items-center space-x-3 text-sm font-medium text-gray-700">
                      <CheckCircle size={18} className="text-green-500 shrink-0" />
                      <span>Regular Maintenance</span>
                    </li>
                    <li className="flex items-center space-x-3 text-sm font-medium text-gray-700">
                      <CheckCircle size={18} className="text-green-500 shrink-0" />
                      <span>Student-Centric Design</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <img 
                      src={facility.image} 
                      alt={facility.title} 
                      className="rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 rounded-3xl bg-blue-900/10 group-hover:bg-transparent transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Tour CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Our Campus Firsthand</h2>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
              We invite you to visit Sharda Gurukul Kalesra and see our facilities in person. Book a personalized campus tour today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-xl"
              >
                Book a Visit
              </Link>
              <Link 
                to="/admissions" 
                className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
