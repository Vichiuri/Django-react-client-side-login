import React from "react";
import { Link } from "react-router-dom";

export default function ViewFooter({ account }) {
  function viewDropDown(element_id) {
    const view_drop = document.getElementById(element_id);

    if (view_drop.style.display != "block") {
      view_drop.style.display = "block";
    } else {
      view_drop.style.display = "none";
    }
  }

  return (
    <footer className="page-footer">
      <div id="focus-area"></div>
      <div id="back-top" className="">
        <i className="icon icon-chevrons-up"></i>
      </div>
      <div className="footer-container enable-mobile-menu layout-3">
        <div className="footer-top">
          <div className="footer content">
            <div className="container-inner">
              <div
                className="footer-static_link flex-layout space-around"
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >

                <div
                  onClick={() => viewDropDown("footer_account_list")}
                  className="footer-links"
                >
                  <h4 className="footer-title">My Account</h4>
                  <ul id="footer_account_list" className="footer-contents">
                    <li>
                      <Link to="/home/contact_us">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/home/view_details/about">About US</Link>
                    </li>
                    <li>
                      <Link to="/home/view_details/terms">
                        Terms and Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="/home/view_details/privacy">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  onClick={() => viewDropDown("footer_orders_list")}
                  className="footer-links"
                >
                  <h4 className="footer-title">My Orders</h4>
                  <ul id="footer_orders_list" className="footer-contents">
                    <li>
                      <Link to="/home/orders">View Orders</Link>
                    </li>
                    <li>
                      <Link to="/home/cart">View Cart</Link>
                    </li>
                    <li>
                      <Link to="/home/favourites">View Favourites</Link>
                    </li>
                  </ul>
                </div>
                <div
                  onClick={() => viewDropDown("footer_links_list")}
                  className="footer-links"
                >
                  <h4 className="footer-title">Quick Links</h4>
                  <ul id="footer_links_list" className="footer-contents">
                    <li>
                      <a href="#">Store Location</a>
                    </li>
                    <li>
                      <a href="#">My Account</a>
                    </li>
                    <li>
                      <a href="#">Orders Tracking</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container-inner border-top">
            <div className="footer content flex-layout column center">
              <small className="copyright">
                <span>Copyright © NetBot Solutons All rights reserved.</span>
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed-bottom d-block d-md-none">
        <div className="link-on-bottom">
          <ul className=" mobile-bottom-link flex-layout space-between list-unstyled no-wrap align-items-end">
            <li className="d-flex justify-content-between mr-1">
              <Link to="/home/dashboard">
                <i className="fas fa-home font-size-15 mb-2"></i>Home
              </Link>
            </li>

            <li className="d-flex justify-content-between mr-2">
              <Link to="/home/favourites">
                <i className="fas fa-heart font-size-15 mb-2"></i>
                Favourites
              </Link>
            </li>
            <li className="d-flex justify-content-between mr-1">
              <Link to="/home/orders">
                <i className="fas fa-truck-moving font-size-15 mb-2"></i>Orders
              </Link>
            </li>
            <li className="d-flex justify-content-between mr-1">
              <Link to="/home/cart">
                <i className="fas fa-shopping-cart font-size-15 mb-2"></i>
                <div>My Cart</div>
              </Link>
            </li>
            <li className="d-flex justify-content-between mr-1">
              <Link to="/home/account">
                <i className="fas fa-user font-size-15 mb-2"></i>Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
