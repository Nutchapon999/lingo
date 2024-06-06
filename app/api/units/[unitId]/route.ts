import { isAdmin } from "@/lib/auth";
import { NextResponse } from "next/server";

import db from "@/db/drizzle";
import { eq } from "drizzle-orm";
import { units } from "@/db/schema";

export async function GET(req: Request, { params }: { params: { unitId: number } }) {
  if (!isAdmin()) {
    return new NextResponse("Unauthorized", { status: 403 })
  }

  const data = await db.query.units.findFirst({
    where: eq(units.id, params.unitId),
  });

  return NextResponse.json(data);
}

export async function PUT(req: Request, { params }: { params: { unitId: number } }) {
  if (!isAdmin()) {
    return new NextResponse("Unauthorized", { status: 403 })
  }

  const body = await req.json();
  const data = await db.update(units).set({
    ...body,
  })
  .where(
    eq(units.id, params.unitId)
  ).returning();

  return NextResponse.json(data[0]);
}

export async function DELETE(req: Request, { params }: { params: { unitId: number } }) {
  if (!isAdmin()) {
    return new NextResponse("Unauthorized", { status: 403 })
  }

  const data = await db.delete(units)
    .where(
      eq(units.id, params.unitId)
    ).returning();

  return NextResponse.json(data[0]);
}