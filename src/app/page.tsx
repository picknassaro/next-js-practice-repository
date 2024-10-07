import Link from "next/link";
import ProductCard from "@/components/ProductCard/ProductCard";

export default function Home() {
  const name = 'Nick';

  return (
    <main>
      <h1>Hello {name}!</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
