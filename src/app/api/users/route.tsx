import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
