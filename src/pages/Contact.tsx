import { Phone, Mail, MapPin, Clock, MessageCircle, Send, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';

const contactInfo = [
  { 
    title: 'Call Us', 
    details: ['+91 12345 67890', '+91 98765 43210'], 
    icon: <Phone className="text-orange-500" />,
    link: 'tel:+911234567890'
  },
  { 
    title: 'Email Us', 
    details: ['info@shardagurukul.com', 'admissions@shardagurukul.com'], 
    icon: <Mail className="text-orange-500" />,
    link: 'mailto:info@shardagurukul.com'
  },
  { 
    title: 'Visit Us', 
    details: ['Kalesra, Near Main Road, District Agra, Uttar Pradesh - 282001'], 
    icon: <MapPin className="text-orange-500" />,
    link: 'https://maps.google.com'
  },
  { 
    title: 'School Hours', 
    details: ['Mon - Sat: 8:00 AM - 2:30 PM', 'Sunday: Closed'], 
    icon: <Clock className="text-orange-500" />,
    link: null
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

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
            Contact Us
          </motion.h1>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            We are here to help you. Reach out to us for any queries or to book a visit to our campus.
          </p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center hover:shadow-xl transition-shadow group">
                <div className="mb-6 flex justify-center p-4 bg-white rounded-2xl shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, dIdx) => (
                    <p key={dIdx} className="text-gray-600 text-sm leading-relaxed">
                      {info.link ? (
                        <a href={info.link} className="hover:text-orange-500 transition-colors">{detail}</a>
                      ) : detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-blue-900 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter Name" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-blue-900 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="Enter Phone" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter Email" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-2">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Inquiry Subject" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-2">Message</label>
                  <textarea 
                    rows={5} 
                    required
                    placeholder="How can we help you?" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition-all shadow-xl flex items-center justify-center group"
                >
                  Send Message
                  <Send size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Map & WhatsApp */}
            <div className="space-y-8">
              <div className="bg-gray-100 rounded-3xl overflow-hidden h-[400px] shadow-xl relative border border-gray-200">
                {/* Placeholder for Google Map */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
                  <MapPin size={48} className="text-orange-500 mb-4" />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Find Us on Google Maps</h3>
                  <p className="text-gray-600 text-sm mb-6 max-w-xs">Kalesra, District Agra, Uttar Pradesh - 282001</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-blue-900 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-50 transition-colors flex items-center"
                  >
                    Open in Maps <ArrowRight size={18} className="ml-2" />
                  </a>
                </div>
              </div>

              <div className="bg-green-600 rounded-3xl p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center">
                    <MessageCircle className="mr-3" />
                    WhatsApp Support
                  </h3>
                  <p className="text-green-50 opacity-90">Get instant answers to your admission queries.</p>
                </div>
                <a 
                  href="https://wa.me/911234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-all whitespace-nowrap"
                >
                  Chat Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
