"use client";

import React from "react";
import { categoriesData } from "@/data/data";
import Link from "next/link";
import { Star, CheckCircle2 } from "lucide-react";
const details = ({ params }) => {
 
  const { id } = React.use(params); 
  
  const category = categoriesData.find((item) => item.id === id);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Category not found!</h2>
        <Link href="/" className="text-blue-500 mt-4 underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#060a18] transition-colors duration-500">
      {/* Banner Section */}
      <div 
        className="w-full h-[40vh] relative flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${category.bannerImg})`, backgroundColor: category.color }}
      >
        <div className="text-center text-white">
          <span className="text-6xl mb-4 block">{category.icon}</span>
          <h1 className="text-4xl md:text-6xl font-extrabold">{category.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-24 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Left Column: Details */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center text-yellow-400">
                   <Star size={20} fill="currentColor" />
                   <span className="ml-1 font-bold text-lg text-black dark:text-white">{category.rating}</span>
                </div>
                <span className="text-gray-500">({category.reviews} Reviews)</span>
              </div>
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                {category.description}
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6 dark:text-white">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {category.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700">
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span className="dark:text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Pricing Card */}
          <div className="md:col-span-1">
            <div className="sticky top-24 p-8 rounded-3xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl">
              <p className="text-gray-500 mb-2">Starting from</p>
              <h2 className="text-5xl font-extrabold text-[#3071b6] mb-6">{category.price}</h2>
              <button className="w-full bg-[#3071b6] text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all mb-4">
                Book This Service
              </button>
              <p className="text-center text-sm text-gray-400">No hidden charges. 24/7 Support included.</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default details ;