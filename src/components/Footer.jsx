import React from 'react';
import { Mail, MapPin, Phone, Globe, Link, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050914] pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-2xl font-bold text-white mb-4 block">
              <span className="text-brand-red">Tutor</span>@Home
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Helping students find the right learning support through trusted tutor connections. Bringing Excellence at Doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
                <Link size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">Home Tuition</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">Online Classes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">For Parents</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">For Teachers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-red shrink-0 mt-0.5" size={18} />
                <span className="text-gray-400 text-sm">
                  ADA Rd, Ram Nagar, Chauraha, Naini, Prayagraj, Uttar Pradesh 211008
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-red shrink-0" size={18} />
                <a href="tel:+919532767696" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">
                  +91 9532767696
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-red shrink-0" size={18} />
                <a href="mailto:contact.tutorathome@gmail.com" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">
                  contact.tutorathome@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Tutor@Home Prayagraj. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
