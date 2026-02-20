"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useEmailModal } from "@/contexts/EmailModalContext";
import { motion } from "framer-motion";

export default function Footer() {
  const { t } = useLanguage();
  const { openEmailModal } = useEmailModal();

  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-neutral-200/50 dark:border-neutral-800/50">
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent dark:from-neutral-950 dark:to-transparent" />
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-neutral-600 dark:text-neutral-400 font-light"
          >
            {t.footer.copyright}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-6"
          >
            <motion.a
              href={t.footer.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-white/50 dark:hover:bg-white/5 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>
            <motion.button
              onClick={openEmailModal}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-white/50 dark:hover:bg-white/5 transition-all duration-300"
              aria-label="Email"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
