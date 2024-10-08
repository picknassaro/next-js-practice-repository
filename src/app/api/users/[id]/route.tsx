import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ id: params.id, name: "User " + params.id });
}
