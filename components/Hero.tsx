"use client";

import { useLanguage } from "@/contexts/LanguageContext";

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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950"
    >
      <div className="max-w-6xl mx-auto w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white leading-tight">
              {t.hero.name}
            </h1>
            
            <p className="text-xl sm:text-2xl text-neutral-700 dark:text-neutral-300 font-medium">
              {t.hero.headline}
            </p>
            
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection("#cases")}
                className="px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                {t.hero.cta.primary}
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="px-8 py-4 bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 hover:border-accent-600 dark:hover:border-accent-500 text-neutral-900 dark:text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                {t.hero.cta.secondary}
              </button>
            </div>
          </div>

          {/* Photo Placeholder */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900 dark:to-accent-800 flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="text-accent-600 dark:text-accent-300">
                <svg
                  className="w-32 h-32 sm:w-40 sm:h-40"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
