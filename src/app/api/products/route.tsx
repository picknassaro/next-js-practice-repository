import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "../../../../prisma/client";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const price = searchParams.get("price");
  const stock = searchParams.get("stock");

  let products = await prisma.product.findMany();

  if (id) {
    products = products.filter((item) => item.id === parseInt(id));
  }
  if (name) {
    products = products.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  if (price) {
    products = products.filter(
      (item) => item.price === parseFloat(price)
    );
  }
  if (stock) {
    products = products.filter(
      (item) => item.stock === parseInt(stock)
    );
  }

  if (products.length === 0) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const productCheck = await prisma.product.findUnique({
    where: { name: body.name },
  });
  if (productCheck)
    return NextResponse.json(
      { error: "Product already exists" },
      { status: 400 }
    );

  const newProduct = await prisma.product.create({
    data: {
      name: body.name,
      price: parseInt(body.price),
      stock: parseInt(body.stock),
    },
  });
  return NextResponse.json(newProduct, { status: 201 });
}
