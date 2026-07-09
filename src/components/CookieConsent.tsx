"use client";

import { useEffect, useState } from "react";
import { Cookie, ChevronDown } from "lucide-react";

export const COOKIE_CONSENT_STORAGE_KEY = "soullyrics-cookie-consent";
const COOKIE_CONSENT_VERSION = 1;

interface ConsentState {
  version: number;
  necessary: true;
  statistics: boolean;
  marketing: boolean;
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

function writeConsent(statistics: boolean, marketing: boolean) {
  const state: ConsentState = {
    version: COOKIE_CONSENT_VERSION,
    necessary: true,
    statistics,
    marketing,
    decidedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent("cookie-consent-changed", { detail: state }));
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!readConsent()) setVisible(true);

    const reopen = () => {
      setDetailsOpen(true);
      setVisible(true);
    };
    window.addEventListener("open-cookie-settings", reopen);
    return () => window.removeEventListener("open-cookie-settings", reopen);
  }, []);

  if (!visible) return null;

  const acceptAll = () => {
    writeConsent(true, true);
    setVisible(false);
  };

  const acceptNecessaryOnly = () => {
    writeConsent(false, false);
    setVisible(false);
  };

  const saveSelection = () => {
    writeConsent(statistics, marketing);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie-Einstellungen"
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6"
    >
      <div className="max-w-2xl mx-auto glass-card !bg-surface-900/95 !border-white/10 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center shrink-0">
              <Cookie className="w-5 h-5 text-surface-950" />
            </div>
            <div>
              <h2 className="text-white font-bold mb-1">Cookies & Datenschutz</h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Diese Website verwendet aktuell ausschließlich technisch notwendige
                Funktionen — es werden keine Analyse- oder Marketing-Cookies eingesetzt.
                Schriftarten werden lokal ausgeliefert, es findet keine Datenübertragung an
                Google statt. Wenn du das Anfrage- oder Newsletterformular nutzt,
                verarbeiten wir deine Angaben ausschließlich zur Bearbeitung deiner
                Anfrage. Details findest du in unserer{" "}
                <a href="/datenschutz" className="text-gold-400 hover:text-gold-300 underline">
                  Datenschutzerklärung
                </a>
                .
              </p>
            </div>
          </div>

          {detailsOpen && (
            <div className="space-y-3 mb-5 pl-[52px]">
              <div className="flex items-start justify-between gap-4 p-3 rounded-xl bg-surface-800/50 border border-white/10">
                <div>
                  <p className="text-white text-sm font-semibold">Technisch notwendig</p>
                  <p className="text-white/70 text-xs leading-relaxed mt-0.5">
                    Für den Betrieb der Website erforderlich (z.B. diese
                    Cookie-Einstellung selbst). Kann nicht deaktiviert werden.
                  </p>
                </div>
                <span className="shrink-0 text-xs font-semibold text-gold-400 mt-1">Immer aktiv</span>
              </div>

              <div className="flex items-start justify-between gap-4 p-3 rounded-xl bg-surface-800/50 border border-white/10">
                <div>
                  <p className="text-white text-sm font-semibold">Statistik</p>
                  <p className="text-white/70 text-xs leading-relaxed mt-0.5">
                    Derzeit nicht im Einsatz. Würde uns anonymisiert helfen zu verstehen,
                    wie die Website genutzt wird.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input
                    type="checkbox"
                    checked={statistics}
                    onChange={(e) => setStatistics(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-10 h-6 bg-surface-700 rounded-full peer peer-checked:bg-gold-500 transition-colors" />
                  <div className="absolute left-1 top-1 w-4 h-4 bg-cream rounded-full transition-transform peer-checked:translate-x-4" />
                </label>
              </div>

              <div className="flex items-start justify-between gap-4 p-3 rounded-xl bg-surface-800/50 border border-white/10">
                <div>
                  <p className="text-white text-sm font-semibold">Marketing</p>
                  <p className="text-white/70 text-xs leading-relaxed mt-0.5">
                    Derzeit nicht im Einsatz. Würde für personalisierte Werbung auf
                    Drittplattformen genutzt.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-10 h-6 bg-surface-700 rounded-full peer peer-checked:bg-gold-500 transition-colors" />
                  <div className="absolute left-1 top-1 w-4 h-4 bg-cream rounded-full transition-transform peer-checked:translate-x-4" />
                </label>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {!detailsOpen && (
              <button
                onClick={() => setDetailsOpen(true)}
                className="flex items-center justify-center gap-1.5 text-white/70 hover:text-white text-sm font-medium transition-colors sm:mr-auto"
              >
                Einstellungen
                <ChevronDown className="w-4 h-4" />
              </button>
            )}
            <div className={`flex flex-col sm:flex-row gap-3 ${detailsOpen ? "sm:ml-auto w-full sm:w-auto" : ""}`}>
              <button onClick={acceptNecessaryOnly} className="btn-outline !py-2.5 !text-sm">
                Nur notwendige
              </button>
              {detailsOpen ? (
                <button onClick={saveSelection} className="btn-primary !py-2.5 !text-sm">
                  Auswahl speichern
                </button>
              ) : (
                <button onClick={acceptAll} className="btn-primary !py-2.5 !text-sm">
                  Alle akzeptieren
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
