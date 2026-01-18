"use client";
import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import Category from "@/components/Category/Category";
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Zap, Globe, TrendingUp, Award, Code } from 'lucide-react';

export default function Home() {
  const features = [
    { icon: <Zap className="w-8 h-8" />, title: "Lightning Fast", desc: "Optimized performance" },
    { icon: <Globe className="w-8 h-8" />, title: "Global Reach", desc: "Worldwide support" },
    { icon: <Award className="w-8 h-8" />, title: "Award Winning", desc: "Industry recognized" },
    { icon: <Code className="w-8 h-8" />, title: "Clean Code", desc: "Best practices" }
  ];

  const testimonials = [
    { name: "John Smith", role: "CEO, TechCorp", text: "LumenSoft transformed our digital presence. Highly recommended!" },
    { name: "Sarah Johnson", role: "Product Manager, StartupXYZ", text: "Great team, excellent results. They delivered on time and exceeded expectations." },
    { name: "Michael Chen", role: "Founder, Digital Solutions", text: "Best investment we made for our business transformation journey." }
  ];

  return (
    <div>
      <Banner />
      <Category />

      {/* Section 2: Features */}
      <section className="py-20 bg-white dark:bg-[#0a0f1d]">
        <div className="container mx-auto px-6 md:px-24">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">
            Why Choose <span className="text-blue-600">LumenSoft?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 bg-gray-50 dark:bg-slate-800 rounded-xl text-center"
              >
                <div className="flex justify-center mb-4 text-blue-600">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-6 md:px-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold">500+</h3>
              <p className="text-lg mt-2">Projects Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold">250+</h3>
              <p className="text-lg mt-2">Happy Clients</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold">50+</h3>
              <p className="text-lg mt-2">Expert Team Members</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold">10+</h3>
              <p className="text-lg mt-2">Years Experience</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section className="py-20 bg-gray-50 dark:bg-[#0a0f1d]">
        <div className="container mx-auto px-6 md:px-24">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">
            How We <span className="text-blue-600">Work</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understand your requirements" },
              { step: "02", title: "Planning", desc: "Create comprehensive roadmap" },
              { step: "03", title: "Development", desc: "Build with latest technologies" },
              { step: "04", title: "Delivery", desc: "Launch and ongoing support" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-blue-600"
              >
                <span className="text-4xl font-bold text-blue-600">{item.step}</span>
                <h3 className="text-xl font-bold mt-4 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials */}
      <section className="py-20 bg-white dark:bg-[#0a0f1d]">
        <div className="container mx-auto px-6 md:px-24">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">
            What Our Clients <span className="text-blue-600">Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 bg-gray-50 dark:bg-slate-800 rounded-xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">"{testimonial.text}"</p>
                <h4 className="font-bold dark:text-white">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Technologies */}
      <section className="py-20 bg-gray-50 dark:bg-[#0a0f1d]">
        <div className="container mx-auto px-6 md:px-24">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">
            Technologies We <span className="text-blue-600">Master</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {["React", "Next.js", "Node.js", "Python", "MongoDB", "PostgreSQL", "Docker", "AWS", "Firebase", "GraphQL"].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="p-6 bg-white dark:bg-slate-800 rounded-lg font-bold text-gray-800 dark:text-white shadow-md"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 md:px-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Let's collaborate and create something amazing together. Get in touch with us today!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-10 py-4 bg-white text-blue-600 font-bold rounded-lg text-lg hover:shadow-xl transition-all"
          >
            Contact Us Now
          </motion.button>
        </div>
      </section>
    </div>
  );
}
