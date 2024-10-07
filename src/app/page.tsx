import ProductCard from "@/components/ProductCard/ProductCard";

export default function Home() {
  const name = "Nick";

  return (
    <>
      <h1>Hello {name}!</h1>
      <ProductCard />
    </>
  );
}
