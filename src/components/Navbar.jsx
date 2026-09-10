import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Services', href: '#services' },
    { name: 'Subjects', href: '#subjects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-brand-red">Tutor</span>@Home
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-light/80 hover:text-brand-gold transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919532767696"
              className="flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white px-5 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105"
            >
              <PhoneCall size={18} />
              Call 9532767696
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-light hover:text-brand-gold focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full bg-brand-navy shadow-xl border-t border-gray-800"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-brand-light hover:text-brand-gold hover:bg-gray-800/50"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919532767696"
              className="mt-4 flex items-center justify-center gap-2 w-full bg-brand-red hover:bg-red-600 text-white px-5 py-3 rounded-md font-semibold"
            >
              <PhoneCall size={20} />
              Call 9532767696
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
