"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: "Future of Web Development: What to Expect in 2026",
    excerpt: "Exploring the rise of AI-driven coding, serverless architecture, and the evolution of Next.js...",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072",
    date: "Jan 15, 2026",
    author: "Admin",
    category: "Technology"
  },
  {
    id: 2,
    title: "Why Cyber Security is Crucial for Modern SaaS",
    excerpt: "Protecting user data is no longer an option but a necessity. Learn how to secure your applications...",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070",
    date: "Jan 12, 2026",
    author: "Security Team",
    category: "Security"
  },
  {
    id: 3,
    title: "Maximizing Business Growth with Scalable Cloud Solutions",
    excerpt: "How cloud migration can reduce costs and improve the performance of your enterprise software...",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
    date: "Jan 10, 2026",
    author: "Cloud Expert",
    category: "Cloud"
  }
];

const Blog = () => {
  return (
    <section className="py-14 bg-white dark:bg-[#060a18]">
      <div className=" mx-auto px-4 md:px-24">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#3071b6] font-bold tracking-widest uppercase mb-4"
          >
            Insights & News
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl  md:text-5xl lg:text-4xl font-black dark:text-white mb-6"
          >
            Latest From Our <span className="text-[#3071b6]">Blog</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-[#3071b6] mx-auto rounded-full"></div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-100 dark:bg-slate-800/40 rounded-[2rem] overflow-hidden border border-gray-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#3071b6] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-[#3071b6]" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={14} className="text-[#3071b6]" /> {post.author}
                  </span>
                </div>

                <h3 className="text-xl font-bold dark:text-white mb-4 leading-snug group-hover:text-[#3071b6] transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link 
                  href={`/category/${post.id}`} 
                  className="inline-flex items-center gap-2 text-[#3071b6] font-bold text-sm hover:gap-3 transition-all"
                >
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link 
            href="/services" 
            className="inline-block border-2 border-[#3071b6] text-[#3071b6] px-10 py-4 rounded-xl font-bold hover:bg-[#3071b6] hover:text-white transition-all shadow-lg"
          >
            Explore All Articles
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Blog;