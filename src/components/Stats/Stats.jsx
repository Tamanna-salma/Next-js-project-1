"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";

const Stats = () => {
  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "250+", label: "Happy Clients" },
    { value: "50+", label: "Expert Team Members" },
    { value: "10+", label: "Years Experience" }
  ];

  const technologies = ["React", "Next.js", "Node.js", "Python", "MongoDB", "PostgreSQL", "Docker", "AWS", "Firebase", "GraphQL", "Vue.js", "TypeScript"];

  return (
    <section className="py-16 px-4">

      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#9da6c5] via-[#3b82f6] to-[#6b4d9e] text-white shadow-2xl rounded-[2.5rem] overflow-hidden">
        
        <div className="py-14 px-6 md:px-20">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-black tracking-tight">
              Our Digital Impact
            </h2>
            <div className="w-20 h-1 bg-white/30 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white mb-20 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl md:text-6xl font-black drop-shadow-md">{stat.value}</h3>
                <p className="text-xs md:text-sm mt-2 font-semibold text-blue-100 uppercase tracking-[0.2em] opacity-80">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Marquee Section */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
               <div className="flex-1 h-[1px] bg-white/20"></div>
               <p className="text-white/90 text-sm font-bold uppercase tracking-widest">Technologies We Use</p>
               <div className="flex-1 h-[1px] bg-white/20"></div>
            </div>
            
            <Marquee 
              speed={60} 
              gradient={true} 
              gradientColor="rgba(30, 64, 175, 0.1)" 
              pauseOnHover={true}
            >
              {technologies.map((tech, i) => (
                <div
                  key={i}
                  className="bg-white/10 px-10 py-5 mx-4 rounded-2xl backdrop-blur-md border border-white/10 hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-default group"
                >
                  <span className="text-white font-bold text-xl tracking-wide group-hover:scale-110 block transition-transform">
                    {tech}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Stats;