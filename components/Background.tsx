"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function Background() {
  const { t } = useLanguage();

  return (
    <section
      id="background"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/50 to-white dark:from-neutral-950 dark:via-neutral-900/50 dark:to-neutral-950" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-500/5 dark:bg-accent-400/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold text-neutral-900 dark:text-white mb-20 text-center"
        >
          {t.background.title}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 space-y-8">
            {t.background.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative pl-12"
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neutral-200 via-neutral-300 to-neutral-200 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800 group-hover:from-accent-500 group-hover:via-accent-600 group-hover:to-accent-500 dark:group-hover:from-accent-400 dark:group-hover:via-accent-500 dark:group-hover:to-accent-400 transition-all duration-500" />
                
                {/* Timeline dot */}
                <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-white dark:bg-neutral-950 border-4 border-neutral-200 dark:border-neutral-800 group-hover:border-accent-600 dark:group-hover:border-accent-400 group-hover:scale-125 transition-all duration-300 shadow-lg" />
                
                {/* Content card */}
                <div className="glass dark:glass-dark rounded-2xl p-6 lg:p-8 border border-white/20 dark:border-white/10 group-hover:border-accent-500/50 dark:group-hover:border-accent-400/50 transition-all duration-500 hover:shadow-xl hover:-translate-x-1">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-accent-600 dark:text-accent-400 font-semibold mb-4 text-lg">
                    {exp.company}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Product Philosophy */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="sticky top-32"
            >
              <div className="glass dark:glass-dark rounded-2xl p-8 border border-white/20 dark:border-white/10">
                <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-white mb-8">
                  {t.background.philosophy.title}
                </h3>
                <ul className="space-y-5">
                  {t.background.philosophy.beliefs.map((belief, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-accent-100 dark:bg-accent-900/50 flex items-center justify-center group-hover:bg-accent-200 dark:group-hover:bg-accent-800 transition-colors duration-300">
                          <svg
                            className="w-4 h-4 text-accent-600 dark:text-accent-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <span className="text-neutral-700 dark:text-neutral-300 leading-relaxed group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">
                        {belief}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
