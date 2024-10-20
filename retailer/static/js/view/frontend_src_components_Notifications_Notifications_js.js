"use strict";
(self["webpackChunkbiz_app"] = self["webpackChunkbiz_app"] || []).push([["frontend_src_components_Notifications_Notifications_js"],{

/***/ "./frontend/src/components/Notifications/AddNotification.js":
/*!******************************************************************!*\
  !*** ./frontend/src/components/Notifications/AddNotification.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddNotification)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _redux_Actions_Offers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/Actions/Offers */ "./frontend/src/redux/Actions/Offers.js");
/* harmony import */ var _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/Actions/Products */ "./frontend/src/redux/Actions/Products.js");
/* harmony import */ var _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/Actions/Retailer */ "./frontend/src/redux/Actions/Retailer.js");
/* harmony import */ var _utils_ImageCompress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/ImageCompress */ "./frontend/src/utils/ImageCompress.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
/* harmony import */ var _widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/CustomBreadCrumbs */ "./frontend/src/widgets/CustomBreadCrumbs.js");
/* harmony import */ var _widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widgets/CustomAsyncPagination */ "./frontend/src/widgets/CustomAsyncPagination.js");
/* harmony import */ var _widgets_CustomAsyncPaginationAdditions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../widgets/CustomAsyncPaginationAdditions */ "./frontend/src/widgets/CustomAsyncPaginationAdditions.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function AddNotification(props) {
  var addMobileNotification = props.addMobileNotification,
      changePage = props.changePage;
  var view_types = ["Notification", "Product", "Offer"];
  var send_types = [{
    label: "All",
    value: "All"
  }, {
    label: "Retailer",
    value: "Retailer"
  }, {
    label: "SalesPeople",
    value: "SalesPeople"
  }];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      display_text = _useState4[0],
      setDisplayText = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      compressedImage = _useState6[0],
      setCompressedImage = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("../static/images/add_image.png"),
      _useState8 = _slicedToArray(_useState7, 2),
      image = _useState8[0],
      setImage = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState10 = _slicedToArray(_useState9, 2),
      detail = _useState10[0],
      setDetail = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState12 = _slicedToArray(_useState11, 2),
      show_from = _useState12[0],
      setShoWFrom = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState14 = _slicedToArray(_useState13, 2),
      show_to = _useState14[0],
      setShowTo = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState16 = _slicedToArray(_useState15, 2),
      region = _useState16[0],
      setRegion = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState18 = _slicedToArray(_useState17, 2),
      city = _useState18[0],
      setCity = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState20 = _slicedToArray(_useState19, 2),
      area = _useState20[0],
      setArea = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Notification"),
      _useState22 = _slicedToArray(_useState21, 2),
      status = _useState22[0],
      setStatus = _useState22[1];

  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState24 = _slicedToArray(_useState23, 2),
      product = _useState24[0],
      setProduct = _useState24[1];

  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState26 = _slicedToArray(_useState25, 2),
      offer = _useState26[0],
      setOffer = _useState26[1];

  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState28 = _slicedToArray(_useState27, 2),
      fileInput = _useState28[0],
      setFileInput = _useState28[1];

  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState30 = _slicedToArray(_useState29, 2),
      isError = _useState30[0],
      setIsError = _useState30[1];

  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState32 = _slicedToArray(_useState31, 2),
      responseMessage = _useState32[0],
      setResponseMessage = _useState32[1];

  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState34 = _slicedToArray(_useState33, 2),
      city_key = _useState34[0],
      setCityKey = _useState34[1];

  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      _useState36 = _slicedToArray(_useState35, 2),
      area_key = _useState36[0],
      setAreaKey = _useState36[1];

  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(send_types[0]),
      _useState38 = _slicedToArray(_useState37, 2),
      select_type = _useState38[0],
      setSelectType = _useState38[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var key = Math.random();
    setCityKey(key);
    setAreaKey(key + 10);
  }, []);
  var status_class = status == "Notification" ? "col-lg-12 col-md-12 col-sm-12 col-xs-12" : "col-lg-6 col-md-12 col-sm-12 col-xs-12";

  function fileSelectorHandler(e) {
    var fileImage = e.target.files[0];

    if (!fileImage) {
      return;
    }

    var viewImage = URL.createObjectURL(fileImage);
    setImage(viewImage);
    compressImage(fileImage);
  }

  function compressImage(fileImage) {
    (0,_utils_ImageCompress__WEBPACK_IMPORTED_MODULE_4__["default"])(fileImage).then(function (compressImage) {
      setCompressedImage(compressImage);
    })["catch"](function (error) {
      return console.log(error);
    });
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
        var formData = new FormData();
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
        formData.append("select_type", select_type.value);

        if (compressedImage) {
          formData.append("photo", compressedImage);
        }

        addMobileNotification(formData);
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between ml-2 mr-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Add Notification")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_6__["default"], {
    prevPropsName: "Notifications",
    propsName: "Add Notification",
    changePage: changePage
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "add_notification_img",
    onClick: function onClick() {
      return fileInput.click();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: image,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "image_input",
    type: "file",
    accept: "image/*",
    onChange: function onChange(e) {
      return fileSelectorHandler(e);
    },
    ref: function ref(fileInput) {
      return setFileInput(fileInput);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Notification Name*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please add notification name",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    required: true,
    autoFocus: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Display text*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please add display text",
    value: display_text,
    onChange: function onChange(e) {
      return setDisplayText(e.target.value);
    },
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: status_class
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Notification type*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    className: "form-control",
    value: status,
    onChange: function onChange(e) {
      setStatus(e.target.value);

      if (e.target.value == "Product") {
        setOffer("");
      } else if (e.target.value == "Offer") {
        setProduct("");
      } else {
        setOffer("");
        setProduct("");
      }
    },
    required: true
  }, view_types.map(function (type, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: index,
      value: type
    }, type);
  }))), status == "Product" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Product*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isMulti: false,
    value: product,
    setValue: function setValue(value) {
      return setProduct(value);
    },
    fetchData: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_2__.fetchSelectProduct,
    closeMenuOnSelect: true
  })) : status == "Offer" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Offer*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isMulti: false,
    value: offer,
    setValue: function setValue(value) {
      return setOffer(value);
    },
    fetchData: _redux_Actions_Offers__WEBPACK_IMPORTED_MODULE_1__.fetchSelectOffers,
    closeMenuOnSelect: true
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Show From*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "date",
    className: "form-control",
    placeholder: "Please input show from date",
    value: show_from,
    onChange: function onChange(e) {
      return setShoWFrom(e.target.value);
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Show To*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "date",
    className: "form-control",
    placeholder: "Please input show to date",
    value: show_to,
    onChange: function onChange(e) {
      return setShowTo(e.target.value);
    },
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Receivers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: select_type,
    onChange: function onChange(value) {
      return setSelectType(value);
    },
    closeMenuOnSelect: true,
    options: send_types
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Display Region"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isMulti: false,
    value: region,
    setValue: function setValue(value) {
      setRegion(value);
      setCity("");
      setCityKey(Math.random());
      setArea("");
    },
    fetchData: _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_3__.fetchSelectRetailRegions,
    closeMenuOnSelect: true
  }))), region ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: city ? "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group" : "col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Display City"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPaginationAdditions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isMulti: false,
    value: city,
    setValue: function setValue(value) {
      setCity(value);
      setAreaKey(Math.random() + 10);
      setArea("");
    },
    fetchData: _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_3__.fetchSelectCity,
    closeMenuOnSelect: true,
    additional: {
      page: 1,
      region: region ? region.value.id : ""
    },
    key: city_key
  })), city ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Display Area"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPaginationAdditions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isMulti: false,
    value: area,
    setValue: function setValue(value) {
      return setArea(value);
    },
    fetchData: _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_3__.fetchSelectArea,
    closeMenuOnSelect: true,
    additional: {
      page: 1,
      city: city.value.id
    },
    key: area_key
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Details*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
    type: "text",
    rows: "4",
    className: "form-control",
    placeholder: "Please add notification detail",
    value: detail,
    onChange: function onChange(e) {
      return setDetail(e.target.value);
    },
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      return uploadNotification();
    },
    className: "btn btn-primary btn-lg mt-5 mr-5 mb-2"
  }, "Add Notificaiton"))))));
}

