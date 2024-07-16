import React from "react";

export default function ProductImageRow({ image, currentImage, changeImage }) {
  return (
    <div
      className={
        currentImage == image
          ? "fotorama__nav__frame fotorama__nav__frame--thumb fotorama__active"
          : "fotorama__nav__frame fotorama__nav__frame--thumb"
      }
      onClick={() => changeImage(image)}
      tabindex="0"
      role="button"
      data-gallery-role="nav-frame"
      data-nav-type="thumb"
      style={{ width: "90px", height: "90px", backgroundColor: "white" }}
      data-active="true"
    >
      <div
        className="
          fotorama__thumb
          fotorama_vertical_ratio
          fotorama__loaded
          fotorama__loaded--img
        "
        style={{
          background: "white",
        }}
      >
        <img
          src={image}
          alt="Product image"
          className="fotorama__img"
          aria-hidden="false"
          style={{
            width: "90px",
            height: "90px",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}
