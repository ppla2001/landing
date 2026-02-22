"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

interface CaseDetailModalProps {
  caseItem: any;
  onClose: () => void;
  labels: any;
}

function CaseDetailModal({ caseItem, onClose, labels }: CaseDetailModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleScroll = () => {
    const el = scrollRef.current;
    setShowScrollTop(el ? el.scrollTop > 100 : false);
  };

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative glass dark:glass-dark rounded-3xl max-w-3xl w-full max-h-[90vh] shadow-2xl border border-white/20 dark:border-white/10 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="overflow-y-auto h-full max-h-[90vh]"
          >
          {/* Image */}
          <div className="relative w-full h-64 bg-gradient-to-br from-accent-100 via-accent-200 to-accent-300 dark:from-accent-900 dark:via-accent-800 dark:to-accent-700 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
            <svg
              className="relative z-10 w-24 h-24 text-accent-600 dark:text-accent-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 space-y-6">
            <div className="flex items-start justify-between">
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white pr-4">
                {caseItem.title}
              </h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 rounded-xl transition-colors flex-shrink-0"
              >
                <svg
                  className="w-6 h-6 text-neutral-600 dark:text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {caseItem.summary}
            </p>

            <div className="space-y-6 pt-4">
              {[
                { heading: labels.problem, content: caseItem.problem },
                { heading: "Discovery", content: caseItem.discovery },
                { heading: "Market Analysis", content: caseItem.marketAnalysis },
                { heading: labels.hypothesis, content: caseItem.hypothesis },
                { heading: "Product Specification", content: caseItem.productSpecification },
                { heading: "Solution", content: caseItem.solution },
                { heading: "Execution", content: caseItem.execution },
                { heading: "Build Decision", content: caseItem.buildDecision },
                { heading: "Results", content: caseItem.results },
                { heading: "Learnings", content: caseItem.learnings },
                { heading: labels.proposal, content: caseItem.proposal },
                { heading: labels.metrics, content: caseItem.metrics },
              ]
                .filter((item) => Boolean(item.content))
                .map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="text-xs font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                      {item.heading}
                    </h4>
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                ))}
            </div>
          </div>
          </div>

          {/* Scroll to top button - fixed at bottom-right of modal */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToTop();
                }}
                className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800/90 dark:bg-neutral-900/95 border border-neutral-700/50 dark:border-neutral-700/50 text-neutral-200 dark:text-neutral-300 hover:bg-neutral-700/90 dark:hover:bg-neutral-800/95 hover:text-white transition-colors shadow-lg"
                aria-label="Scroll to top"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ProductCases() {
  const { t } = useLanguage();
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  return (
    <section
      id="cases"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/50 to-white dark:from-neutral-950 dark:via-neutral-900/50 dark:to-neutral-950" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/5 dark:bg-accent-400/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold text-neutral-900 dark:text-white mb-20 text-center"
        >
          {t.cases.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.cases.items.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedCase(caseItem.id)}
            >
              {/* Glassmorphism card */}
              <div className="relative h-full glass dark:glass-dark rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 transition-all duration-500 hover:border-accent-500/50 dark:hover:border-accent-400/50 hover:shadow-2xl hover:shadow-accent-500/20 dark:hover:shadow-accent-400/10 hover:-translate-y-2">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 to-accent-600/0 group-hover:from-accent-500/10 group-hover:to-accent-600/10 dark:group-hover:from-accent-400/5 dark:group-hover:to-accent-500/5 transition-all duration-500" />

                {/* Image Placeholder */}
                <div className="relative w-full h-48 bg-gradient-to-br from-accent-100 via-accent-200 to-accent-300 dark:from-accent-900 dark:via-accent-800 dark:to-accent-700 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent" />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg
                      className="w-16 h-16 text-accent-600 dark:text-accent-300 relative z-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-300">
                    {caseItem.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed">
                    {caseItem.summary}
                  </p>
                  <div className="pt-2 flex items-center text-accent-600 dark:text-accent-400 font-medium text-sm group-hover:gap-2 transition-all duration-300">
                    <span>{t.cases.labels.readMore}</span>
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCase !== null && (
          <CaseDetailModal
            caseItem={t.cases.items.find((c) => c.id === selectedCase)}
            onClose={() => setSelectedCase(null)}
            labels={t.cases.labels}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