/***/ }),

/***/ "./frontend/src/components/Notifications/EditNotifcation.js":
/*!******************************************************************!*\
  !*** ./frontend/src/components/Notifications/EditNotifcation.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditNotifcation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _redux_Actions_Offers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/Actions/Offers */ "./frontend/src/redux/Actions/Offers.js");
/* harmony import */ var _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/Actions/Products */ "./frontend/src/redux/Actions/Products.js");
/* harmony import */ var _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/Actions/Retailer */ "./frontend/src/redux/Actions/Retailer.js");
/* harmony import */ var _utils_ImageCompress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/ImageCompress */ "./frontend/src/utils/ImageCompress.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
/* harmony import */ var _widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/CustomBreadCrumbs */ "./frontend/src/widgets/CustomBreadCrumbs.js");
/* harmony import */ var _widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widgets/CustomAsyncPagination */ "./frontend/src/widgets/CustomAsyncPagination.js");
/* harmony import */ var _widgets_CustomAsyncPaginationAdditions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../widgets/CustomAsyncPaginationAdditions */ "./frontend/src/widgets/CustomAsyncPaginationAdditions.js");
/* harmony import */ var _utils_FormatInputDate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/FormatInputDate */ "./frontend/src/utils/FormatInputDate.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function EditNotifcation(props) {
  var updateMobileNotification = props.updateMobileNotification,
      changePage = props.changePage,
      notification = props.notification;
  var view_types = ["Notification", "Product", "Offer"];
  var send_types = [{
    label: "All",
    value: "All"
  }, {
    label: "Retailer",
    value: "Retailer"
  }, {
    label: "SalesPeople",
    value: "SalesPeople"
  }];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      display_text = _useState4[0],
      setDisplayText = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      compressedImage = _useState6[0],
      setCompressedImage = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("../static/images/add_image.png"),
      _useState8 = _slicedToArray(_useState7, 2),
      image = _useState8[0],
      setImage = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState10 = _slicedToArray(_useState9, 2),
      detail = _useState10[0],
      setDetail = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState12 = _slicedToArray(_useState11, 2),
      show_from = _useState12[0],
      setShoWFrom = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState14 = _slicedToArray(_useState13, 2),
      show_to = _useState14[0],
      setShowTo = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState16 = _slicedToArray(_useState15, 2),
      region = _useState16[0],
      setRegion = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState18 = _slicedToArray(_useState17, 2),
      city = _useState18[0],
      setCity = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState20 = _slicedToArray(_useState19, 2),
      area = _useState20[0],
      setArea = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Notification"),
      _useState22 = _slicedToArray(_useState21, 2),
      status = _useState22[0],
      setStatus = _useState22[1];

  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState24 = _slicedToArray(_useState23, 2),
      product = _useState24[0],
      setProduct = _useState24[1];

  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState26 = _slicedToArray(_useState25, 2),
      offer = _useState26[0],
      setOffer = _useState26[1];

  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState28 = _slicedToArray(_useState27, 2),
      fileInput = _useState28[0],
      setFileInput = _useState28[1];

  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState30 = _slicedToArray(_useState29, 2),
      isError = _useState30[0],
      setIsError = _useState30[1];

  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState32 = _slicedToArray(_useState31, 2),
      responseMessage = _useState32[0],
      setResponseMessage = _useState32[1];

  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState34 = _slicedToArray(_useState33, 2),
      city_key = _useState34[0],
      setCityKey = _useState34[1];

  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      _useState36 = _slicedToArray(_useState35, 2),
      area_key = _useState36[0],
      setAreaKey = _useState36[1];

  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(send_types[0]),
      _useState38 = _slicedToArray(_useState37, 2),
      select_type = _useState38[0],
      setSelectType = _useState38[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (notification) {
      var viewProduct = notification.product ? {
        value: notification.product,
        label: notification.product.name
      } : "";
      var viewOffers = notification.offer ? {
        value: notification.offer,
        label: notification.offer.name
      } : "";
      var viewRegion = notification.region ? {
        value: notification.region,
        label: notification.region.name
      } : "";
      var viewCity = notification.city ? {
        value: notification.city,
        label: notification.city.name
      } : "";
      var viewArea = notification.area ? {
        value: notification.area,
        label: notification.area.name
      } : "";
      var view_select_type = send_types.filter(function (v_item) {
        return v_item.value == notification.send_to;
      });

      if (view_select_type[0]) {
        setSelectType(view_select_type[0]);
      }

      setName(notification.name);
      setDisplayText(notification.display_text);
      setDetail(notification.detail);
      setShoWFrom((0,_utils_FormatInputDate__WEBPACK_IMPORTED_MODULE_9__["default"])(notification.show_from));
      setShowTo((0,_utils_FormatInputDate__WEBPACK_IMPORTED_MODULE_9__["default"])(notification.show_to));
      setImage(notification.pic ? notification.pic : "../static/images/add_image.png");
      setStatus(notification.status);
      setProduct(viewProduct);
      setOffer(viewOffers);
      setRegion(viewRegion);
      setCity(viewCity);
      setArea(viewArea);
    }

    var key = Math.random();
    setCityKey(key);
    setAreaKey(key + 10);
  }, [notification]);
  var status_class = status == "Notification" ? "col-lg-12 col-md-12 col-sm-12 col-xs-12" : "col-lg-6 col-md-12 col-sm-12 col-xs-12";

  function fileSelectorHandler(e) {
    var fileImage = e.target.files[0];

    if (!fileImage) {
      return;
    }

    var viewImage = URL.createObjectURL(fileImage);
    setImage(viewImage);
    compressImage(fileImage);
  }

  function compressImage(fileImage) {
    (0,_utils_ImageCompress__WEBPACK_IMPORTED_MODULE_4__["default"])(fileImage).then(function (compressImage) {
      setCompressedImage(compressImage);
    })["catch"](function (error) {
      return console.log(error);
    });
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
        var formData = new FormData();
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between ml-2 mr-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Edit Notification")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_6__["default"], {
    prevPropsName: "Notifications",
    propsName: "Edit Notification",
    changePage: changePage
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "add_notification_img",
    onClick: function onClick() {
      return fileInput.click();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: image,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "image_input",
    type: "file",
    accept: "image/*",
    onChange: function onChange(e) {
      return fileSelectorHandler(e);
    },
    ref: function ref(fileInput) {
      return setFileInput(fileInput);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Notification Name*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please add notification name",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    required: true,
    autoFocus: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Display text*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please add display text",
    value: display_text,
    onChange: function onChange(e) {
      return setDisplayText(e.target.value);
    },
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: status_class
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Notification type*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    className: "form-control",
    value: status,
    onChange: function onChange(e) {
      setStatus(e.target.value);

      if (e.target.value == "Product") {
        setOffer("");
      } else if (e.target.value == "Offer") {
        setProduct("");
      } else {
        setOffer("");
        setProduct("");
      }
    },
    required: true
  }, view_types.map(function (type, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: index,
      value: type
    }, type);
  }))), status == "Product" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Product*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isMulti: false,
    value: product,
    setValue: function setValue(value) {
      return setProduct(value);
    },
    fetchData: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_2__.fetchSelectProduct,
    closeMenuOnSelect: true
  })) : status == "Offer" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Offer*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isMulti: false,
    value: offer,
    setValue: function setValue(value) {
      return setOffer(value);
    },
    fetchData: _redux_Actions_Offers__WEBPACK_IMPORTED_MODULE_1__.fetchSelectOffers,
    closeMenuOnSelect: true
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Show From*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "date",
    className: "form-control",
    placeholder: "Please input show from date",
    value: show_from,
    onChange: function onChange(e) {
      return setShoWFrom(e.target.value);
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Show To*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "date",
    className: "form-control",
    placeholder: "Please input show to date",
    value: show_to,
    onChange: function onChange(e) {
      return setShowTo(e.target.value);
    },
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Receivers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: select_type,
    onChange: function onChange(value) {
      return setSelectType(value);
    },
    closeMenuOnSelect: true,
    options: send_types
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Display Region"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isMulti: false,
    value: region,
    setValue: function setValue(value) {
      setRegion(value);
      setCity("");
      setCityKey(Math.random());
      setArea("");
    },
    fetchData: _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_3__.fetchSelectRetailRegions,
    closeMenuOnSelect: true
  }))), region ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: city ? "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group" : "col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Display City"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPaginationAdditions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isMulti: false,
    value: city,
    setValue: function setValue(value) {
      setCity(value);
      setAreaKey(Math.random() + 10);
      setArea("");
    },
    fetchData: _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_3__.fetchSelectCity,
    closeMenuOnSelect: true,
    additional: {
      page: 1,
      region: region.value.id
    },
    key: city_key
  })), city ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Display Area"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPaginationAdditions__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isMulti: false,
    value: area,
    setValue: function setValue(value) {
      return setArea(value);
    },
    fetchData: _redux_Actions_Retailer__WEBPACK_IMPORTED_MODULE_3__.fetchSelectArea,
    closeMenuOnSelect: true,
    additional: {
      page: 1,
      city: city.value.id
    },
    key: area_key
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Details*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
    type: "text",
    rows: "4",
    className: "form-control",
    placeholder: "Please add notification detail",
    value: detail,
    onChange: function onChange(e) {
      return setDetail(e.target.value);
    },
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      return uploadNotification();
    },
    className: "btn btn-primary btn-lg mt-5 mr-5 mb-2"
  }, "Save Notificaiton"))))));
}

