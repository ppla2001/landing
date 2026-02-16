"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Background() {
  const { t } = useLanguage();

  return (
    <section
      id="background"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-16 text-center">
          {t.background.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 space-y-8">
            {t.background.experience.map((exp, index) => (
              <div
                key={index}
                className="group relative pl-8 border-l-2 border-neutral-200 dark:border-neutral-800 hover:border-accent-600 dark:hover:border-accent-400 transition-colors duration-300"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-neutral-200 dark:bg-neutral-800 group-hover:bg-accent-600 dark:group-hover:bg-accent-400 transition-colors duration-300" />
                
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-accent-600 dark:text-accent-400 font-medium mb-3">
                    {exp.company}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Product Philosophy */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-8 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                {t.background.philosophy.title}
              </h3>
              <ul className="space-y-4">
                {t.background.philosophy.beliefs.map((belief, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3"
                  >
                    <svg
                      className="w-6 h-6 text-accent-600 dark:text-accent-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {belief}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
