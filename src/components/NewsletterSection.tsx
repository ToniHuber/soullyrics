"use client";

import { useState, type FormEvent } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Sparkles, Loader2, Check } from "lucide-react";
import { toast } from "sonner";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed");
      }

      setSubscribed(true);
      setEmail("");
      toast.success("Willkommen im Soul Lyrics Newsletter!");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Fehler beim Anmelden.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-12 sm:py-28">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="glass-card p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-600/5 via-transparent to-gold-400/5" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-600 to-gold-400 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-6 h-6 text-white" />
              </div>

              <h3
                className="text-3xl sm:text-4xl font-black text-white mb-4"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Bleib auf dem <span className="gradient-text">Laufenden</span>
              </h3>
              <p className="text-white/75 text-lg max-w-xl mx-auto mb-8">
                Erhalte exklusive Updates, neue Songs und Insider-Einblicke direkt in dein Postfach.
              </p>

              {subscribed ? (
                <div className="flex items-center justify-center gap-3 text-emerald-400">
                  <Check className="w-5 h-5" />
                  <span className="font-semibold">Du bist dabei! Check dein Postfach.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="deine@email.de"
                    className="flex-1 px-5 py-3.5 bg-surface-800/50 border border-white/10 rounded-full text-white placeholder:text-white/46 focus:outline-none focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/15 transition-all"
                    required
                  />
                  <button type="submit" disabled={loading} className="btn-primary shrink-0">
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      "Anmelden"
                    )}
                  </button>
                </form>
              )}

              <p className="text-white/46 text-xs mt-4">
                Kein Spam. Jederzeit abmeldbar.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
