import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HtmlParser from "react-html-parser";
import SimpleBackdrop from "../../../../../frontend/src/widgets/SimpleBackDrop";
import RetailerBreadCrumbs from "../../../widgets/RetailerBreadCrumbs";
import ProductImageModal from "../ProductImageDialog/ProductImageModal";
import PriceSlabModal from "./PriceSlabModal";
import RelatedItemsRow from "./RelatedItemsRow";
import VIewProductDetailImages from "./VIewProductDetailImages";
import Debouncer from "../../../../../frontend/src/utils/Debouncer";
import ReactSelect from "react-select";

export default function ViewRetailProductDetails(props) {
  const {
    detail,
    related_products,
    addProductToCart,
    product_slabs,
    fetchPriceSlabs,
  } = props;

  const customStyles = {
    control: (base) => ({
      ...base,
      minHeight: 30,
    }),
    dropdownIndicator: (base) => ({
      ...base,
      padding: 2,
    }),
    clearIndicator: (base) => ({
      ...base,
      padding: 4,
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: variables.colorPrimaryLighter,
      minHeight: "20px",
    }),
    valueContainer: (base) => ({
      ...base,
      padding: "2px 4px",
    }),
    option: (base, state) => ({
      ...base,
      padding: 2,
      margin: 0,
    }),
    input: (base) => ({
      ...base,
      margin: 0,
      padding: 0,
    }),
  };

  const [currentImage, setCurrentImage] = useState("../static/images/logo.svg");
  const [variationImage, setVariationImage] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [variationImages, setVariationImages] = useState([]);
  const [images, setImages] = useState([]);
  const [brief_description, setBriefDescription] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock_qty, setStockQty] = useState(0);
  const [category, setCategory] = useState(null);
  const [new_qty, setNewQty] = useState(1);
  const [track_qty, setTrackQty] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [imagesModal, setImagesModal] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [price_slab, setPriceSlab] = useState(null);
  const [priceList, setPriceList] = useState([]);
  const [newPrice, setNewPrice] = useState("");
  const [variants, setVariants] = useState([]);
  const [selectedVariants, setSelectedVariants] = useState(null);
  const [selectedVariantImage, setSelectedVariantImage] = useState([]);
  const [optionVariants, setOptionVariants] = useState([]);

  const p_slab = useSelector(
    (state) => state.retailerProductsReducer.product_slabs
  );

  const checkPriceSlab = () => {
    if (p_slab.length > 0) {
      let slab = p_slab.find((slab) => {
        return new_qty >= slab.min_amount && new_qty <= slab.max_amount;
      });

      if (slab && slab?.discount_percent) {
        let new_price = (slab?.rate * (100 - slab?.discount_percent)) / 100;

        setNewPrice(`${detail.price_currency} ${new_price}`);
        // setNewPrice(new_price)
      } else if (slab && !slab?.discount_percent) {
        setNewPrice(`${detail.price_currency} ${slab.rate}`);

        console.log("no  discount percent");
      } else {
        setNewPrice(price);
      }
    } else {
      setNewPrice(price);
    }
  };

  useEffect(() => {
    if (detail) {
      if (detail.product_images && detail.product_images.length > 0) {
        setCurrentImage(`..${detail.product_images[0].image}`);
        setImages(detail.product_images);
      }
      setColors(detail.colors);
      setName(detail.name);
      setBrand(detail.brand);
      setColors(detail.colors);
      setSizes(JSON.parse(detail.size));
      setBriefDescription(detail.brief_description);

      if (detail?.variations?.length > 0) {
        if (selectedVariants) {
          setNewPrice(
            `${detail?.price_currency}${" "}${selectedVariants?.selling_price}`
          );
          setPrice(
            `${detail?.price_currency}${" "}${selectedVariants?.selling_price}`
          );
          fetchPriceSlabs(detail.id, null, selectedVariants?.id);
        } else {
          setNewPrice(sortPrice(detail?.variations));
          fetchPriceSlabs(detail.id);
        }
      } else {
        setNewPrice(`${detail.price_currency} ${detail.price}`);
        setPrice(`${detail.price_currency} ${detail.price}`);
        fetchPriceSlabs(detail.id);
      }
      setStockQty(detail.stock_qty);
      setCategory(detail.category);
      setTrackQty(detail.track_stock);
      setDescription(HtmlParser(detail.description));
      setIsFavourite(detail.is_favorite);
      // setNewQty(detail.cart_qty > 0 ? detail.cart_qty : 1);
      setNewQty(1);
      // fetchPriceSlabs(detail.id);
    }
  }, [detail, selectedVariants]);
  useEffect(() => {
    detail?.variations?.map((item) => {
      // item?.attributes.map((attr) => {
      if (item?.active) {
        // item["name"] = item?.name;
        if (variants.find((element) => element?.id == item?.id)) {
        } else {
          setVariants((prevState) => [...prevState, item]);

          setOptionVariants((prevState) => [
            ...prevState,
            { value: item?.id, label: item?.value?.value },
          ]);
        }
      }
      // });
    });
  }, [detail?.variations]);

  function updatePriceSlab(slab) {
    setPriceSlab(slab);
    setPrice(`${detail.price_currency} ${slab.rate}`);
    setNewQty(slab.min_amount);
    setPriceList((arr) => [...arr, slab.id]);
  }

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

    Axios.post("api/retailer_prod_fav/", { product_id: detail.id }, config)
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

    Axios.patch("api/retailer_prod_fav/", { product_id: detail.id }, config)
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
  const getPriceList = () => {
    if (priceList) {
      return { price_list: priceList };
    }
    return {};
  };
  function sortPrice(variations) {
    if (variations?.length == 1) {
      return `1 - ${variations[0]?.selling_price}  ${detail?.price_currency}`;
    } else {
      let sorted_prices = variations?.sort((a, b) =>
        a.selling_price > b.selling_price ? 1 : -1
      );
      let least_price = sorted_prices[0]?.selling_price;
      let highest_price = sorted_prices[variations?.length - 1]?.selling_price;
      return `${least_price} - ${highest_price} ${detail?.price_currency}`;
    }
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
                {variationImage ? (
                  <>
                    {" "}
                    <img
                      alt="main product photo"
                      className="gallery-placeholder__image"
                      style={{
                        height: "300px",
                        // width: "300px",
                        objectFit: "contain",
                        // margin: "30px auto",
                        cursor: "pointer",
                      }}
                      src={variationImage}
                      onClick={() => setImagesModal(true)}
                    />
                    <VIewProductDetailImages
                      images={[selectedVariantImage]}
                      changeImage={(image) => setCurrentImage(`..${image}`)}
                    />
                  </>
                ) : (
                  <>
                    {" "}
                    <img
                      alt="main product photo"
                      className="gallery-placeholder__image"
                      style={{
                        height: "300px",
                        // width: "300px",
                        objectFit: "contain",
                        // margin: "30px auto",
                        cursor: "pointer",
                      }}
                      src={currentImage}
                      onClick={() => setImagesModal(true)}
                    />
                    <VIewProductDetailImages
                      images={images}
                      changeImage={(image) => setCurrentImage(`..${image}`)}
                    />
                  </>
                )}
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

              <div className="product-info-price">
                <div className="price-box price-final_price">
                  <span
                    className="
                    price-container
                    price-final_price
                  "
                  >
                    <span className="price-wrapper">
                      <span className="price">{newPrice}</span>
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
              <div className="product-info-stock-sku">
                <div className="product attribute sku">
                  <strong className="type">Category</strong>
                  <div className="value" itemprop="sku">
                    {category ? category.name : ""}
                  </div>
                </div>
              </div>
              <div className="product attribute overview">
                <div className="value" itemprop="description">
                  <p>{brief_description}</p>
                </div>
              </div>
              {detail?.variations?.length > 0 ? (
                <div className="row mb-2">
                  <div className="col-6">
                    <label className="mt-2">Variations</label>
                    <ReactSelect
                      options={optionVariants}
                      styles={customStyles}
                      onChange={(e) => {
                        const selected = e.value;
                        const selectedVariation = variants.find(
                          (variation) => variation?.id === selected
                        );
                        const selectedVariationImage =
                          detail?.variation_image.find(
                            (variation) => variation?.variant === selected
                          );
                        setSelectedVariantImage(selectedVariationImage);

                        setVariationImage(`..${selectedVariationImage?.image}`);

                        setSelectedVariants(selectedVariation);
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="product-add-form">
                  <div id="product_addtocart_form">
                    <input type="hidden" name="product" value="11" />

                    <div className="box-tocart">
                      <div className="fieldset">
                        <div className="field qty up-down flex-layout no-wrap">
                          <div className="control">
                            <input
                              type="number"
                              name="qty"
                              maxlength={track_qty ? stock_qty : 99999}
                              value={new_qty}
                              onChange={(e) => setNewQty(e.target.value)}
                              onKeyUp={(e) => {
                                checkPriceSlab(new_qty);
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
                              onClick={() => {
                                setNewQty(new_qty + 1);
                                checkPriceSlab(new_qty);
                              }}
                              className="qty-up-fixed-onclick qty-up"
                            >
                              <i className="fas fa-chevron-up"></i>
                            </div>
                            <div
                              onClick={() => {
                                setNewQty(new_qty > 1 ? new_qty - 1 : new_qty);
                                checkPriceSlab(new_qty);
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
                                product_id: detail.id,
                                qty: "",
                                new_qty: new_qty,
                                ...getPriceList(),
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
              )}
              {selectedVariants ? (
                <div id="product_addtocart_form">
                  <input type="hidden" name="product" value="11" />

                  <div className="box-tocart">
                    <div className="fieldset">
                      <div className="field qty up-down flex-layout no-wrap">
                        <div className="control">
                          <input
                            type="number"
                            name="qty"
                            maxlength={track_qty ? stock_qty : 99999}
                            value={new_qty}
                            onChange={(e) => setNewQty(e.target.value)}
                            onKeyUp={(e) => {
                              checkPriceSlab(new_qty);
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
                            onClick={() => {
                              setNewQty(new_qty + 1);
                              checkPriceSlab(new_qty);
                            }}
                            className="qty-up-fixed-onclick qty-up"
                          >
                            <i className="fas fa-chevron-up"></i>
                          </div>
                          <div
                            onClick={() => {
                              setNewQty(new_qty > 1 ? new_qty - 1 : new_qty);
                              checkPriceSlab(new_qty);
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
                              product_id: detail.id,
                              qty: "",
                              variant_id: selectedVariants?.id,
                              new_qty: new_qty,
                              ...getPriceList(),
                            })
                          }
                        >
                          <span>Add to Cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
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

                  <div
                    className="action towishlist"
                    onClick={() => {
                      {
                        selectedVariants
                          ? fetchPriceSlabs(detail.id, 1, selectedVariants?.id)
                          : fetchPriceSlabs(detail.id, 1);
                      }
                      // fetchPriceSlabs(detail.id, 1);
                      setShowModal(true);
                    }}
                    style={{
                      color: "#bdbdbd",
                    }}
                  >
                    <i className="fas fa-list-alt"></i>
                    <span>View Price Level</span>
                  </div>
                </div>
              </div>
              <div className="product_color">
                <h5 className="colors">
                  Colors:
                  {colors.map((color, index) => {
                    const styling = color.color;
                    return (
                      <span
                        className="color"
                        style={{
                          background: styling,
                        }}
                        data-toggle="tooltip"
                        key={index}
                      ></span>
                    );
                  })}
                </h5>
              </div>
            </div>
          </div>

          {detail?.variations?.length > 0 ? (
            <>
              <table className="table table-bordered table-striped table-hover">
                <tr>
                  <th>#</th>
                  <th></th>
                  <th>SKU</th>
                  <th>Price</th>
                  <th>Stock Quantity</th>
                </tr>
                <tbody>
                  {detail?.variations.map((variant, index) =>
                    variant?.active !== false ? (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{variant?.value?.value}</td>
                        <td>{variant?.sku}</td>
                        <td>
                          {detail?.price_currency +
                            " " +
                            variant?.selling_price.toString()}
                        </td>
                        <td>{variant?.stock_quantity}</td>
                      </tr>
                    ) : null
                  )}{" "}
                </tbody>
              </table>
            </>
          ) : null}

          <div className="product info detailed">
            <div className="product data items">
              <div className="data item title">
                <div className="data switch">Details</div>
              </div>
              <div className="data item content">{description}</div>
            </div>
          </div>

          <div className="section block related">
            <div
              className="block-content content"
              aria-labelledby="block-related-heading"
            >
              <RelatedItemsRow
                products={related_products}
                addProductToCart={addProductToCart}
              />
            </div>
          </div>
        </div>
      </div>
      <PriceSlabModal
        show={showModal}
        handleModal={() => setShowModal(!showModal)}
        product_slabs={product_slabs}
        price_slab={price_slab}
        updatePriceSlab={updatePriceSlab}
      />
      <ProductImageModal
        open={imagesModal}
        handleClose={() => setImagesModal(!imagesModal)}
        currentImage={currentImage}
        images={images}
      />
    </div>
  );
}
