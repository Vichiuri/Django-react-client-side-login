import React, { useEffect } from "react";
import ViewOffersFilter from "./ViewOffersFilter";
import ViewOffersGrid from "./ViewOffersGrid";

export default function ViewOffersShop(props) {
  const {
    offers,
    categories,
    distributor,
    fetchViewRetailerOffers,
    fetchRetailerSubCategories,
    sub_categories,
    addProductToCart,
  } = props;

  return (
    <div class="columns retailer_shop_layout">
      <div class="sidebar">
        <ViewOffersFilter
          categories={categories}
          distributor={distributor}
          fetchViewRetailerOffers={fetchViewRetailerOffers}
          fetchRetailerSubCategories={fetchRetailerSubCategories}
          sub_categories={sub_categories}
        />
      </div>

      <div class="column main">
        <div class="products wrapper grid products-grid view_shop_grid">
          <ViewOffersGrid offers={offers} addProductToCart={addProductToCart} />
        </div>
      </div>
    </div>
  );
}
