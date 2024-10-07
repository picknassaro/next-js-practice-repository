interface ProductPageProps {
  params: { slug: string[] };
}

const ProductPage = ({ params: { slug } }: ProductPageProps) => {
  return <div>{slug}</div>;
};

export default ProductPage;
