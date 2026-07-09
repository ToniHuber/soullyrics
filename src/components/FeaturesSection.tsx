"use client";

import { AnimatedSection } from "./AnimatedSection";
import { Heart, PenLine, Mic2, Users, Globe, Sparkles } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Deine Geschichte im Mittelpunkt",
    description:
      "Du erzählst uns deine persönliche Geschichte, deine Erinnerungen und Wünsche — sie sind die Grundlage für deinen Song.",
    gradient: "from-rose-400 to-rose-600",
  },
  {
    icon: PenLine,
    title: "Individuell geschriebener Liedtext",
    description:
      "Kein Baukasten-Text: Jeder Liedtext wird eigens für dich verfasst und musikalisch ausgearbeitet.",
    gradient: "from-brand-500 to-brand-700",
  },
  {
    icon: Mic2,
    title: "Passende Stimme und Musikrichtung",
    description:
      "Ob Soul, R&B oder Pop — wir finden gemeinsam die Stimme und den Musikstil, der zu deiner Geschichte passt.",
    gradient: "from-gold-500 to-gold-600",
  },
  {
    icon: Users,
    title: "Persönliche Abstimmung",
    description:
      "Wir stehen während des gesamten Entstehungsprozesses mit dir im Austausch, damit dein Song genau richtig klingt.",
    gradient: "from-brand-400 to-brand-600",
  },
  {
    icon: Globe,
    title: "Viele Sprachen möglich",
    description:
      "Ob Deutsch, Englisch oder eine andere Sprache — dein Song entsteht in der Sprache, die zu dir passt.",
    gradient: "from-emerald-400 to-emerald-600",
  },
  {
    icon: Sparkles,
    title: "Songs für besondere Momente",
    description:
      "Ob Hochzeit, Geburtstag oder eine bewegende Erinnerung — dein Song wird zum musikalischen Andenken.",
    gradient: "from-amber-400 to-amber-600",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="floating-orb w-[500px] h-[500px] bg-gold-500 top-0 left-1/2 -translate-x-1/2" />

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
          <p className="text-white/62 text-lg max-w-2xl mx-auto">
            Jeder Song entsteht aus deiner persönlichen Geschichte — von Menschen für
            Menschen ausgearbeitet, mit moderner Technologie als Werkzeug im Hintergrund.
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
                  <p className="text-white/62 leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
