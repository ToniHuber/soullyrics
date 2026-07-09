"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Start", href: "/#hero" },
  { label: "Ablauf", href: "/#how-it-works" },
  { label: "Hörproben", href: "/#showcase" },
  { label: "Preise", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Kontakt", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-surface-950/80 backdrop-blur-xl border-b border-brand-500/10 shadow-lg shadow-brand-500/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/#hero" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 transition-transform duration-200 group-hover:scale-110">
            <Image src="/logo-emblem.png" alt="Soul Lyrics Studio" fill sizes="44px" className="object-contain" priority />
            <div className="absolute inset-0 rounded-full bg-gold-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Soul Lyrics
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-400 leading-tight">
              Studio
            </span>
          </div>
          <span className="hidden lg:inline text-white/42 text-xs italic ml-2 border-l border-white/20 pl-3">
            Wo Erinnerungen zu Musik werden.
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-white/79 hover:text-white rounded-full transition-colors duration-200 hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/soullyrics.studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 btn-primary !py-2.5 !px-5 !text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            Follow
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 bg-surface-950/95 backdrop-blur-xl border-t border-brand-500/10 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-sm font-medium text-white/86 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/soullyrics.studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 btn-primary !text-sm"
          >
            Instagram folgen
          </a>
        </div>
      </div>
    </nav>
  );
}
