"use client";

import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";

export const COOKIE_CONSENT_STORAGE_KEY = "soullyrics-cookie-consent";
const COOKIE_CONSENT_VERSION = 2;

interface ConsentState {
  version: number;
  necessary: true;
  decidedAt: string;
}

function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed.version !== COOKIE_CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeConsent() {
  const state: ConsentState = {
    version: COOKIE_CONSENT_VERSION,
    necessary: true,
    decidedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent("cookie-consent-changed", { detail: state }));
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!readConsent()) setVisible(true);

    const reopen = () => setVisible(true);
    window.addEventListener("open-cookie-settings", reopen);
    return () => window.removeEventListener("open-cookie-settings", reopen);
  }, []);

  if (!visible) return null;

  const acknowledge = () => {
    writeConsent();
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie-Hinweis"
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6"
    >
      <div className="max-w-2xl mx-auto glass-card !bg-surface-900/95 !border-white/10 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center shrink-0">
              <Cookie className="w-5 h-5 text-surface-950" />
            </div>
            <div>
              <h2 className="text-white font-bold mb-1">Cookies & Datenschutz</h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Diese Website verwendet ausschließlich technisch notwendige Funktionen
                (z.B. diese Cookie-Einstellung selbst) — es werden keine Analyse- oder
                Marketing-Cookies eingesetzt. Schriftarten werden lokal ausgeliefert, es
                findet keine Datenübertragung an Google statt. Wenn du das Anfrageformular
                nutzt, verarbeiten wir deine Angaben ausschließlich zur Bearbeitung deiner
                Anfrage. Details findest du in unserer{" "}
                <a href="/datenschutz" className="text-gold-400 hover:text-gold-300 underline">
                  Datenschutzerklärung
                </a>
                .
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <button onClick={acknowledge} className="btn-primary !py-2.5 !text-sm">
              Verstanden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
