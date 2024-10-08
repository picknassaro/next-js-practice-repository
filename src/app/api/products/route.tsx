import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "../../../../prisma/client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const productCheck = await prisma.product.findUnique({ where: { name: body.name } });
  if (productCheck)
    return NextResponse.json({ error: "Product already exists" }, { status: 400 });

  const newProduct = await prisma.product.create({
    data: { name: body.name, price: parseInt(body.price), stock: parseInt(body.stock) },
  });
  return NextResponse.json(newProduct, { status: 201 });
}