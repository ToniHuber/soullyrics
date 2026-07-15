import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card !border-gold-500/30 p-5 sm:p-6 mb-12 flex gap-3">
            <span className="text-gold-400 font-semibold text-sm shrink-0">Hinweis:</span>
            <p className="text-white/75 text-sm leading-relaxed min-w-0 break-words">
              Diese Seite ist ein Entwurf zur rechtlichen Prüfung (WKO bzw. Anwalt) und
              stellt noch keine endgültige, rechtlich geprüfte Fassung dar. Die mit eckigen
              Klammern markierten Angaben sind noch offen und müssen vor Veröffentlichung
              final ergänzt und geprüft werden.
            </p>
          </div>
          <div className="space-y-10 text-white/72 leading-relaxed break-words [&_h1]:text-2xl sm:[&_h1]:text-3xl md:[&_h1]:text-4xl [&_h1]:font-black [&_h1]:text-white [&_h1]:mb-8 [&_h1]:break-words [&_h1]:hyphens-auto [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:break-words [&_h2]:hyphens-auto [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ul]:mb-3 [&_a]:text-gold-400 [&_a]:underline [&_strong]:text-white">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
