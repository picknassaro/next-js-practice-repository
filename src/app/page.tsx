import ProductCard from "@/components/ProductCard/ProductCard";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <>
      <h1>Hello {session && <span>{session.user!.name}</span>}!</h1>
      <ProductCard />
    </>
  );
}
