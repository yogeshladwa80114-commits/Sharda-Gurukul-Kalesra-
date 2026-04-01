import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight">SHARDA GURUKUL</span>
                <span className="text-sm font-medium text-orange-400 tracking-wider">KALESRA</span>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Empowering the next generation with a perfect blend of traditional values and modern education. Join us in shaping future leaders.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-4 text-sm text-blue-100">
              <li><Link to="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-orange-400 transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-orange-400 transition-colors">Admissions</Link></li>
              <li><Link to="/facilities" className="hover:text-orange-400 transition-colors">Facilities</Link></li>
              <li><Link to="/gallery" className="hover:text-orange-400 transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4 text-sm text-blue-100">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-orange-400 shrink-0" />
                <span>Kalesra, Near Main Road, District Agra, Uttar Pradesh - 282001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-orange-400 shrink-0" />
                <a href="tel:+911234567890" className="hover:text-orange-400 transition-colors">+91 12345 67890</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-orange-400 shrink-0" />
                <a href="mailto:info@shardagurukul.com" className="hover:text-orange-400 transition-colors">info@shardagurukul.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle size={20} className="text-orange-400 shrink-0" />
                <a href="https://wa.me/911234567890" className="hover:text-orange-400 transition-colors">WhatsApp: +91 12345 67890</a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2 inline-block">Newsletter</h3>
            <p className="text-sm text-blue-100 mb-4">Subscribe for latest updates and news.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-blue-800 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <button className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors shadow-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center text-xs text-blue-300 space-y-4 md:space-y-0">
          <p>© 2026 Sharda Gurukul Kalesra. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