/***/ }),

/***/ "./frontend/src/components/Notifications/NotificationRow.js":
/*!******************************************************************!*\
  !*** ./frontend/src/components/Notifications/NotificationRow.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotificationRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function NotificationRow(props) {
  var notification = props.notification,
      deleteMobileNotification = props.deleteMobileNotification,
      editNotification = props.editNotification;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "border-bottom p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "notification_img mr-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: notification.pic ? "..".concat(notification.pic) : "",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, notification.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, notification.detail))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      return editNotification(notification);
    },
    className: "btn btn-primary mr-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-edit text-white"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      return deleteMobileNotification(notification.id);
    },
    className: "btn btn-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-times text-white"
  })))));
}

/***/ }),

/***/ "./frontend/src/components/Notifications/Notifications.js":
/*!****************************************************************!*\
  !*** ./frontend/src/components/Notifications/Notifications.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_Actions_Notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/Actions/Notification */ "./frontend/src/redux/Actions/Notification.js");
/* harmony import */ var _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/Actions/Products */ "./frontend/src/redux/Actions/Products.js");
/* harmony import */ var _redux_Actions_Offers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/Actions/Offers */ "./frontend/src/redux/Actions/Offers.js");
/* harmony import */ var _utils_PermissionHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/PermissionHandler */ "./frontend/src/utils/PermissionHandler.js");
/* harmony import */ var _widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/CustomSnackBar */ "./frontend/src/widgets/CustomSnackBar.js");
/* harmony import */ var _widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widgets/SimpleBackDrop */ "./frontend/src/widgets/SimpleBackDrop.js");
/* harmony import */ var _ViewNotifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ViewNotifications */ "./frontend/src/components/Notifications/ViewNotifications.js");
/* harmony import */ var _AddNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AddNotification */ "./frontend/src/components/Notifications/AddNotification.js");
/* harmony import */ var _EditNotifcation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EditNotifcation */ "./frontend/src/components/Notifications/EditNotifcation.js");
/* harmony import */ var _Notification_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Notification.css */ "./frontend/src/components/Notifications/Notification.css");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }














