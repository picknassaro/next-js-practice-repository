import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

const sampleData = [
  { id: 1, name: "Milk", price: 2.5, stock: 50 },
  { id: 2, name: "Eggs", price: 3.0, stock: 100 },
  { id: 3, name: "Bread", price: 4.0, stock: 60 },
];

export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const price = searchParams.get("price");
  const stock = searchParams.get("stock");

  let filteredData = sampleData;

  if (id) {
    filteredData = filteredData.filter((item) => item.id === parseInt(id));
  }
  if (name) {
    filteredData = filteredData.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
  }
  if (price) {
    filteredData = filteredData.filter((item) => item.price === parseFloat(price));
  }
  if (stock) {
    filteredData = filteredData.filter((item) => item.stock === parseInt(stock));
  }

  if (filteredData.length === 0) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(filteredData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const newId = sampleData.length + 1;
  const newProduct = { id: newId, ...body };
  sampleData.push(newProduct);

  return NextResponse.json(newProduct, { status: 201 });
}