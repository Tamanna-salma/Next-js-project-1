"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, LayoutGrid, Sparkles } from 'lucide-react';
import Link from 'next/link';


const CTA = () => {
 
  return (
    <section className="py-14 bg-gradient-to-r from-purple-500 to-indigo-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0  bg-white/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-24 p-6">
        
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
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-black text-white mb-4 leading-tight">
            Transform Your Business <br /> With Our Solutions
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-5 leading-relaxed">
            Let's collaborate and create something amazing together. Our expert team is ready to turn your vision into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-5">
             <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-[#3071b6] font-black text-lg rounded-2xl hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)] transition-all flex items-center gap-2 group"
              >
                Contact Us Now
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

           <Link href="/portfolio">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-transparent border-2 border-white/30 text-white font-black text-lg rounded-2xl hover:bg-white/10 backdrop-blur-md transition-all flex items-center gap-2 group"
              >
                <LayoutGrid size={22} className="opacity-70" />
                View Portfolio
              </motion.button>
            </Link>
          </div> 

        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
