"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, ArrowLeft } from 'lucide-react';

const projects = [
  { id: 1, title: "Lumen E-com", category: "Web", image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089", link: "#" },
  { id: 2, title: "Health Track", category: "App", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070", link: "#" },
  { 
    id: 7, 
    title: "Cyber Security", 
    category: "Software", 
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000", 
    link: "#" 
  },
  { id: 4, title: "Property Pro", category: "Web", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073", link: "#" },
  { 
    id: 5, 
    title: "AI Assistant", 
    category: "Software", 
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070", 
    link: "#" 
  },
  { id: 6, title: "Edu Learn", category: "Web", image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074", link: "#" },
];

const categories = ["All", "Web", "App", "Design", "Software"];

const AllProjects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="py-14 bg-white dark:bg-[#060a18]">
      <div className=" mx-auto px-4 md:px-24">
        
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-black dark:text-white mb-4">
              Our <span className="text-[#3071b6]">Portfolio</span>
            </h2>
            <p className="text-gray-500 max-w-md">We bring ideas to life with cutting-edge technology and creative design.</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  filter === cat 
                  ? "bg-[#3071b6] text-white shadow-lg shadow-blue-500/30" 
                  : "bg-gray-400 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Animation */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-xl"
              >
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                
                {/* Information Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-white font-bold text-sm uppercase tracking-widest">{project.category}</span>
                      <h3 className="text-2xl font-black text-white mt-1">{project.title}</h3>
                    </div>
                    <Link 
                      href={project.link}
                      className="w-14 h-14 bg-blue-700 rounded-2xl flex items-center justify-center text-black hover:bg-cyan-900 hover:text-white transition-all transform group-hover:rotate-12"
                    >
                      <ArrowUpRight size={28} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-10 flex justify-center"
        >
          <Link 
            href="/" 
            className="group flex items-center gap-3 bg-white dark:bg-slate-800 border-2 border-[#3071b6] text-[#3071b6] px-8 py-4 rounded-2xl font-black shadow-lg hover:bg-[#3071b6] hover:text-white transition-all duration-300"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
            Go Back to Home
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default AllProjects;