import React, { useEffect } from "react";
import ViewProductFilter from "./ViewProductFilter";
import ViewProductsGrid from "./ViewProductsGrid";

export default function ViewRetailerShop(props) {
  const {
    products,
    addProductToCart,
    categories,
    distributor,
    fetchViewProducts,
    fetchRetailerSubCategories,
    sub_categories,
    currentCategory,
  } = props;

  useEffect(() => {
    if (currentCategory) {
      fetchRetailerSubCategories(currentCategory);
    }
  }, []);

  return (
    <div class="columns retailer_shop_layout">
      <div class="sidebar">
        <ViewProductFilter
          categories={categories}
          distributor={distributor}
          fetchViewProducts={(distributor, page, category, priceRange) =>
            fetchViewProducts(distributor, page, category, priceRange)
          }
          fetchRetailerSubCategories={fetchRetailerSubCategories}
          sub_categories={sub_categories}
          viewCurrentCategory={currentCategory}
        />
      </div>

      <div class="column main">
        <div class="products wrapper grid products-grid view_shop_grid">
          <ViewProductsGrid
            products={products}
            addProductToCart={addProductToCart}
          />
        </div>
      </div>
    </div>
  );
}
