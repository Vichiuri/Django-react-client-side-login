import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormatCommas from "../../../../frontend/src/utils/FormatCommas";
// import FormatCommas from "../../../../../frontend/src/utils/FormatCommas";
import SimpleBackdrop from "../../../../frontend/src/widgets/SimpleBackDrop";

export default function ViewProductGridItem({ product, addProductToCart }) {
  const [image, setImage] = useState("../static/images/logo.svg");
  const [isFavourite, setIsFavourite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setImage(
      product.product_images && product.product_images[0]
        ? `..${product.product_images[0].image}`
        : "../static/images/logo.svg"
    );
    setIsFavourite(product.is_favorite);
  }, [product]);

  function addToFavouriteProducts() {
    setIsLoading(true);
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

    Axios.post("api/retailer_prod_fav/", { product_id: product.id }, config)
      .then((res) => {
        setIsLoading(false);
        setIsFavourite(true);
      })
      .catch((error) => {
        setIsLoading(false);
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };
        console.log(errors);
      });
  }

  function removeFavouriteProducts() {
    setIsLoading(true);
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

    Axios.patch("api/retailer_prod_fav/", { product_id: product.id }, config)
      .then((res) => {
        setIsLoading(false);
        setIsFavourite(false);
      })
      .catch((error) => {
        setIsLoading(false);
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };
        console.log(errors);
      });
  }
  function sortPrice(variations) {
    if (variations?.length == 1) {
      return `1 - ${variations[0]?.selling_price} `;
    } else {
      let sorted_prices = variations?.sort((a, b) =>
        a.selling_price > b.selling_price ? 1 : -1
      );
      let least_price = sorted_prices[0]?.selling_price;
      let highest_price = sorted_prices[variations?.length - 1]?.selling_price;
      return `${least_price} - ${highest_price}`;
    }
  }

  return (
    <div className="product_grid_view">
      <SimpleBackdrop open={isLoading} />
      <div class="item-load group-rows-fixed-supper-deal item-row card">
        <div class="item product product-item">
          <div class="product-item-info">
            <Link
              to={`/home/details/${product.id}`}
              class="product photo product-item-photo"
              tabindex="-1"
            >
              <span
                class="
              image0
              image-switch
              flash_product_image
            "
              >
                <img
                  class="product-image"
                  src={image}
                  alt="Blue G9 Pro 2020 Battery Unlocked"
                />
              </span>
            </Link>

            <div class="product details product-item-details">
              <Link
                to={`/home/details/${product.id}`}
                style={{ cursor: "pointer" }}
              >
                <strong class="product name product-item-name">
                  <div class="product-item-link">{product.name}</div>
                </strong>

                <div
                  class="price-box price-final_price"
                  data-role="priceBox"
                  data-product-id="3"
                  data-price-box="product-id-3"
                >
                  <span class="special-price">
                    <span
                      class="
                  price-container
                  price-final_price&#x20;tax&#x20;weee
                "
                    >
                      <span class="price-label">Special Price</span>
                      <span
                        data-price-amount="90"
                        data-price-type="finalPrice"
                        class="price-wrapper"
                      >
                            {product?.variations?.length > 0 ? (
                          <span className="price">
                            {sortPrice(product?.variations)}{" "}
                            {product.price_currency}
                          </span>
                        ) : (
                          <span className="price">
                            {product.price_currency}{" "}
                            {FormatCommas(product.price)}
                          </span>
                        )}
                      </span>
                    </span>
                  </span>
                </div>
                <div class="product-sold">
                  <div class="ruler-sold">
                    <div
                      class="ruler-sold-count"
                      style={{ width: "30.9%" }}
                    ></div>
                  </div>
                  <div class="count-sold-available">
                    <div class="count-sold">
                      Stock: <span> {product.stock_qty} </span>
                    </div>
                  </div>
                </div>
              </Link>
              <div class="product-item-inner">
                <div class="product actions product-item-actions">
                  <div class="actions-primary">
                  {product?.variations?.length > 0 ? (
                      <Link
                        to={`/home/details/${product.id}`}
                        style={{ cursor: "pointer" }}
                      >
                        <button className="action tocart primary">
                          <span>Add to Cart</span>
                        </button>
                      </Link>
                    ) : (
                      <button
                        onClick={() =>
                          addProductToCart({
                            product_id: product.id,
                            qty: 1,
                            new_qty: "",
                          })
                        }
                        className="action tocart primary"
                      >
                        <span>Add to Cart</span>
                      </button>
                    )}
                  </div>
                  <div data-role="add-to-links" class="actions-secondary">
                    <div
                      className="action towishlist"
                      title=""
                      aria-label="Add to Wish List"
                      data-action="add-to-wishlist"
                      role="button"
                      style={{
                        fontSize: "16px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        isFavourite
                          ? removeFavouriteProducts()
                          : addToFavouriteProducts()
                      }
                    >
                      {isFavourite ? (
                        <i
                          className="fas fa-heart"
                          style={{
                            color: "#F04124",
                          }}
                        ></i>
                      ) : (
                        <i className="far fa-heart"></i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
