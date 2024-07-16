import React, { useState, useEffect } from "react";
import Debouncer from "../../../../frontend/src/utils/Debouncer";
import FormatCommas from "../../../../frontend/src/utils/FormatCommas";

export default function ViewCartItem(props) {
  const { cart_item, deleteProductInCart, addProductToCart } = props;
  const [qty, setQty] = useState(0);

  useEffect(() => {
    setQty(cart_item.qty ? cart_item.qty : 1);
  }, [cart_item]);

  return (
    <tbody className="cart item">
      <tr className="item-info">
        <td data-th="Item" className="col item">
          <div tabindex="-1" className="product-item-photo">
            <span
              className="product-image-container product-image-container-7709288487"
              style={{ width: "100px" }}
            >
              <span
                className="product-image-wrapper"
                style={{ paddingBottom: "100%" }}
              >
                <img
                  className="product-image-photo lazy-loaded transition"
                  src={
                    cart_item.product && cart_item.product.product_images[0]
                      ? `..${cart_item.product.product_images[0].image}`
                      : "../static/images/logo.svg"
                  }
                  loading="lazy"
                  alt="LG Unlocked Smartphone Platinum"
                  style={{ display: "block" }}
                  width="100"
                  height="100"
                />
              </span>
            </span>
          </div>
          <div className="product-item-details">
            <strong className="product-item-name">
              {cart_item.variations ? (
                <div>
                  {cart_item.product?.name}
                  {"("}
                  {cart_item.variations?.value?.value}
                  {")"}
                </div>
              ) : (
                <div>{cart_item.product ? cart_item.product.name : ""}</div>
              )}
            </strong>
          </div>
        </td>
        <td className="col price" data-th="Price">
          <span className="price-excluding-tax" data-label="Excl. Tax">
            <span className="cart-price">
              <span className="price">
                {cart_item.product
                  ? `${FormatCommas(cart_item.per_price)}`
                  : ""}
              </span>{" "}
            </span>
          </span>
        </td>
        <td className="col qty box-tocart" data-th="Qty">
          <div className="field qty up-down flex-layout no-wrap">
            <div className="control qty">
              <label for="cart-1158-qty">
                <input
                  name="cart[qty]"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  onKeyUp={Debouncer(() => {
                    if (qty > 0) {
                      // {cart_item.variations? :}
                      if (cart_item.variations) {
                        addProductToCart({
                          product_id: cart_item.product.id,
                          qty: "",
                          new_qty: qty,
                          variant_id: cart_item?.variations?.id,
                          cart: true,
                        });
                      } else {
                        addProductToCart({
                          product_id: cart_item.product.id,
                          qty: "",
                          new_qty: qty,
                          cart: true,
                        });
                      }
                    } else {
                      setQty(cart_item.qty);
                    }
                  }, 2000)}
                  type="number"
                  size="4"
                  title="Qty"
                  className="input-text qty"
                  data-validate="{required:true,'validate-greater-than-zero':true}"
                />
              </label>
            </div>
            <div
              style={{
                marginRight: "5px",
              }}
              className="click-up-down flex-layout no-wrap column"
            >
              <div
                onClick={() => {
                  if (qty > 0) {
                    if (cart_item.variations) {
                      addProductToCart({
                        product_id: cart_item.product.id,
                        qty: "",
                        new_qty: qty + 1,
                        variant_id: cart_item?.variations?.id,
                        cart: true,
                      });
                      setQty(qty + 1);
                    } else {
                      addProductToCart({
                        product_id: cart_item.product.id,
                        qty: "",
                        new_qty: qty + 1,
                        cart: true,
                      });
                      setQty(qty + 1);
                    }
                  } else {
                    setQty(cart_item.qty);
                  }
                }}
                className="qty-up-fixed-onclick qty-up"
              >
                <i className="fas fa-chevron-up"></i>
              </div>
              <div
                onClick={() => {
                  if (qty > 1) {
                    if (cart_item.variations) {
                      addProductToCart({
                        product_id: cart_item.product.id,
                        qty: "",
                        new_qty: qty - 1,
                        variant_id: cart_item?.variations?.id,
                        cart: true,
                      });
                      setQty(qty - 1);
                    } else {
                      addProductToCart({
                        product_id: cart_item.product.id,
                        qty: "",
                        new_qty: qty - 1,
                        cart: true,
                      });
                      setQty(qty - 1);
                    }
                  } else {
                    setQty(cart_item.qty);
                  }
                }}
                className="qty-down-fixed-onclick qty-down"
              >
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </td>
        <td className="col subtotal" data-th="Subtotal">
          <span className="price-excluding-tax" data-label="Excl. Tax">
            <span className="cart-price">
              <span className="price">{cart_item.order_price}</span>{" "}
            </span>
          </span>
        </td>
        <td>
          <center>
            {/* <button
              className="table_button"
              style={{
                backgroundColor: "#43ac6a",
                marginBottom: "5px",
              }}
            >
              <i className="fas fa-cog"></i> <div>Edit</div>
            </button> */}

            <div
              className="table_button"
              style={{
                backgroundColor: "#F04124",
              }}
              onClick={() => deleteProductInCart(cart_item.id)}
            >
              <i className="fas fa-times"></i> <div>Delete</div>
            </div>
          </center>
        </td>
      </tr>
    </tbody>
  );
}
