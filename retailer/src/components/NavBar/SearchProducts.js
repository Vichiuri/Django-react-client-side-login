import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useEffect } from "react";
import SearchProductItem from "./SearchProductItem";
import { Link } from "react-router-dom";

export default function SearchProducts(props) {
  const {
    visibility,
    closeVisibility,
    productLoading,
    searchProducts,
    currentCategory,
    query,
  } = props;

  useEffect(() => {
    const view_area = document.getElementById("searchsuite_autocomplete");
    if (visibility) {
      view_area.style.display = "block";
    } else {
      view_area.style.display = "none";
    }
    window.addEventListener("click", (e) => {
      if (e.target != view_area) {
        closeVisibility();
      }
    });
  }, [visibility]);

  return (
    <div data-bind="scope: 'searchsuiteautocomplete_form'">
      <div id="searchsuite_autocomplete" class="searchsuite-autocomplete">
        {productLoading ? (
          <div
            style={{
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </div>
        ) : searchProducts?.length > 0 ? (
          <div>
            <div class="product">
              <div class="title">
                <span>Products</span>
                <Link
                  to={`/home/search_shop/${
                    currentCategory ? currentCategory : "n"
                  }/${query ? query : "all"}`}
                  class="see-all"
                >
                  <span>See All</span>
                  <i
                    className="fas fa-chevron-right"
                    style={{
                      marginLeft: "10px",
                    }}
                  ></i>
                </Link>
              </div>
              <ul role="listbox">
                {searchProducts.map((product, index) => {
                  return <SearchProductItem product={product} key={index} />;
                })}
              </ul>
            </div>
          </div>
        ) : (
          <div
            class="no-result"
            style={{
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span>No product found retry</span>
          </div>
        )}
      </div>
    </div>
  );
}
