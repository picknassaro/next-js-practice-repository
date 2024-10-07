interface ProductPageProps {
  params: { slug: string[] };
  searchParams: { sort: string };
}

const ProductPage = ({
  params: { slug },
  searchParams: { sort },
}: ProductPageProps) => {
  return <div>{slug} {sort}</div>;
};

export default ProductPage;
