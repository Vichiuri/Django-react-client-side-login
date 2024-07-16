import React from "react";
import FormatCommas from "../../../utils/FormatCommas";

export default function ViewDashBoardProducts({ view_products }) {
  return (
    <div class="col-xl-5">
      <div class="white_card card_height_100 mb_30">
        <div class="white_card_header">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="main-title">
                <h3 class="m-0">Top Products</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="white_card_body QA_section">
          <div class="QA_table">
            <div class="dataTables_wrapper no-footer">
              <table class="table lms_table_active2 p-0">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Stock</th>
                  </tr>
                </thead>
                <tbody>
                  {view_products.map((product, index) => {
                    return (
                      <tr>
                        <td>
                          <div class="customer d-flex align-items-center">
                            <div class="thumb_34 mr_15 mt-0">
                              <img
                                class="img-fluid"
                                src={
                                  product.product_images[0] != null &&
                                  product.product_images[0].image != null
                                    ? `..${product.product_images[0].image}`
                                    : "../static/images/logo.svg"
                                }
                                alt=""
                              />
                            </div>
                          </div>
                        </td>
                        <td class="f_s_12 f_w_400 color_text_6">
                          <span class="f_s_12 f_w_600 color_text_5">
                            {product.name}
                          </span>
                        </td>
                        <td class="f_s_12 f_w_400 color_text_7">
                          {" "}
                          {product.price_currency} {FormatCommas(product.price)}
                        </td>
                        <td class="f_s_12 f_w_400 color_text_6">
                          {product.stock_qty}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
