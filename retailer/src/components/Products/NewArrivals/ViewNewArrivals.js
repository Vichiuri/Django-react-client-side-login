import React, { useEffect } from "react";
import ViewFlashDealItem from "../FlashDeals/ViewFlashDealItem";
import { Link } from "react-router-dom";

export default function ViewNewArrivals(props) {
  const { products, addProductToCart, addFavouriteProducts } = props;

  useEffect(() => {
    const scroll = document.getElementById("new_arrival_scroll");
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
  }, []);
  console.log('PROD',products)

  return (
    <div
      className="section full-width has-white-bg product_view"
      style={{ background: "#fff" }}
    >
      <div className="container">
        <div
          className="
          section
          hot-deal-tab-slider hot-deal-tab-slider-customcss
          section-product
        "
        >
          <div className="rokan-title">
            <div className="supper-deal-title flex-layout space-between">
              <h3 className="title-deal module-title">
                <span>New Arrivals</span>
              </h3>
              <Link className="see-all" to="/home/shop/all">
                View All
                <i
                  className="fas fa-chevron-right"
                  style={{
                    marginLeft: "10px",
                  }}
                ></i>
              </Link>
            </div>
          </div>
          <div className="products wrapper grid products-grid main">
            <div
              className="
              products
              list
              items
              product-items
            scroll
            "
              id="new_arrival_scroll"
            >
              {products.map((product, index) => {
                return (
                  <ViewFlashDealItem
                    key={index}
                    product={product}
                    addProductToCart={addProductToCart}
                    addFavouriteProducts={addFavouriteProducts}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