var Notifications = /*#__PURE__*/function (_Component) {
  _inherits(Notifications, _Component);

  var _super = _createSuper(Notifications);

  function Notifications(props) {
    var _this;

    _classCallCheck(this, Notifications);

    _this = _super.call(this, props);
    _this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: {
        vertical: "top",
        horizontal: "center"
      },
      currentPage: 1,
      viewNotification: null
    };
    _this.closeSnackBar = _this.closeSnackBar.bind(_assertThisInitialized(_this));
    _this.setResponse = _this.setResponse.bind(_assertThisInitialized(_this));
    _this.changePage = _this.changePage.bind(_assertThisInitialized(_this));
    _this.vieweditNotification = _this.vieweditNotification.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Notifications, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          error = _this$props.error,
          message = _this$props.message;
      if (error !== prevProps.error) this.setResponse(error);else if (message !== prevProps.message) {
        if (message.status == 201) {
          this.setState({
            currentPage: 1
          });
        }

        this.setResponse(message);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchMobileNotifications(1);
    }
  }, {
    key: "changePage",
    value: function changePage(page) {
      this.setState({
        currentPage: page
      });
    }
  }, {
    key: "vieweditNotification",
    value: function vieweditNotification(notification) {
      this.setState({
        viewNotification: notification,
        currentPage: 3
      });
    }
  }, {
    key: "setResponse",
    value: function setResponse(response) {
      var value = Object.keys(response.responseMessage)[0];
      var responseMessage = response.responseMessage[value];
      if (responseMessage instanceof Array) this.setState({
        responseMessage: responseMessage[0],
        isError: response.isError,
        openSnackBar: true
      });else this.setState({
        responseMessage: responseMessage,
        isError: response.isError,
        openSnackBar: true
      });
    }
  }, {
    key: "closeSnackBar",
    value: function closeSnackBar() {
      this.setState({
        openSnackBar: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          notificationsReducer = _this$props2.notificationsReducer,
          addMobileNotification = _this$props2.addMobileNotification,
          updateMobileNotification = _this$props2.updateMobileNotification,
          deleteMobileNotification = _this$props2.deleteMobileNotification,
          auth = _this$props2.auth,
          offersReducer = _this$props2.offersReducer,
          productsReducer = _this$props2.productsReducer,
          fetchProducts = _this$props2.fetchProducts,
          fetchPriceOffers = _this$props2.fetchPriceOffers;
      var isLoading = notificationsReducer.isLoading,
          notifications = notificationsReducer.notifications;
      var _this$state = this.state,
          openSnackBar = _this$state.openSnackBar,
          isError = _this$state.isError,
          responseMessage = _this$state.responseMessage,
          snackPosition = _this$state.snackPosition,
          currentPage = _this$state.currentPage,
          viewNotification = _this$state.viewNotification;
      var snackValues = {
        isError: isError,
        responseMessage: responseMessage,
        openSnackBar: openSnackBar,
        snackPosition: snackPosition
      };

      if (!auth.group.permission.can_manage_mobile) {
        return (0,_utils_PermissionHandler__WEBPACK_IMPORTED_MODULE_5__["default"])(this.props.auth.group.permission);
      }

      switch (currentPage) {
        case 1:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_7__["default"], {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewNotifications__WEBPACK_IMPORTED_MODULE_8__["default"], {
            notifications: notifications,
            changePage: this.changePage,
            editNotification: this.vieweditNotification,
            deleteMobileNotification: deleteMobileNotification
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));

        case 2:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_7__["default"], {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddNotification__WEBPACK_IMPORTED_MODULE_9__["default"], {
            changePage: this.changePage,
            addMobileNotification: addMobileNotification
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));

        case 3:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_7__["default"], {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditNotifcation__WEBPACK_IMPORTED_MODULE_10__["default"], {
            changePage: this.changePage,
            updateMobileNotification: updateMobileNotification,
            notification: viewNotification
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));

        default:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_7__["default"], {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewNotifications__WEBPACK_IMPORTED_MODULE_8__["default"], {
            notifications: notifications,
            changePage: this.changePage,
            updateMobileNotification: updateMobileNotification,
            deleteMobileNotification: deleteMobileNotification,
            products: productsReducer.products,
            offers: offersReducer.offers,
            fetchProducts: fetchProducts,
            fetchPriceOffers: fetchPriceOffers
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));
      }
    }
  }]);

  return Notifications;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.authReducer,
    notificationsReducer: state.notificationsReducer,
    productsReducer: state.productsReducer,
    offersReducer: state.offersReducer,
    error: state.errorsReducer,
    message: state.messagesReducer
  };
};
/** Distributors notifications view */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchMobileNotifications: _redux_Actions_Notification__WEBPACK_IMPORTED_MODULE_2__.fetchMobileNotifications,
  addMobileNotification: _redux_Actions_Notification__WEBPACK_IMPORTED_MODULE_2__.addMobileNotification,
  updateMobileNotification: _redux_Actions_Notification__WEBPACK_IMPORTED_MODULE_2__.updateMobileNotification,
  deleteMobileNotification: _redux_Actions_Notification__WEBPACK_IMPORTED_MODULE_2__.deleteMobileNotification,
  fetchProducts: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_3__.fetchProducts,
  fetchPriceOffers: _redux_Actions_Offers__WEBPACK_IMPORTED_MODULE_4__.fetchPriceOffers
})(Notifications));

