"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-surface-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/#hero" className="flex items-center gap-3 mb-4">
              <div className="relative w-11 h-11 shrink-0">
                <Image src="/logo-emblem.png" alt="Soul Lyrics Studio" fill sizes="44px" className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  Soul Lyrics
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-400 leading-tight">
                  Studio
                </span>
              </div>
            </a>
            <p className="text-gold-400 text-sm italic mb-3">
              Wo Erinnerungen zu Musik werden.
            </p>
            <p className="text-white/65 text-sm leading-relaxed max-w-xs">
              Persönliche Songs aus echten Geschichten. Individuell für dich
              musikalisch umgesetzt — mit Herz und moderner Technologie als Werkzeug.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: "Start", href: "/#hero" },
                { label: "Über Soul Lyrics Studio", href: "/#about" },
                { label: "Ablauf", href: "/#how-it-works" },
                { label: "Hörproben", href: "/#showcase" },
                { label: "Preise", href: "/#pricing" },
                { label: "FAQ", href: "/#faq" },
                { label: "Song anfragen", href: "/#request" },
                { label: "Kontakt", href: "/#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/65 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              {[
                { label: "Impressum", href: "/impressum" },
                { label: "Datenschutz", href: "/datenschutz" },
                { label: "AGB", href: "/agb" },
                { label: "Widerrufsbelehrung", href: "/widerruf" },
                { label: "Muster-Widerrufsformular", href: "/widerrufsformular" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/65 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
                  className="text-white/65 text-sm hover:text-white transition-colors"
                >
                  Cookie-Hinweis
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Folge Soul Lyrics Studio</h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/soullyrics.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/65 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-surface-800 border border-white/10 flex items-center justify-center group-hover:border-gold-500/30 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </div>
                <span className="text-sm">@soullyrics.studio</span>
              </a>
              <a
                href="https://www.youtube.com/@SoulLyricsStudioOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/65 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-surface-800 border border-white/10 flex items-center justify-center group-hover:border-gold-500/30 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" /></svg>
                </div>
                <span className="text-sm">YouTube-Kanal</span>
              </a>
            </div>
          </div>
        </div>

        <div className="section-divider mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/55 text-sm">
            &copy; {new Date().getFullYear()} Soul Lyrics Studio. Alle Rechte vorbehalten.
          </p>
          <p className="text-white/46 text-xs flex items-center gap-1">
            <a
              href="https://www.besina.at"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              BESINA
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
