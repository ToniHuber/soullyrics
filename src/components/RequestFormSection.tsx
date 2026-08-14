"use client";

import { useState, type FormEvent } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

// Bump these whenever the linked text (Datenschutzerklärung-Einwilligung bzw. AGB-Fassung)
// changes materially, so stored requests stay tied to the version a customer saw.
const PRIVACY_CONSENT_VERSION = "2026-08-11";
const AGB_VERSION = "2026-08-11";

const SERVICE_OPTIONS = [
  "Persönlicher Liedtext – ab 20 €",
  "Kompletter personalisierter Song – ab 40 €",
  "Song inklusive Cover – ab 55 €",
  "Song inklusive Video – ab 75 €",
];

const OCCASION_OPTIONS = [
  "Geburtstag",
  "Hochzeit",
  "Jahrestag",
  "Liebe / Liebeserklärung",
  "Familie",
  "Freundschaft",
  "Geburt / Baby",
  "Trauer / Erinnerung",
  "Entschuldigung / Versöhnung",
  "Motivation / persönliche Botschaft",
  "Feiertag / besonderer Anlass",
  "Sonstiges",
];

const GENRE_OPTIONS = [
  "Pop",
  "Ballade",
  "Soft-Hip-Hop",
  "Rap",
  "R&B",
  "Akustisch",
  "Ilahi / Nasheed",
  "Patriotisch",
  "Fangesang",
  "Balkan / Albanisch",
  "Orientalisch / Arabisch",
  "Modern",
  "Emotional / ruhig",
  "Fröhlich / energiegeladen",
  "Keine Präferenz",
  "Sonstiges",
];

const LANGUAGE_OPTIONS = ["Deutsch", "Albanisch", "Englisch", "Mehrsprachig", "Andere Sprache"];
const VOICE_OPTIONS = ["Weibliche Stimme", "Männliche Stimme", "Duett / weiblich und männlich", "Keine Präferenz"];
const LENGTH_OPTIONS = ["bis ca. 2 Minuten", "ca. 2–3 Minuten", "ca. 3–4 Minuten", "über 4 Minuten", "Keine Präferenz"];

const USAGE_OPTIONS = [
  "Nur privat",
  "Geschenk",
  "Familienfeier / Veranstaltung",
  "Veröffentlichung auf Social Media",
  "Veröffentlichung auf YouTube",
  "Gewerbliche / kommerzielle Verwendung",
  "Sonstiges",
  "Noch nicht entschieden",
];

const CONTACT_METHOD_OPTIONS = ["E-Mail", "WhatsApp", "Telefon"];
const AVAILABILITY_OPTIONS = ["Vormittags", "Nachmittags", "Abends", "Egal"];
const PAYMENT_OPTIONS = ["Banküberweisung", "PayPal"];
const DELIVERY_OPTIONS = ["E-Mail", "WhatsApp"];

type FormState = {
  service: string;
  express: boolean;
  occasion: string;
  occasionOther: string;
  forWhom: string;
  fromWhom: string;
  genre: string;
  genreDescription: string;
  idea: string;
  wishes: string;
  noGos: string;
  language: string;
  languageDetails: string;
  voice: string;
  voiceNotes: string;
  pronunciation: string;
  length: string;
  usage: string;
  usageOther: string;
  story: string;
  deadline: string;
  visualDescription: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  contactMethod: string;
  availability: string;
  availabilityNotes: string;
  paymentMethod: string;
  deliveryMethod: string;
  correctionWishes: string;
  consent: boolean;
  agbAccepted: boolean;
};

const initialForm: FormState = {
  service: "",
  express: false,
  occasion: "",
  occasionOther: "",
  forWhom: "",
  fromWhom: "",
  genre: "",
  genreDescription: "",
  idea: "",
  wishes: "",
  noGos: "",
  language: "",
  languageDetails: "",
  voice: "",
  voiceNotes: "",
  pronunciation: "",
  length: "",
  usage: "",
  usageOther: "",
  story: "",
  deadline: "",
  visualDescription: "",
  name: "",
  address: "",
  email: "",
  phone: "",
  contactMethod: "",
  availability: "",
  availabilityNotes: "",
  paymentMethod: "",
  deliveryMethod: "",
  correctionWishes: "",
  consent: false,
  agbAccepted: false,
};

type FieldKey =
  | "service"
  | "occasion"
  | "occasionOther"
  | "genre"
  | "idea"
  | "wishes"
  | "language"
  | "languageDetails"
  | "voice"
  | "length"
  | "usage"
  | "usageOther"
  | "deadline"
  | "name"
  | "address"
  | "email"
  | "phone"
  | "contactMethod"
  | "paymentMethod"
  | "deliveryMethod"
  | "consent"
  | "agb";