/***/ }),

/***/ "./frontend/src/components/Notifications/ViewNotifications.js":
/*!********************************************************************!*\
  !*** ./frontend/src/components/Notifications/ViewNotifications.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewNotifications)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _NotificationRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationRow */ "./frontend/src/components/Notifications/NotificationRow.js");


function ViewNotifications(props) {
  var notifications = props.notifications,
      changePage = props.changePage,
      editNotification = props.editNotification,
      deleteMobileNotification = props.deleteMobileNotification;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Notifications"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    onClick: function onClick() {
      return changePage(2);
    },
    className: "fas fa-plus btn_type"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, notifications.map(function (notification, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NotificationRow__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      notification: notification,
      editNotification: editNotification,
      deleteMobileNotification: deleteMobileNotification
    });
  })))));
}

/***/ }),

/***/ "./frontend/src/redux/Actions/Offers.js":
/*!**********************************************!*\
  !*** ./frontend/src/redux/Actions/Offers.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPriceOffer": () => (/* binding */ addPriceOffer),
/* harmony export */   "deleteOffer": () => (/* binding */ deleteOffer),
/* harmony export */   "fetchPriceOffers": () => (/* binding */ fetchPriceOffers),
/* harmony export */   "fetchSelectOffers": () => (/* binding */ fetchSelectOffers),
/* harmony export */   "updateOffers": () => (/* binding */ updateOffers)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/TokenConfig */ "./frontend/src/utils/TokenConfig.js");
/* harmony import */ var _utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/TokenMultiPartConfig */ "./frontend/src/utils/TokenMultiPartConfig.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Messages */ "./frontend/src/redux/Actions/Messages.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./frontend/src/redux/Actions/types.js");





