"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Play, Pause, Heart, Clock } from "lucide-react";

interface Track {
  id: number;
  title: string;
  artist: string;
  genre: string;
  description: string;
  duration: string;
}

const demoTracks: Track[] = [
  { id: 1, title: "Midnight Reflections", artist: "Soul Lyrics Studio", genre: "Neo Soul", description: "Ruhiger Klavier-Song über eine durchwachte Nacht voller Erinnerungen.", duration: "3:42" },
  { id: 2, title: "Golden Hour", artist: "Soul Lyrics Studio", genre: "R&B", description: "Warmer R&B-Song über einen besonderen Sommerabend zu zweit.", duration: "4:08" },
  { id: 3, title: "Stardust Memories", artist: "Soul Lyrics Studio", genre: "Jazz Soul", description: "Jazzig-soulige Hommage an eine Freundschaft fürs Leben.", duration: "3:55" },
  { id: 4, title: "Electric Dreams", artist: "Soul Lyrics Studio", genre: "Synth Soul", description: "Elektronisch geprägter Song über Zukunftspläne und neue Wege.", duration: "3:28" },
  { id: 5, title: "Rainy Sunday", artist: "Soul Lyrics Studio", genre: "Lo-Fi Soul", description: "Entspannter Lo-Fi-Song für einen ruhigen Moment der Rückbesinnung.", duration: "4:15" },
  { id: 6, title: "Neonlichter", artist: "Soul Lyrics Studio", genre: "German Soul", description: "Deutschsprachiger Song über eine Nacht, die in Erinnerung bleibt.", duration: "3:38" },
];

function MiniVisualizer({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex items-end gap-[2px] h-4" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="w-[3px] rounded-full bg-brand-400"
          style={{
            height: isPlaying ? undefined : "4px",
            animation: isPlaying
              ? `waveform ${0.5 + i * 0.15}s ease-in-out infinite`
              : "none",
            transition: "height 200ms ease-out",
          }}
        />
      ))}
    </div>
  );
}

export function ShowcaseSection() {
  const [tracks, setTracks] = useState<Track[]>(demoTracks);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [likedIds, setLikedIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    fetch("/api/tracks")
      .then((r) => r.json())
      .then((data: Track[]) => {
        if (data && data.length > 0) setTracks(data);
      })
      .catch(() => {
        /* keep demo tracks */
      });
  }, []);

  const togglePlay = (id: number) => {
    setPlayingId((prev) => (prev === id ? null : id));
  };

  const toggleLike = (id: number) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section id="showcase" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />
      <div className="floating-orb w-[600px] h-[600px] bg-gold-500 -bottom-60 -right-60" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Hör rein
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Unsere <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-white/62 text-lg max-w-2xl mx-auto">
            Entdecke Songs, die aus echten Geschichten entstanden sind — jeder Track ein Unikat.
          </p>
        </AnimatedSection>

        {/* Track list */}
        <div className="space-y-3">
          {tracks.map((track, i) => {
            const isPlaying = playingId === track.id;
            const isLiked = likedIds.has(track.id);

            return (
              <AnimatedSection key={track.id} delay={i * 80}>
                <div
                  className={`glass-card group flex items-center gap-4 p-4 sm:p-5 transition-all duration-200 cursor-pointer ${
                    isPlaying
                      ? "!border-brand-500/40 !bg-brand-500/5"
                      : "hover:!border-brand-500/25"
                  }`}
                  onClick={() => togglePlay(track.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      togglePlay(track.id);
                    }
                  }}
                  aria-label={`${isPlaying ? "Pause" : "Play"} ${track.title}`}
                >
                  {/* Play button */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isPlaying
                        ? "bg-brand-500 shadow-lg shadow-brand-500/30"
                        : "bg-surface-700 group-hover:bg-brand-500/20"
                    }`}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-white" />
                    ) : (
                      <Play className="w-5 h-5 text-white/79 group-hover:text-white ml-0.5" />
                    )}
                  </div>

                  {/* Track info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className="text-white font-semibold truncate">{track.title}</h3>
                      {isPlaying && <MiniVisualizer isPlaying={true} />}
                    </div>
                    <p className="text-white/52 text-xs uppercase tracking-wide mb-1">
                      {track.genre}
                    </p>
                    <p className="text-white/62 text-sm truncate">{track.description}</p>
                  </div>

                  {/* Meta info */}
                  <div className="hidden sm:flex items-center gap-1.5 text-white/42 text-sm shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{track.duration}</span>
                  </div>

                  {/* Like button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(track.id);
                    }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isLiked
                        ? "text-rose-400 bg-rose-400/10"
                        : "text-white/32 hover:text-white/62 hover:bg-white/5"
                    }`}
                    aria-label={isLiked ? "Unlike" : "Like"}
                  >
                    <Heart
                      className="w-4 h-4"
                      fill={isLiked ? "currentColor" : "none"}
                    />
                  </button>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Social CTAs */}
        <AnimatedSection className="mt-12 text-center" delay={600}>
          <p className="text-white/52 text-sm mb-4">
            Mehr Songs & Behind-the-Scenes auf Instagram und YouTube
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/soullyrics.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              @soullyrics.studio folgen
            </a>
            <a
              href="https://www.youtube.com/@SoulLyricsStudioOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" /></svg>
              YouTube-Kanal
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
