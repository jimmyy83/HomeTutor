import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, UserCheck, BookOpenCheck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquare size={40} className="text-white" />,
      title: "1. Share Your Requirement",
      desc: "Tell us the student's class, subjects, location, preferred mode, and learning goals."
    },
    {
      icon: <UserCheck size={40} className="text-white" />,
      title: "2. Get Matched With a Tutor",
      desc: "Our executive helps identify a suitable tutor according to your requirement."
    },
    {
      icon: <BookOpenCheck size={40} className="text-white" />,
      title: "3. Begin Learning",
      desc: "Start convenient tuition at home or online with continued coordination support."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-brand-red">Tutor@Home</span> Works
          </h2>
          <p className="text-gray-400 text-lg">
            Tutor@Home acts as a trusted mediator between families, students, and teachers—making tutor selection simple and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gray-800 -translate-y-1/2 z-0" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-brand-navy border-4 border-brand-dark shadow-xl flex items-center justify-center mb-6 relative group overflow-hidden">
                <div className="absolute inset-0 bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 text-brand-gold group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed max-w-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
