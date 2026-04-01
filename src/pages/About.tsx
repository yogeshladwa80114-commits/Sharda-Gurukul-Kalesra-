import { CheckCircle, Target, Eye, Award, Users, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

const coreValues = [
  { title: 'Integrity', desc: 'Upholding the highest moral and ethical standards in all actions.', icon: <CheckCircle className="text-orange-500" /> },
  { title: 'Excellence', desc: 'Striving for the best in academics, sports, and character building.', icon: <Award className="text-orange-500" /> },
  { title: 'Respect', desc: 'Fostering a culture of mutual respect for all individuals and traditions.', icon: <Users className="text-orange-500" /> },
  { title: 'Innovation', desc: 'Embracing modern technology and creative teaching methodologies.', icon: <BookOpen className="text-orange-500" /> },
];

const milestones = [
  { year: '2010', event: 'Foundation of Sharda Gurukul Kalesra' },
  { year: '2015', event: 'Inauguration of Secondary Block' },
  { year: '2018', event: 'Best School Award in District Agra' },
  { year: '2022', event: 'Launch of Smart Classroom Initiative' },
  { year: '2025', event: '100% Board Results for 5th Consecutive Year' },
];

export default function About() {
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
            About Sharda Gurukul
          </motion.h1>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            A sanctuary of learning where tradition meets innovation to nurture the leaders of tomorrow.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/philosophy/800/600" 
                alt="School Philosophy" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-orange-500 p-10 rounded-3xl shadow-2xl hidden md:block">
                <span className="block text-5xl font-bold text-white">15+</span>
                <span className="text-sm font-medium text-white opacity-90 uppercase tracking-widest">Years of Legacy</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Our Philosophy</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Sharda Gurukul, we believe that education is not just about academic scores but about building a strong foundation of values and character. Our "Gurukul" approach integrates traditional Indian values with a modern, global perspective.
              </p>
              <p className="text-gray-600 mb-10 leading-relaxed">
                We focus on the holistic development of every child, ensuring they are physically fit, mentally alert, and spiritually grounded. Our teachers are mentors who guide students through a journey of self-discovery and excellence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-900">
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="text-blue-900" />
                    <h3 className="font-bold text-blue-900">Our Mission</h3>
                  </div>
                  <p className="text-sm text-gray-600">To provide high-quality education that empowers students to become responsible global citizens with strong ethical values.</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-500">
                  <div className="flex items-center space-x-3 mb-4">
                    <Eye className="text-orange-500" />
                    <h3 className="font-bold text-blue-900">Our Vision</h3>
                  </div>
                  <p className="text-sm text-gray-600">To be a leading educational institution that sets benchmarks in value-based learning and academic innovation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Core Values</h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="mb-6 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <img 
                src="https://picsum.photos/seed/principal/600/800" 
                alt="Principal" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-2/3 p-12 text-white">
              <h2 className="text-3xl font-bold mb-6 italic">"Education is the most powerful weapon which you can use to change the world."</h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Welcome to Sharda Gurukul Kalesra. Our institution is dedicated to providing an environment where every child feels valued and inspired. We don't just teach subjects; we nurture dreams and build characters. Our goal is to ensure that every student who walks through our gates leaves as a confident, capable, and compassionate individual.
              </p>
              <div>
                <h4 className="text-xl font-bold">Dr. S. K. Sharma</h4>
                <p className="text-orange-400 font-medium">Principal, Sharda Gurukul</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Milestones</h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full" />
          </div>
          
          <div className="max-w-3xl mx-auto">
            {milestones.map((item, idx) => (
              <div key={idx} className="flex items-center mb-8 last:mb-0 group">
                <div className="w-24 text-right pr-8 font-bold text-blue-900 text-xl group-hover:text-orange-500 transition-colors">
                  {item.year}
                </div>
                <div className="relative flex-grow pl-8 border-l-2 border-gray-200 py-4 group-hover:border-orange-500 transition-colors">
                  <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-200 rounded-full group-hover:bg-orange-500 transition-colors" />
                  <p className="text-gray-700 font-medium">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
