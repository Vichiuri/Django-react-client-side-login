import React from "react";
import FavouriteProductItem from "./FavouriteProductItem";

export default function ViewFavouriteProducts(props) {
  const {
    fav_prods,
    removeFavouriteProducts,
    addProductToCart,
    clearFavouriteProducts,
  } = props;
  return (
    <div className="columns">
      <div
        style={{
          margin: "auto 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "20px",
        }}
      >
        <h3>Favourite Products</h3>

        <button
          type="button"
          name="update_cart_action"
          class="action clear"
          onClick={() => clearFavouriteProducts()}
          style={{
            backgroundColor: "#eb4d4b",
          }}
        >
          <span>Clear Favourites</span>
        </button>
      </div>
      <div className="products wrapper list products-list">
        <ol className="products list items product-items container-products-switch">
          {fav_prods.map((product, index) => {
            return (
              <FavouriteProductItem
                key={index}
                product={product}
                removeFavouriteProducts={removeFavouriteProducts}
                addProductToCart={addProductToCart}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}
