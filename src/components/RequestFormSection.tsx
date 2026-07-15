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

// Bump this whenever the consent text below or the linked Datenschutzerklärung
// changes materially, so stored requests stay tied to the version a customer saw.
const PRIVACY_CONSENT_VERSION = "2026-07-15";

type FieldErrors = Partial<Record<"name" | "email" | "recipient" | "occasion" | "mood" | "story" | "consent", string>>;

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
  const [errors, setErrors] = useState<FieldErrors>({});

  const clearError = (field: keyof FieldErrors) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nextErrors: FieldErrors = {};
    if (!name.trim()) nextErrors.name = "Bitte gib deinen Namen an.";
    if (!email.trim()) nextErrors.email = "Bitte gib deine E-Mail-Adresse an.";
    else if (!emailRegex.test(email.trim())) nextErrors.email = "Bitte gib eine gültige E-Mail-Adresse an.";
    if (!recipient.trim()) nextErrors.recipient = "Bitte gib an, für wen der Song gedacht ist.";
    if (!occasion.trim()) nextErrors.occasion = "Bitte gib den Anlass an.";
    if (!mood.trim()) nextErrors.mood = "Bitte gib die gewünschte Stimmung an.";
    if (!story.trim()) nextErrors.story = "Bitte erzähl mir deine Geschichte.";
    if (!consent) nextErrors.consent = "Bitte bestätige die Datenschutzhinweise.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      toast.error("Bitte überprüfe die markierten Felder.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          recipient,
          occasion,
          mood,
          story,
          packageName,
          consentGiven: true,
          consentVersion: PRIVACY_CONSENT_VERSION,
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setSent(true);
      toast.success("Anfrage gesendet! Ich melde mich bald bei dir.");
    } catch {
      toast.error("Etwas ist schiefgelaufen. Bitte versuche es erneut.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3.5 bg-surface-800/50 border rounded-xl text-white placeholder:text-white/46 placeholder:text-sm focus:outline-none focus:ring-2 transition-all ${
      hasError
        ? "border-rose-500/60 focus:border-rose-500/60 focus:ring-rose-500/15"
        : "border-white/10 focus:border-gold-500/50 focus:ring-gold-500/15"
    }`;

  const errorText = (message?: string) =>
    message ? <p className="text-rose-400 text-xs mt-1.5">{message}</p> : null;

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
            Erzähl mir von deiner Geschichte — ich melde mich bei dir, um alles Weitere
            gemeinsam zu besprechen. Alternativ erreichst du Soul Lyrics Studio direkt
            unter{" "}
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
                <p className="text-white/75 mb-6">Ich melde mich in Kürze bei dir.</p>
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
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="req-name" className="block text-sm font-medium text-white/79 mb-2">
                      Dein Name
                    </label>
                    <input
                      id="req-name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        clearError("name");
                      }}
                      placeholder="Dein Name"
                      className={inputClass(!!errors.name)}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "req-name-error" : undefined}
                    />
                    {errors.name && <p id="req-name-error" className="text-rose-400 text-xs mt-1.5">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="req-email" className="block text-sm font-medium text-white/79 mb-2">
                      E-Mail
                    </label>
                    <input
                      id="req-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        clearError("email");
                      }}
                      placeholder="deine@email.de"
                      className={inputClass(!!errors.email)}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "req-email-error" : undefined}
                    />
                    {errors.email && <p id="req-email-error" className="text-rose-400 text-xs mt-1.5">{errors.email}</p>}
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
                    onChange={(e) => {
                      setRecipient(e.target.value);
                      clearError("recipient");
                    }}
                    placeholder="z. B. meine Frau oder bester Freund"
                    className={inputClass(!!errors.recipient)}
                    aria-invalid={!!errors.recipient}
                    aria-describedby={errors.recipient ? "req-recipient-error" : undefined}
                  />
                  {errors.recipient && <p id="req-recipient-error" className="text-rose-400 text-xs mt-1.5">{errors.recipient}</p>}
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
                      onChange={(e) => {
                        setOccasion(e.target.value);
                        clearError("occasion");
                      }}
                      placeholder="z.B. Hochzeit, Geburtstag"
                      className={inputClass(!!errors.occasion)}
                      aria-invalid={!!errors.occasion}
                      aria-describedby={errors.occasion ? "req-occasion-error" : undefined}
                    />
                    {errors.occasion && <p id="req-occasion-error" className="text-rose-400 text-xs mt-1.5">{errors.occasion}</p>}
                  </div>
                  <div>
                    <label htmlFor="req-mood" className="block text-sm font-medium text-white/79 mb-2">
                      Gewünschte Stimmung
                    </label>
                    <input
                      id="req-mood"
                      type="text"
                      value={mood}
                      onChange={(e) => {
                        setMood(e.target.value);
                        clearError("mood");
                      }}
                      placeholder="z.B. warm, fröhlich, ruhig"
                      className={inputClass(!!errors.mood)}
                      aria-invalid={!!errors.mood}
                      aria-describedby={errors.mood ? "req-mood-error" : undefined}
                    />
                    {errors.mood && <p id="req-mood-error" className="text-rose-400 text-xs mt-1.5">{errors.mood}</p>}
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
                    className={inputClass(false)}
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
                    onChange={(e) => {
                      setStory(e.target.value);
                      clearError("story");
                    }}
                    placeholder="Erzähl mir von Namen, Erinnerungen, besonderen Erlebnissen und der persönlichen Botschaft, die im Song vorkommen soll..."
                    rows={6}
                    className={`${inputClass(!!errors.story)} resize-none`}
                    aria-invalid={!!errors.story}
                    aria-describedby={errors.story ? "req-story-error" : undefined}
                  />
                  {errors.story && <p id="req-story-error" className="text-rose-400 text-xs mt-1.5">{errors.story}</p>}
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

                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => {
                        setConsent(e.target.checked);
                        clearError("consent");
                      }}
                      aria-invalid={!!errors.consent}
                      aria-describedby={errors.consent ? "req-consent-error" : undefined}
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
                  {errors.consent && <p id="req-consent-error" className="text-rose-400 text-xs mt-1.5 ml-7">{errors.consent}</p>}
                </div>

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
