"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

type SongRequest = {
  id: number;
  name: string;
  email: string;
  recipient: string;
  occasion: string;
  mood: string;
  story: string;
  packageName: string | null;
  createdAt: string;
};

export default function AdminPage() {
  const [requests, setRequests] = useState<SongRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/admin/requests")
      .then((res) => res.json())
      .then((data) => setRequests(data.requests ?? []))
      .finally(() => setLoading(false));
  }, []);

  async function handleDelete(id: number) {
    if (!confirm("Diese Anfrage wirklich unwiderruflich löschen?")) return;

    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/requests/${id}`, { method: "DELETE" });
      if (res.ok) {
        setRequests((prev) => prev.filter((r) => r.id !== id));
        toast.success("Anfrage gelöscht.");
      } else {
        toast.error("Löschen fehlgeschlagen.");
      }
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 sm:p-10">
      <h1 className="text-2xl font-bold mb-6">
        Song-Anfragen {!loading && `(${requests.length})`}
      </h1>

      {loading && <p className="text-white/60">Lädt…</p>}
      {!loading && requests.length === 0 && (
        <p className="text-white/60">Keine Anfragen vorhanden.</p>
      )}

      <div className="space-y-4 max-w-3xl">
        {requests.map((r) => (
          <div
            key={r.id}
            className="relative border border-white/10 rounded-xl p-4 bg-white/5"
          >
            <button
              onClick={() => handleDelete(r.id)}
              disabled={deletingId === r.id}
              aria-label={`Anfrage von ${r.name} löschen`}
              className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-red-500/20 transition-colors disabled:opacity-40"
            >
              ×
            </button>
            <p className="font-semibold pr-10">
              {r.name} — {r.email}
            </p>
            <p className="text-sm text-white/60 mt-1">
              Für: {r.recipient} · Anlass: {r.occasion} · Stimmung: {r.mood}
              {r.packageName ? ` · Paket: ${r.packageName}` : ""}
            </p>
            <p className="text-sm text-white/80 mt-2 whitespace-pre-wrap">{r.story}</p>
            <p className="text-xs text-white/40 mt-2">
              {new Date(r.createdAt).toLocaleString("de-AT")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
