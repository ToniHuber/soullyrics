import { NextResponse } from "next/server";
import { db } from "@/db";

export const dynamic = "force-dynamic";
import { tracks } from "@/db/schema";

const demoTracks = [
  {
    title: "Midnight Reflections",
    artist: "Soul Lyrics Studio",
    genre: "Neo Soul",
    description: "Ruhiger Klavier-Song über eine durchwachte Nacht voller Erinnerungen.",
    duration: "3:42",
    plays: 0,
    featured: true,
  },
  {
    title: "Golden Hour",
    artist: "Soul Lyrics Studio",
    genre: "R&B",
    description: "Warmer R&B-Song über einen besonderen Sommerabend zu zweit.",
    duration: "4:08",
    plays: 0,
    featured: true,
  },
  {
    title: "Stardust Memories",
    artist: "Soul Lyrics Studio",
    genre: "Jazz Soul",
    description: "Jazzig-soulige Hommage an eine Freundschaft fürs Leben.",
    duration: "3:55",
    plays: 0,
    featured: true,
  },
  {
    title: "Electric Dreams",
    artist: "Soul Lyrics Studio",
    genre: "Synth Soul",
    description: "Elektronisch geprägter Song über Zukunftspläne und neue Wege.",
    duration: "3:28",
    plays: 0,
    featured: false,
  },
  {
    title: "Rainy Sunday",
    artist: "Soul Lyrics Studio",
    genre: "Lo-Fi Soul",
    description: "Entspannter Lo-Fi-Song für einen ruhigen Moment der Rückbesinnung.",
    duration: "4:15",
    plays: 0,
    featured: true,
  },
  {
    title: "Neonlichter",
    artist: "Soul Lyrics Studio",
    genre: "German Soul",
    description: "Deutschsprachiger Song über eine Nacht, die in Erinnerung bleibt.",
    duration: "3:38",
    plays: 0,
    featured: false,
  },
];

export async function POST() {
  try {
    await db.insert(tracks).values(demoTracks);
    return NextResponse.json({ success: true, count: demoTracks.length });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json({ error: "Seed failed" }, { status: 500 });
  }
}
