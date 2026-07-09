"use client";

import { AnimatedSection } from "./AnimatedSection";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Erinnerung",
    tagline: "Für einen besonderen Moment",
    features: [
      "Individuell geschriebener Liedtext",
      "Eine Musikrichtung nach Wahl",
      "Eine Korrekturschleife",
      "Lieferung als MP3-Datei",
    ],
    highlighted: false,
  },
  {
    name: "Geschichte",
    tagline: "Unser beliebtestes Paket",
    features: [
      "Individuell geschriebener Liedtext",
      "Musikrichtung & Stimme nach Wahl",
      "Zwei Korrekturschleifen",
      "Hochwertige Studioproduktion",
      "Lieferung als MP3 & WAV",
    ],
    highlighted: true,
  },
  {
    name: "Meisterwerk",
    tagline: "Für das ganz besondere Geschenk",
    features: [
      "Alles aus dem Paket „Geschichte“",
      "Persönliche Abstimmung per Telefon/Video",
      "Korrekturschleifen bis zur Zufriedenheit",
      "Exklusives Cover-Artwork",
    ],
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 sm:mb-20">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Preise & Pakete
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Das passende <span className="gradient-text-gold">Paket</span> für
            deine Geschichte
          </h2>
          <p className="text-white/62 text-lg max-w-2xl mx-auto">
            Jeder Song ist individuell — deshalb besprechen wir den genauen
            Preis persönlich mit dir, abgestimmt auf Umfang und Anlass.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <AnimatedSection key={pkg.name} delay={i * 120}>
              <div
                className={`glass-card glass-card-hover p-8 h-full flex flex-col ${
                  pkg.highlighted ? "!border-gold-500/40" : ""
                }`}
              >
                {pkg.highlighted && (
                  <span className="inline-block self-start px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wide mb-4">
                    Beliebt
                  </span>
                )}
                <h3
                  className="text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {pkg.name}
                </h3>
                <p className="text-white/52 text-sm mb-6">{pkg.tagline}</p>

                <p className="text-gold-400 font-semibold mb-6">Preis auf Anfrage</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-white/72 text-sm">
                      <Check className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#request"
                  className={pkg.highlighted ? "btn-primary w-full" : "btn-outline w-full"}
                >
                  Jetzt anfragen
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
