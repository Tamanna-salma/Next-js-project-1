"use client";
import { ArrowRight, Sparkles } from 'lucide-react'
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div>
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-blue-50 dark:bg-[#060a18] transition-colors duration-500">
      
      {/* Background Glows  */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] dark:bg-blue-900/30" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] dark:bg-cyan-900/20" />

      <div className=" mx-auto px-6 md:px-24 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side - Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} />
            <span>Next-Gen Software Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Innovate with <br />
            <span className="bg-gradient-to-r from-[#2561a1] via-[#0dc4d4] to-[#3071b6] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              LumenSoft
            </span>
          </h1>

          {/* Subtitle / Description */}
<motion.p 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  viewport={{ once: true }}
  className="text-gray-600 dark:text-gray-4 00 text-lg md:text-xl mb-8 max-w-lg leading-relaxed"
>
  Empowering your business in the digital era with cutting-edge software, 
  web, and mobile app solutions. Transforming your dreams into reality 
  is our ultimate mission.
</motion.p>



          <div className="flex flex-wrap gap-4">
            <button className="bg-[#255a91] hover:bg-[#378be6] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25">
              Get Started <ArrowRight size={20} />
            </button>
            <button className="border-2 border-blue-600 dark:border-slate-700 hover:border-blue-500 hover:bg-blue-600 dark:text-white px-8 py-4 rounded-xl font-bold transition-all">
              View Projects
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 flex items-center gap-6 grayscale opacity-60 dark:invert">
            <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">Trusted by:</span>
            <div className="flex gap-4 font-bold text-xl text-gray-700">
              TechFlow | SoftGrid | DevSync
            </div>
          </div>
        </motion.div>

        {/* Right Side - Animated Banner Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Floating Animation for Image */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[550px] rounded-[2rem] overflow-hidden border-8 border-gray-200 dark:border-slate-800 shadow-2xl">
               <Image 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                alt="LumenSoft Banner"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Small Floating Card */}
            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-10 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">✓</div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Success Rate</p>
                  <p className="text-lg font-bold dark:text-white">99.9% Positive</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-500/10 rounded-full animate-spin-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border border-cyan-500/5 rounded-full animate-reverse-spin" />
        </motion.div>

      </div>
    </section>  
    </div>
  )
}

export default Banner;