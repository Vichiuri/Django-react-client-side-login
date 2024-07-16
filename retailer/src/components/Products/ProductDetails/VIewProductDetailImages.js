import React from "react";

export default function VIewProductDetailImages({ images, changeImage }) {
  //

  return (
    <div
      class="fotorama__nav__shaft product_detail_view_img"
      style={{
        transitionDuration: "0ms; transform: translate3d(0px, 0px, 0px)",
        alignItems: "center",
        justifyContent: "center",
        height: "90px",
        // margin: "20px auto",
        marginTop: "10px",
        display: "inline-block",
      }}
    >
      {images.map((image, index) => {
        return (
          <div
            onClick={() => changeImage(image.image)}
            key={index}
            class="fotorama__nav__frame fotorama__nav__frame--thumb"
            tabindex="0"
            role="button"
            data-gallery-role="nav-frame"
            style={{ width: "90px", height: "inherit", marginTop: "5px" }}
          >
            <div class="fotorama__thumb fotorama_vertical_ratio fotorama__loaded fotorama__loaded--img">
              <img
                src={
                  image && image.image
                    ? `${image.image}`
                    : "../static/images/logo.svg"
                }
                alt="Zmmyr 200Pcs Dust Flat Mouth"
                class="fotorama__img"
                aria-hidden="false"
                style={{ height: "inherit", objectFit: "contain" }}
              />
            </div>
          </div>
        );
      })}
      {/* <div
        class="fotorama__thumb-border"
        style={{
          transitionDuration: "0ms; transform: translate3d(0px, 0px, 0px)",
        }}
      ></div>
      <div
        class="fotorama__nav__frame fotorama__nav__frame--thumb fotorama__active"
        tabindex="0"
        role="button"
        data-gallery-role="nav-frame"
        data-nav-type="thumb"
        aria-label="Zmmyr 200Pcs Dust Flat Mouth"
        style={{ width: "90px" }}
        data-active="true"
      >
        <div class="fotorama__thumb fotorama_vertical_ratio fotorama__loaded fotorama__loaded--img">
          <img
            src="https://mageblueskytech.com/dukamarket/media/catalog/product/cache/4d15f6f346b8aa5d265629c92c4af71e/1/_/1.jpg"
            alt="Zmmyr 200Pcs Dust Flat Mouth"
            class="fotorama__img"
            aria-hidden="false"
          />
        </div>
      </div>

      <div
        class="fotorama__nav__frame fotorama__nav__frame--thumb"
        tabindex="0"
        role="button"
        data-gallery-role="nav-frame"
        data-nav-type="thumb"
        aria-label="Zmmyr 200Pcs Dust Flat Mouth"
        style={{ width: "90px" }}
      >
        <div class="fotorama__thumb fotorama_vertical_ratio fotorama__loaded fotorama__loaded--img">
          <img
            src="https://mageblueskytech.com/dukamarket/media/catalog/product/cache/4d15f6f346b8aa5d265629c92c4af71e/2/9/29_1_1_1_1.jpg"
            alt="Zmmyr 200Pcs Dust Flat Mouth"
            class="fotorama__img"
            aria-hidden="false"
          />
        </div>
      </div>
      <div
        class="fotorama__nav__frame fotorama__nav__frame--thumb"
        tabindex="0"
        role="button"
        data-gallery-role="nav-frame"
        data-nav-type="thumb"
        aria-label="Zmmyr 200Pcs Dust Flat Mouth"
        style={{ width: "90px" }}
      >
        <div class="fotorama__thumb fotorama_vertical_ratio fotorama__loaded fotorama__loaded--img">
          <img
            src="https://mageblueskytech.com/dukamarket/media/catalog/product/cache/4d15f6f346b8aa5d265629c92c4af71e/3/0/30_1_1_1_1.jpg"
            alt="Zmmyr 200Pcs Dust Flat Mouth"
            class="fotorama__img"
            aria-hidden="false"
          />
        </div>
      </div>
   */}
    </div>
  );
}
