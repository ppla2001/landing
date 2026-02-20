"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface EmailModalContextType {
  openEmailModal: () => void;
}

const EmailModalContext = createContext<EmailModalContextType | undefined>(
  undefined,
);

function EmailModalContent({
  email,
  onClose,
}: {
  email: string;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => {
      setCopied(false);
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [copied, onClose]);

  return (
    <div
      className="max-w-[300px] rounded-xl bg-white dark:bg-neutral-950 shadow-2xl p-6 shrink-0"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between gap-6 mb-5">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Get in touch
        </h3>
        <button
          onClick={onClose}
          className="p-1.5 -m-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors flex-shrink-0 text-neutral-600 dark:text-neutral-400 text-2xl leading-none font-light"
          aria-label="Close"
        >
          ×
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        <motion.button
          onClick={handleCopy}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex flex-col items-center justify-center gap-2.5 p-4 rounded-lg bg-neutral-50/50 dark:bg-neutral-800/50 hover:bg-neutral-100/80 dark:hover:bg-neutral-700/50 transition-all duration-300 min-h-[96px]"
        >
          {copied ? (
            <>
              <svg
                className="w-8 h-8 text-accent-600 dark:text-accent-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm font-medium text-accent-600 dark:text-accent-400">
                Copied!
              </span>
            </>
          ) : (
            <>
              <svg
                className="w-8 h-8 text-neutral-600 dark:text-neutral-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Copy address
              </span>
            </>
          )}
        </motion.button>

        <motion.a
          href={`mailto:${email}`}
          onClick={onClose}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex flex-col items-center justify-center gap-2.5 p-4 rounded-lg bg-neutral-50/50 dark:bg-neutral-800/50 hover:bg-neutral-100/80 dark:hover:bg-neutral-700/50 transition-all duration-300 min-h-[96px] no-underline"
        >
          <svg
            className="w-8 h-8 text-neutral-600 dark:text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Open mail app
          </span>
        </motion.a>
      </div>

      <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center break-words">
        {email}
      </p>
    </div>
  );
}

export function EmailModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useLanguage();
  const [emailModalOpen, setEmailModalOpen] = useState(false);

  const openEmailModal = () => setEmailModalOpen(true);
  const closeEmailModal = () => setEmailModalOpen(false);

  return (
    <EmailModalContext.Provider value={{ openEmailModal }}>
      {children}
      <AnimatePresence>
        {emailModalOpen && (
          <motion.div
            key="email-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={closeEmailModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ type: "spring", damping: 28, stiffness: 500 }}
              className="w-full max-w-[300px] flex justify-center"
            >
              <EmailModalContent
                email={t.contact.email}
                onClose={closeEmailModal}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </EmailModalContext.Provider>
  );
}

export function useEmailModal() {
  const context = useContext(EmailModalContext);
  if (context === undefined) {
    throw new Error("useEmailModal must be used within an EmailModalProvider");
  }
  return context;
}
