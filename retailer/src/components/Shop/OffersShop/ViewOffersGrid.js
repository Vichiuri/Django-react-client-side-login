import React from "react";
import ViewOffersGridItem from "./ViewOffersGridItem";

export default function ViewOffersGrid(props) {
  const { offers, addProductToCart } = props;
  return (
    <div
      class="grid"
      style={{
        background: "white",
        padding: "20px",
      }}
    >
      {offers.map((offer, index) => {
        return (
          <ViewOffersGridItem
            key={index}
            offer={offer}
            addProductToCart={addProductToCart}
          />
        );
      })}
    </div>
  );
}
