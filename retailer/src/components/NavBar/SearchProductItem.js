import React from "react";
import { Link } from "react-router-dom";

export default function SearchProductItem({ product }) {
  return (
    <li>
      <Link to={`/home/details/${product.id}`}>
        <div class="qs-option-image" data-bind="visible: image">
          <div>
            <img
              data-bind="attr: { src: image, title: name }"
              src={
                product.product_images[0]?.image ?? "../static/images/logo.svg"
              }
              title="OnePlus Nord N10 5G Unlocked"
            />
          </div>
        </div>
        <div class="qs-option-info" data-bind="css: {noimage: !image}">
          <div class="qs-option-title" data-bind="visible: name">
            <div>{product?.name}</div>
          </div>
          <div
            class="qs-option-reviews"
            data-bind="html: reviews_rating, visible: reviews_rating"
          >
            <div class="product-reviews-summary short">
              <div class="rating-summary"></div>

              <div class="reviews-actions">
                <span>{product?.brief_description}</span>
              </div>
            </div>
          </div>

          <div class="qs-option-price" data-bind="html: price, visible: price">
            <div
              class="price-box price-final_price"
              data-role="priceBox"
              data-product-id="1"
              data-price-box="product-id-1"
            >
              <span class="special-price">
                <span
                  class="price-container price-final_price tax weee"
                  itemprop="offers"
                  itemscope=""
                >
                  <span class="price-label">Special Price</span>
                  <span
                    id="product-price-1"
                    data-price-amount="59.99"
                    data-price-type="finalPrice"
                    class="price-wrapper"
                  >
                    <span class="price">
                      {" "}
                      {product.price_currency} {product.price}
                    </span>
                  </span>
                  <meta itemprop="price" content="59.99" />
                  <meta itemprop="priceCurrency" content="USD" />
                </span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
