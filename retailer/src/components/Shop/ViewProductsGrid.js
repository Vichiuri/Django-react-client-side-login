import React from "react";
import ViewFlashDealItem from "../Products/FlashDeals/ViewFlashDealItem";
import ViewProductGridItem from "./ViewProductGridItem";

export default function ViewProductsGrid({ products, addProductToCart }) {
  return (
    <div
      class="grid"
      style={{
        background: "white",
        padding: "20px",
      }}
    >
      {products.map((product, index) => {
        return (
          <ViewProductGridItem
            key={index}
            product={product}
            addProductToCart={addProductToCart}
          />
        );
      })}
    </div>
  );
}
