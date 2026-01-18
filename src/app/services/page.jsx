"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { categoriesData } from '@/data/data'; 
import { ArrowRight, CheckCircle2 } from 'lucide-react';


const Services = () => {
  return (
    <section className="py-24 bg-gray-100 dark:bg-[#0a0f1d]">
      <div className=" mx-auto px-4 md:px-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-[#3071b6] font-bold tracking-widest uppercase mb-4">Our Specialization</h4>
            <h2 className="text-4xl md:text-5xl font-black dark:text-white leading-tight">
              Comprehensive IT Solutions <br /> for Your <span className="text-[#3071b6]">Business Growth</span>
            </h2>
          </div>
          <Link href="/services" className="text-gray-600 dark:text-gray-400 font-bold hover:text-[#3071b6] transition-colors flex items-center gap-2 mb-2">
            View All Services <ArrowRight size={20} />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesData.slice(0, 6).map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-xl border border-gray-100 dark:border-slate-700 flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
            >
              <div>
                {/* Icon & Title */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${service.color}15`, color: service.color }}
                >
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 dark:text-white group-hover:text-[#3071b6] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                  {service.shortDesc}
                </p>

                {/* Features Preview */}
                <ul className="space-y-3 mb-8">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <CheckCircle2 size={16} style={{ color: service.color }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Link 
                href={`/category/${service.id}`}
                className="inline-flex items-center justify-center w-full py-4 rounded-xl font-bold transition-all group-hover:shadow-lg"
                style={{ 
                  backgroundColor: `${service.color}10`, 
                  color: service.color,
                  border: `1px solid ${service.color}30`
                }}
              >
                Explore Service <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-10 rounded-[3rem] bg-[#3071b6] text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-3xl font-bold mb-2">Have a custom project in mind?</h3>
            <p className="text-blue-100">Let’s discuss your requirements and build something amazing together.</p>
          </div>
          <button className="bg-white text-[#3071b6] px-10 py-4 rounded-2xl font-black hover:bg-blue-50 transition-colors whitespace-nowrap">
            Get a Free Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;