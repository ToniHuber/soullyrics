"use client";

import { AnimatedSection } from "./AnimatedSection";
import { Send, FileText, ClipboardCheck, Music2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Send,
    title: "Unverbindliche Anfrage",
    description:
      "Du schickst mir dein Wunschprojekt mit allen wichtigen Angaben — unverbindlich und ohne Kosten.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Individuelles Angebot",
    description:
      "Auf Grundlage deiner Anfrage erstelle ich dir ein individuelles Angebot mit Leistungsumfang und Gesamtpreis.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Angebot annehmen & Auftragsbestätigung",
    description:
      "Nimmst du das Angebot an, erhältst du eine Auftragsbestätigung — erst damit kommt der Vertrag zustande.",
  },
  {
    number: "04",
    icon: Music2,
    title: "Produktion, Abstimmung & Fertigstellung",
    description:
      "Anschließend beginnt die Produktion. Nach Abstimmung erhältst du dein fertiges Projekt auf dem vereinbarten Lieferweg.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-12 sm:py-28">
      <div className="section-divider mb-8 sm:mb-16" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-4">
            In 4 einfachen Schritten
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            So entsteht dein{" "}
            <span className="gradient-text-gold">Song</span>
          </h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Von deiner Geschichte zum fertigen Song — persönlich begleitet, Schritt für Schritt.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <AnimatedSection key={step.number} delay={i * 150}>
                <div className="relative text-center group">
                  {/* Step number */}
                  <div className="text-7xl font-black text-gold-500/10 absolute -top-4 left-1/2 -translate-x-1/2 select-none pointer-events-none" style={{ fontFamily: "var(--font-playfair), serif" }}>
                    {step.number}
                  </div>

                  {/* Icon circle */}
                  <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-surface-800 border-2 border-gold-500/20 flex items-center justify-center transition-all duration-300 group-hover:border-gold-500/50 group-hover:shadow-lg group-hover:shadow-gold-500/10">
                    <Icon className="w-8 h-8 text-gold-400 transition-transform duration-200 group-hover:scale-110" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
