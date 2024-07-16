import React from "react";
import { Link } from "react-router-dom";
import FormatCommas from "../../../../../frontend/src/utils/FormatCommas";

export default function FavouriteProductItem(props) {
  const { product, removeFavouriteProducts, addProductToCart } = props;
  return (
    <li className="item product product-item">
      <div className="product-item-info" data-container="product-list">
        <div className="product photo product-item-photo">
          {" "}
          <div
            className="product-photo photo product-item-photo product-list-image"
            tabindex="-1"
          >
            <Link to={`/home/details/${product.id}`}>
              <span
                className="product-image-container product-image-container-1352640643"
                style={{ width: "500px" }}
              >
                <span
                  className="product-image-wrapper"
                  style={{ paddingBottom: "100%" }}
                >
                  <img
                    className="product-image-photo lazy-loaded transition"
                    src={
                      product?.product_images[0]
                        ? product.product_images[0]?.image
                        : "../static/images/logo.svg"
                    }
                    loading="lazy"
                    alt="OnePlus Nord N10 5G Unlocked"
                    style={{ display: "block;" }}
                    width="500"
                    height="500"
                  />
                </span>
              </span>
            </Link>
          </div>
        </div>{" "}
        <div className="product details product-item-details">
          <div className="flex-layout no-wrap-desktop space-between">
            {" "}
            <div className="list-product-infor">
              {" "}
              <strong className="product name product-item-name">
                <Link
                  to={`/home/details/${product.id}`}
                  className="product-item-link"
                >
                  {product.name}
                </Link>
              </strong>
              <div className="product-item-inner">
                <div className="product description product-item-description">
                  <p>{product.brief_description}</p>{" "}
                  <div className="action more">Learn More</div>
                </div>
              </div>
            </div>{" "}
            <div className="action-column-right">
              {product.track_stock ? (
                product.stock_qty ? (
                  <div className="stock available" title="Availability">
                    <span>In stock</span>
                  </div>
                ) : (
                  <div className="stock product_unavailabile">
                    <span>Out of stock</span>
                  </div>
                )
              ) : (
                <div className="stock product_unavailabile">
                  <span>Out of stock</span>
                </div>
              )}
              <div
                className="price-box price-final_price"
                data-role="priceBox"
                data-product-id="1"
                data-price-box="product-id-1"
              >
                <span className="special-price">
                  <span className="price-container price-final_price tax weee">
                    <span className="price-label">Special Price</span>
                    <span
                      id="product-price-1"
                      data-price-amount="59.99"
                      data-price-type="finalPrice"
                      className="price-wrapper "
                    >
                      <span className="price">{`${product.price_currency} ${FormatCommas(product.price)}`}</span>
                    </span>
                  </span>
                </span>
              </div>{" "}
              <div className="product actions product-item-actions">
                <div className="actions-primary visible-hover">
                  <button
                    onClick={() =>
                      addProductToCart({
                        product_id: product.id,
                        qty: 1,
                        new_qty: "",
                      })
                    }
                    title="Add to Cart"
                    className="action tocart primary"
                  >
                    <span>Add to Cart</span>
                  </button>
                  <button
                    title="Remove From Favourites"
                    className="action tocart primary"
                    style={{
                      marginTop: "10px",
                      backgroundColor: "#F04124",
                    }}
                    onClick={() => removeFavouriteProducts(product.id)}
                  >
                    <span>Remove Favourite</span>
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </li>
  );
}
