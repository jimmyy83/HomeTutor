import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Clock, GraduationCap, MapPin, Phone, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    { icon: <UserCheck size={32} />, title: "Personalized Selection", desc: "Tutors matched perfectly to your child's specific learning needs." },
    { icon: <Clock size={32} />, title: "Flexible Modes", desc: "Choose between in-person home tuition or interactive online classes." },
    { icon: <GraduationCap size={32} />, title: "Classes 1–12", desc: "Comprehensive academic help across all primary to senior secondary levels." },
    { icon: <MapPin size={32} />, title: "Local to Prayagraj", desc: "Deeply rooted in Naini & nearby areas for reliable local service." },
    { icon: <Phone size={32} />, title: "Easy Access", desc: "Direct communication with our executive for quick issue resolution." },
    { icon: <Users size={32} />, title: "Ongoing Coordination", desc: "Continuous support between parents, students, and tutors." },
  ];

  return (
    <section className="py-24 bg-[#0a1128] border-y border-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-navy/50 via-brand-dark to-brand-dark z-0" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-brand-red">Tutor@Home</span>?
          </h2>
          <p className="text-gray-400">
            We go beyond just providing a tutor. We ensure a reliable and continuous learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111827]/80 backdrop-blur-md p-8 rounded-3xl border border-gray-700/50 hover:border-brand-gold/50 transition-colors group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-navy flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;
