import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const ParentTeacherSplit = () => {
  return (
    <section className="py-24 bg-brand-dark overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* For Parents & Students Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-brand-navy to-[#111827] rounded-3xl p-10 md:p-14 border border-gray-800 shadow-2xl group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-2">For Parents & Students</h2>
              <p className="text-brand-gold mb-8">Empower your learning journey</p>
              
              <ul className="space-y-4 mb-10">
                {['Find tutors based on class and subject', 'Learn at home or online', 'Get support in selecting a suitable teacher', 'Save time searching independently'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-red shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white px-8 py-3.5 rounded-full font-semibold transition-all group-hover:gap-4">
                Request a Tutor <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* For Teachers Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-gradient-to-br from-[#111827] to-brand-navy rounded-3xl p-10 md:p-14 border border-gray-800 shadow-2xl group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-2">For Teachers</h2>
              <p className="text-brand-gold mb-8">Expand your teaching opportunities</p>
              
              <ul className="space-y-4 mb-10">
                {['Register as a home tutor or online tutor', 'Connect with students seeking your expertise', 'Receive relevant tutoring opportunities', 'Build your tutoring network in Prayagraj'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-gold shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="inline-flex items-center gap-2 bg-brand-dark hover:bg-black text-white border border-gray-700 hover:border-brand-gold px-8 py-3.5 rounded-full font-semibold transition-all group-hover:gap-4">
                Register as a Teacher <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ParentTeacherSplit;
