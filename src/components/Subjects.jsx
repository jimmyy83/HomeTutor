import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, FlaskConical, Languages, Book, Globe2, Zap, Beaker, Dna, Laptop, Briefcase, TrendingUp, CircleDollarSign } from 'lucide-react';

const Subjects = () => {
  const subjects = [
    { name: "Mathematics", icon: <Calculator size={24} /> },
    { name: "Science", icon: <FlaskConical size={24} /> },
    { name: "English", icon: <Languages size={24} /> },
    { name: "Hindi", icon: <Book size={24} /> },
    { name: "Social Science", icon: <Globe2 size={24} /> },
    { name: "Physics", icon: <Zap size={24} /> },
    { name: "Chemistry", icon: <Beaker size={24} /> },
    { name: "Biology", icon: <Dna size={24} /> },
    { name: "Computer Science", icon: <Laptop size={24} /> },
    { name: "Commerce", icon: <Briefcase size={24} /> },
    { name: "Accountancy", icon: <CircleDollarSign size={24} /> },
    { name: "Economics", icon: <TrendingUp size={24} /> },
  ];

  return (
    <section id="subjects" className="py-24 bg-brand-navy border-y border-gray-800">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subjects We <span className="text-brand-red">Cover</span>
          </h2>
          <p className="text-gray-400">
            Comprehensive tutoring across all major subjects for standard and board curriculums.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {subjects.map((sub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, backgroundColor: 'rgba(230, 57, 70, 0.1)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-brand-dark p-6 rounded-2xl border border-gray-800 flex flex-col items-center justify-center text-center gap-3 cursor-pointer group transition-colors"
            >
              <div className="text-brand-gold group-hover:text-brand-red transition-colors">
                {sub.icon}
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {sub.name}
              </span>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Subjects;
