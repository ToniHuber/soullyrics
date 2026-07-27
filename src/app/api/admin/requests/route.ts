import { NextResponse } from "next/server";
import { db } from "@/db";
import { songRequests } from "@/db/schema";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  const requests = await db
    .select()
    .from(songRequests)
    .orderBy(desc(songRequests.createdAt));

  return NextResponse.json({ requests });
}
