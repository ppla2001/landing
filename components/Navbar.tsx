"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
        rafId = null;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 pointer-events-none"
    >
      <div className="max-w-5xl mx-auto px-3 sm:px-4 pointer-events-auto">
        {/* Floating pill container */}
        <div
          className={`flex items-center justify-between rounded-full border backdrop-blur-xl px-4 sm:px-6 py-2 sm:py-2.5 ${
            isScrolled
              ? "bg-white/75 dark:bg-neutral-900/65 border-neutral-200/70 dark:border-white/10"
              : "bg-white/60 dark:bg-neutral-950/40 border-neutral-200/50 dark:border-white/10"
          } ${
            isScrolled
              ? theme === "dark"
                ? "shadow-[0_18px_45px_rgba(0,0,0,0.55)]"
                : "shadow-[0_18px_45px_rgba(15,23,42,0.16)]"
              : theme === "dark"
                ? "shadow-[0_12px_30px_rgba(0,0,0,0.45)]"
                : "shadow-[0_12px_30px_rgba(15,23,42,0.12)]"
          }`}
        >
          {/* Left: Logo/Name */}
          <motion.a
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            whileHover={{ scale: 1.05 }}
            className="text-base sm:text-lg font-semibold tracking-tight text-neutral-900 dark:text-white hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
          >
            {t.nav.name}
          </motion.a>

          {/* Center: Desktop navigation links */}
          <div className="hidden md:flex items-center space-x-1">
            {t.nav.links.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group relative px-3 py-2 text-xs sm:text-sm font-medium text-neutral-700 hover:text-neutral-950 dark:text-neutral-200 dark:hover:text-white rounded-full transition-colors hover:bg-neutral-900/5 dark:hover:bg-white/10"
              >
                {link.label}
                <span className="absolute inset-x-3 bottom-1 h-[2px] rounded-full bg-accent-500/0 group-hover:bg-accent-600/80 dark:group-hover:bg-accent-400/80 transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Right: Toggles + Mobile menu button */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full border transition-colors bg-white/50 hover:bg-white/70 dark:bg-white/5 dark:hover:bg-white/10 text-neutral-700 hover:text-neutral-950 dark:text-neutral-200 dark:hover:text-white border-neutral-200/70 hover:border-accent-600/40 dark:border-white/10 dark:hover:border-accent-500/60"
              aria-label="Toggle language"
            >
              {language === "en" ? "ES" : "EN"}
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center w-8 h-8 rounded-full border transition-colors bg-white/50 hover:bg-white/70 dark:bg-white/5 dark:hover:bg-white/10 text-neutral-700 hover:text-neutral-950 dark:text-neutral-200 dark:hover:text-white border-neutral-200/70 hover:border-accent-600/40 dark:border-white/10 dark:hover:border-accent-500/60"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </motion.button>

            {/* Mobile hamburger */}
            <motion.button
              onClick={() => setIsMenuOpen((open) => !open)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden inline-flex items-center justify-center w-8 h-8 rounded-full border transition-colors bg-white/50 hover:bg-white/70 dark:bg-white/5 dark:hover:bg-white/10 text-neutral-700 hover:text-neutral-950 dark:text-neutral-200 dark:hover:text-white border-neutral-200/70 hover:border-accent-600/40 dark:border-white/10 dark:hover:border-accent-500/60"
              aria-label="Toggle navigation menu"
            >
              <motion.span
                key={isMenuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 10 }}
                transition={{ duration: 0.18 }}
              >
                {isMenuOpen ? (
                  <svg
                    className="w-4 h-4"
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
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </motion.span>
            </motion.button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="mt-2 md:hidden"
            >
              <div className="rounded-2xl border border-neutral-200/70 dark:border-white/10 bg-white/80 dark:bg-neutral-900/75 backdrop-blur-xl shadow-2xl py-2 px-2">
                {t.nav.links.map((link) => (
                  <button
                    key={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-neutral-700 hover:text-neutral-950 dark:text-neutral-200 dark:hover:text-white hover:bg-neutral-900/5 dark:hover:bg-white/10 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