type FieldErrors = Partial<Record<FieldKey, string>>;

function inputClass(hasError: boolean) {
  return `w-full px-4 py-3.5 bg-surface-800/50 border rounded-xl text-white placeholder:text-white/46 placeholder:text-sm focus:outline-none focus:ring-2 transition-all ${
    hasError
      ? "border-rose-500/60 focus:border-rose-500/60 focus:ring-rose-500/15"
      : "border-white/10 focus:border-gold-500/50 focus:ring-gold-500/15"
  }`;
}

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-white/79 mb-2">
        {label}
        {optional && <span className="text-white/40 font-normal"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-rose-400 text-xs mt-1.5">
          {error}
        </p>
      )}
    </div>
  );
}

function TextInput({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
  optional,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  optional?: boolean;
  type?: string;
}) {
  return (
    <Field id={id} label={label} optional={optional} error={error}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={inputClass(!!error)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
    </Field>
  );
}

function TextAreaInput({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
  optional,
  rows = 4,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  optional?: boolean;
  rows?: number;
}) {
  return (
    <Field id={id} label={label} optional={optional} error={error}>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className={`${inputClass(!!error)} resize-none`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
    </Field>
  );
}

function SelectInput({
  id,
  label,
  value,
  onChange,
  options,
  error,
  optional,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  error?: string;
  optional?: boolean;
}) {
  return (
    <Field id={id} label={label} optional={optional} error={error}>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass(!!error)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      >
        <option value="">Bitte wählen...</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Field>
  );
}

export function RequestFormSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  const update = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const clearError = (field: FieldKey) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const set = <K extends keyof FormState>(field: K, errorField?: FieldKey) => (value: FormState[K]) => {
    update(field, value);
    if (errorField) clearError(errorField);
  };

  const showVisualDescription = form.service.includes("Cover") || form.service.includes("Video");
  const showOccasionOther = form.occasion === "Sonstiges";
  const showUsageOther = form.usage === "Sonstiges";
  const showLanguageDetails = form.language === "Mehrsprachig" || form.language === "Andere Sprache";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nextErrors: FieldErrors = {};

    if (!form.service) nextErrors.service = "Bitte wähle eine Leistung aus.";
    if (!form.occasion) nextErrors.occasion = "Bitte wähle einen Anlass aus.";
    if (showOccasionOther && !form.occasionOther.trim()) nextErrors.occasionOther = "Bitte beschreibe den Anlass.";
    if (!form.genre) nextErrors.genre = "Bitte wähle eine Musikrichtung aus.";
    if (!form.idea.trim()) nextErrors.idea = "Bitte beschreibe die Grundidee.";
    if (!form.wishes.trim()) nextErrors.wishes = "Bitte gib an, was unbedingt vorkommen soll.";
    if (!form.language) nextErrors.language = "Bitte wähle eine Sprache aus.";
    if (!form.voice) nextErrors.voice = "Bitte wähle eine Stimmwahl aus.";
    if (!form.length) nextErrors.length = "Bitte wähle eine gewünschte Länge aus.";
    if (!form.usage) nextErrors.usage = "Bitte wähle die geplante Verwendung aus.";
    if (showUsageOther && !form.usageOther.trim()) nextErrors.usageOther = "Bitte beschreibe die Verwendung.";
    if (!form.deadline) nextErrors.deadline = "Bitte gib einen gewünschten Fertigstellungstermin an.";
    if (!form.name.trim()) nextErrors.name = "Bitte gib deinen Namen an.";
    if (!form.address.trim()) nextErrors.address = "Bitte gib deine Adresse an.";
    if (!form.email.trim()) nextErrors.email = "Bitte gib deine E-Mail-Adresse an.";
    else if (!emailRegex.test(form.email.trim())) nextErrors.email = "Bitte gib eine gültige E-Mail-Adresse an.";
    if (!form.phone.trim()) nextErrors.phone = "Bitte gib deine Telefonnummer an.";
    if (!form.contactMethod) nextErrors.contactMethod = "Bitte wähle deine bevorzugte Kontaktart aus.";
    if (!form.paymentMethod) nextErrors.paymentMethod = "Bitte wähle eine Zahlungsart aus.";
    if (!form.deliveryMethod) nextErrors.deliveryMethod = "Bitte wähle einen Lieferweg aus.";
    if (!form.consent) nextErrors.consent = "Bitte bestätige die Datenschutzhinweise.";
    if (!form.agbAccepted) nextErrors.agb = "Bitte bestätige die AGB.";

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
          ...form,
          consentGiven: form.consent,
          consentVersion: PRIVACY_CONSENT_VERSION,
          agbAccepted: form.agbAccepted,
          agbVersion: AGB_VERSION,
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
            Erzähl mir von deiner Geschichte — ich melde mich bei dir mit einem
            individuellen Angebot. Alternativ erreichst du Soul Lyrics Studio direkt
            unter{" "}
            <a href="mailto:anfrage@soullyrics.at" className="text-gold-400 hover:text-gold-300 underline">
              anfrage@soullyrics.at
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
                <p className="text-white/75 mb-2">Ich melde mich in Kürze bei dir.</p>
                <p className="text-white/50 text-sm mb-6">
                  Deine Anfrage ist unverbindlich — es ist dadurch noch kein Vertrag zustande gekommen.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm(initialForm);
                  }}
                  className="btn-outline !text-sm"
                >
                  Neue Anfrage
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                <div className="space-y-5">
                  <h3 className="text-white font-bold text-lg">Gewünschte Leistung</h3>
                  <SelectInput
                    id="req-service"
                    label="Welche Leistung interessiert dich?"
                    value={form.service}
                    onChange={set("service", "service")}
                    options={SERVICE_OPTIONS}
                    error={errors.service}
                  />
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.express}
                      onChange={(e) => update("express", e.target.checked)}
                      className="mt-0.5 w-4 h-4 shrink-0 rounded border-white/20 bg-surface-800/50 accent-gold-500 cursor-pointer"
                    />
                    <span className="text-white/65 text-xs leading-relaxed">
                      Expressbearbeitung gewünscht (+15 €) — nur nach vorheriger Vereinbarung möglich.
                    </span>
                  </label>
                </div>

                <div className="space-y-5">
                  <h3 className="text-white font-bold text-lg">Angaben zum Projekt</h3>

                  <SelectInput
                    id="req-occasion"
                    label="Anlass"
                    value={form.occasion}
                    onChange={set("occasion", "occasion")}
                    options={OCCASION_OPTIONS}
                    error={errors.occasion}
                  />
                  {showOccasionOther && (
                    <TextInput
                      id="req-occasion-other"
                      label="Welcher Anlass?"
                      value={form.occasionOther}
                      onChange={set("occasionOther", "occasionOther")}
                      error={errors.occasionOther}
                    />
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <TextInput
                      id="req-for-whom"
                      label="Für wen ist das Projekt?"
                      value={form.forWhom}
                      onChange={set("forWhom")}
                      optional
                    />
                    <TextInput
                      id="req-from-whom"
                      label="Von wem kommt das Projekt / Geschenk?"
                      value={form.fromWhom}
                      onChange={set("fromWhom")}
                      optional
                    />
                  </div>

                  <SelectInput
                    id="req-genre"
                    label="Musikrichtung / Klangrichtung"
                    value={form.genre}
                    onChange={set("genre", "genre")}
                    options={GENRE_OPTIONS}
                    error={errors.genre}
                  />
                  <TextInput
                    id="req-genre-description"
                    label="Genauere Beschreibung der gewünschten Musik- oder Klangrichtung"
                    value={form.genreDescription}
                    onChange={set("genreDescription")}
                    optional
                  />

                  <TextAreaInput
                    id="req-idea"
                    label="Grundidee des Liedes / Projekts"
                    value={form.idea}
                    onChange={set("idea", "idea")}
                    error={errors.idea}
                    rows={4}
                  />

                  <TextAreaInput
                    id="req-wishes"
                    label="Besondere Wünsche / was unbedingt vorkommen soll"
                    value={form.wishes}
                    onChange={set("wishes", "wishes")}
                    error={errors.wishes}
                    rows={4}
                  />

                  <TextAreaInput
                    id="req-no-gos"
                    label="No-Gos / was soll vermieden werden"
                    value={form.noGos}
                    onChange={set("noGos")}
                    optional
                    rows={3}
                  />

                  <SelectInput
                    id="req-language"
                    label="Sprache"
                    value={form.language}
                    onChange={set("language", "language")}
                    options={LANGUAGE_OPTIONS}
                    error={errors.language}
                  />
                  {showLanguageDetails && (
                    <TextInput
                      id="req-language-details"
                      label="Besondere Wünsche zur Sprache"
                      value={form.languageDetails}
                      onChange={set("languageDetails")}
                      optional
                    />
                  )}

                  <SelectInput
                    id="req-voice"
                    label="Stimmwahl"
                    value={form.voice}
                    onChange={set("voice", "voice")}
                    options={VOICE_OPTIONS}
                    error={errors.voice}
                  />
                  <TextInput
                    id="req-voice-notes"
                    label="Hinweise zur gewünschten Stimme"
                    value={form.voiceNotes}
                    onChange={set("voiceNotes")}
                    placeholder="z. B. warm, tief, ruhig, weich, kraftvoll..."
                    optional
                  />

                  <TextAreaInput
                    id="req-pronunciation"
                    label="Aussprachehinweise (Namen, Orte, besondere Wörter)"
                    value={form.pronunciation}
                    onChange={set("pronunciation")}
                    optional
                    rows={3}
                  />

                  <SelectInput
                    id="req-length"
                    label="Song-/Projektlänge"
                    value={form.length}
                    onChange={set("length", "length")}
                    options={LENGTH_OPTIONS}
                    error={errors.length}
                  />

                  <SelectInput
                    id="req-usage"
                    label="Geplante Verwendung des Songs"
                    value={form.usage}
                    onChange={set("usage", "usage")}
                    options={USAGE_OPTIONS}
                    error={errors.usage}
                  />
                  {showUsageOther && (
                    <TextInput
                      id="req-usage-other"
                      label="Welche Verwendung?"
                      value={form.usageOther}
                      onChange={set("usageOther", "usageOther")}
                      error={errors.usageOther}
                    />
                  )}

                  <TextAreaInput
                    id="req-story"
                    label="Geschichte und Botschaft"
                    value={form.story}
                    onChange={set("story")}
                    optional
                    rows={6}
                    placeholder="Erzähl mir von Namen, Erinnerungen, besonderen Erlebnissen und der persönlichen Botschaft, die im Song vorkommen soll..."
                  />

                  <TextInput
                    id="req-deadline"
                    label="Gewünschter Fertigstellungstermin"
                    type="date"
                    value={form.deadline}
                    onChange={set("deadline", "deadline")}
                    error={errors.deadline}
                  />
                  <p className="text-white/50 text-xs -mt-3">
                    Der endgültige Termin wird erst mit dem individuellen Angebot bestätigt.
                  </p>

                  {showVisualDescription && (
                    <TextAreaInput
                      id="req-visual-description"
                      label="Beschreibung der gewünschten Bilder, des Covers oder Videos"
                      value={form.visualDescription}
                      onChange={set("visualDescription")}
                      optional
                      rows={3}
                    />
                  )}
                </div>

                <div className="space-y-5">
                  <h3 className="text-white font-bold text-lg">Deine Kontaktdaten</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <TextInput
                      id="req-name"
                      label="Name"
                      value={form.name}
                      onChange={set("name", "name")}
                      error={errors.name}
                    />
                    <TextInput
                      id="req-address"
                      label="Adresse"
                      value={form.address}
                      onChange={set("address", "address")}
                      error={errors.address}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <TextInput
                      id="req-email"
                      label="E-Mail-Adresse"
                      type="email"
                      value={form.email}
                      onChange={set("email", "email")}
                      placeholder="deine@email.de"
                      error={errors.email}
                    />
                    <TextInput
                      id="req-phone"
                      label="Telefonnummer"
                      type="tel"
                      value={form.phone}
                      onChange={set("phone", "phone")}
                      error={errors.phone}
                    />
                  </div>

                  <SelectInput
                    id="req-contact-method"
                    label="Bevorzugte Kontaktart"
                    value={form.contactMethod}
                    onChange={set("contactMethod", "contactMethod")}
                    options={CONTACT_METHOD_OPTIONS}
                    error={errors.contactMethod}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <SelectInput
                      id="req-availability"
                      label="Bevorzugte Erreichbarkeit"
                      value={form.availability}
                      onChange={set("availability")}
                      options={AVAILABILITY_OPTIONS}
                      optional
                    />
                    <TextInput
                      id="req-availability-notes"
                      label="Zusätzliche Hinweise zur Erreichbarkeit"
                      value={form.availabilityNotes}
                      onChange={set("availabilityNotes")}
                      optional
                    />
                  </div>
                </div>

                <div className="space-y-5">
                  <h3 className="text-white font-bold text-lg">Zahlung &amp; Lieferung</h3>

                  <SelectInput
                    id="req-payment-method"
                    label="Gewünschte Zahlungsart"
                    value={form.paymentMethod}
                    onChange={set("paymentMethod", "paymentMethod")}
                    options={PAYMENT_OPTIONS}
                    error={errors.paymentMethod}
                  />
                  <SelectInput
                    id="req-delivery-method"
                    label="Gewünschter Lieferweg"
                    value={form.deliveryMethod}
                    onChange={set("deliveryMethod", "deliveryMethod")}
                    options={DELIVERY_OPTIONS}
                    error={errors.deliveryMethod}
                  />
                  <TextAreaInput
                    id="req-correction-wishes"
                    label="Besondere Wünsche zu späteren Korrekturen oder Änderungen"
                    value={form.correctionWishes}
                    onChange={set("correctionWishes")}
                    optional
                    rows={3}
                  />
                  <p className="text-white/50 text-xs">
                    Der endgültige Umfang und etwaige Kosten für Korrekturen werden im individuellen Angebot festgelegt.
                  </p>
                </div>

                <p className="text-white/65 text-xs leading-relaxed">
                  Mit dem Absenden dieses Formulars kommt noch <strong>kein Vertrag</strong> zustande —
                  es handelt sich um eine unverbindliche Anfrage. Auf Basis deiner Angaben erstelle ich
                  dir ein individuelles Angebot; ein Auftrag entsteht erst, wenn du dieses Angebot
                  annimmst und du eine Auftragsbestätigung erhältst.
                </p>

                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => {
                        update("consent", e.target.checked);
                        clearError("consent");
                      }}
                      aria-invalid={!!errors.consent}
                      aria-describedby={errors.consent ? "req-consent-error" : undefined}
                      className="mt-0.5 w-4 h-4 shrink-0 rounded border-white/20 bg-surface-800/50 accent-gold-500 cursor-pointer"
                    />
                    <span className="text-white/65 text-xs leading-relaxed">
                      <strong className="text-white/80 block mb-1.5">
                        Einwilligung in die Verarbeitung personenbezogener und sensibler Daten
                        mittels KI
                      </strong>
                      Ich willige ausdrücklich ein, dass die von mir im nachfolgenden Formular
                      freiwillig angegebenen personenbezogenen Daten – einschließlich etwaiger
                      besonderer Kategorien personenbezogener Daten im Sinne des Art. 9 DSGVO
                      (z. B. Angaben zur Gesundheit, religiösen oder weltanschaulichen
                      Überzeugung oder sexuellen Orientierung) – zum Zweck der Erstellung der von
                      mir beauftragten Inhalte, insbesondere personalisierter Lieder und Videos,
                      verarbeitet werden dürfen.
                      <br />
                      <br />
                      Mir ist bekannt und ich bin damit einverstanden, dass meine Angaben hierfür
                      auch an die zur Erstellung der Inhalte eingesetzten KI-Dienste bzw. deren
                      Anbieter übermittelt und von diesen verarbeitet werden können.
                      <br />
                      <br />
                      Nähere Informationen zu den eingesetzten Anbietern, den
                      Verarbeitungszwecken, einer etwaigen Übermittlung in Drittländer sowie zu
                      Speicherdauer und meinen Datenschutzrechten finde ich in der{" "}
                      <a href="/datenschutz" className="text-gold-400 hover:text-gold-300 underline">
                        Datenschutzerklärung
                      </a>
                      .
                      <br />
                      <br />
                      Ich kann diese Einwilligung jederzeit mit Wirkung für die Zukunft
                      widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung
                      bleibt hiervon unberührt. *
                    </span>
                  </label>
                  {errors.consent && (
                    <p id="req-consent-error" className="text-rose-400 text-xs mt-1.5 ml-7">
                      {errors.consent}
                    </p>
                  )}
                </div>

                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.agbAccepted}
                      onChange={(e) => {
                        update("agbAccepted", e.target.checked);
                        clearError("agb");
                      }}
                      aria-invalid={!!errors.agb}
                      aria-describedby={errors.agb ? "req-agb-error" : undefined}
                      className="mt-0.5 w-4 h-4 shrink-0 rounded border-white/20 bg-surface-800/50 accent-gold-500 cursor-pointer"
                    />
                    <span className="text-white/65 text-xs leading-relaxed">
                      Ich habe die{" "}
                      <a href="/agb" className="text-gold-400 hover:text-gold-300 underline">
                        Allgemeinen Geschäftsbedingungen (AGB)
                      </a>{" "}
                      von Soul Lyrics Studio gelesen und akzeptiere diese. *
                    </span>
                  </label>
                  {errors.agb && (
                    <p id="req-agb-error" className="text-rose-400 text-xs mt-1.5 ml-7">
                      {errors.agb}
                    </p>
                  )}
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
                      Unverbindlich anfragen
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
