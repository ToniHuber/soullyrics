import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";

export const dynamic = "force-dynamic";
import { songRequests } from "@/db/schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, recipient, occasion, mood, story, packageName } = body;

    if (!name || !email || !recipient || !occasion || !mood || !story) {
      return NextResponse.json(
        { error: "Bitte fülle alle Pflichtfelder aus." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Ungültige E-Mail-Adresse." },
        { status: 400 }
      );
    }

    await db.insert(songRequests).values({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      recipient: recipient.trim(),
      occasion: occasion.trim(),
      mood: mood.trim(),
      story: story.trim(),
      packageName: packageName?.trim() || null,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Song request error:", error);
    return NextResponse.json(
      { error: "Interner Serverfehler." },
      { status: 500 }
    );
  }
}
