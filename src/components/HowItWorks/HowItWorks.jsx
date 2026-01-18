"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Lightbulb, Code, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: <MessageCircle className="w-10 h-10" />,
      title: "Consultation",
      desc: "We listen to your ideas and understand your business goals thoroughly."
    },
    {
      step: "02",
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Planning",
      desc: "Create comprehensive roadmap and design specification for your project."
    },
    {
      step: "03",
      icon: <Code className="w-10 h-10" />,
      title: "Development",
      desc: "Build with latest technologies using best practices and clean code."
    },
    {
      step: "04",
      icon: <Rocket className="w-10 h-10" />,
      title: "Delivery",
      desc: "Launch your project and provide ongoing support and maintenance."
    }
  ];

  return (
    <section className="py-14 bg-gray-50 dark:bg-[#0a0f1d]">
      <div className="max-w-7xl mx-auto px-6 md:px-24 p-14">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white">
            How We <span className="text-blue-600">Work</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Our proven process ensures your project is delivered on time and exceeds expectations.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              {/* Connector Line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-20 w-8 h-0.5 bg-blue-600/30"></div>
              )}

              <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all">
                
                {/* Step Number */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-black text-blue-600">{item.step}</span>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Ready to start your project? Let's work together!
          </p>
          <button className="px-10 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
            Get Started Now
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;
