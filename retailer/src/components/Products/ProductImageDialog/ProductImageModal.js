import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import ProductImageRow from "./ProductImageRow";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
/** view product images on higher def */
export default function ProductImageModal(props) {
  const { open, handleClose, images, currentImage } = props;

  const [viewCurrentImage, setViewCurrentImage] = useState(
    "../static/images/logo.svg"
  );

  useEffect(() => {
    setViewCurrentImage(
      currentImage
        ? currentImage
        : images[0]?.image
        ? `..${images[0]?.image}`
        : "../static/images/logo.svg"
    );
  }, [currentImage, images]);

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <div
        className="fotorama-item fotorama fotorama1625571362359 fotorama--fullscreen"
        data-gallery-role="gallery"
      >
        <div
          className="product_image_modal_close"
          onClick={() => handleClose()}
        >
          <i className="fas fa-times"></i>
        </div>

        <div data-gallery-role="fotorama__focusable-start" tabindex="0"></div>
        <div
          className="
          fotorama__wrap
          fotorama__wrap--css3
          fotorama__wrap--fade
          fotorama__wrap--no-controls
        "
          style={{ minWidth: "0px", maxWidth: "1200px", paddingTop: "40px" }}
        >
          <div
            className="fotorama__stage"
            data-fotorama-stage="fotorama__stage"
            style={{ left: "92px", width: "1366px", height: "372px" }}
          >
            <div
              className="fotorama__stage__shaft"
              tabindex="0"
              data-gallery-role="stage-shaft"
              style={{
                maxWidth: "1274px",
                transitionDuration: "0ms",
                transform: "translate3d(0px, 0px, 0px)",
                marginLeft: "0px",
                width: "1366px",
              }}
            >
              <div
                className="
                fotorama__stage__frame
                fotorama_vertical_ratio
                fotorama__loaded
                fotorama__loaded--img
                magnify-wheel-loaded
                fotorama__loaded--full fotorama__fade-rear fotorama__active
              "
                aria-hidden="false"
                data-active="true"
                style={{
                  left: "0px",
                  transitionDuration: "0ms",
                  opacity: "1",
                }}
              >
                <img
                  src={viewCurrentImage}
                  alt="Product image"
                  className="fotorama__img--full fotorama__img--zoommable"
                  aria-hidden="false"
                  style={{
                    minWidth: "300px",
                    minHeight: "300px",
                    width: "477px",
                    height: "477px",
                    objectFit: "contain",
                    top: "0px",
                    left: "25px",
                    right: "0px",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="fotorama__nav-wrap fotorama__nav-wrap--vertical"
            data-gallery-role="nav-wrap"
          >
            <div
              className="
              fotorama__nav fotorama__nav--thumbs fotorama__shadows--bottom
            "
              style={{ width: "90px", marginTop: "10px" }}
            >
              <div
                className="fotorama__nav__shaft fotorama__grab"
                style={{
                  transitionDuration: "0ms",
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              >
                {images?.map((image, index) => {
                  return (
                    <ProductImageRow
                      key={index}
                      image={`..${image.image}`}
                      currentImage={viewCurrentImage}
                      changeImage={(v_image) => setViewCurrentImage(v_image)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
