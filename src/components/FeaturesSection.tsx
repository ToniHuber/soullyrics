"use client";

import { AnimatedSection } from "./AnimatedSection";
import { Brain, Mic2, Wand2, Heart, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "KI-Songwriting",
    description:
      "Unsere fortschrittliche KI analysiert Emotionen, Genres und Stimmungen, um einzigartige Lyrics zu generieren, die wirklich berühren.",
    gradient: "from-brand-500 to-brand-700",
  },
  {
    icon: Mic2,
    title: "Vocal Synthese",
    description:
      "Realistischer KI-Gesang mit Gefühl. Verschiedene Stimmprofile für jeden Stil — von Soul über R&B bis Pop.",
    gradient: "from-gold-500 to-gold-600",
  },
  {
    icon: Wand2,
    title: "Beat-Produktion",
    description:
      "Professionelle Beats und Instrumentals, maßgeschneidert für deinen Song. Von akustisch bis elektronisch.",
    gradient: "from-brand-400 to-brand-600",
  },
  {
    icon: Heart,
    title: "Emotionale Tiefe",
    description:
      "Wir glauben, dass Musik Seele braucht. Deshalb ist jeder Song einzigartig — geprägt von deiner Geschichte.",
    gradient: "from-rose-400 to-rose-600",
  },
  {
    icon: Zap,
    title: "Blitzschnell",
    description:
      "Von der Idee zum fertigen Song in Minuten. Kein Warten, keine komplizierten Tools — nur pure Kreativität.",
    gradient: "from-amber-400 to-amber-600",
  },
  {
    icon: Globe,
    title: "Mehrsprachig",
    description:
      "Songs in Deutsch, Englisch, Spanisch und vielen weiteren Sprachen. Deine Musik kennt keine Grenzen.",
    gradient: "from-emerald-400 to-emerald-600",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="floating-orb w-[500px] h-[500px] bg-brand-600 top-0 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 sm:mb-20">
          <p className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Was uns einzigartig macht
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Musik mit <span className="gradient-text">Seele</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Soul Lyrics Studio vereint die Präzision moderner KI mit der emotionalen 
            Tiefe echter Musikkunst.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection key={feature.title} delay={i * 100}>
                <div className="glass-card glass-card-hover p-8 h-full group">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 transition-transform duration-200 group-hover:scale-110`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/50 leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
