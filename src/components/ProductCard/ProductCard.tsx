import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <AddToCartBtn />
    </div>
  );
};

export default ProductCard;
