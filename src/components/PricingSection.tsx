"use client";

import { AnimatedSection } from "./AnimatedSection";
import { PenLine, Music, Image as ImageIcon, Video, Pencil, Zap } from "lucide-react";

const services = [
  {
    icon: PenLine,
    title: "Liedtext",
    price: "ab 20 €",
    description: "Individuell geschriebener Liedtext auf Basis deiner Geschichte.",
  },
  {
    icon: Music,
    title: "Persönlicher Song",
    price: "ab 40 €",
    description: "Liedtext und musikalische Umsetzung als fertiger Song.",
  },
  {
    icon: ImageIcon,
    title: "Song mit Cover",
    price: "ab 55 €",
    description: "Dein persönlicher Song inklusive Cover-Artwork.",
  },
  {
    icon: Video,
    title: "Song mit Video",
    price: "ab 75 €",
    description: "Dein persönlicher Song inklusive Video.",
  },
];

const addOns = [
  {
    icon: Pencil,
    title: "Weitere Änderungen",
    price: "ab 10 €",
    description: "Für Änderungswünsche über den vereinbarten Umfang hinaus.",
  },
  {
    icon: Zap,
    title: "Expressbearbeitung",
    price: "zzgl. 15 €",
    description: "Nach vorheriger Vereinbarung und je nach Verfügbarkeit.",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-12 sm:py-28">
      <div className="section-divider mb-8 sm:mb-16" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14 sm:mb-16">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Preise
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Transparente <span className="gradient-text-gold">Preise</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Die folgenden Preise verstehen sich als Startpreise. Den genauen
            Leistungsumfang und Endpreis bespreche ich persönlich mit dir.
          </p>
          <p className="text-white/55 text-sm mt-3">
            Umsatzsteuerbefreit aufgrund der Kleinunternehmerregelung gem. § 6 Abs. 1 Z 27 UStG.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.title} delay={i * 100}>
                <div className="glass-card glass-card-hover p-6 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-surface-950" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-gold-400 font-semibold mb-3">{service.price}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={400}>
          <div className="glass-card p-6 sm:p-8">
            <p className="text-white font-semibold mb-2">Zusatzoptionen</p>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Änderungswünsche werden je nach Umfang individuell abgestimmt. Zusätzliche
              Änderungen können ab 10 € berechnet werden.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {addOns.map((addOn) => {
                const Icon = addOn.icon;
                return (
                  <div key={addOn.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-800 border border-white/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-gold-400" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <h4 className="text-white font-semibold text-sm">{addOn.title}</h4>
                        <span className="text-gold-400 text-sm font-semibold">{addOn.price}</span>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">{addOn.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={500} className="text-center mt-10">
          <a href="#request" className="btn-primary">
            Jetzt anfragen
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
