import React from "react";
import FormatCommas from "../../../../frontend/src/utils/FormatCommas";

export default function ViewDistOrdersRow({ order }) {
  function addRemainingQty() {
    let total = order.qty + order.free_qty;
    return total - order.delivered_qty;
  }

  return (
    <tbody className="cart item">
      <tr className="item-info" style={{ alignItems: "center" }}>
        <td data-th="Item" className="item">
          <div tabindex="-1" className="product-item-photo">
            <span className="product-image-container product-image-container-7709288487">
              <span
                className="product-image-wrapper"
                style={{ paddingBottom: "100%", width: "50px", height: "50px" }}
              >
                <img
                  className="product-image-photo lazy-loaded transition"
                  src={
                    order.product && order.product.product_images[0]
                      ? `..${order.product.product_images[0].image}`
                      : "../static/images/logo.svg"
                  }
                  loading="lazy"
                  alt="LG Unlocked Smartphone Platinum"
                  style={{
                    display: "block",
                    objectFit: "contain",
                    width: "inherit",
                    height: "inherit",
                  }}
                />
              </span>
            </span>
          </div>
        </td>
        <td>
          {" "}
          <div className="product-item-details">
            <strong className="product-item-name">
              <div>{order.product ? order.product.name : ""}</div>
            </strong>
          </div>
        </td>
        <td className="price" data-th="Price">
          <span className="price-excluding-tax" data-label="Excl. Tax">
            <span className="cart-price">
              <span className="price">
                {order.product
                  ? `${order.product.price_currency} ${FormatCommas(order.product.price)}`
                  : ""}
              </span>{" "}
            </span>
          </span>
        </td>
        <td className="price" data-th="Qty">
          <span className="price-excluding-tax" data-label="Excl. Tax">
            <span className="cart-price">
              <span className="price">{order.qty + order.free_qty}</span>{" "}
            </span>
          </span>
        </td>
        <td className="subtotal" data-th="Subtotal">
          <span className="price-excluding-tax" data-label="Excl. Tax">
            <span className="cart-price">
              <span className="price">{order.delivered_qty}</span>{" "}
            </span>
          </span>
        </td>
        <td>
          <span className="price-excluding-tax" data-label="Excl. Tax">
            <span className="cart-price">
              <span className="price">{addRemainingQty()}</span>{" "}
            </span>
          </span>
        </td>
      </tr>
    </tbody>
  );
}
