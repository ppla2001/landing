"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface CaseDetailModalProps {
  caseItem: any;
  onClose: () => void;
  labels: any;
}

function CaseDetailModal({ caseItem, onClose, labels }: CaseDetailModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-neutral-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="w-full h-64 bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900 dark:to-accent-800 flex items-center justify-center">
          <svg
            className="w-24 h-24 text-accent-600 dark:text-accent-300"
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
        <div className="p-8 space-y-6">
          <div className="flex items-start justify-between">
            <h3 className="text-3xl font-bold text-neutral-900 dark:text-white">
              {caseItem.title}
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
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

          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            {caseItem.summary}
          </p>

          <div className="space-y-6 pt-4">
            <div>
              <h4 className="text-sm font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wider mb-2">
                {labels.problem}
              </h4>
              <p className="text-neutral-700 dark:text-neutral-300">
                {caseItem.problem}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wider mb-2">
                {labels.hypothesis}
              </h4>
              <p className="text-neutral-700 dark:text-neutral-300">
                {caseItem.hypothesis}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wider mb-2">
                {labels.proposal}
              </h4>
              <p className="text-neutral-700 dark:text-neutral-300">
                {caseItem.proposal}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wider mb-2">
                {labels.metrics}
              </h4>
              <p className="text-neutral-700 dark:text-neutral-300">
                {caseItem.metrics}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductCases() {
  const { t } = useLanguage();
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  return (
    <section
      id="cases"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-16 text-center">
          {t.cases.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.cases.items.map((caseItem) => (
            <div
              key={caseItem.id}
              className="group bg-neutral-50 dark:bg-neutral-900 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedCase(caseItem.id)}
            >
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900 dark:to-accent-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-16 h-16 text-accent-600 dark:text-accent-300"
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
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                  {caseItem.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 line-clamp-3">
                  {caseItem.summary}
                </p>
                <div className="pt-2 flex items-center text-accent-600 dark:text-accent-400 font-medium text-sm">
                  {t.cases.labels.readMore}
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCase !== null && (
        <CaseDetailModal
          caseItem={t.cases.items.find((c) => c.id === selectedCase)}
          onClose={() => setSelectedCase(null)}
          labels={t.cases.labels}
        />
      )}
    </section>
  );
}
