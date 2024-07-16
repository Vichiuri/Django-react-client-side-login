import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Debouncer from "../../../../frontend/src/utils/Debouncer";
import RetailerPopUp from "../../widgets/RetailerPopUp";
import SearchProducts from "./SearchProducts";
import UserNavPopUp from "./UserNavPopUp";

export default function NavBar(props) {
  const {
    logOutRetailer,
    account,
    cart,
    fetchRetailerDist,
    distributors,
    updateRetailerDistributor,
    categories,
    searchRetailerProduct,
    productLoading,
    searchProducts,
  } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const [userAnchorEl, setUserAnchorEl] = useState(null);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [query, setQuery] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [popUpItems, setPopUpItems] = useState([]);

  useEffect(() => {
    let view_values = distributors.map((item) => {
      return { image: item.logo, name: item.name, value: item.id };
    });
    if (account && account.default_distributor) {
      const current_distributor = {
        image: account.default_distributor.logo,
        name: account.default_distributor.name,
        value: account.default_distributor.id,
      };
      view_values = [
        current_distributor,
        ...view_values.filter(
          (v_item) => v_item.value != account.default_distributor.id
        ),
      ];
    }
    setPopUpItems(view_values);

    window.onscroll = function () {
      myFunction();
    };

    // Get the header
    var header = document.getElementById("nav_header");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky className to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

    document
      .getElementById("nav_search")
      .addEventListener("click", function (e) {
        const search_input = document.getElementById("search_item_input");
        if (search_input.style.display == "none") {
          search_input.style.display = "block";
          this.classList.remove("fa-search");
          this.classList.add("fa-search-minus");
        } else {
          search_input.style.display = "none";
          this.classList.remove("fa-search-minus");
          this.classList.add("fa-search");
        }
      });
  }, [distributors]);

  const userPopUpItems = [
    {
      icon: <i className="fas fa-user"></i>,
      name: "Account",
      value: "/home/account",
    },
    {
      icon: <i className="fas fa-truck-moving"></i>,
      name: "Orders",
      value: "/home/orders",
    },
    {
      icon: <i className="far fa-heart"></i>,
      name: "Favourites",
      value: "/home/favourites",
    },
    {
      icon: <i className="fas fa-power-off"></i>,
      name: "Log Out",
      value: "logout",
    },
  ];

  const popUpValues = { anchorEl, popUpItems };
  const userPopUpValues = {
    anchorEl: userAnchorEl,
    popUpItems: userPopUpItems,
  };

  function handlePopUpClick(value) {
    setAnchorEl(null);
    updateRetailerDistributor(value);
  }

  function handleUserPop(value) {
    if (value == "logout") {
      logOutRetailer();
    }
  }

  return (
    <header
      className="page-header"
      id="nav_header"
      style={{
        zIndex: "100",
      }}
    >
      <div className="header-container layout-2 layout-3-additional sticky-header">
        <div className="header panel flex-layout-sticky center_vertical no-wrap-desktop">
          <div className="flex-layout space-between center_vertical no-wrap-desktop header-middle">
            <div className="logo-container">
              <div className="logo-site">
                <Link to="/home/dashboard" className="nav_banner">
                  <div className="nav_logo">
                    <img
                      src={
                        account?.default_distributor?.logo
                          ? `..${account.default_distributor.logo}`
                          : "../static/images/logo.svg"
                      }
                      title=""
                      alt=""
                    />
                  </div>

                  <h5>{account?.default_distributor?.name ?? ""}</h5>
                </Link>
                <div className="d-flex nav_mobile_icons">
                  <i id="nav_search" className="fas fa-search"></i>
                  <i
                    onClick={(e) => {
                      fetchRetailerDist();
                      setAnchorEl(e.currentTarget);
                    }}
                    className="fas fa-random"
                  ></i>
                </div>
              </div>
            </div>
            <div
              id="search_item_input"
              className="top-search-not-dropdown button-search-full"
            >
              <div className="block block-search">
                <div className="block-content">
                  <div className="dropdown">
                    <div className="dropdown-toggle">
                      <div className="top-search">
                        <i className="main-icon-search"></i>
                        <span className="text">Search</span>
                      </div>
                    </div>
                    <div
                      className="form minisearch search-content cat-search"
                      id="search_mini_form"
                      method="get"
                    >
                      <div className="search-form">
                        <div className="field-by-cat-search hidden-xs view_row">
                          <select
                            name="cat"
                            id="choose_category"
                            value={currentCategory}
                            onChange={(e) => setCurrentCategory(e.target.value)}
                          >
                            <option value="">All Categories</option>
                            {categories.map((category, index) => {
                              return (
                                <option key={index} value={category.id}>
                                  {category.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <div className="field search">
                          <label
                            className="label"
                            for="search-input-autocomplate"
                            data-role="minisearch-label"
                          >
                            <span>Search</span>
                          </label>
                          <div className="control">
                            <input
                              type="text"
                              name="query"
                              value={query}
                              onChange={(e) => setQuery(e.target.value)}
                              onClick={(e) => {
                                if (e.target.value) {
                                  setShowSearchResults(true);
                                }
                              }}
                              placeholder="Search entire store here..."
                              className="input-text"
                              maxlength="128"
                              // role="combobox"
                              // aria-haspopup="false"
                              // aria-expanded="false"
                              onKeyUp={Debouncer(() => {
                                searchRetailerProduct(
                                  account?.default_distributor?.id,
                                  1,
                                  query,
                                  currentCategory
                                );
                              }, 2000)}
                              onKeyDown={(e) => {
                                setShowSearchResults(true);
                                // distributor_id, page, query, category_id
                              }}
                            />
                            <SearchProducts
                              visibility={showSearchResults}
                              closeVisibility={() =>
                                setShowSearchResults(false)
                              }
                              productLoading={productLoading}
                              searchProducts={searchProducts}
                              currentCategory={currentCategory}
                              query={query}
                            />
                          </div>
                          <div className="actions">
                            <button
                              type="submit"
                              // title="Search"
                              className="action search"
                            >
                              <i className="fas fa-search"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-action col-right">
              <div className="flex-layout center_vertical">
                <ul className="flex-layout action-header center_vertical no-wrap-desktop">
                  <li
                    onClick={(e) => {
                      fetchRetailerDist();
                      setAnchorEl(e.currentTarget);
                    }}
                    className="account-link-header hidden-xs btn_type"
                  >
                    <i className="fas fa-store nav_icon"></i>
                    <ul className="header links">
                      <li className="link authorization-link" data-label="or">
                        <div>
                          <span className="text">
                            {account.default_distributor
                              ? account.default_distributor.name
                              : ""}
                          </span>
                        </div>
                      </li>
                      <li>
                        <div style={{ color: "#222", fontSize: "14px" }}>
                          Change Distributor
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="account-link-header ">
                    <Link to="/home/cart">
                      <i className="fas fa-shopping-bag nav_icon"></i>
                      <span className="counter qty ">
                        <span className="total-mini-cart-item">
                          {cart?.orders.length}
                        </span>
                      </span>
                    </Link>
                    <ul className="header links">
                      <li className="link authorization-link" data-label="or">
                        <Link to="/home/cart">
                          <span className="text">My Cart</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/home/cart"> {cart?.total}</Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    onClick={(e) => setUserAnchorEl(e.currentTarget)}
                    className="account-link-header hidden-xs btn_type"
                  >
                    <i className="fas fa-user nav_icon"></i>

                    <ul className="header links">
                      <li className="link authorization-link" data-label="or">
                        <div>
                          <span className="text">Account</span>
                        </div>
                      </li>
                      <li>
                        <div>View Account</div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="panel wrapper">
        <div className="panel header">
          <a className="action skip contentarea" href="#contentarea">
            <span>Skip to Content </span>
          </a>
        </div>
      </div>
      <RetailerPopUp
        popUpValues={popUpValues}
        handlePopUp={() => setAnchorEl(null)}
        handlePopUpClick={handlePopUpClick}
      />
      <UserNavPopUp
        popUpValues={userPopUpValues}
        handlePopUp={() => setUserAnchorEl(null)}
        handlePopUpClick={handleUserPop}
      />
    </header>
  );
}
