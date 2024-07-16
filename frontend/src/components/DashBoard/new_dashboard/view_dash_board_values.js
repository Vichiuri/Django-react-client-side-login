import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ViewDashBoardValues({ dashBoardCount }) {
  const [products, setProducts] = useState(0);
  const [retailers, setRetailers] = useState(0);
  const [salesmen, setSalesMen] = useState(0);
  const [offers, setOffers] = useState(0);

  useEffect(() => {
    setProducts(
      dashBoardCount?.product_count ? dashBoardCount.product_count : 0
    );
    setRetailers(
      dashBoardCount?.retailers_count ? dashBoardCount.retailers_count : 0
    );
    setSalesMen(dashBoardCount?.salesmen ? dashBoardCount.salesmen : 0);
    setOffers(dashBoardCount?.offers ? dashBoardCount.offers : 0);
  }, [dashBoardCount]);

  return (
    <div className="col-xl-4 ">
      <div className="white_card card_height_100 mb_30 user_crm_wrapper ">
        <div className="row">
          <Link
            to="/home/retailers"
            className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-Deco p-1"
          >
            <div className="single_crm">
              <div className="crm_head d-flex align-items-center justify-content-between">
                <div className="thumb">
                  <img src="../static/images/crm/businessman.svg" alt="" />
                </div>
                <i className="fas fa-ellipsis-h f_s_11 white_text"></i>
              </div>
              <div className="crm_body">
                <h4>{retailers}</h4>
                <p>Customers</p>
              </div>
            </div>
          </Link>
          <Link
            to="/home/products"
            className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-Deco p-1"
          >
            <div className="single_crm ">
              <div className="crm_head crm_bg_1 d-flex align-items-center justify-content-between">
                <div className="thumb">
                  <img src="../static/images/crm/customer.svg" alt="" />
                </div>
                <i className="fas fa-ellipsis-h f_s_11 white_text"></i>
              </div>
              <div className="crm_body">
                <h4>{products}</h4>
                <p>Products</p>
              </div>
            </div>
          </Link>
          <Link
            to="/home/sales"
            className="col-lg-6 col-md-6 col-sm-6  col-xs-6 text-Deco p-1"
          >
            <div className="single_crm">
              <div className="crm_head crm_bg_2 d-flex align-items-center justify-content-between">
                <div className="thumb">
                  <img src="../static/images/crm/infographic.svg" alt="" />
                </div>
                <i className="fas fa-ellipsis-h f_s_11 white_text"></i>
              </div>
              <div className="crm_body">
                <h4>{salesmen}</h4>
                <p>SalesMen</p>
              </div>
            </div>
          </Link>
          <Link
            to=""
            className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-Deco p-1"
          >
            <div className="single_crm">
              <div className="crm_head crm_bg_3 d-flex align-items-center justify-content-between">
                <div className="thumb">
                  <img src="../static/images/crm/sqr.svg" alt="" />
                </div>
                <i className="fas fa-ellipsis-h f_s_11 white_text"></i>
              </div>
              <div className="crm_body">
                <h4>{offers}</h4>
                <p>Active Offers</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="crm_reports_bnner mt-1">
          <div className="row justify-content-end ">
            <div className="col-lg-6 p-1">
              <h6>Create Custom Reports</h6>
              <p>Select what you want to view here.</p>
              <a href="#">
                Read More <i className="fas fa-arrow-right"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
