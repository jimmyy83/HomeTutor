import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#050914] relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in <span className="text-brand-red">Touch</span></h2>
          <p className="text-gray-400">
            Ready to start learning or teaching? Reach out to us directly or request a call back.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-brand-navy p-8 rounded-3xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0a1128] rounded-xl text-brand-red">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call / WhatsApp</p>
                    <a href="tel:+919532767696" className="text-lg font-semibold text-white hover:text-brand-gold transition-colors">
                      +91 9532767696
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0a1128] rounded-xl text-brand-red">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email Address</p>
                    <a href="mailto:contact.tutorathome@gmail.com" className="text-lg font-semibold text-white hover:text-brand-gold transition-colors break-all">
                      contact.tutorathome@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0a1128] rounded-xl text-brand-red">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Office Address</p>
                    <p className="text-lg font-semibold text-white">
                      ADA Rd, Ram Nagar, Chauraha, Naini, Prayagraj, Uttar Pradesh 211008
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-gray-800 h-48 rounded-3xl overflow-hidden border border-gray-700 relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
               <p className="text-gray-400 z-10 relative bg-brand-dark/80 px-4 py-2 rounded-full">Interactive Map Location</p>
               <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Naini,Prayagraj&zoom=14&size=600x300&sensor=false')] bg-cover bg-center opacity-30"></div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-brand-navy p-8 md:p-10 rounded-3xl border border-gray-800"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Request a Call Back</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input required type="text" className="w-full bg-[#0a1128] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                  <input required type="tel" className="w-full bg-[#0a1128] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">I am a</label>
                  <select className="w-full bg-[#0a1128] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors appearance-none">
                    <option>Parent / Student</option>
                    <option>Teacher</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Mode</label>
                  <select className="w-full bg-[#0a1128] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors appearance-none">
                    <option>Home Tuition (Offline)</option>
                    <option>Online Tuition</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Class / Grade</label>
                  <input type="text" className="w-full bg-[#0a1128] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors" placeholder="e.g. Class 10" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Subjects Required</label>
                  <input type="text" className="w-full bg-[#0a1128] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors" placeholder="e.g. Math, Science" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Additional Message (Optional)</label>
                <textarea rows="4" className="w-full bg-[#0a1128] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors" placeholder="Tell us more about your requirements..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-brand-red hover:bg-red-600 text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : submitted ? (
                  <>Sent Successfully! <Send size={20} /></>
                ) : (
                  <>Get a Call Back <Send size={20} /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
