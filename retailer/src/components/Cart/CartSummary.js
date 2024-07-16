import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

export default function CartSummary({ total, checkOutCart }) {
  const [note, setNote] = useState("");

  return (
    <div class="cart-summary" style={{ top: "0px" }}>
      <strong class="summary title">Summary</strong>
      <div
        id="block-shipping"
        class="block shipping"
        data-collapsible="true"
        role="tablist"
      >
        <div
          class="title"
          data-role="title"
          aria-controls="block-summary"
          role="tab"
          aria-selected="false"
          aria-expanded="false"
          tabindex="0"
        >
          <strong id="block-shipping-heading" role="heading" aria-level="2">
            Estimate Cost and Tax{" "}
          </strong>
        </div>
      </div>
      <div
        id="cart-totals"
        class="cart-totals"
        data-bind="scope:'block-totals'"
      >
        <div class="table-wrapper" data-bind="blockLoader: isLoading">
          <table class="data table totals">
            <caption class="table-caption" data-bind="text: $t('Total')">
              Total
            </caption>
            <tbody>
              <tr class="totals sub">
                <th data-bind="i18n: title" class="mark" scope="row">
                  Subtotal
                </th>
                <td class="amount">
                  <span
                    class="price"
                    data-bind="text: getValue(), attr: {'data-th': title}"
                    data-th="Subtotal"
                  >
                    {total ? total : 0}
                  </span>
                </td>
              </tr>
    
              <tr class="grand totals">
                <th class="mark" scope="row">
                  <strong data-bind="i18n: title">Order Total</strong>
                </th>
                <td
                  data-bind="attr: {'data-th': title}"
                  class="amount"
                  data-th="Order Total"
                >
                  <strong>
                    <span class="price" data-bind="text: getValue()">
                      {total ? total : 0}
                    </span>
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div
        class="block discount"
        id="block-discount"
        data-collapsible="true"
        role="tablist"
      >
        <div
          role="tab"
          aria-selected="false"
          aria-expanded="false"
          tabindex="0"
        >
          <TextField
            label="Enter Note"
            placeholder="Please enter a note defining how you want your order delivered..."
            multiline
            rows={4}
            value={note}
            style={{
              width: "90%",
              backgroundColor: "#ffff",
              margin: "auto 10px",
            }}
            size="medium"
            onChange={(e) => setNote(e.target.value)}
            variant="outlined"
          />
        </div>
      </div>
      <ul class="checkout methods items checkout-methods-items">
        <li class="item">
          {" "}
          <button
            type="button"
            onClick={() => checkOutCart(note)}
            title="Proceed to Checkout"
            class="action primary checkout"
          >
            <span>Check out</span>
          </button>
        </li>
        {/* <li class="item">
          <a
            class="action multicheckout"
            href="#"
          >
            <span>Check Out with Multiple Addresses</span>
          </a>
        </li> */}
      </ul>
    </div>
  );
}
