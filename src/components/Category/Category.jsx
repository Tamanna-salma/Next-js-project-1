"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { categoriesData } from '@/data/data';
import { Star } from 'lucide-react';

const Category = () => {
  return (
    <section className="py-14 bg-gray-50 dark:bg-[#0a0f1d]">
      <div className=" mx-auto px-6 md:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">
          Our <span className="text-[#3071b6]">Expertise</span>
        </h2>

        <div className=" grid grid-cols-1 md:grid-cols-4 gap-8">
          {categoriesData.map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -10 }}
              className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 flex flex-col justify-between"
            >
              <div>
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{item.shortDesc}</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                    <span className="font-bold dark:text-white">{item.rating}</span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">({item.reviews} reviews)</span>
                </div>

                <p className="text-2xl font-bold mb-6" style={{ color: item.color }}>{item.price}</p>
              </div>
              
              <Link href={`/category/${item.id}`} className="block w-full">
                <button className="w-full text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95 cursor-pointer" style={{ backgroundColor: item.color }}>
                  View Details →
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
