import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { songRequests } from "@/db/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const requestId = Number(id);

  if (!Number.isInteger(requestId)) {
    return NextResponse.json({ error: "Ungültige ID." }, { status: 400 });
  }

  await db.delete(songRequests).where(eq(songRequests.id, requestId));

  return NextResponse.json({ success: true });
}
