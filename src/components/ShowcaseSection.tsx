"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Play, Pause, Heart, Clock, BarChart3 } from "lucide-react";

interface Track {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  plays: number;
}

const demoTracks: Track[] = [
  { id: 1, title: "Midnight Reflections", artist: "Soul Lyrics AI", genre: "Neo Soul", duration: "3:42", plays: 12453 },
  { id: 2, title: "Golden Hour", artist: "Soul Lyrics AI", genre: "R&B", duration: "4:08", plays: 8921 },
  { id: 3, title: "Stardust Memories", artist: "Soul Lyrics AI", genre: "Jazz Soul", duration: "3:55", plays: 15687 },
  { id: 4, title: "Electric Dreams", artist: "Soul Lyrics AI", genre: "Synth Soul", duration: "3:28", plays: 7234 },
  { id: 5, title: "Rainy Sunday", artist: "Soul Lyrics AI", genre: "Lo-Fi Soul", duration: "4:15", plays: 19102 },
  { id: 6, title: "Neonlichter", artist: "Soul Lyrics AI", genre: "German Soul", duration: "3:38", plays: 6518 },
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

  const formatPlays = (n: number) => {
    if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
    return String(n);
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
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Entdecke die Vielfalt unserer KI-generierten Songs — jeder Track ein Unikat.
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
                      <Play className="w-5 h-5 text-white/70 group-hover:text-white ml-0.5" />
                    )}
                  </div>

                  {/* Track info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className="text-white font-semibold truncate">{track.title}</h3>
                      {isPlaying && <MiniVisualizer isPlaying={true} />}
                    </div>
                    <p className="text-white/40 text-sm truncate">
                      {track.artist} · {track.genre}
                    </p>
                  </div>

                  {/* Meta info */}
                  <div className="hidden sm:flex items-center gap-6 text-white/30 text-sm shrink-0">
                    <div className="flex items-center gap-1.5">
                      <BarChart3 className="w-3.5 h-3.5" />
                      <span>{formatPlays(track.plays)}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{track.duration}</span>
                    </div>
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
                        : "text-white/20 hover:text-white/50 hover:bg-white/5"
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

        {/* Instagram CTA */}
        <AnimatedSection className="mt-12 text-center" delay={600}>
          <p className="text-white/40 text-sm mb-4">
            Mehr Songs & Behind-the-Scenes auf Instagram
          </p>
          <a
            href="https://www.instagram.com/soullyrics.studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            @soullyrics.studio folgen
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
