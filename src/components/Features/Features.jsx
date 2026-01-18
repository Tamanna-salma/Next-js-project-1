"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Globe, Award, Code } from 'lucide-react';

const Features = () => {
  const features = [
    { icon: <Zap className="w-8 h-8" />, title: "Lightning Fast", desc: "Optimized performance" },
    { icon: <Globe className="w-8 h-8" />, title: "Global Reach", desc: "Worldwide support" },
    { icon: <Award className="w-8 h-8" />, title: "Award Winning", desc: "Industry recognized" },
    { icon: <Code className="w-8 h-8" />, title: "Clean Code", desc: "Best practices" }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#0a0f1d]">
        <div className="container mx-auto px-6 md:px-24">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">
            Why Choose <span className="text-blue-600">LumenSoft?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 bg-gray-50 dark:bg-slate-800 rounded-xl text-center"
              >
                <div className="flex justify-center mb-4 text-blue-600">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Features;
