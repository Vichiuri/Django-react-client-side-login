import React, { useEffect } from "react";
import ViewDistOrdersRow from "./ViewDistOrdersRow";

export default function ViewDistOrders({ dist_orders, changePage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="columns">
      <div className="column main retail_orders">
        <div className="cart-container" style={{ background: "white" }}>
          <div
            style={{
              margin: "auto 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h4>View Products</h4>
            <div
              style={{
                height: "50px",
                width: "80px",
                display: "flex",
                backgroundColor: "#eb4d4b",
                color: "#fff",
                marginLeft: "10px",
                justifyContent: "space-around",
                alignItems: "center",
                cursor: "pointer",
                borderRadius: "10px",
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
              }}
              onClick={() => changePage(1)}
            >
              <i className="fas fa-arrow-left"></i>
              Back
            </div>
          </div>
          <table id="shopping-cart-table" class="cart items data table">
            <caption class="table-caption">Shopping Cart Items</caption>
            <thead>
              <tr>
                <th></th>
                <th class="item" scope="col">
                  <span>Item</span>
                </th>
                <th class="price" scope="col">
                  <span>Price</span>
                </th>
                <th class="qty" scope="col">
                  <span>Total Qty</span>
                </th>
                <th class="subtotal" scope="col">
                  <span>Delivered Qty</span>
                </th>
                <th class="subtotal" scope="col">
                  <span>Remaining Qty</span>
                </th>
              </tr>
            </thead>
            {dist_orders.map((order, index) => {
              return <ViewDistOrdersRow order={order} key={index} />;
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
