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
    title: "Persönlich gestaltet",
    description: "Liedtext, Stimme und Musikrichtung stimme ich gemeinsam mit dir ab und setze sie mithilfe moderner Technologie musikalisch um.",
  },
  {
    icon: ShieldCheck,
    title: "Diskret",
    description: "Deine Geschichte bleibt deine Geschichte. Ich behandle alles, was du mir anvertraust, vertraulich.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-12 sm:py-28">
      <div className="section-divider mb-8 sm:mb-16" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <AnimatedSection>
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Über Soul Lyrics Studio
            </p>
            <h2
              className="text-4xl sm:text-5xl font-black text-white mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Soul Lyrics <span className="gradient-text">Studio</span>
            </h2>
            <div className="space-y-4 text-white/75 text-lg leading-relaxed">
              <p>
                Soul Lyrics Studio ist aus der Überzeugung entstanden, dass jede
                Geschichte ihren eigenen Klang verdient. Statt Musik von der
                Stange zu produzieren, höre ich dir zu – deinen Erinnerungen,
                deinen Emotionen und den Momenten, die dich geprägt haben.
              </p>
              <p>
                Aus dem, was du mir erzählst, entsteht ein individueller
                Liedtext und daraus ein Song, der die gewünschte Stimmung
                trägt. Moderne Technologie dient dabei als Werkzeug im
                Hintergrund. Im Mittelpunkt stehen immer du und deine
                Geschichte.
              </p>
              <p>
                Ob als Geschenk für einen besonderen Anlass oder als bleibende
                Erinnerung: Ich nehme mir die Zeit, gemeinsam mit dir den
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
                    <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-surface-950" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{value.title}</h3>
                      <p className="text-white/75 text-sm leading-relaxed">{value.description}</p>
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
