import React from 'react';
import { motion } from 'framer-motion';
import { Home, Globe, BookMarked, GraduationCap, PenTool, CheckSquare, Users, UserPlus } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: <Home size={28} />, title: "Home Tuition at Your Doorstep" },
    { icon: <Globe size={28} />, title: "Online Tuition" },
    { icon: <BookMarked size={28} />, title: "Individual Subject Programs" },
    { icon: <GraduationCap size={28} />, title: "Classes 1–12 Academic Support" },
    { icon: <CheckSquare size={28} />, title: "Exam and Board Preparation" },
    { icon: <PenTool size={28} />, title: "Homework & Project Guidance" },
    { icon: <Users size={28} />, title: "Parent-Tutor Coordination" },
    { icon: <UserPlus size={28} />, title: "Teacher Registration & Leads" }
  ];

  return (
    <section id="services" className="py-24 bg-[#080d1e] border-y border-gray-800">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-brand-red">Services</span></h2>
          <p className="text-gray-400">
            Comprehensive educational support tailored to meet the unique needs of every student.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-brand-navy p-6 rounded-2xl border border-gray-800 shadow-lg hover:border-brand-red/50 transition-colors group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-dark flex items-center justify-center text-brand-gold group-hover:bg-brand-red group-hover:text-white transition-colors mb-5">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-brand-red transition-colors">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
