import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";

export const dynamic = "force-dynamic";
import { songRequests } from "@/db/schema";
import { sendSongRequestConfirmation, sendSongRequestNotification } from "@/lib/mail";

const REQUIRED_FIELDS = [
  "service",
  "occasion",
  "genre",
  "idea",
  "wishes",
  "language",
  "voice",
  "length",
  "usage",
  "deadline",
  "name",
  "address",
  "email",
  "phone",
  "contactMethod",
  "paymentMethod",
  "deliveryMethod",
] as const;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      service,
      express,
      occasion,
      occasionOther,
      forWhom,
      fromWhom,
      genre,
      genreDescription,
      idea,
      wishes,
      noGos,
      language,
      languageDetails,
      voice,
      voiceNotes,
      pronunciation,
      length,
      usage,
      usageOther,
      story,
      deadline,
      visualDescription,
      name,
      address,
      email,
      phone,
      contactMethod,
      availability,
      availabilityNotes,
      paymentMethod,
      deliveryMethod,
      correctionWishes,
      consentGiven,
      consentVersion,
      agbAccepted,
      agbVersion,
    } = body;

    for (const field of REQUIRED_FIELDS) {
      const value = body[field];
      if (typeof value !== "string" || !value.trim()) {
        return NextResponse.json(
          { error: "Bitte fülle alle Pflichtfelder aus." },
          { status: 400 }
        );
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Ungültige E-Mail-Adresse." },
        { status: 400 }
      );
    }

    if (!consentGiven || !consentVersion) {
      return NextResponse.json(
        { error: "Bitte bestätige die Datenschutzhinweise." },
        { status: 400 }
      );
    }

    if (!agbAccepted || !agbVersion) {
      return NextResponse.json(
        { error: "Bitte bestätige die AGB." },
        { status: 400 }
      );
    }

    const trimmed = {
      service: service.trim(),
      express: Boolean(express),
      occasion: occasion.trim(),
      occasionOther: occasionOther?.trim() || null,
      forWhom: forWhom?.trim() || null,
      fromWhom: fromWhom?.trim() || null,
      genre: genre.trim(),
      genreDescription: genreDescription?.trim() || null,
      idea: idea.trim(),
      wishes: wishes.trim(),
      noGos: noGos?.trim() || null,
      language: language.trim(),
      languageDetails: languageDetails?.trim() || null,
      voice: voice.trim(),
      voiceNotes: voiceNotes?.trim() || null,
      pronunciation: pronunciation?.trim() || null,
      length: length.trim(),
      usage: usage.trim(),
      usageOther: usageOther?.trim() || null,
      story: story?.trim() || null,
      deadline: deadline.trim(),
      visualDescription: visualDescription?.trim() || null,
      name: name.trim(),
      address: address.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      contactMethod: contactMethod.trim(),
      availability: availability?.trim() || null,
      availabilityNotes: availabilityNotes?.trim() || null,
      paymentMethod: paymentMethod.trim(),
      deliveryMethod: deliveryMethod.trim(),
      correctionWishes: correctionWishes?.trim() || null,
    };

    await db.insert(songRequests).values({
      ...trimmed,
      consentVersion,
      consentAt: new Date(),
      agbVersion,
      agbAcceptedAt: new Date(),
    });

    try {
      await Promise.all([
        sendSongRequestNotification(trimmed),
        sendSongRequestConfirmation(trimmed),
      ]);
    } catch (mailError) {
      console.error("Song request email error:", mailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Song request error:", error);
    return NextResponse.json(
      { error: "Interner Serverfehler." },
      { status: 500 }
    );
  }
}
