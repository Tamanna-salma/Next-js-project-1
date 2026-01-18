"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Github, Youtube } from 'lucide-react';

const socialStats = [
  {
    platform: "Facebook",
    count: "25K+",
    label: "Followers",
    icon: <Facebook size={32} />,
    color: "#1877F2",
    link: "#"
  },
  {
    platform: "LinkedIn",
    count: "10K+",
    label: "Connections",
    icon: <Linkedin size={32} />,
    color: "#0A66C2",
    link: "#"
  },
  {
    platform: "GitHub",
    count: "5K+",
    label: "Stars & Repos",
    icon: <Github size={32} />,
    color: "#333",
    link: "#"
  },
  {
    platform: "Instagram",
    count: "15K+",
    label: "Followers",
    icon: <Instagram size={32} />,
    color: "#E4405F",
    link: "#"
  }
];

const Followers = () => {
  return (
    <section className="py-14 bg-white dark:bg-[#060a18]">
      <div className=" mx-auto px-4 md:px-24">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold dark:text-white">
            Join Our <span className="text-[#3071b6]">Community</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Stay updated with our latest news, tech blogs, and project updates through our social media channels.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialStats.map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-3xl bg-pink-100 dark:bg-slate-800/50 border border-gray-300 dark:border-slate-700 flex flex-col items-center text-center group transition-all"
            >
              {/* Icon Circle */}
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white transition-transform group-hover:rotate-12"
                style={{ backgroundColor: social.color }}
              >
                {social.icon}
              </div>

              <h3 className="text-3xl font-black dark:text-white mb-1">
                {social.count}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider text-sm">
                {social.label}
              </p>
              
              <div className="mt-4 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: social.color }}>
                FOLLOW US →
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Followers;