"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; 
import { CheckCircle2, Award, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: <Target className="text-blue-500" />, title: "Our Mission", desc: "To empower businesses with scalable digital solutions." },
    { icon: <Award className="text-purple-500" />, title: "Quality First", desc: "We ensure bug-free, high-performance software delivery." },
  ];

  return (
    <section className="py-14 bg-blue-50 dark:bg-[#060a18] overflow-hidden">
      <div className="container mx-auto px-4 md:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Side: Images Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
          
            <div className="grid grid-cols-2 gap-3 md:gap-4 w-full">
              
              <div className="space-y-3 md:space-y-4">
                <div className="relative h-40 md:h-48 w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-lg">
                  <Image fill src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070" alt="Team" className="object-cover hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 33vw" priority />
                </div>
                <div className="relative h-56 md:h-64 w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-lg">
                  <Image fill src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070" alt="Workplace" className="object-cover hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 33vw" />
                </div>
                <div className="relative h-32 md:h-40 w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-lg bg-blue-100">
                  <Image fill src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070" alt="Consulting" className="object-cover hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 33vw" />
                </div>
              </div>

              <div className="space-y-3 md:space-y-4 pt-8 md:pt-12">
                <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-lg">
                  <Image fill src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070" alt="Strategy" className="object-cover hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 33vw" />
                </div>
                <div className="relative h-48 md:h-56 w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-lg">
                  <Image fill src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070" alt="Tech" className="object-cover hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 33vw" />
                </div>
              </div>
            </div>


            {/* Experience Badge - Mobile & Desktop optimized */}
<div className="absolute  -bottom-2 -right-2 md:-bottom-6 md:-right-6 bg-[#3071b6] text-white p-3 md:p-8 rounded-2xl shadow-2xl z-20 flex flex-col items-center justify-center text-center min-w-[80px] md:min-w-[140px]"
>
    
    <p className="text-2xl md:text-4xl font-black leading-none">10+</p>
  
    <p className="text-[8px] md:text-sm font-bold uppercase tracking-tighter md:tracking-widest leading-tight mt-1">
        Years of <br /> Experience
    </p>
</div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-[#3071b6] font-bold tracking-widest uppercase mb-4 text-sm md:text-base">About LumenSoft</h4>
            <h2 className="text-2xl md:text-5xl font-black dark:text-white leading-tight mb-6">
              Your Trusted Partner in <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Digital Evolution</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-8">
              At LumenSoft, we don't just write code; we build bridges between your ideas and the digital world. Our team of experts specializes in crafting bespoke software and intuitive applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {highlights.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-slate-800 rounded-xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-bold dark:text-white">{item.title}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <ul className="space-y-4 mb-10">
              {["Innovative Solutions", "Dedicated 24/7 Support", "Agile Development Process"].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base">
                  <CheckCircle2 className="text-green-500" size={18} />
                  {text}
                </li>
              ))}
            </ul>

            <button className="w-full md:w-auto bg-[#3071b6] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-900 transition-all hover:translate-y-[-2px]">
              Learn More About Us
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;