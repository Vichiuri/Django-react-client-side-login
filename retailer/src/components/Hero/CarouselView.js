import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export default function CarouselView({ banners, offers }) {
  return (
    <div>
      <div className="row no-wrap-desktop col-on-top section no-wrap-desktop">
        <div className="col-slide">
          <div className="section no-full-width slider-wrapper theme-default ">
            <Carousel controls={false}>
              {banners.map((banner, index) => {
                return (
                  <Carousel.Item key={index} style={{ width: "100%" }}>
                    <div
                      className="container-the-blue-sky-slider nivoSlider "
                      style={{ width: "100%" }}
                    >
                      <div className="carousel_item">
                        <img
                          className="banner-nivo-slider-mobile-and-web no-lazy "
                          src={
                            banner.pic
                              ? `..${banner.pic}`
                              : "../static/images/3955595.webp"
                          }
                        />
                      </div>
                      <div className="carousel_message_view">
                        <div className="carousel_message_text">
                          <label>{banner.name}</label>
                          <span>{banner.text}</span>
                        </div>
                        {banner.status != "Banner" ? (
                          <Link
                            to={
                              banner.status == "Product"
                                ? `/home/details/${banner?.product?.id}`
                                : `/home/offer_details/${banner?.offer?.id}`
                            }
                            className="carousel_message_btn"
                          >
                            <label>Discover</label>
                          </Link>
                        ) : (
                          <div />
                        )}
                      </div>
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
        <div className="col-banner-beside">
          <div className="banner section row">
            <div className="col-lg-6 col-md-6 d-none d-lg-block">
              <div className="col-banner left center shadow radius absolute-content-image">
                <div className="carousel_view">
                  <div className="banner-img no-animation hover-light-effect carousel_view_offer">
                    <img
                      src={
                        offers[0]
                          ? `..${offers[0].pic}`
                          : "../static/images/16284.jpg"
                      }
                      alt=""
                    />
                  </div>
                  <div className="carousel_message_offer">
                    {offers[0] ? offers[0].name : ""}
                  </div>
                </div>
                {/**/}
                <div className="carousel_view_cotent">
                  <h3 className="size-24 regular get-size-vw">
                    <a href="#">
                      {/* <span style={{ color: "#ffffff" }}>New Style</span> */}
                      {/* <br /> */}
                      <span style={{ color: "#ffffff" }}>
                        {/* Bluetooh Speaker{" "} */}
                        {offers[0] ? offers[0].name : ""}
                      </span>
                    </a>
                  </h3>
                  <p className="size-16 get-size-vw">
                    <span style={{ color: "#ffffff" }}>
                      {offers[0] ? offers[0].detail_name : ""}
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-banner left center shadow radius absolute-content-image">
                <div className="carousel_view">
                  <div className="banner-img no-animation hover-light-effect carousel_view_offer">
                    <img
                      src={
                        offers[1]
                          ? `..${offers[1].pic}`
                          : "../static/images/16284.jpg"
                      }
                      alt=""
                    />
                  </div>
                  <div className="carousel_message_offer">
                    {offers[1] ? offers[1].name : ""}
                  </div>
                </div>
                <div className="carousel_view_cotent">
                  <h3 className="size-24 regular get-size-vw">
                    <div href="#">
                      <br />
                      <span style={{ color: "#ffffff" }}>
                        {" "}
                        {offers[1] ? offers[1].name : ""}{" "}
                      </span>
                    </div>
                  </h3>
                  <p className="size-16 get-size-vw">
                    <span style={{ color: "#ffffff" }}>
                      {offers[1] ? offers[1].detail_name : ""}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              style={{
                minHeight: "100%",
                maxHeight: "35px",
                alignItems: "center",
              }}
            >
              <div
                className="col-banner space-between center middle shadow radius absolute-content-image"
                style={{ height: "370px", background: "#21b792" }}
              >
                <div className="banner-img no-animation hover-light-effect">
                  <img
                    src="../static/images/retailer_sales.jpg"
                    alt=""
                    style={{
                      width: "100%",
                      height: "370px",
                    }}
                  />
                </div>
                <div className="content space-between">
                  <div
                    className="button-wrap"
                    style={{
                      position: "absolute",
                      bottom: "10px",
                    }}
                  >
                    <div
                      className="btn transparent small"
                      style={{ color: "#ffffff" }}
                      title="Check now"
                      href="#"
                    >
                      CHECK NOW
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
