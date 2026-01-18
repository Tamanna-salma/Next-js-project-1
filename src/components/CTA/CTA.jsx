"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-14 bg-gradient-to-r from-purple-600 to-indigo-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-24 p-14">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full mb-8 border border-white/20"
          >
            <Sparkles size={18} />
            <span className="font-semibold">Ready to Get Started?</span>
          </motion.div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Transform Your Business <br /> With Our Solutions
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Let's collaborate and create something amazing together. Our expert team is ready to turn your vision into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:shadow-2xl transition-all flex items-center gap-2 group"
            >
              Contact Us Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-transparent text-white font-bold text-lg rounded-lg border-2 border-white hover:bg-white/10 transition-all"
            >
              View Our Portfolio
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
            >
              <h4 className="text-3xl font-bold text-white">500+</h4>
              <p className="text-white/80 text-sm mt-1">Projects Done</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-3xl font-bold text-white">250+</h4>
              <p className="text-white/80 text-sm mt-1">Happy Clients</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-3xl font-bold text-white">10+</h4>
              <p className="text-white/80 text-sm mt-1">Years Experience</p>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
