import Axios from "axios";
import React, { useState, useEffect } from "react";
import SimpleBackdrop from "../../../../../frontend/src/widgets/SimpleBackDrop";
import RetailerBreadCrumbs from "../../../widgets/RetailerBreadCrumbs";
import HtmlParser from "react-html-parser";

export default function ViewOfferDetails({ offer, addProductToCart }) {
  const [name, setName] = useState("");
  const [product_name, setProductName] = useState("");
  const [detail, setDetail] = useState("");
  const [image, setImage] = useState("../static/images/logo.svg");
  const [isFavourite, setIsFavourite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState(0);
  const [stock_qty, setStockQty] = useState(0);
  const [track_qty, setTrackQty] = useState(true);

  const [new_qty, setNewQty] = useState(1);

  const [description, setDescription] = useState([]);

  useEffect(() => {
    if (offer) {
      setName(offer.name);
      setProductName(offer?.x_item?.name);
      setDetail(offer.detail_name);
      setImage(offer.pic ? `..${offer.pic}` : "../static/images/logo.svg");

      setTrackQty(offer?.x_item?.track_stock);
      setStockQty(offer?.x_item?.stock_qty);
      setDescription(HtmlParser(offer?.x_item?.description));
      updateOfferQty(offer?.x_amt);
    }
  }, [offer]);

  function addToFavouriteProducts() {
    setIsLoading(true);
    const token = localStorage.getItem("retail_token");

    let config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }

    Axios.post(
      "api/retailer_prod_fav/",
      { product_id: offer?.x_item?.id },
      config
    )
      .then((res) => {
        setIsLoading(false);
        setIsFavourite(true);
      })
      .catch((error) => {
        setIsLoading(false);
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };
        console.log(errors);
      });
  }

  function removeFavouriteProducts() {
    setIsLoading(true);
    const token = localStorage.getItem("retail_token");

    let config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }

    Axios.patch(
      "api/retailer_prod_fav/",
      { product_id: offer?.x_item?.id },
      config
    )
      .then((res) => {
        setIsLoading(false);
        setIsFavourite(false);
      })
      .catch((error) => {
        setIsLoading(false);
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };
        console.log(errors);
      });
  }

  function updateOfferQty(qty) {
    if (offer.scheme == "BnXy%O") {
      let percDisc = 100 - offer.y_amt;

      let new_price = offer?.x_item?.price * qty * (percDisc / 100);
      setPrice(`Ksh. ${new_price}`);
    } else {
      setPrice(`Ksh.  ${offer?.x_item?.price * qty}`);
    }

    setNewQty(qty);
  }

  return (
    <div
      style={{
        margin: "20px auto",
        paddingTop: "20px",
      }}
    >
      <SimpleBackdrop open={isLoading} />
      <div className="columns">
        <div className="column main">
          <div className="product-main-content">
            <div className="product media">
              <a id="gallery-prev-area" tabindex="-1"></a>

              <div className="gallery-placeholder _block-content-loading product_detail_img">
                <img
                  alt="main product photo"
                  className="gallery-placeholder__image"
                  style={{
                    height: "300px",
                    // width: "300px",
                    objectFit: "contain",
                    // margin: "30px auto",
                  }}
                  src={image}
                />
              </div>

              <a id="gallery-next-area" tabindex="-1"></a>
            </div>
            <div className="product-info-main">
              <div>
                <h2 className="page-title">
                  <span className="base">{name}</span>
                </h2>
              </div>
              <RetailerBreadCrumbs
                prevPropsName="Products"
                propsName="Details"
                toProp="/dashboard"
              />

              <div>
                <h4 className="page-title">
                  <span className="type">Product: </span>
                  <span className="type">{product_name}</span>
                </h4>
              </div>
              <div className="product-info-price">
                <div className="price-box price-final_price">
                  <span
                    className="
                    price-container
                    price-final_price
                  "
                  >
                    <span className="price-wrapper">
                      <span className="price">{price}</span>
                    </span>
                  </span>
                </div>
              </div>
              {track_qty ? (
                stock_qty > 0 ? (
                  <div className="stock product_availabile">
                    <span>In stock</span>
                  </div>
                ) : (
                  <div className="stock product_unavailabile">
                    <span>Out of stock</span>
                  </div>
                )
              ) : (
                <div className="stock product_availabile">
                  <span>In stock</span>
                </div>
              )}
              <div className="product-info-stock-sku"></div>
              <div className="product attribute overview">
                <div className="value" itemprop="description">
                  <p>{detail}</p>
                </div>
              </div>
              <div className="product-add-form">
                <div>
                  <div className="box-tocart">
                    <div className="fieldset">
                      <div className="field qty up-down flex-layout no-wrap">
                        <div className="control">
                          <input
                            type="number"
                            name="qty"
                            maxlength={track_qty ? stock_qty : 99999}
                            value={new_qty}
                            onChange={(e) => {
                              if (new_qty > offer?.x_amt) {
                                updateOfferQty(e.target.value);
                              } else {
                                updateOfferQty(offer?.x_amt);
                              }
                            }}
                            title="Quantity"
                            className="input-text qty"
                          />
                        </div>
                        <div
                          className="click-up-down flex-layout no-wrap column btn_type"
                          style={{
                            marginRight: "10px",
                          }}
                        >
                          <div
                            onClick={() => updateOfferQty(new_qty + 1)}
                            className="qty-up-fixed-onclick qty-up"
                          >
                            <i className="fas fa-chevron-up"></i>
                          </div>
                          <div
                            onClick={() => {
                              if (new_qty > offer?.x_amt) {
                                updateOfferQty(
                                  new_qty > 1 ? new_qty - 1 : new_qty
                                );
                              } else {
                                updateOfferQty(offer?.x_amt);
                              }
                            }}
                            className="qty-down-fixed-onclick qty-down btn_type"
                          >
                            <i className="fas fa-chevron-down"></i>
                          </div>
                        </div>
                      </div>
                      <div className="actions">
                        <button
                          className="action primary tocart"
                          onClick={() =>
                            addProductToCart({
                              product_id: offer?.x_item?.id,
                              qty: new_qty,
                              new_qty: new_qty,
                            })
                          }
                        >
                          <span>Add to Cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-social-links">
                <div className="product-addto-links" data-role="add-to-links">
                  <div
                    className="action towishlist"
                    onClick={() =>
                      isFavourite
                        ? removeFavouriteProducts()
                        : addToFavouriteProducts()
                    }
                    style={{
                      color: "#bdbdbd",
                    }}
                  >
                    {isFavourite ? (
                      <i
                        className="fas fa-heart"
                        style={{
                          color: "#F04124",
                        }}
                      ></i>
                    ) : (
                      <i className="far fa-heart"></i>
                    )}
                    <span>Add to Favourites</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product info detailed">
            <div className="product data items">
              <div className="data item title">
                <div className="data switch">Details</div>
              </div>
              <div className="data item content">{description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