var fetchPriceOffers = function fetchPriceOffers(page, product, query, rows) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.OFFERS_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__["default"])(getState);
    var url = "../retailer/api/priceOffer?page=".concat(page);

    if (product) {
      url = url + "&product_id=".concat(product);
    }

    if (query) {
      url = url + "&query=".concat(query);
    }

    if (rows) {
      url = url + "&rows=".concat(rows);
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.OFFERS_LOADED,
        payload: {
          offers: res.data.price_offers,
          currentPage: page,
          lastPage: res.data.last_page
        }
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.OFFERS_ERROR
      });
    });
  };
};
function fetchSelectOffers(search, loadOptions, _ref) {
  var page = _ref.page;
  var token = localStorage.getItem("token");
  var config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  if (token) {
    config.headers["Authorization"] = "Token ".concat(token);
  }

  var url = search ? "../retailer/api/priceOffer/?page=".concat(page, "&query=").concat(search) : "../retailer/api/priceOffer/?page=".concat(page);
  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      var viewLastPage = false;

      if (res.data.last_page > page) {
        viewLastPage = true;
      }

      var view_offers = res.data.price_offers.map(function (item) {
        return {
          value: item,
          label: item.name
        };
      });
      resolve({
        options: view_offers,
        hasMore: viewLastPage,
        additional: {
          page: page + 1
        }
      });
    })["catch"](function (error) {
      reject(error.response.data);
    });
  });
}
var addPriceOffer = function addPriceOffer(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.OFFERS_LOADING
    });
    var config = (0,_utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__["default"])(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("../retailer/api/priceOffer/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.OFFERS_ADD,
        payload: res.data
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.DASHBOARD_PROGRESS,
        payload: res.data.view_complete
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.OFFERS_ERROR
      });
    });
  };
};
var updateOffers = function updateOffers(body) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.OFFERS_LOADING
    });
    var config = (0,_utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__["default"])(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().put("../retailer/api/priceOffer/", body, config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.OFFERS_EDIT,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.OFFERS_ERROR
      });
    });
  };
};
var deleteOffer = function deleteOffer(id) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__.OFFERS_LOADING
    });
    var config = (0,_utils_TokenMultiPartConfig__WEBPACK_IMPORTED_MODULE_2__["default"])(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]("../retailer/api/priceOffer?offer_id=".concat(id), config).then(function (res) {
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createSuccessMessage)(res.data, res.status));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.OFFERS_DELETE,
        payload: id
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__.OFFERS_ERROR
      });
    });
  };
};

