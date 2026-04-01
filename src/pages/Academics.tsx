import { BookOpen, GraduationCap, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const curriculumDetails = [
  { 
    title: 'Pre-Primary (Nursery - UKG)', 
    desc: 'Focus on sensory development, motor skills, and basic literacy through play-way methods.',
    features: ['Activity-based learning', 'Sensory play', 'Basic phonics', 'Social skills development']
  },
  { 
    title: 'Primary (I - V)', 
    desc: 'Building a strong foundation in core subjects with focus on curiosity and values.',
    features: ['Inquiry-based learning', 'Value education', 'Language proficiency', 'Environmental studies']
  },
  { 
    title: 'Middle School (VI - VIII)', 
    desc: 'Transition to more rigorous academic study with focus on critical thinking and problem-solving.',
    features: ['Subject-specific teaching', 'Practical science labs', 'Advanced mathematics', 'Project-based learning']
  },
  { 
    title: 'Secondary (IX - XII)', 
    desc: 'Rigorous preparation for board exams and future career paths with specialized streams.',
    features: ['Board exam preparation', 'Career counseling', 'Specialized streams (Science, Commerce, Arts)', 'Competitive exam guidance']
  },
];

const coCurricular = [
  { name: 'Sports & Athletics', desc: 'Football, Cricket, Basketball, Yoga, and more.', icon: <Award className="text-orange-500" /> },
  { name: 'Performing Arts', desc: 'Music, Dance, and Theatre to foster creativity.', icon: <Users className="text-orange-500" /> },
  { name: 'Visual Arts', desc: 'Painting, Sculpture, and Craft workshops.', icon: <BookOpen className="text-orange-500" /> },
  { name: 'Clubs & Societies', desc: 'Debate, Science, and Literary clubs.', icon: <GraduationCap className="text-orange-500" /> },
];

export default function Academics() {
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
            Academic Excellence
          </motion.h1>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Our curriculum is designed to foster intellectual curiosity and personal growth at every stage of education.
          </p>
        </div>
      </section>

      {/* Curriculum Details */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Curriculum</h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {curriculumDetails.map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{item.desc}</p>
                <ul className="space-y-4">
                  {item.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center space-x-3 text-sm font-medium text-gray-700">
                      <CheckCircle size={18} className="text-green-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Teaching Methodology</h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                We believe in a student-centric approach that encourages active participation and critical thinking. Our teachers use a blend of traditional and modern methods to ensure every child understands the concepts thoroughly.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center shrink-0">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Inquiry-Based Learning</h4>
                    <p className="text-sm text-blue-200">Encouraging students to ask questions and explore answers through research and experimentation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Collaborative Projects</h4>
                    <p className="text-sm text-blue-200">Fostering teamwork and communication skills through group activities and shared goals.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/teaching/800/600" 
                alt="Teaching Methodology" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl hidden md:block">
                <span className="block text-2xl font-bold text-blue-900">1:25</span>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">Teacher-Student Ratio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co-Curricular Activities */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Co-Curricular Activities</h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coCurricular.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="mb-6 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Development CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-500 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Shape Your Child's Future?</h2>
            <p className="text-orange-50 mb-10 max-w-2xl mx-auto">
              Join Sharda Gurukul Kalesra and witness a journey of excellence. Admissions are open for the 2026-27 academic year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/admissions" 
                className="bg-blue-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-all shadow-xl"
              >
                Apply Now
              </Link>
              <Link 
                to="/contact" 
                className="bg-white text-orange-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center"
              >
                Book a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
