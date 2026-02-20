"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function ImpactMetrics() {
  const { t } = useLanguage();

  return (
    <section
      id="impact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/5 dark:bg-accent-400/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold text-neutral-900 dark:text-white mb-16 text-center"
        >
          {t.impact.title}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {t.impact.decisions.map((decision, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glassmorphism card */}
              <div className="relative h-full glass dark:glass-dark rounded-2xl p-6 border-l-4 border-accent-600 dark:border-accent-400 border-t border-r border-b border-white/20 dark:border-white/10 transition-all duration-500 hover:border-accent-500/50 dark:hover:border-accent-400/50 hover:shadow-xl hover:shadow-accent-500/10 dark:hover:shadow-accent-400/5 hover:-translate-y-1">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 to-accent-600/0 group-hover:from-accent-500/10 group-hover:to-accent-600/10 dark:group-hover:from-accent-400/5 dark:group-hover:to-accent-500/5 rounded-2xl transition-all duration-500" />

                <div className="relative z-10 space-y-4">
                  {/* Layer 1: Bold Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white leading-tight">
                    {decision.title}
                  </h3>

                  {/* Layer 2: Description */}
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                    {decision.description}
                  </p>

                  {/* Divider */}
                  {decision.tradeoff && (
                    <>
                      <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-700 to-transparent" />

                      {/* Layer 3: Trade-off Block */}
                      <div className="space-y-2 pt-1">
                        <span className="text-xs font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                          Trade-off
                        </span>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed italic font-light">
                          {decision.tradeoff}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
