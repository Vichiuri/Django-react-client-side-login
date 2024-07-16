import React, { Fragment, useState } from "react";
import FormatCommas from "../../../../frontend/src/utils/FormatCommas";
import formatDate from "../../../../frontend/src/utils/FormatDate";
import RetailerPopUp from "../../widgets/RetailerPopUp";

export default function ViewRetailerOrdersRow(props) {
  const {
    order,
    viewOrderDetailsPage,
    confirmRetailerDelivery,
    reOrderRetailOrders,
    cancelRetailerOrders,
  } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const popUpItems = [
    {
      icon: <i className="fas fa-eye btn_type"></i>,
      name: "View",
      value: "View",
    },
  ];

  const popUpValues = { anchorEl, popUpItems };

  function handlePopUpClick(value) {}

  return (
    <Fragment>
      <tr>
        <td data-title="Ref No">{order.ref_number}</td>
        <td data-title="Distributor">{order.distributor.name}</td>
        <td data-title="SalesMan">
          {order.salesman.last_name
            ? `${order.salesman.first_name} ${order.salesman.last_name}`
            : order.salesman.first_name}
        </td>
        <td data-title="Price">
          {order.total_cost_currency} {FormatCommas(order.total_cost)}
        </td>
        <td
          data-title="Status"
          style={{
            color:
              order.status == "Approved" ||
              order.status == "Partial" ||
              order.status == "Dispatched"
                ? "#43ac6a"
                : "#F04124",
          }}
        >
          {order.status}
        </td>
        {order.status == "On Hold" ?
            <td data-title="Reference Note">{order.note}</td>
            : <td data-title="Reference Note"></td>
        }
        <td data-title="Date">{formatDate(order.when_placed)}</td>
        <td data-title="Actions">
          {/* <i
            onClick={(e) => setAnchorEl(e.currentTarget)}
            className="fas fa-ellipsis-h btn_type"
            style={{
              zIndex: "2",
            }}
          ></i> */}
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              className="order_btn"
              style={{
                background: "#4834d4",
              }}
              onClick={() => viewOrderDetailsPage(order.id)}
            >
              <i
                className="fas fa-eye "
                style={{
                  alignSelf: "center",
                }}
              ></i>
              <div className="order_label">View</div>
            </div>
            {order.status == "Dispatched" && !order.confirmed_delivery ? (
              <div
                className="order_btn"
                style={{
                  background: "#43ac6a",
                }}
                onClick={() => confirmRetailerDelivery(order.id)}
              >
                <i
                  className="fas fa-check"
                  style={{
                    alignSelf: "center",
                  }}
                ></i>
                <div className="order_label">Confirm</div>
              </div>
            ) : order.status == "Dispatched" && order.confirmed_delivery ? (
              <div
                className="order_btn"
                style={{
                  background: "#4834d4",
                }}
                onClick={() => reOrderRetailOrders(order.id)}
              >
                <i
                  className="fas fa-redo-alt"
                  style={{
                    alignSelf: "center",
                  }}
                ></i>
                <div className="order_label">Re-Order</div>
              </div>
            ) : (
              <div />
            )}
            {order.status == "Pending" ? (
              <div
                style={{
                  background: "#eb4d4b",
                }}
                className="order_btn"
                onClick={() => cancelRetailerOrders(order.id)}
              >
                <i
                  className="fas fa-times btn_type"
                  style={{
                    alignSelf: "center",
                  }}
                ></i>
                <div className="order_label">Cancel</div>
              </div>
            ) : (
              <div />
            )}
          </div>
        </td>
      </tr>
      <RetailerPopUp
        popUpValues={popUpValues}
        handlePopUpClick={handlePopUpClick}
        handlePopUp={() => setAnchorEl(null)}
      />
    </Fragment>
  );
}