/***/ }),

/***/ "./frontend/src/utils/FormatInputDate.js":
/*!***********************************************!*\
  !*** ./frontend/src/utils/FormatInputDate.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatInputDate)
/* harmony export */ });
function formatInputDate(mdate) {
  var date = new Date(mdate);
  var day = date.getDate() < 10 ? "0".concat(date.getDate()) : date.getDate();
  var monthIndex = date.getMonth() + 1;
  var month = monthIndex < 10 ? "0".concat(monthIndex) : monthIndex;
  var year = date.getFullYear();
  return year + "-" + month + "-" + day;
}

/***/ }),

/***/ "./frontend/src/utils/ImageCompress.js":
/*!*********************************************!*\
  !*** ./frontend/src/utils/ImageCompress.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageCompress)
/* harmony export */ });
/* harmony import */ var _RandomString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RandomString */ "./frontend/src/utils/RandomString.js");
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-file-resizer */ "./node_modules/react-image-file-resizer/build/index.js");
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_file_resizer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var compressorjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compressorjs */ "./node_modules/compressorjs/dist/compressor.js");
/* harmony import */ var compressorjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compressorjs__WEBPACK_IMPORTED_MODULE_2__);



function ImageCompress(imageFile) {
  // return new Promise((resolve, reject) => {
  //   Resizer.imageFileResizer(
  //     imageFile,
  //     300,
  //     300,
  //     "PNG",
  //     100,
  //     0,
  //     (uri) => {
  //       let filename = RandomString(10);
  //       var file = new File([uri], `${filename}.png`, {
  //         type: "image/png",
  //         lastModified: new Date().getTime(),
  //       });
  //       resolve(file);
  //     },
  //     "blob"
  //   );
  // });
  return new Promise(function (resolve, reject) {
    new (compressorjs__WEBPACK_IMPORTED_MODULE_2___default())(imageFile, {
      quality: 1,
      // height: 300,
      // width: 300,
      success: function success(result) {
        var filename = (0,_RandomString__WEBPACK_IMPORTED_MODULE_0__["default"])(10);
        var file = new File([result], "".concat(filename, ".png"), {
          type: "image/png",
          lastModified: new Date().getTime()
        });
        resolve(file);
      },
      error: function error(err) {
        reject(err);
      }
    });
  });
}

/***/ }),

/***/ "./frontend/src/utils/RandomString.js":
/*!********************************************!*\
  !*** ./frontend/src/utils/RandomString.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(length) {
  var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var result = "";

  for (var i = 0; i < length; i++) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }

  return result;
}

/***/ }),

/***/ "./frontend/src/widgets/CustomAsyncPagination.js":
/*!*******************************************************!*\
  !*** ./frontend/src/widgets/CustomAsyncPagination.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomAsyncPagination)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_select_async_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select-async-paginate */ "./node_modules/react-select-async-paginate/es/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function CustomAsyncPagination(props) {
  var value = props.value,
      setValue = props.setValue,
      fetchData = props.fetchData,
      isMulti = props.isMulti,
      closeMenuOnSelect = props.closeMenuOnSelect,
      isDisabled = props.isDisabled,
      isClearable = props.isClearable;
  var themeLight = "light";
  var body = document.getElementsByTagName("body")[0];
  var colourStyles = {
    control: function control(styles) {
      return _objectSpread(_objectSpread({}, styles), {}, {
        backgroundColor: body.classList.contains(themeLight) ? "#ffffff" : "#212529"
      });
    },
    menu: function menu(styles) {
      return _objectSpread(_objectSpread({}, styles), {}, {
        backgroundColor: body.classList.contains(themeLight) ? "#ffffff" : "#212529"
      });
    },
    option: function option(styles, _ref) {
      var isFocused = _ref.isFocused;
      return _objectSpread(_objectSpread({}, styles), {}, {
        backgroundColor: body.classList.contains(themeLight) ? isFocused ? "#f1f1f1" : "#ffffff" : isFocused ? "#f1f1f1" : "#212529"
      });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select_async_paginate__WEBPACK_IMPORTED_MODULE_1__.AsyncPaginate, {
    isMulti: isMulti,
    isClearable: isClearable,
    loadOptions: fetchData,
    value: value,
    onChange: setValue,
    additional: {
      page: 1
    },
    styles: colourStyles,
    closeMenuOnSelect: closeMenuOnSelect,
    key: Math.random(),
    isDisabled: isDisabled
  });
}

