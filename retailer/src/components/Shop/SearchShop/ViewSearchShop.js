import React, { useEffect, useState } from "react";
import ViewProductFilter from "../ViewProductFilter";
import ViewProductsGrid from "../ViewProductsGrid";

export default function ViewSearchShop(props) {
  const {
    products,
    addProductToCart,
    categories,
    distributor,
    searchRetailerProduct,
    fetchRetailerSubCategories,
    sub_categories,
    currentCategory,
    viewQuery,
  } = props;

  const [query, setQuery] = useState(viewQuery);

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
            searchRetailerProduct(
              distributor,
              page,
              query,
              category,
              priceRange
            )
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
