import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Users, 
  Trophy, 
  ShieldCheck, 
  BookOpen, 
  GraduationCap, 
  School, 
  Bus, 
  Microscope, 
  Play, 
  ArrowRight, 
  Star, 
  Calendar, 
  MapPin, 
  Phone 
} from 'lucide-react';
import { motion } from 'motion/react';

const trustIndicators = [
  { icon: <Calendar className="text-orange-500" />, label: '15+ Years', sub: 'Experience' },
  { icon: <Users className="text-orange-500" />, label: '1200+', sub: 'Students' },
  { icon: <Trophy className="text-orange-500" />, label: '50+', sub: 'Qualified Teachers' },
  { icon: <ShieldCheck className="text-orange-500" />, label: '100%', sub: 'Safe Campus' },
];

const whyChooseUs = [
  { 
    title: 'Value-based Education', 
    desc: 'Our Gurukul philosophy blends ancient wisdom with modern science for holistic growth.',
    icon: <GraduationCap size={32} className="text-orange-500" />
  },
  { 
    title: 'Academic Excellence', 
    desc: 'Consistently high results in board exams with personalized attention to every student.',
    icon: <BookOpen size={32} className="text-orange-500" />
  },
  { 
    title: 'Safe & Secure Campus', 
    desc: '24/7 CCTV surveillance and dedicated security staff ensure a safe learning environment.',
    icon: <ShieldCheck size={32} className="text-orange-500" />
  },
  { 
    title: 'Holistic Development', 
    desc: 'Focus on sports, arts, and personality development alongside core academics.',
    icon: <Users size={32} className="text-orange-500" />
  },
];

const academicPrograms = [
  { 
    title: 'Pre-Primary', 
    age: '3-5 Years', 
    desc: 'Play-way method focusing on sensory development and basic literacy.',
    image: 'https://picsum.photos/seed/kids1/600/400'
  },
  { 
    title: 'Primary', 
    age: '6-10 Years', 
    desc: 'Strong foundation in core subjects with focus on curiosity and values.',
    image: 'https://picsum.photos/seed/kids2/600/400'
  },
  { 
    title: 'Secondary', 
    age: '11-18 Years', 
    desc: 'Rigorous academic preparation for board exams and future careers.',
    image: 'https://picsum.photos/seed/kids3/600/400'
  },
];

const facilities = [
  { name: 'Smart Classrooms', icon: <School size={24} /> },
  { name: 'Modern Science Labs', icon: <Microscope size={24} /> },
  { name: 'Safe Transport', icon: <Bus size={24} /> },
  { name: 'Large Playground', icon: <Play size={24} /> },
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Parent of Grade 5 Student',
    text: 'Sharda Gurukul has transformed my son. The blend of values and modern teaching is exactly what we wanted.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'Parent of Grade 10 Student',
    text: 'The teachers are incredibly supportive. My daughter has excelled not just in studies but also in sports.',
    rating: 5
  },
  {
    name: 'Amit Singh',
    role: 'Parent of Grade 2 Student',
    text: 'Safety was our biggest concern, and Sharda Gurukul provides a very secure environment for young children.',
    rating: 5
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/school-hero/1920/1080" 
            alt="School Campus" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
              Admissions Open 2026-27
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Shaping Future Leaders with <span className="text-orange-400">Values & Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed">
              Experience a modern Gurukul where tradition meets innovation. We provide a nurturing environment for your child to grow, learn, and lead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/admissions" 
                className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-xl flex items-center justify-center group"
              >
                Apply Now
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center"
              >
                Book a Visit
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white opacity-50"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 shadow-sm relative z-20 -mt-10 max-w-6xl mx-auto rounded-xl border border-gray-100">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustIndicators.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="mb-3">{item.icon}</div>
                <span className="text-2xl font-bold text-blue-900">{item.label}</span>
                <span className="text-sm text-gray-500 font-medium">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose Sharda Gurukul?</h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="mb-6 p-4 bg-orange-50 rounded-2xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Academic Programs</h2>
              <p className="text-gray-600">We offer a comprehensive curriculum designed to foster intellectual curiosity and personal growth at every stage of education.</p>
            </div>
            <Link to="/academics" className="text-orange-500 font-bold flex items-center hover:underline">
              View Curriculum <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {academicPrograms.map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-orange-500">
                    {item.age}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <Link to="/admissions" className="text-blue-900 font-bold text-sm flex items-center group-hover:text-orange-500 transition-colors">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">World-Class Facilities for Your Child</h2>
              <p className="text-blue-100 mb-10 leading-relaxed">
                We believe that the right environment is crucial for learning. Our campus is equipped with modern infrastructure to support both academic and extra-curricular activities.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                {facilities.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4 bg-blue-800/50 p-4 rounded-xl border border-blue-700">
                    <div className="text-orange-400">{item.icon}</div>
                    <span className="font-semibold text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
              <Link 
                to="/facilities" 
                className="inline-block bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl"
              >
                Explore Campus
              </Link>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/lab/400/500" alt="Lab" className="rounded-2xl shadow-2xl mt-8" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/playground/400/500" alt="Playground" className="rounded-2xl shadow-2xl" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-orange-500 p-8 rounded-2xl shadow-2xl hidden md:block">
                <span className="block text-4xl font-bold">100%</span>
                <span className="text-sm font-medium opacity-90">Safety Record</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What Parents Say</h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{item.text}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-bold">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full -ml-32 -mb-32" />
            
            <div className="relative z-10">
              <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 uppercase tracking-widest">
                Limited Seats Available
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Admissions Open for 2026–27</h2>
              <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                Secure your child's future today. Join the Sharda Gurukul family and witness a journey of excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/admissions" 
                  className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-xl"
                >
                  Apply Now
                </Link>
                <a 
                  href="tel:+911234567890" 
                  className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center"
                >
                  <Phone size={20} className="mr-2" />
                  Call Us
                </a>
              </div>
              <p className="mt-8 text-sm text-blue-300">
                Or visit us: Kalesra, District Agra, UP
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
