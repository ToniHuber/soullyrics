"use client";

import { useState, type FormEvent } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const packages = [
  "Liedtext",
  "Persönlicher Song",
  "Song mit Cover",
  "Song mit Video",
  "Ich bin mir noch nicht sicher",
];

export function RequestFormSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [recipient, setRecipient] = useState("");
  const [occasion, setOccasion] = useState("");
  const [mood, setMood] = useState("");
  const [packageName, setPackageName] = useState("");
  const [story, setStory] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !recipient.trim() || !occasion.trim() || !mood.trim() || !story.trim()) {
      toast.error("Bitte fülle alle Pflichtfelder aus.");
      return;
    }
    if (!consent) {
      toast.error("Bitte bestätige die Datenschutzhinweise.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, recipient, occasion, mood, story, packageName }),
      });

      if (!res.ok) throw new Error("Failed");

      setSent(true);
      toast.success("Anfrage gesendet! Wir melden uns bald bei dir.");
    } catch {
      toast.error("Etwas ist schiefgelaufen. Bitte versuche es erneut.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3.5 bg-surface-800/50 border border-white/10 rounded-xl text-white placeholder:text-white/46 placeholder:text-sm focus:outline-none focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/15 transition-all";

  return (
    <section id="request" className="relative py-12 sm:py-28">
      <div className="section-divider mb-8 sm:mb-16" />
      <div className="floating-orb w-[500px] h-[500px] bg-gold-500 top-1/2 -right-60" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Anfrageformular
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Deinen persönlichen <span className="gradient-text">Song</span> anfragen
          </h2>
          <p className="text-white/75 text-lg max-w-xl mx-auto">
            Erzähl uns von deiner Geschichte — wir melden uns bei dir, um alles Weitere
            gemeinsam zu besprechen. Alternativ erreichst du uns direkt unter{" "}
            <a href="mailto:anfrage@soullyricsstudio.at" className="text-gold-400 hover:text-gold-300 underline">
              anfrage@soullyricsstudio.at
            </a>
            .
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="glass-card p-6 sm:p-10">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Anfrage gesendet!</h3>
                <p className="text-white/75 mb-6">Wir melden uns in Kürze bei dir.</p>
                <button
                  onClick={() => {
                    setSent(false);
                    setConsent(false);
                  }}
                  className="btn-outline !text-sm"
                >
                  Neue Anfrage
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="req-name" className="block text-sm font-medium text-white/79 mb-2">
                      Dein Name
                    </label>
                    <input
                      id="req-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Dein Name"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="req-email" className="block text-sm font-medium text-white/79 mb-2">
                      E-Mail
                    </label>
                    <input
                      id="req-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="deine@email.de"
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="req-recipient" className="block text-sm font-medium text-white/79 mb-2">
                    Für wen ist der Song gedacht?
                  </label>
                  <input
                    id="req-recipient"
                    type="text"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    placeholder="z. B. meine Frau oder bester Freund"
                    className={inputClass}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="req-occasion" className="block text-sm font-medium text-white/79 mb-2">
                      Anlass
                    </label>
                    <input
                      id="req-occasion"
                      type="text"
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      placeholder="z.B. Hochzeit, Geburtstag"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="req-mood" className="block text-sm font-medium text-white/79 mb-2">
                      Gewünschte Stimmung
                    </label>
                    <input
                      id="req-mood"
                      type="text"
                      value={mood}
                      onChange={(e) => setMood(e.target.value)}
                      placeholder="z.B. warm, fröhlich, ruhig"
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="req-package" className="block text-sm font-medium text-white/79 mb-2">
                    Welche Leistung interessiert dich? (optional)
                  </label>
                  <select
                    id="req-package"
                    value={packageName}
                    onChange={(e) => setPackageName(e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Bitte wählen...</option>
                    {packages.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="req-story" className="block text-sm font-medium text-white/79 mb-2">
                    Deine Geschichte
                  </label>
                  <textarea
                    id="req-story"
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                    placeholder="Erzähl uns von Namen, Erinnerungen, besonderen Erlebnissen und der persönlichen Botschaft, die im Song vorkommen soll..."
                    rows={6}
                    className={`${inputClass} resize-none`}
                    required
                  />
                </div>

                <p className="text-white/65 text-xs leading-relaxed">
                  Mit dem Absenden dieser Anfrage entsteht noch kein kostenpflichtiger
                  Auftrag — sie ist für dich unverbindlich. Deine Angaben werden nur zur
                  Bearbeitung deiner Anfrage verwendet, siehe{" "}
                  <a href="/datenschutz" className="text-gold-400 hover:text-gold-300 underline">
                    Datenschutzerklärung
                  </a>
                  .
                </p>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="mt-0.5 w-4 h-4 shrink-0 rounded border-white/20 bg-surface-800/50 accent-gold-500 cursor-pointer"
                  />
                  <span className="text-white/65 text-xs leading-relaxed">
                    Ich habe die{" "}
                    <a href="/datenschutz" className="text-gold-400 hover:text-gold-300 underline">
                      Datenschutzerklärung
                    </a>{" "}
                    gelesen und stimme der Verarbeitung meiner Angaben, einschließlich
                    etwaiger persönlicher oder sensibler Informationen in meiner Geschichte,
                    zur Bearbeitung dieser Anfrage zu. *
                  </span>
                </label>

                <button type="submit" disabled={loading} className="btn-primary w-full !text-base">
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Anfrage senden
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
