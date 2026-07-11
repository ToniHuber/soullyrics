"use client";

import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Wie läuft die Erstellung meines Songs ab?",
    answer:
      "Du sendest uns deine Anfrage mit Anlass und gewünschter Stimmung, teilst uns anschließend deine persönliche Geschichte mit und wir arbeiten daraus Liedtext, Musikrichtung und Stimme aus. Nach deiner Freigabe erhältst du deinen fertigen Song als digitale Datei.",
  },
  {
    question: "Wie lange dauert es, bis mein Song fertig ist?",
    answer:
      "Die Bearbeitungszeit hängt vom gewählten Leistungsumfang und der aktuellen Auslastung ab. Den genauen Zeitrahmen besprechen wir direkt bei deiner Anfrage mit dir. Gegen eine zusätzliche Gebühr ist auch eine Expressbearbeitung möglich.",
  },
  {
    question: "In welchen Sprachen kann mein Song geschrieben werden?",
    answer:
      "Dein Song kann unter anderem auf Deutsch oder Englisch entstehen — sprich uns gerne auf weitere Sprachen an.",
  },
  {
    question: "Kann ich Änderungswünsche äußern, wenn mir etwas nicht gefällt?",
    answer:
      "Ja. Drei Korrekturschleifen sind im Preis enthalten, wenn du sie innerhalb von 14 Werktagen nach dem ersten Entwurf schriftlich einreichst. Weitere oder später eingereichte Änderungen berechnen wir ab 10 €.",
  },
  {
    question: "Eignet sich ein Song auch als Geschenk?",
    answer:
      "Auf jeden Fall — viele unserer Songs entstehen als Geschenk zu Hochzeiten, Geburtstagen oder als bleibende Erinnerung an einen besonderen Menschen.",
  },
  {
    question: "In welchem Format erhalte ich meinen fertigen Song?",
    answer:
      "Du erhältst deinen fertigen Song als MP3-Datei zum Download.",
  },
  {
    question: "Was kostet ein persönlicher Song?",
    answer:
      "Die Preise richten sich nach der gewünschten Leistung — von einzelnem Liedtext bis Song mit Video. Eine Übersicht findest du im Bereich „Preise“, dein individuelles Angebot besprechen wir gerne persönlich mit dir.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-12 sm:py-28">
      <div className="section-divider mb-8 sm:mb-16" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Häufige Fragen
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Gut zu <span className="gradient-text">wissen</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimatedSection key={faq.question} delay={i * 60}>
                <div className="glass-card overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-white font-semibold">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-white/75 text-sm leading-relaxed px-5 sm:px-6 pb-5 sm:pb-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
