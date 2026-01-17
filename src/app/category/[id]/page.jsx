"use client";
import React from 'react';
import { categoriesData } from '@/data/data';
import { Star, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CategoryDetailPage = ({ params }) => {
  const { id } = React.use(params);
  const category = categoriesData.find(item => item.id === id);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#0a0f1d]">
        <div className="text-center">
          <h1 className="text-4xl font-bold dark:text-white mb-4">Service Not Found</h1>
          <Link href="/">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-[#0a0f1d] min-h-screen">
      {/* Hero Banner */}
      <div 
        className="relative h-96 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('${category.bannerImg}')`,
          backgroundColor: category.color
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-8xl mb-4">{category.icon}</div>
            <h1 className="text-5xl font-bold">{category.title}</h1>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-24 py-16">
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Left Column - Description */}
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold dark:text-white mb-6">About This Service</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              {category.description}
            </p>

            {/* Features Section */}
            <h3 className="text-2xl font-bold dark:text-white mb-4">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {category.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <Check size={24} style={{ color: category.color }} className="flex-shrink-0" />
                  <span className="dark:text-white font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Service Info Card */}
          <div className="md:col-span-1">
            <div 
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 sticky top-20"
              style={{ borderTop: `4px solid ${category.color}` }}
            >
              <div className="text-6xl text-center mb-4">{category.icon}</div>
              
              {/* Price */}
              <div className="text-center mb-6">
                <p className="text-gray-600 dark:text-gray-400 mb-2">Starting Price</p>
                <p 
                  className="text-4xl font-bold"
                  style={{ color: category.color }}
                >
                  {category.price}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center gap-2 mb-6 pb-6 border-b dark:border-slate-700">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < Math.floor(category.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <div className="text-center">
                  <p className="font-bold dark:text-white">{category.rating}/5.0</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">({category.reviews} reviews)</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <button 
                className="w-full py-3 px-4 rounded-lg font-bold text-white mb-3 transition-all hover:opacity-90"
                style={{ backgroundColor: category.color }}
              >
                Get Started
              </button>
              <button className="w-full py-3 px-4 rounded-lg font-bold text-white bg-gray-600 hover:bg-gray-700 transition-all">
                Request Quote
              </button>
            </div>
          </div>
        </div>

        {/* All Services Data Table */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold dark:text-white mb-8">All Our Services</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-slate-800 rounded-lg shadow-lg">
              <thead>
                <tr style={{ backgroundColor: category.color }} className="text-white">
                  <th className="p-4 text-left">Icon</th>
                  <th className="p-4 text-left">Service</th>
                  <th className="p-4 text-left">Description</th>
                  <th className="p-4 text-left">Rating</th>
                  <th className="p-4 text-left">Price</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {categoriesData.map((service) => (
                  <tr key={service.id} className="border-b dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                    <td className="p-4 text-4xl">{service.icon}</td>
                    <td className="p-4">
                      <h3 className="font-bold dark:text-white">{service.title}</h3>
                    </td>
                    <td className="p-4 text-gray-600 dark:text-gray-400 text-sm">{service.shortDesc}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Star size={16} className="fill-yellow-400 text-yellow-400" />
                        <span className="font-bold dark:text-white">{service.rating}</span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">({service.reviews})</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="font-bold dark:text-white" style={{ color: service.color }}>
                        {service.price}
                      </p>
                    </td>
                    <td className="p-4 text-center">
                      <Link href={`/category/${service.id}`}>
                        <button 
                          className="text-white px-4 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-all"
                          style={{ backgroundColor: service.color }}
                        >
                          View
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailPage;
