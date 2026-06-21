"use client";

import { AnimatedSection } from "./AnimatedSection";
import { MessageSquare, Cpu, Music, Download } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Erzähl deine Geschichte",
    description:
      "Beschreibe deine Stimmung, dein Thema oder deine Geschichte. Die KI versteht Emotionen und kontextuelle Nuancen.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "KI komponiert",
    description:
      "Unsere KI generiert einzigartige Lyrics, Melodien und Beats — perfekt aufeinander abgestimmt.",
  },
  {
    number: "03",
    icon: Music,
    title: "Dein Song entsteht",
    description:
      "In Sekunden wird dein personalisierter Song produziert — mit professionellem Sound und echtem Gefühl.",
  },
  {
    number: "04",
    icon: Download,
    title: "Teile & Genieße",
    description:
      "Lade deinen Song herunter, teile ihn auf Social Media oder nutze ihn für deine Projekte.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 sm:mb-20">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-4">
            In 4 einfachen Schritten
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            So entsteht dein{" "}
            <span className="gradient-text-gold">Song</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Von der Idee zum fertigen Track — einfacher als du denkst.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.number} delay={i * 150}>
                  <div className="relative text-center group">
                    {/* Step number */}
                    <div className="text-7xl font-black text-brand-500/10 absolute -top-4 left-1/2 -translate-x-1/2 select-none pointer-events-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {step.number}
                    </div>

                    {/* Icon circle */}
                    <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-surface-800 border-2 border-brand-500/20 flex items-center justify-center transition-all duration-300 group-hover:border-brand-500/50 group-hover:shadow-lg group-hover:shadow-brand-500/10">
                      <Icon className="w-8 h-8 text-brand-400 transition-transform duration-200 group-hover:scale-110" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
