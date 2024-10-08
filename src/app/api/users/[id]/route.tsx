import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "../../../../../prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // params.id has to be passed as a string to prisma and then parseInt turns it back into a number. I assume all things that get passed to prisma have to be strings, but we'll find out.
  const user = await prisma.user.findUnique({ where: { id: parseInt(params.id) } });

  if (!user) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: params.id, name: body.name });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(
    { message: "User deleted successfully" },
    { status: 200 }
  );
}
