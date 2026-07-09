"use client";

import { useEffect, useState, useRef } from "react";
import { Sparkles, Play, ChevronDown } from "lucide-react";

const BAR_COUNT = 40;

function AudioVisualizer() {
  const [bars, setBars] = useState<{ duration: number; delay: number; height: number; opacity: number }[] | null>(null);

  useEffect(() => {
    setBars(
      Array.from({ length: BAR_COUNT }).map(() => ({
        duration: 0.8 + Math.random() * 0.8,
        delay: Math.random() * 0.5,
        height: 8 + Math.random() * 24,
        opacity: 0.6 + Math.random() * 0.4,
      }))
    );
  }, []);

  return (
    <div className="flex items-end gap-[2px] h-16" aria-hidden="true">
      {(bars ?? Array.from({ length: BAR_COUNT }).map(() => ({ duration: 1, delay: 0, height: 16, opacity: 0.7 }))).map(
        (bar, i) => (
          <div
            key={i}
            className="w-[3px] rounded-full bg-gradient-to-t from-gold-600 to-gold-300"
            style={{
              animation: bars ? `waveform ${bar.duration}s ease-in-out ${bar.delay}s infinite` : "none",
              height: `${bar.height}px`,
              opacity: bar.opacity,
            }}
          />
        )
      )}
    </div>
  );
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#d4880c40_0%,#0a0a0a_70%)]" />

      {/* Floating orbs */}
      <div
        className="floating-orb w-96 h-96 bg-gold-600 top-20 -left-48"
        style={{ animation: "pulse-glow 4s ease-in-out infinite" }}
      />
      <div
        className="floating-orb w-80 h-80 bg-gold-500 -bottom-20 -right-40"
        style={{ animation: "pulse-glow 5s ease-in-out 1s infinite" }}
      />
      <div
        className="floating-orb w-64 h-64 bg-gold-300 top-1/3 right-1/4"
        style={{ animation: "pulse-glow 6s ease-in-out 2s infinite" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-300 text-sm font-medium mb-8 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Wo Erinnerungen zu Musik werden</span>
        </div>

        {/* Headline */}
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-6 transition-all duration-700 delay-150 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="text-white">Deine</span>{" "}
          <span className="gradient-text">Geschichte.</span>
          <br />
          <span className="text-white">Dein</span>{" "}
          <span className="gradient-text-gold">persönlicher Song.</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg sm:text-xl text-white/72 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Soul Lyrics Studio verwandelt Erinnerungen, Gefühle und besondere Momente
          in individuelle Musik.
        </p>

        {/* Audio visualizer */}
        <div
          className={`flex justify-center mb-10 transition-all duration-700 delay-[450ms] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <AudioVisualizer />
        </div>

        {/* CTA */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a href="#request" className="btn-primary text-lg px-8 py-4">
            <Play className="w-5 h-5" />
            Persönlichen Song anfragen
          </a>
          <a href="#showcase" className="btn-outline text-lg px-8 py-4">
            Hörproben entdecken
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#features"
          className="flex flex-col items-center gap-2 text-white/42 hover:text-white/72 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Entdecken</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
