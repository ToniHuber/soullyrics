"use client";

import { AnimatedSection } from "./AnimatedSection";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Singer / Songwriter",
    text: "Soul Lyrics Studio hat meine Art, Musik zu machen, komplett verändert. Die KI versteht Emotionen auf einem ganz anderen Level.",
    rating: 5,
    initials: "SM",
  },
  {
    name: "Lukas K.",
    role: "Content Creator",
    text: "Endlich kann ich einzigartige Musik für meine Videos erstellen, ohne Lizenzprobleme. Der Sound ist einfach unglaublich!",
    rating: 5,
    initials: "LK",
  },
  {
    name: "Maya T.",
    role: "Musikproduzentin",
    text: "Als Produzentin bin ich beeindruckt von der Qualität. Die Beats und Lyrics haben eine Tiefe, die man von KI nicht erwartet.",
    rating: 5,
    initials: "MT",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Was andere sagen
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Stimmen unserer <span className="gradient-text-gold">Community</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 150}>
              <div className="glass-card glass-card-hover p-8 h-full flex flex-col">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-brand-500/30 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star
                      key={si}
                      className="w-4 h-4 text-gold-400 fill-gold-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-white/70 leading-relaxed flex-1 mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-gold-500 flex items-center justify-center text-sm font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
