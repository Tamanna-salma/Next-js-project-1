"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Plus } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Ecosystem",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Healthcare Mobile App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "FinTech Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bbdac8626ad1?q=80&w=2070",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    title: "Real Estate Portal",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 5,
    title: "AI Chatbot Integration",
    category: "Software Solution",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=2012",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 6,
    title: "Educational LMS",
    category: "LMS Platform",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074",
    liveLink: "#",
    githubLink: "#",
  }
];

const Portfolio = () => {
  return (
    <section className="py-14 bg-white dark:bg-[#0a0f1d]">
      <div className=" mx-auto px-4 md:px-24">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#3071b6] font-bold tracking-widest uppercase mb-4"
          >
            Our Masterpieces
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black dark:text-white mb-6"
          >
            Case Studies & <span className="text-[#3071b6]">Projects</span>
          </motion.h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Explore how we help businesses transform their ideas into high-performance digital products.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-100 dark:bg-slate-800 rounded-[2.5rem] overflow-hidden h-[400px] shadow-lg"
            >
              {/* Project Image */}
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e40af]/90 via-[#3071b6]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="space-y-4"
                >
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-4 py-1.5 rounded-full border border-white/30">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-black text-white">{project.title}</h3>
                  
                  {/* Action Links */}
                  <div className="flex items-center gap-4 pt-4">
                    <Link 
                      href={project.liveLink}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#3071b6] hover:bg-[#3071b6] hover:text-white transition-all shadow-xl"
                      title="Live Preview"
                    >
                      <ExternalLink size={20} />
                    </Link>
                    <Link 
                      href={project.githubLink}
                      className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all shadow-xl"
                      title="Source Code"
                    >
                      <Github size={20} />
                    </Link>
                    <Link 
                      href={`/portfolio/${project.id}`}
                      className="ml-auto w-12 h-12 bg-[#3071b6] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                    >
                      <Plus size={24} />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-16 text-center">
           <Link href="/all-projects" className="bg-gradient-to-r from-[#1e40af] to-[#3071b6] text-white px-12 py-5 rounded-2xl font-black shadow-2xl hover:shadow-blue-500/40 transition-all hover:-translate-y-1">
             View More Projects
           </Link>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;