/***/ }),

/***/ "./frontend/src/widgets/CustomAsyncPaginationAdditions.js":
/*!****************************************************************!*\
  !*** ./frontend/src/widgets/CustomAsyncPaginationAdditions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomAsyncPaginationAdditions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_select_async_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select-async-paginate */ "./node_modules/react-select-async-paginate/es/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function CustomAsyncPaginationAdditions(props) {
  var value = props.value,
      setValue = props.setValue,
      fetchData = props.fetchData,
      isMulti = props.isMulti,
      closeMenuOnSelect = props.closeMenuOnSelect,
      additional = props.additional,
      key = props.key;
  var themeLight = "light";
  var body = document.getElementsByTagName("body")[0];
  var colourStyles = {
    control: function control(styles) {
      return _objectSpread(_objectSpread({}, styles), {}, {
        backgroundColor: body.classList.contains(themeLight) ? "#ffffff" : "#212529"
      });
    },
    menu: function menu(styles) {
      return _objectSpread(_objectSpread({}, styles), {}, {
        backgroundColor: body.classList.contains(themeLight) ? "#ffffff" : "#212529"
      });
    },
    option: function option(styles, _ref) {
      var isFocused = _ref.isFocused;
      return _objectSpread(_objectSpread({}, styles), {}, {
        backgroundColor: body.classList.contains(themeLight) ? isFocused ? "#f1f1f1" : "#ffffff" : isFocused ? "#f1f1f1" : "#212529"
      });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select_async_paginate__WEBPACK_IMPORTED_MODULE_1__.AsyncPaginate, {
    isMulti: isMulti,
    loadOptions: fetchData,
    value: value,
    onChange: setValue,
    additional: additional,
    styles: colourStyles,
    closeMenuOnSelect: closeMenuOnSelect,
    key: key
  });
}

/***/ }),

/***/ "./frontend/src/widgets/CustomBreadCrumbs.js":
/*!***************************************************!*\
  !*** ./frontend/src/widgets/CustomBreadCrumbs.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomBreadcrumbs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Breadcrumbs */ "./node_modules/@material-ui/core/esm/Breadcrumbs/Breadcrumbs.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/Link.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");






var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["default"])(function (theme) {
  return {
    link: {
      display: "flex"
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20
    }
  };
});
function CustomBreadcrumbs(props) {
  var classes = useStyles();
  var propsName = props.propsName,
      changePage = props.changePage,
      prevPropsName = props.prevPropsName;

  function handleClick(event) {
    event.preventDefault();
    changePage(1);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "aria-label": "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/",
    style: {
      color: "grey"
    },
    className: classes.link
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "initial",
    href: "/product",
    onClick: handleClick,
    className: "side_nav_item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, prevPropsName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "initial",
    className: "side_nav_item"
  }, propsName));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/Notifications/Notification.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/src/components/Notifications/Notification.css ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".notification_img {\n    height: 150px;\n    width: 150px;\n    border-radius: 20px;\n    overflow: hidden;\n}\n\n.notification_img img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n}\n\n.add_notification_img {\n    height: 150px;\n    width: 150px;\n    cursor: pointer;\n    margin-bottom: 5px;\n}\n\n.add_notification_img img {\n    height: 100%;\n    width: 100%;\n    object-fit: contain;\n}\n\n.notification-ui_dd-content {\n    margin-bottom: 30px;\n}\n\n.notification-list {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    padding: 20px;\n    margin-bottom: 7px;\n    -webkit-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);\n    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);\n}\n\n.notification-list--unread {\n    border-left: 2px solid #29b6f6;\n}\n\n.notification-list .notification-list_content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.notification-list .notification-list_content .notification-list_img img {\n    height: 50px;\n    width: 50px;\n    border-radius: 25px;\n    margin-right: 20px;\n}\n\n.notification-list .notification-list_content .notification-list_detail p {\n    margin-bottom: 5px;\n    line-height: 1.2;\n}\n\n.notification-list .notification-list_feature-img img {\n    height: 48px;\n    width: 48px;\n    border-radius: 5px;\n    margin-left: 20px;\n}\n\n.notificationDetail_img {\n    height: 100px;\n    width: 100px;\n    overflow: hidden;\n}\n\n.notificationDetail_img img {\n    max-height: 100%;\n    max-width: 100%;\n    object-fit: contain;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./frontend/src/components/Notifications/Notification.css":
/*!****************************************************************!*\
  !*** ./frontend/src/components/Notifications/Notification.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Notification_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./Notification.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/Notifications/Notification.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Notification_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Notification_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);