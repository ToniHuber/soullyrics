"use client";

import { AnimatedSection } from "./AnimatedSection";
import { Heart, PenLine, Mic2, Users, Globe, Sparkles } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Deine Geschichte im Mittelpunkt",
    description:
      "Du erzählst mir deine persönliche Geschichte, deine Erinnerungen und Wünsche – sie bilden die Grundlage für deinen Song.",
  },
  {
    icon: PenLine,
    title: "Individuell geschriebener Liedtext",
    description:
      "Kein Baukastentext: Jeder Liedtext wird eigens für dich verfasst – individuell, persönlich und passend zu deiner Geschichte.",
  },
  {
    icon: Mic2,
    title: "Passende Stimme und Musikrichtung",
    description:
      "Ich stimme die Stimme und Musikrichtung gemeinsam mit dir auf deine Geschichte und die gewünschte Stimmung ab.",
  },
  {
    icon: Users,
    title: "Persönliche Abstimmung",
    description:
      "Ich stehe während des gesamten Entstehungsprozesses mit dir im Austausch, damit dein Song genau so klingt, wie du es dir wünschst.",
  },
  {
    icon: Globe,
    title: "Viele Sprachen möglich",
    description:
      "Dein Song kann in vielen Sprachen entstehen. Teile mir deine gewünschte Sprache mit – die passende Umsetzung wird individuell geprüft.",
  },
  {
    icon: Sparkles,
    title: "Songs für besondere Momente",
    description:
      "Ob Hochzeit, Geburtstag oder eine bewegende Erinnerung — dein Song wird zum musikalischen Andenken.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-12 sm:py-28">
      {/* Background accent */}
      <div className="floating-orb w-[500px] h-[500px] bg-gold-500 top-0 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Was Soul Lyrics Studio besonders macht
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Musik mit <span className="gradient-text">Seele</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Jeder Song entsteht aus deiner persönlichen Geschichte — mit persönlicher
            Gestaltung und Unterstützung moderner Technologie musikalisch umgesetzt.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection key={feature.title} delay={i * 100}>
                <div className="glass-card glass-card-hover p-8 h-full group">
                  <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center mb-6 transition-transform duration-200 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-surface-950" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/75 leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
