"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated gradient background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent-500/20 dark:bg-accent-400/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent-600/20 dark:bg-accent-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent-400/10 via-accent-500/5 to-accent-600/10 dark:from-accent-300/5 dark:via-accent-400/3 dark:to-accent-500/5 rounded-full blur-3xl animate-float" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 dark:opacity-20" />

      <div className="relative max-w-7xl mx-auto w-full py-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight"
            >
              <span className="text-neutral-900 dark:text-white">{t.hero.name.split(' ')[0]}</span>
              <br />
              <span className="gradient-text">{t.hero.name.split(' ').slice(1).join(' ')}</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl lg:text-4xl text-neutral-700 dark:text-neutral-200 font-light leading-relaxed"
            >
              {t.hero.headline}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <button
                onClick={() => scrollToSection("#cases")}
                className="group relative px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-accent-600/50 hover:-translate-y-1 overflow-hidden shine"
              >
                <span className="relative z-10">{t.hero.cta.primary}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="group px-8 py-4 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 hover:border-accent-600/50 dark:hover:border-accent-500/50 text-neutral-900 dark:text-white rounded-xl font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {t.hero.cta.secondary}
              </button>
            </motion.div>
          </motion.div>

          {/* Photo Placeholder - Enhanced */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden sm:flex justify-center md:justify-end relative"
          >
            <div className="relative">
              {/* Glow effect - scales with image */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/30 to-accent-600/30 dark:from-accent-400/20 dark:to-accent-500/20 rounded-3xl blur-2xl animate-pulse-glow scale-110" />
              
              {/* Main photo container - Progressive sizing */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[420px] xl:h-[420px] rounded-3xl bg-gradient-to-br from-accent-100 via-accent-200 to-accent-300 dark:from-accent-900 dark:via-accent-800 dark:to-accent-700 flex items-center justify-center overflow-hidden shadow-2xl border border-white/20 dark:border-neutral-800/50 backdrop-blur-sm transition-all duration-300">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
                
                {/* Photo placeholder icon - scales with container */}
                <div className="relative z-10 text-accent-600 dark:text-accent-300">
                  <svg
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-56 xl:h-56 transition-all duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-accent-500/50 rounded-full animate-pulse" />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-400/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
