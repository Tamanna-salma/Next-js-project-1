"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, TechCorp",
      image: "👨‍💼",
      text: "LumenSoft transformed our digital presence completely. Their team understood our vision and delivered beyond expectations. Highly recommended!",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager, StartupXYZ",
      image: "👩‍💼",
      text: "Great team, excellent results. They delivered on time, communicated transparently, and exceeded all our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, Digital Solutions",
      image: "👨‍💻",
      text: "Best investment we made for our business transformation. The quality of work and support is unmatched in the industry.",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Marketing Director, Creative Agency",
      image: "👩‍🔬",
      text: "Professional, efficient, and innovative. LumenSoft helped us scale our business with cutting-edge solutions.",
      rating: 5
    }
  ];

  return (
    <section className="py-14 bg-white dark:bg-[#0a0f1d]">
      <div className="max-w-7xl mx-auto px-6 md:px-24 p-14">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who've transformed their businesses with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all"
            >
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <span className="text-4xl">{testimonial.image}</span>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
