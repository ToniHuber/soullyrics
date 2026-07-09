"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedSection } from "./AnimatedSection";

const stats = [
  { value: 10000, suffix: "+", label: "Songs erstellt" },
  { value: 50, suffix: "+", label: "Genres verfügbar" },
  { value: 98, suffix: "%", label: "Zufriedenheit" },
  { value: 5000, suffix: "+", label: "Zufriedene Kunden" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target]);

  const formatted = count >= 1000 ? `${(count / 1000).toFixed(count >= target ? 0 : 1)}k` : String(count);

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 100} className="text-center">
                <div
                  className="text-4xl sm:text-5xl font-black gradient-text mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/50 text-sm font-medium">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
