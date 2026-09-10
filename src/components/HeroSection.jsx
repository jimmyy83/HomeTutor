import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, MapPin, CheckCircle } from 'lucide-react';

const Particle = ({ delay, duration, style }) => (
  <motion.div
    className="absolute rounded-full opacity-30"
    style={style}
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      opacity: [0.2, 0.5, 0.2],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
  />
);

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Particle delay={0} duration={4} style={{ width: 10, height: 10, background: 'var(--color-brand-red)', top: '20%', left: '10%' }} />
        <Particle delay={1} duration={5} style={{ width: 15, height: 15, background: 'var(--color-brand-gold)', top: '40%', left: '80%' }} />
        <Particle delay={2} duration={6} style={{ width: 8, height: 8, background: '#fff', top: '70%', left: '30%' }} />
        <Particle delay={0.5} duration={4.5} style={{ width: 12, height: 12, background: 'var(--color-brand-red)', top: '80%', left: '70%' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy border border-gray-800 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
              <span className="text-sm font-medium text-gray-300">Bringing Excellence at Doorstep</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Find the Right <span className="text-brand-red">Home Tutor</span> in Prayagraj
            </h1>
            
            <p className="text-lg text-gray-400 max-w-xl">
              Tutor@Home connects students with qualified teachers for personalized learning at your doorstep. Choose trusted offline home tuition or flexible online classes.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-brand-red hover:bg-red-600 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-brand-red/30 transform hover:-translate-y-1">
                Find a Tutor
              </a>
              <a href="#contact" className="bg-brand-navy hover:bg-gray-800 text-white border border-gray-700 px-8 py-3.5 rounded-full font-semibold transition-all transform hover:-translate-y-1">
                Join as a Teacher
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-gray-800 mt-8">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle size={16} className="text-brand-gold" /> Classes 1–12
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle size={16} className="text-brand-gold" /> Offline & Online
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle size={16} className="text-brand-gold" /> Personalized Matching
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin size={16} className="text-brand-gold" /> Prayagraj
              </div>
            </div>
          </motion.div>

          {/* Right Content - 3D Mockup / Abstract Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex relative justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* This is a placeholder for Spline or 3D visual */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy to-brand-dark rounded-full border border-gray-800 flex items-center justify-center overflow-hidden">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"
                />
                <div className="relative z-10 flex flex-col items-center">
                  <GraduationCap size={120} className="text-brand-gold mb-8 opacity-80" />
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <BookOpen size={64} className="text-brand-red opacity-80" />
                  </motion.div>
                </div>
              </div>
              {/* Floating element 1 */}
              <motion.div
                animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-10 bg-brand-navy p-4 rounded-2xl border border-gray-700 shadow-xl backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="text-blue-400 font-bold">A+</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Top Results</p>
                    <p className="text-xs text-gray-400">Board Exams</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
