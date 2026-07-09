import { NextResponse } from "next/server";
import { db } from "@/db";

export const dynamic = "force-dynamic";
import { tracks } from "@/db/schema";

const demoTracks = [
  { title: "Midnight Reflections", artist: "Soul Lyrics Studio", genre: "Neo Soul", duration: "3:42", plays: 12453, featured: true },
  { title: "Golden Hour", artist: "Soul Lyrics Studio", genre: "R&B", duration: "4:08", plays: 8921, featured: true },
  { title: "Stardust Memories", artist: "Soul Lyrics Studio", genre: "Jazz Soul", duration: "3:55", plays: 15687, featured: true },
  { title: "Electric Dreams", artist: "Soul Lyrics Studio", genre: "Synth Soul", duration: "3:28", plays: 7234, featured: false },
  { title: "Rainy Sunday", artist: "Soul Lyrics Studio", genre: "Lo-Fi Soul", duration: "4:15", plays: 19102, featured: true },
  { title: "Neonlichter", artist: "Soul Lyrics Studio", genre: "German Soul", duration: "3:38", plays: 6518, featured: false },
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
