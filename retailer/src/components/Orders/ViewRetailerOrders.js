import React from "react";
import ViewRetailerOrdersRow from "./ViewRetailerOrdersRow";

export default function ViewRetailerOrders(props) {
  const {
    orders,
    viewOrderDetailsPage,
    confirmRetailerDelivery,
    reOrderRetailOrders,
    cancelRetailerOrders,
  } = props;

  return (
    <div className="columns">
      <div className="column main retail_orders">
        <div id="demo">
          <div class="table-responsive-vertical shadow-z-1">
            <table id="table" class="table table-hover table-mc-light-blue">
              <thead>
                <tr>
                  <th>Ref No</th>
                  <th>Distributor</th>
                  <th>SalesMan</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Reference Note</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => {
                  return (
                    <ViewRetailerOrdersRow
                      order={order}
                      key={index}
                      viewOrderDetailsPage={viewOrderDetailsPage}
                      confirmRetailerDelivery={confirmRetailerDelivery}
                      reOrderRetailOrders={reOrderRetailOrders}
                      cancelRetailerOrders={cancelRetailerOrders}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
