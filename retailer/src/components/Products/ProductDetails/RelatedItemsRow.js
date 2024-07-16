import React, { useEffect } from "react";
import ViewFlashDealItem from "../FlashDeals/ViewFlashDealItem";

export default function RelatedItemsRow(props) {
  const { products, addProductToCart } = props;

  useEffect(() => {
    const scroll = document.getElementById("related_products_scroll");
    var isDown = false;
    var scrollX;
    var scrollLeft;

    // Mouse Up Function
    scroll.addEventListener("mouseup", () => {
      isDown = false;
      scroll.classList.remove("active");
    });

    // Mouse Leave Function
    scroll.addEventListener("mouseleave", () => {
      isDown = false;
      scroll.classList.remove("active");
    });

    // Mouse Down Function
    scroll.addEventListener("mousedown", (e) => {
      e.preventDefault();
      isDown = true;
      scroll.classList.add("active");
      scrollX = e.pageX - scroll.offsetLeft;
      scrollLeft = scroll.scrollLeft;
    });

    // Mouse Move Function
    scroll.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      var element = e.pageX - scroll.offsetLeft;
      var scrolling = (element - scrollX) * 2;
      scroll.scrollLeft = scrollLeft - scrolling;
    });
  }, [products]);

  return (
    <div>
      <div class="section full-width  product_view">
        <div class="container">
          <div
            class="
              section
              hot-deal-tab-slider hot-deal-tab-slider-customcss
              section-product
            "
          >
            <div class="rokan-title">
              <div class="supper-deal-title flex-layout space-between">
                <h3 class="title-deal module-title">
                  <span>Related Items</span>
                </h3>
                <div class="right-deal flex-layout no-wrap-desktop">
                  <h5 class="sub-title-deal hidden-xs">View All</h5>
                  <div
                    class="super-deal-countdown"
                    data-date="03/26/2023"
                  ></div>
                </div>
              </div>
            </div>
            <div class="products wrapper grid products-grid main">
              <div
                class="
                  products
                  list
                  items
                  product-items
                scroll
                "
                id="related_products_scroll"
              >
                {products.map((product, index) => {
                  return (
                    <ViewFlashDealItem
                      product={product}
                      key={index}
                      addProductToCart={addProductToCart}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <br />
    </div>
  );
}
