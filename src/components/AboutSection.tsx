"use client";

import { AnimatedSection } from "./AnimatedSection";
import { Heart, Sparkles, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Persönlich",
    description: "Jeder Song beginnt mit deiner Geschichte, nicht mit einer Vorlage.",
  },
  {
    icon: Sparkles,
    title: "Handgemacht",
    description: "Liedtext, Stimme und Musikrichtung werden von Menschen für dich ausgearbeitet — moderne Technologie unterstützt uns dabei nur im Hintergrund.",
  },
  {
    icon: ShieldCheck,
    title: "Diskret",
    description: "Deine Geschichte bleibt deine Geschichte. Wir gehen vertraulich mit allem um, was du uns anvertraust.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <AnimatedSection>
            <p className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Über uns
            </p>
            <h2
              className="text-4xl sm:text-5xl font-black text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Soul Lyrics <span className="gradient-text">Studio</span>
            </h2>
            <div className="space-y-4 text-white/62 text-lg leading-relaxed">
              <p>
                Soul Lyrics Studio ist entstanden aus der Überzeugung, dass jede
                Geschichte einen eigenen Klang verdient. Statt Musik von der
                Stange zu produzieren, hören wir zu — deinen Erinnerungen,
                deinen Emotionen und den Momenten, die dich geprägt haben.
              </p>
              <p>
                Aus dem, was du uns erzählst, entsteht ein Liedtext, der
                wirklich dir gehört, und ein Song, der genau die Stimmung
                trifft, die du dir wünschst. Moderne Technologie hilft uns
                dabei als Werkzeug im Hintergrund — im Mittelpunkt stehen aber
                immer du und deine Geschichte.
              </p>
              <p>
                Ob als Geschenk zu einem besonderen Anlass oder als bleibende
                Erinnerung: Wir nehmen uns Zeit, gemeinsam mit dir den
                passenden Sound für deine Geschichte zu finden.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="space-y-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="glass-card p-6 flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-gold-500 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{value.title}</h3>
                      <p className="text-white/62 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
