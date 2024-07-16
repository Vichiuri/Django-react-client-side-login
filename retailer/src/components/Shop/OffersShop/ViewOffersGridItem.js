import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ViewOffersGridItem({ offer, addProductToCart }) {
  const [image, setImage] = useState("../static/images/logo.svg");

  useEffect(() => {
    setImage(offer?.pic ? `..${offer.pic}` : "../static/images/logo.svg");
  }, [offer]);

  return (
    <div className="product_grid_view">
      <div class="item-load group-rows-fixed-supper-deal item-row card">
        <div class="item product product-item">
          <div class="product-item-info">
            <Link
              to={`/home/offer_details/${offer.id}`}
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
              <strong class="product name product-item-name">
                <div class="product-item-link">{offer.name}</div>
              </strong>
              <div class="product-sold">
                <div class="count-sold-available">
                  <div class="count-sold">
                    <span> {offer.detail_name} </span>
                  </div>
                </div>
              </div>
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
                      <span class="price">
                        Ksh. {offer?.x_item?.price * offer?.x_amt}
                      </span>
                    </span>
                  </span>
                </span>
              </div>

              <div class="product-item-inner">
                <div class="product actions product-item-actions">
                  <div class="actions-primary">
                    <button
                      onClick={() =>
                        addProductToCart({
                          product_id: offer?.x_item?.id,
                          qty: offer?.x_amt,
                          new_qty: "",
                        })
                      }
                      class="action tocart primary"
                    >
                      <span>Add to Cart</span>
                    </button>
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
