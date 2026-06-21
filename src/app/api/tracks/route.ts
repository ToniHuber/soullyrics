import { NextResponse } from "next/server";
import { db } from "@/db";
import { tracks } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function GET() {
  try {
    const allTracks = await db
      .select()
      .from(tracks)
      .orderBy(desc(tracks.plays))
      .limit(10);

    return NextResponse.json(allTracks);
  } catch (error) {
    console.error("Tracks error:", error);
    return NextResponse.json([]);
  }
}
