"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Technologies = () => {
  const techCategories = [
    {
      category: "Frontend",
      techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Backend",
      techs: ["Node.js", "Python", "Express", "Django", "FastAPI"]
    },
    {
      category: "Database",
      techs: ["MongoDB", "PostgreSQL", "Firebase", "Redis", "MySQL"]
    },
    {
      category: "DevOps & Cloud",
      techs: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Google Cloud"]
    },
    {
      category: "Tools & Platforms",
      techs: ["GraphQL", "REST API", "Figma", "Git", "Jenkins"]
    },
    {
      category: "AI & ML",
      techs: ["TensorFlow", "PyTorch", "OpenAI", "Machine Learning", "NLP"]
    }
  ];

  return (
    <section className="py-14 bg-gray-50 dark:bg-[#0a0f1d]">
      <div className="max-w-7xl mx-auto px-6 md:px-24 p-14">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white">
            Technologies We <span className="text-blue-600">Master</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            We stay updated with the latest technologies to provide you with cutting-edge solutions.
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-white hover:bg-blue-100 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all"
            >
              
              {/* Category Title */}
              <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">
                {category.category}
              </h3>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech, j) => (
                  <motion.span
                    key={j}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-500 dark:text-blue-300 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Technologies;
