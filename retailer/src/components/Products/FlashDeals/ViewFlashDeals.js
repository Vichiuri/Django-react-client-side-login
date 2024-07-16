import Axios from "axios";
import React, { useEffect, useState } from "react";
import ViewFlashDealItem from "./ViewFlashDealItem";
import { Link } from "react-router-dom";

export default function ViewFlashDeals({
  category,
  index,
  addProductToCart,
  addFavouriteProducts,
}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const scroll = document.getElementById(`category_product_${index}`);
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

    fetchCategoryProducts();
  }, [category]);

  function fetchCategoryProducts() {
    const token = localStorage.getItem("retail_token");
    let config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }
    Axios.get(
      `/api/retailer_category_products/?category_id=${category.id}`,
      config
    )
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };
        console.log(errors);
      });
  }

  return (
    <div>
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
                  <span>{category.name}</span>
                </h3>
                <Link className="see-all" to={`/home/shop/${category.id}`}>
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
                id={`category_product_${index}`}
              >
                {products.map((product, index) => {
                  return (
                    <ViewFlashDealItem
                      product={product}
                      key={index}
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
      <br />
    </div>
  );
}
