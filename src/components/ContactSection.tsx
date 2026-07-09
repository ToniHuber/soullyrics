"use client";

import { useState, type FormEvent } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Send, Mail, User, MessageSquare, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Bitte fülle alle Felder aus.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Failed");

      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Nachricht gesendet! Wir melden uns bald bei dir.");
    } catch {
      toast.error("Etwas ist schiefgelaufen. Bitte versuche es erneut.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />
      <div className="floating-orb w-[500px] h-[500px] bg-gold-600 top-1/2 -left-60" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side */}
          <AnimatedSection>
            <p className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Kontakt
            </p>
            <h2
              className="text-4xl sm:text-5xl font-black text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Lass uns{" "}
              <span className="gradient-text">gemeinsam</span> etwas
              Besonderes schaffen
            </h2>
            <p className="text-white/62 text-lg leading-relaxed mb-8">
              Hast du eine Idee, eine Frage oder möchtest du zusammenarbeiten? 
              Schreib uns — wir freuen uns auf deine Nachricht.
            </p>

            {/* Social links */}
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/soullyrics.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/62 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-800 border border-brand-500/10 flex items-center justify-center group-hover:border-brand-500/30 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Instagram</p>
                  <p className="text-white/52 text-sm">@soullyrics.studio</p>
                </div>
              </a>

              <a
                href="mailto:hello@soullyricsstudio.com"
                className="flex items-center gap-4 text-white/62 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-800 border border-brand-500/10 flex items-center justify-center group-hover:border-brand-500/30 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">E-Mail</p>
                  <p className="text-white/52 text-sm">hello@soullyricsstudio.com</p>
                </div>
              </a>
            </div>
          </AnimatedSection>

          {/* Right side – Form */}
          <AnimatedSection delay={200}>
            <div className="glass-card p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Nachricht gesendet!</h3>
                  <p className="text-white/62 mb-6">Wir melden uns bald bei dir.</p>
                  <button onClick={() => setSent(false)} className="btn-outline !text-sm">
                    Neue Nachricht
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/79 mb-2">
                      Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/42" />
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Dein Name"
                        className="w-full pl-11 pr-4 py-3.5 bg-surface-800/50 border border-brand-500/10 rounded-xl text-white placeholder:text-white/32 focus:outline-none focus:border-brand-500/40 focus:ring-2 focus:ring-brand-500/10 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/79 mb-2">
                      E-Mail
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/42" />
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="deine@email.de"
                        className="w-full pl-11 pr-4 py-3.5 bg-surface-800/50 border border-brand-500/10 rounded-xl text-white placeholder:text-white/32 focus:outline-none focus:border-brand-500/40 focus:ring-2 focus:ring-brand-500/10 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/79 mb-2">
                      Nachricht
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-white/42" />
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Erzähl uns deine Geschichte..."
                        rows={4}
                        className="w-full pl-11 pr-4 py-3.5 bg-surface-800/50 border border-brand-500/10 rounded-xl text-white placeholder:text-white/32 focus:outline-none focus:border-brand-500/40 focus:ring-2 focus:ring-brand-500/10 transition-all resize-none"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full !text-base"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Nachricht senden
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
