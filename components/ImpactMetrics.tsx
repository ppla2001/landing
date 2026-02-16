"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

function AnimatedNumber({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState("0");
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Check if value contains a number
    const match = value.match(/[\d,]+/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const numericValue = parseInt(match[0].replace(/,/g, ""));
    const prefix = value.substring(0, match.index);
    const suffix = value.substring((match.index || 0) + match[0].length);
    
    const startTime = Date.now();
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const currentValue = Math.floor(numericValue * progress);
      const formatted = currentValue.toLocaleString();
      setDisplayValue(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isVisible, value, duration]);

  return (
    <div ref={elementRef} className="text-5xl sm:text-6xl font-bold text-accent-600 dark:text-accent-400">
      {displayValue}
    </div>
  );
}

export default function ImpactMetrics() {
  const { t } = useLanguage();

  return (
    <section
      id="impact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-16 text-center">
          {t.impact.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {t.impact.metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-6 rounded-xl hover:bg-white dark:hover:bg-neutral-800 transition-colors duration-300"
            >
              <AnimatedNumber value={metric.number} />
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
