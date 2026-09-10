import React from 'react';
import { PhoneCall, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919532767696"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-shadow group relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          WhatsApp Us
        </span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+919532767696"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
        className="w-14 h-14 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg shadow-brand-red/30 hover:shadow-brand-red/50 transition-shadow group relative"
        aria-label="Call Us"
      >
        <PhoneCall size={26} />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          Call +91 9532767696
        </span>
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
