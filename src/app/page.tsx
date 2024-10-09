import ProductCard from "@/components/ProductCard/ProductCard";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <>
      <h1>Hello {session && <span>{session.user!.name}</span>}!</h1>
      <ProductCard />
    </>
  );
}
