import React, { useState, useEffect } from "react";
import { fetchSelectOffers } from "../../redux/Actions/Offers";
import { fetchSelectProduct } from "../../redux/Actions/Products";
import {
  fetchSelectArea,
  fetchSelectCity,
  fetchSelectRetailRegions,
} from "../../redux/Actions/Retailer";
import ImageCompress from "../../utils/ImageCompress";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import CustomBreadcrumbs from "../../widgets/CustomBreadCrumbs";
import CustomAsyncPagination from "../../widgets/CustomAsyncPagination";
import CustomAsyncPaginationAdditions from "../../widgets/CustomAsyncPaginationAdditions";
import formatInputDate from "../../utils/FormatInputDate";
import Select from "react-select";

export default function EditNotifcation(props) {
  const { updateMobileNotification, changePage, notification } = props;

  const view_types = ["Notification", "Product", "Offer"];
  const send_types = [
    { label: "All", value: "All" },
    { label: "Retailer", value: "Retailer" },
    { label: "SalesPeople", value: "SalesPeople" },
  ];

  const [name, setName] = useState("");
  const [display_text, setDisplayText] = useState("");
  const [compressedImage, setCompressedImage] = useState(null);
  const [image, setImage] = useState("../static/images/add_image.png");
  const [detail, setDetail] = useState("");
  const [show_from, setShoWFrom] = useState("");
  const [show_to, setShowTo] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [status, setStatus] = useState("Notification");
  const [product, setProduct] = useState("");
  const [offer, setOffer] = useState("");
  const [fileInput, setFileInput] = useState(0);
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [city_key, setCityKey] = useState(0);
  const [area_key, setAreaKey] = useState(1);
  const [select_type, setSelectType] = useState(send_types[0]);

  useEffect(() => {
    if (notification) {
      const viewProduct = notification.product
        ? {
            value: notification.product,
            label: notification.product.name,
          }
        : "";
      const viewOffers = notification.offer
        ? {
            value: notification.offer,
            label: notification.offer.name,
          }
        : "";
      const viewRegion = notification.region
        ? {
            value: notification.region,
            label: notification.region.name,
          }
        : "";

      const viewCity = notification.city
        ? {
            value: notification.city,
            label: notification.city.name,
          }
        : "";
      const viewArea = notification.area
        ? {
            value: notification.area,
            label: notification.area.name,
          }
        : "";
      const view_select_type = send_types.filter(
        (v_item) => v_item.value == notification.send_to
      );
      if (view_select_type[0]) {
        setSelectType(view_select_type[0]);
      }
      setName(notification.name);
      setDisplayText(notification.display_text);
      setDetail(notification.detail);
      setShoWFrom(formatInputDate(notification.show_from));
      setShowTo(formatInputDate(notification.show_to));
      setImage(
        notification.pic ? notification.pic : "../static/images/add_image.png"
      );
      setStatus(notification.status);
      setProduct(viewProduct);
      setOffer(viewOffers);
      setRegion(viewRegion);
      setCity(viewCity);
      setArea(viewArea);
    }
    const key = Math.random();
    setCityKey(key);
    setAreaKey(key + 10);
  }, [notification]);

  const status_class =
    status == "Notification"
      ? "col-lg-12 col-md-12 col-sm-12 col-xs-12"
      : "col-lg-6 col-md-12 col-sm-12 col-xs-12";

  function fileSelectorHandler(e) {
    let fileImage = e.target.files[0];

    if (!fileImage) {
      return;
    }

    const viewImage = URL.createObjectURL(fileImage);
    setImage(viewImage);
    compressImage(fileImage);
  }

  function compressImage(fileImage) {
    ImageCompress(fileImage)
      .then((compressImage) => {
        setCompressedImage(compressImage);
      })
      .catch((error) => console.log(error));
  }

  function uploadNotification() {
    setIsError(null);
    setResponseMessage("");
    if (name && display_text && detail && show_from && show_to && status) {
      if (status == "Product" && !product) {
        setIsError(true);
        setResponseMessage("Please select banner product");
      } else if (status == "Offer" && !offer) {
        setIsError(true);
        setResponseMessage("Please select banner offer");
      } else {
        let formData = new FormData();
        formData.append("name", name);
        formData.append("display_text", display_text);
        formData.append("detail", detail);
        formData.append("show_from", show_from);
        formData.append("show_to", show_to);
        formData.append("product_id", product ? product.value.id : "");
        formData.append("offer_id", offer ? offer.value.id : "");
        formData.append("region_id", region ? region.value.id : "");
        formData.append("city_id", city ? city.value.id : "");
        formData.append("area_id", area ? area.value.id : "");
        formData.append("status", status);
        formData.append("id", notification.id);
        formData.append("select_type", select_type.value);
        if (compressedImage) {
          formData.append("photo", compressedImage);
        }
        updateMobileNotification(formData);
      }
    } else if (!status) {
      setIsError(true);
      setResponseMessage("Please select notification type");
    } else if (!name) {
      setIsError(true);
      setResponseMessage("Please input notification name");
    } else if (!display_text) {
      setIsError(true);
      setResponseMessage("Please input display text");
    } else if (!detail) {
      setIsError(true);
      setResponseMessage("Please input notification details");
    } else if (!show_from) {
      setIsError(true);
      setResponseMessage("Please input show from date");
    } else if (!show_to) {
      setIsError(true);
      setResponseMessage("Please input show to date");
    } else {
      setIsError(true);
      setResponseMessage("Please input all relevant fields");
    }
  }

  return (
    <div className="row justify-content-end">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="card">
          <div className="card-header">
            <div className="row justify-content-between ml-2 mr-2">
              <center>
                <h3>Edit Notification</h3>
              </center>

              <CustomBreadcrumbs
                prevPropsName="Notifications"
                propsName="Edit Notification"
                changePage={changePage}
              />
            </div>
          </div>
          <div className="card-content">
            <CustomAlertBar
              isError={isError}
              responseMessage={responseMessage}
            />

            <center>
              <div
                className="add_notification_img"
                onClick={() => fileInput.click()}
              >
                <img src={image} alt="" />
                <input
                  className="image_input"
                  type="file"
                  accept="image/*"
                  onChange={(e) => fileSelectorHandler(e)}
                  ref={(fileInput) => setFileInput(fileInput)}
                />
              </div>
            </center>
            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label>Notification Name*</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please add notification name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoFocus
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label>Display text*</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please add display text"
                  value={display_text}
                  onChange={(e) => setDisplayText(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row justify-content-between">
              <div className={status_class}>
                <label>Notification type*</label>

                <select
                  className="form-control"
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                    if (e.target.value == "Product") {
                      setOffer("");
                    } else if (e.target.value == "Offer") {
                      setProduct("");
                    } else {
                      setOffer("");
                      setProduct("");
                    }
                  }}
                  required
                >
                  {view_types.map((type, index) => {
                    return (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    );
                  })}
                </select>
              </div>
              {status == "Product" ? (
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                  <label>Select Product*</label>
                  <CustomAsyncPagination
                    isMulti={false}
                    value={product}
                    setValue={(value) => setProduct(value)}
                    fetchData={fetchSelectProduct}
                    closeMenuOnSelect={true}
                  />
                </div>
              ) : status == "Offer" ? (
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                  <label>Select Offer*</label>
                  <CustomAsyncPagination
                    isMulti={false}
                    value={offer}
                    setValue={(value) => setOffer(value)}
                    fetchData={fetchSelectOffers}
                    closeMenuOnSelect={true}
                  />
                </div>
              ) : (
                <div />
              )}
            </div>

            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label>Show From*</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Please input show from date"
                  value={show_from}
                  onChange={(e) => setShoWFrom(e.target.value)}
                  required
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label>Show To*</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Please input show to date"
                  value={show_to}
                  onChange={(e) => setShowTo(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label>Select Receivers</label>
                <Select
                  value={select_type}
                  onChange={(value) => setSelectType(value)}
                  closeMenuOnSelect={true}
                  options={send_types}
                />
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label>Select Display Region</label>
                <CustomAsyncPagination
                  isMulti={false}
                  value={region}
                  setValue={(value) => {
                    setRegion(value);
                    setCity("");
                    setCityKey(Math.random());
                    setArea("");
                  }}
                  fetchData={fetchSelectRetailRegions}
                  closeMenuOnSelect={true}
                />
              </div>
            </div>
            {region ? (
              <div className="row justify-content-between">
                <div
                  className={
                    city
                      ? "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
                      : "col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group"
                  }
                >
                  <label>Select Display City</label>
                  <CustomAsyncPaginationAdditions
                    isMulti={false}
                    value={city}
                    setValue={(value) => {
                      setCity(value);
                      setAreaKey(Math.random() + 10);
                      setArea("");
                    }}
                    fetchData={fetchSelectCity}
                    closeMenuOnSelect={true}
                    additional={{ page: 1, region: region.value.id }}
                    key={city_key}
                  />
                </div>
                {city ? (
                  <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                    <label>Select Display Area</label>
                    <CustomAsyncPaginationAdditions
                      isMulti={false}
                      value={area}
                      setValue={(value) => setArea(value)}
                      fetchData={fetchSelectArea}
                      closeMenuOnSelect={true}
                      additional={{ page: 1, city: city.value.id }}
                      key={area_key}
                    />
                  </div>
                ) : (
                  <div />
                )}
              </div>
            ) : (
              <div />
            )}
            <div className="row justify-content-between">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                <label>Details*</label>
                <textarea
                  type="text"
                  rows="4"
                  className="form-control"
                  placeholder="Please add notification detail"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row justify-content-end">
              <div
                onClick={() => uploadNotification()}
                className="btn btn-primary btn-lg mt-5 mr-5 mb-2"
              >
                Save Notificaiton
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
