"use client";
import { AddToCartButtonStyles } from "./AddToCart.tailwindClasses";

const AddToCartBtn = () => {
  return (
    <button
      className={["btn btn-primary", AddToCartButtonStyles].join(" ")}
      onClick={() => console.log("Added to cart!")}
    >
      Add to cart
    </button>
  );
};

export default AddToCartBtn;
