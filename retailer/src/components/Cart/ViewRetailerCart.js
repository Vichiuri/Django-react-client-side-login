import React, { Fragment } from "react";
import CartSummary from "./CartSummary";
import ViewCartItem from "./ViewCartItem";
import { Link } from "react-router-dom";

export default function ViewRetailerCart(props) {
  const {
    cart,
    deleteProductInCart,
    addProductToCart,
    checkOutCart,
    clearProductsInCart,
  } = props;

  return (
    <Fragment>
      {cart && cart.orders && cart.orders.length > 0 ? (
        <div>
          <div
            className="columns"
            style={{
              margin: "20px auto",
            }}
          >
            <div className="column main">
              <center>
                <h1 class="page-title">
                  <span class="base">Shopping Cart</span>{" "}
                </h1>
              </center>
              <div className="cart-container">
                <CartSummary total={cart.total} checkOutCart={checkOutCart} />

                <div class="form form-cart">
                  <div class="cart table-wrapper">
                    <table
                      id="shopping-cart-table"
                      class="cart items data table"
                    >
                      <caption class="table-caption">
                        Shopping Cart Items
                      </caption>
                      <thead>
                        <tr>
                          <th class="col item" scope="col">
                            <span>Item</span>
                          </th>
                          <th class="col price" scope="col">
                            <span>Price</span>
                          </th>
                          <th class="col qty" scope="col">
                            <span>Qty</span>
                          </th>
                          <th class="col subtotal" scope="col">
                            <span>Subtotal</span>
                          </th>
                          <th class="col subtotal" scope="col">
                            <span>Actions</span>
                          </th>
                        </tr>
                      </thead>
                      {cart.orders.map((cart_item, index) => {
                        return (
                          <ViewCartItem
                            cart_item={cart_item}
                            key={index}
                            deleteProductInCart={deleteProductInCart}
                            addProductToCart={addProductToCart}
                          />
                        );
                      })}
                    </table>
                  </div>
                  <div class="cart main actions">
                    <Link class="action continue" to="/home/dashboard">
                      <span>Continue Shopping</span>
                    </Link>
                    <button
                      type="button"
                      name="update_cart_action"
                      class="action clear"
                      onClick={() => clearProductsInCart(cart.id)}
                    >
                      <span>Clear Shopping Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      ) : (
        <div
          style={{
            margin: "20px auto",
          }}
        >
          <a id="contentarea" tabindex="-1"></a>
          <div class="page-title-wrapper">
            <h1 class="page-title">
              <span class="base" data-ui-id="page-title-wrapper">
                Shopping Cart
              </span>
            </h1>
          </div>
          <div class="page messages">
            <div data-placeholder="messages"></div>
            <div data-bind="scope: 'messages'">
              <div aria-atomic="true" role="alert" class="messages">
                <div>
                  <div></div>
                </div>
              </div>

              <div aria-atomic="true" role="alert" class="messages">
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column main">
              <input name="form_key" type="hidden" value="OQN7Nf56FneT1t7I" />
              <div
                id="authenticationPopup"
                data-bind="scope:'authenticationPopup', style: {display: 'none'}"
              ></div>
              <div class="cart-empty">
                <p>You have no items in your shopping cart.</p>
                <p>
                  Click <Link to="/home/dashboard">here</Link> to continue
                  shopping.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
