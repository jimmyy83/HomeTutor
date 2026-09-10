import React from 'react';
import { ShieldCheck, MonitorPlay, Users, HeadphonesIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const TrustBar = () => {
  const points = [
    {
      icon: <ShieldCheck size={32} className="text-brand-red" />,
      title: "Verified Tutors",
      desc: "Carefully vetted and background-checked teachers"
    },
    {
      icon: <MonitorPlay size={32} className="text-brand-red" />,
      title: "Home & Online",
      desc: "Flexible modes of learning to suit your comfort"
    },
    {
      icon: <Users size={32} className="text-brand-red" />,
      title: "Classes 1–12",
      desc: "Comprehensive academic support across all subjects"
    },
    {
      icon: <HeadphonesIcon size={32} className="text-brand-red" />,
      title: "Personal Support",
      desc: "Our executive helps you find the perfect match"
    }
  ];

  return (
    <section className="bg-[#0c132c] border-y border-gray-800 py-10 relative z-20 -mt-8 mx-4 md:mx-auto md:w-[90%] rounded-2xl shadow-2xl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-800">
          {points.map((point, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-start gap-4 ${index !== 0 ? 'md:pl-8 pt-6 md:pt-0' : ''}`}
            >
              <div className="p-3 bg-brand-navy rounded-lg border border-gray-700">
                {point.icon}
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">{point.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
