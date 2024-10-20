"use strict";
(self["webpackChunkbiz_app"] = self["webpackChunkbiz_app"] || []).push([["frontend_src_components_Prices_PriceList_js"],{

/***/ "./frontend/src/components/Prices/AddPriceList.js":
/*!********************************************************!*\
  !*** ./frontend/src/components/Prices/AddPriceList.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddPriceList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
/* harmony import */ var _AddPriceListTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddPriceListTable */ "./frontend/src/components/Prices/AddPriceListTable.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function AddPriceList(props) {
  var changePage = props.changePage,
      products = props.products,
      categories = props.categories,
      price_levels = props.price_levels,
      addPriceList = props.addPriceList,
      fetchProducts = props.fetchProducts,
      price_list = props.price_list,
      fetchPriceLists = props.fetchPriceLists,
      updatePriceList = props.updatePriceList,
      deletePriceList = props.deletePriceList,
      goToViewProduct = props.goToViewProduct;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      category = _useState2[0],
      setCategory = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      level = _useState4[0],
      setLevel = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      product = _useState6[0],
      setProduct = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      from = _useState8[0],
      setFrom = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      isError = _useState10[0],
      setIsError = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState12 = _slicedToArray(_useState11, 2),
      responseMessage = _useState12[0],
      setResponseMessage = _useState12[1];

  function uploadPriceList(minAmount, maxAmount, rate, disc_amount, perc_amount) {
    setIsError(null);
    setResponseMessage("");

    if (level && product && minAmount && maxAmount && rate && disc_amount && perc_amount && from) {
      addPriceList({
        category_id: category,
        product_id: product,
        level_id: level,
        min_amount: minAmount,
        max_amount: maxAmount,
        rate: rate,
        discount_amount: disc_amount,
        discount_percent: perc_amount,
        date_from: from
      });
    } else {
      setIsError(true);
      setResponseMessage("Please input all relevant fields");
    }
  }

  function viewPriceLists(product) {
    goToViewProduct({
      product: product,
      category: category,
      level: level,
      from: from
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, " PriceList")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-lg-4 col-md-6 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Level*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    "class": "form-control",
    value: level,
    onChange: function onChange(e) {
      fetchPriceLists(1, category, from, e.target.value);
      setLevel(e.target.value);
    },
    required: true,
    autoFocus: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: ""
  }, "..."), price_levels.map(function (level, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: index,
      value: level.id
    }, level.level_name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-lg-4 col-md-6 col-sm-12 col-xs-12  form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    "class": "form-control",
    value: category,
    onChange: function onChange(e) {
      setCategory(e.target.value);
      fetchPriceLists(1, e.target.value, from, level);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: ""
  }, "..."), categories.map(function (category, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: index,
      value: category.id
    }, category.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-lg-4 col-md-6 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Applicable From*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "date",
    className: "form-control",
    placeholder: "Please enter date applicable",
    value: from,
    name: "from",
    onChange: function onChange(e) {
      fetchPriceLists(1, category, e.target.value, level);
      setFrom(e.target.value);
    },
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddPriceListTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    uploadPriceList: uploadPriceList,
    price_list: price_list,
    updatePriceList: updatePriceList,
    deletePriceList: deletePriceList,
    viewPriceLists: viewPriceLists
  })))));
}

/***/ }),

/***/ "./frontend/src/components/Prices/AddPriceListRow.js":
/*!***********************************************************!*\
  !*** ./frontend/src/components/Prices/AddPriceListRow.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddPriceListRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function AddPriceListRow(props) {
  var price = props.price,
      index = props.index,
      updatePriceList = props.updatePriceList,
      viewPriceLists = props.viewPriceLists;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      minAmount = _useState2[0],
      setMinAmount = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      maxAmount = _useState4[0],
      setMaxAmount = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      rate = _useState6[0],
      setRate = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      disc_amount = _useState8[0],
      setDiscAmount = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState10 = _slicedToArray(_useState9, 2),
      perc_amount = _useState10[0],
      setPercAmount = _useState10[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setMinAmount(price.price_list.min_amount ? price.price_list.min_amount : 1);
    setMaxAmount(price.price_list.max_amount ? price.price_list.max_amount : 1);
    setRate(price.price_list.rate ? price.price_list.rate : price.price);
    setDiscAmount(price.price_list.discount_amount ? price.price_list.discount_amount : 0);
    setPercAmount(price.price_list.discount_percent ? price.price_list.discount_percent : 0);
  }, [price]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, price.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter min amount",
    value: minAmount,
    name: "minAmount",
    onChange: function onChange(e) {
      return setMinAmount(e.target.value);
    },
    disabled: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter max amount",
    value: maxAmount,
    name: "maxAmount",
    onChange: function onChange(e) {
      return setMaxAmount(e.target.value);
    },
    disabled: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter rate",
    value: rate,
    name: "rate",
    onChange: function onChange(e) {
      return setRate(e.target.value);
    },
    disabled: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter discount amount",
    value: disc_amount,
    name: "disc_amount",
    onChange: function onChange(e) {
      return setDiscAmount(e.target.value);
    },
    disabled: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter discount percentage",
    value: perc_amount,
    name: "disc_amount",
    onChange: function onChange(e) {
      return setPercAmount(e.target.value);
    },
    disabled: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return viewPriceLists(price);
    },
    className: "btn btn-primary"
  }, "Add"))));
}

/***/ }),

/***/ "./frontend/src/components/Prices/AddPriceListTable.js":
/*!*************************************************************!*\
  !*** ./frontend/src/components/Prices/AddPriceListTable.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddPriceListTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_Debouncer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Debouncer */ "./frontend/src/utils/Debouncer.js");
/* harmony import */ var _AddPriceListRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddPriceListRow */ "./frontend/src/components/Prices/AddPriceListRow.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function AddPriceListTable(_ref) {
  var uploadPriceList = _ref.uploadPriceList,
      price_list = _ref.price_list,
      deletePriceList = _ref.deletePriceList,
      updatePriceList = _ref.updatePriceList,
      viewPriceLists = _ref.viewPriceLists;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Price Table"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-6 form-group"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Product"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Min Amount*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Max Amount*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Rate*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Disc Amount*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Perc Amount*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, price_list.map(function (price, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddPriceListRow__WEBPACK_IMPORTED_MODULE_2__["default"], {
      price: price,
      index: index,
      key: index,
      updatePriceList: updatePriceList,
      deletePriceList: deletePriceList,
      viewPriceLists: viewPriceLists
    });
  })))));
}

/***/ }),

/***/ "./frontend/src/components/Prices/PriceList.js":
/*!*****************************************************!*\
  !*** ./frontend/src/components/Prices/PriceList.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/Actions/Products */ "./frontend/src/redux/Actions/Products.js");
/* harmony import */ var _widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/CustomSnackBar */ "./frontend/src/widgets/CustomSnackBar.js");
/* harmony import */ var _widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/SimpleBackDrop */ "./frontend/src/widgets/SimpleBackDrop.js");
/* harmony import */ var _AddPriceList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddPriceList */ "./frontend/src/components/Prices/AddPriceList.js");
/* harmony import */ var _ViewProductPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ViewProductPrice */ "./frontend/src/components/Prices/ViewProductPrice.js");
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









var PriceList = /*#__PURE__*/function (_Component) {
  _inherits(PriceList, _Component);

  var _super = _createSuper(PriceList);

  function PriceList(props) {
    var _this;

    _classCallCheck(this, PriceList);

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
      viewPrice: null,
      price_data: null
    };
    _this.closeSnackBar = _this.closeSnackBar.bind(_assertThisInitialized(_this));
    _this.setResponse = _this.setResponse.bind(_assertThisInitialized(_this));
    _this.changePage = _this.changePage.bind(_assertThisInitialized(_this));
    _this.viewEditPriceList = _this.viewEditPriceList.bind(_assertThisInitialized(_this));
    _this.goToViewProduct = _this.goToViewProduct.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PriceList, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          error = _this$props.error,
          message = _this$props.message;
      if (error !== prevProps.error) this.setResponse(error);else if (message !== prevProps.message) this.setResponse(message);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchCategories();
      this.props.fetchProducts(1);
      this.props.fetchProductPriceLevels();
      this.props.fetchAddPriceList(1);
    }
  }, {
    key: "changePage",
    value: function changePage(page) {
      if (page == 2) {
        this.props.fetchCategories();
        this.props.fetchProductPriceLevels();
        this.props.fetchAddPriceList(1);
      }

      this.setState({
        currentPage: page
      });
    }
  }, {
    key: "viewEditPriceList",
    value: function viewEditPriceList(price) {
      this.props.fetchCategories();
      this.props.fetchProducts(1);
      this.props.fetchProductPriceLevels();
      this.setState({
        viewPrice: price,
        currentPage: 3
      });
    }
  }, {
    key: "goToViewProduct",
    value: function goToViewProduct(price_data) {
      this.setState({
        price_data: price_data,
        currentPage: 2
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
          productsReducer = _this$props2.productsReducer,
          addPriceList = _this$props2.addPriceList,
          fetchProducts = _this$props2.fetchProducts,
          fetchAddPriceList = _this$props2.fetchAddPriceList,
          updatePriceList = _this$props2.updatePriceList,
          deletePriceList = _this$props2.deletePriceList,
          fetchPriceLists = _this$props2.fetchPriceLists,
          auth = _this$props2.auth;
      var price_lists = productsReducer.price_lists,
          product_price_list = productsReducer.product_price_list,
          categories = productsReducer.categories,
          isLoading = productsReducer.isLoading,
          products = productsReducer.products,
          price_levels = productsReducer.price_levels;
      var _this$state = this.state,
          openSnackBar = _this$state.openSnackBar,
          isError = _this$state.isError,
          responseMessage = _this$state.responseMessage,
          snackPosition = _this$state.snackPosition,
          currentPage = _this$state.currentPage,
          viewPrice = _this$state.viewPrice,
          price_data = _this$state.price_data;
      var snackValues = {
        isError: isError,
        responseMessage: responseMessage,
        openSnackBar: openSnackBar,
        snackPosition: snackPosition
      };

      if (!auth.group.permission.can_view_products) {
        return PermissionHandler(this.props.auth.group.permission);
      }

      switch (currentPage) {
        case 1:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_4__["default"], {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddPriceList__WEBPACK_IMPORTED_MODULE_5__["default"], {
            changePage: this.changePage,
            products: products,
            categories: categories,
            price_levels: price_levels,
            addPriceList: addPriceList,
            fetchProducts: fetchProducts,
            price_list: product_price_list,
            fetchPriceLists: fetchAddPriceList,
            updatePriceList: updatePriceList,
            deletePriceList: deletePriceList,
            goToViewProduct: this.goToViewProduct
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));

        case 2:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_4__["default"], {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewProductPrice__WEBPACK_IMPORTED_MODULE_6__["default"], {
            changePage: this.changePage,
            products: products,
            categories: categories,
            price_levels: price_levels,
            fetchProducts: fetchProducts,
            price_list: price_lists,
            fetchPriceLists: fetchPriceLists,
            updatePriceList: updatePriceList,
            deletePriceList: deletePriceList,
            addPriceList: addPriceList,
            price_data: price_data
          }));

        default:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_4__["default"], {
            open: isLoading
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddPriceList__WEBPACK_IMPORTED_MODULE_5__["default"], {
            changePage: this.changePage,
            products: products,
            categories: categories,
            price_levels: price_levels,
            addPriceList: addPriceList,
            fetchProducts: fetchProducts,
            price_list: product_price_list,
            fetchPriceLists: fetchAddPriceList,
            updatePriceList: updatePriceList,
            deletePriceList: deletePriceList,
            goToViewProduct: this.goToViewProduct
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
            values: snackValues,
            closeSnackBar: this.closeSnackBar
          }));
      }
    }
  }]);

  return PriceList;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.authReducer,
    productsReducer: state.productsReducer,
    error: state.errorsReducer,
    message: state.messagesReducer
  };
};
/** Price list view for distributor */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchPriceLists: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_2__.fetchPriceLists,
  fetchAddPriceList: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_2__.fetchAddPriceList,
  addPriceList: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_2__.addPriceList,
  fetchProducts: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_2__.fetchProducts,
  fetchCategories: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_2__.fetchCategories,
  fetchProductPriceLevels: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_2__.fetchProductPriceLevels,
  updatePriceList: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_2__.updatePriceList,
  deletePriceList: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_2__.deletePriceList
})(PriceList));

/***/ }),

/***/ "./frontend/src/components/Prices/PriceListRow.js":
/*!********************************************************!*\
  !*** ./frontend/src/components/Prices/PriceListRow.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PriceListRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_FormatCommas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/FormatCommas */ "./frontend/src/utils/FormatCommas.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function PriceListRow(props) {
  var price = props.price,
      updatePriceList = props.updatePriceList,
      deletePriceList = props.deletePriceList,
      index = props.index;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      minAmount = _useState2[0],
      setMinAmount = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      maxAmount = _useState4[0],
      setMaxAmount = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      rate = _useState6[0],
      setRate = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      disc_amount = _useState8[0],
      setDiscAmount = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState10 = _slicedToArray(_useState9, 2),
      perc_amount = _useState10[0],
      setPercAmount = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isEdit = _useState12[0],
      setIsEdit = _useState12[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setMinAmount(price.min_amount ? price.min_amount : 1);
    setMaxAmount(price.max_amount ? price.max_amount : 1);
    setRate(price.rate ? price.rate : 0);
    setDiscAmount(price.discount_amount ? price.discount_amount : 0);
    setPercAmount(price.discount_percent ? price.discount_percent : 0);
  }, [price]);

  function editPriceList() {
    if (minAmount && maxAmount && rate) {
      updatePriceList({
        min_amount: minAmount,
        max_amount: maxAmount,
        rate: rate,
        discount_amount: disc_amount,
        discount_percent: perc_amount,
        id: price.id
      });
      setIsEdit(false);
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isEdit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter min amount",
    value: minAmount,
    name: "minAmount",
    onChange: function onChange(e) {
      return setMinAmount(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter max amount",
    value: maxAmount,
    name: "maxAmount",
    onChange: function onChange(e) {
      return setMaxAmount(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter rate",
    value: rate,
    name: "rate",
    onChange: function onChange(e) {
      return setRate(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter discount amount",
    value: disc_amount,
    name: "disc_amount",
    onChange: function onChange(e) {
      return setDiscAmount(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter discount percentage",
    value: perc_amount,
    name: "disc_amount",
    onChange: function onChange(e) {
      return setPercAmount(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    onClick: function onClick() {
      return editPriceList();
    },
    className: "fas fa-check text-success btn_type"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    onClick: function onClick() {
      return setIsEdit(false);
    },
    className: "fas fa-times text-danger btn_type ml-2"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, price.min_amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, price.max_amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Ksh. ", (0,_utils_FormatCommas__WEBPACK_IMPORTED_MODULE_1__["default"])(price.rate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, price.discount_amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, price.discount_percent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    onClick: function onClick() {
      return setIsEdit(true);
    },
    className: "fas fa-edit text-primary btn_type"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    onClick: function onClick() {
      return deletePriceList(price.id);
    },
    className: "fas fa-trash text-danger btn_type ml-2"
  }))));
}

/***/ }),

/***/ "./frontend/src/components/Prices/ViewProductPrice.js":
/*!************************************************************!*\
  !*** ./frontend/src/components/Prices/ViewProductPrice.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewProductPrice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/CustomAlertDialog */ "./frontend/src/widgets/CustomAlertDialog.js");
/* harmony import */ var _widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/CustomBreadCrumbs */ "./frontend/src/widgets/CustomBreadCrumbs.js");
/* harmony import */ var _AddPriceListTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddPriceListTable */ "./frontend/src/components/Prices/AddPriceListTable.js");
/* harmony import */ var _ViewProductPriceTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ViewProductPriceTable */ "./frontend/src/components/Prices/ViewProductPriceTable.js");
/* harmony import */ var _widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/CustomAsyncPagination */ "./frontend/src/widgets/CustomAsyncPagination.js");
/* harmony import */ var _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/Actions/Products */ "./frontend/src/redux/Actions/Products.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function ViewProductPrice(props) {
  var price_list = props.price_list,
      products = props.products,
      categories = props.categories,
      price_levels = props.price_levels,
      changePage = props.changePage,
      price_values = props.price_values,
      fetchPriceLists = props.fetchPriceLists,
      price_data = props.price_data,
      updatePriceList = props.updatePriceList,
      deletePriceList = props.deletePriceList,
      addPriceList = props.addPriceList;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      category = _useState2[0],
      setCategory = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      level = _useState4[0],
      setLevel = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      product = _useState6[0],
      setProduct = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      from = _useState8[0],
      setFrom = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      isError = _useState10[0],
      setIsError = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState12 = _slicedToArray(_useState11, 2),
      responseMessage = _useState12[0],
      setResponseMessage = _useState12[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (price_data) {
      var view_product = {
        value: price_data.product,
        label: price_data.product.name
      };
      setCategory(price_data.category);
      setProduct(view_product);
      setFrom(price_data.from);
      setLevel(price_data.level);
      fetchPriceLists(1, price_data.product.id, price_data.from, price_data.level);
    }
  }, [price_data]);

  function uploadPriceList(minAmount, maxAmount, rate, disc_amount, perc_amount) {
    if (level && product && minAmount && maxAmount && rate && from) {
      setIsError(null);
      setResponseMessage("");
      addPriceList({
        category_id: category,
        product_id: product.value.id,
        level_id: level,
        min_amount: minAmount,
        max_amount: maxAmount,
        rate: rate,
        discount_amount: disc_amount,
        discount_percent: perc_amount,
        date_from: from
      });
    } else {
      setIsError(true);
      setResponseMessage("Please input all relevant fields");
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between ml-2 mr-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "View PriceList")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomBreadCrumbs__WEBPACK_IMPORTED_MODULE_2__["default"], {
    prevPropsName: "Price Lists",
    propsName: "Add Price List",
    changePage: changePage
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAlertDialog__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isError: isError,
    responseMessage: responseMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-lg-4 col-md-6 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Level*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    "class": "form-control",
    value: level,
    onChange: function onChange(e) {
      fetchPriceLists(1, product.value.id, from, e.target.value);
      setLevel(e.target.value);
    },
    required: true,
    autoFocus: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: ""
  }, "..."), price_levels.map(function (level, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: index,
      value: level.id
    }, level.level_name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-lg-4 col-md-6 col-sm-12 col-xs-12  form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Select Product"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomAsyncPagination__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isMulti: false,
    value: product,
    setValue: function setValue(value) {
      setProduct(value);
      fetchPriceLists(1, value.value.id, from, level);
    },
    fetchData: _redux_Actions_Products__WEBPACK_IMPORTED_MODULE_6__.fetchSelectProduct,
    closeMenuOnSelect: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-lg-4 col-md-6 col-sm-12 col-xs-12 form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Applicable From*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "date",
    className: "form-control",
    placeholder: "Please enter date applicable",
    value: from,
    name: "from",
    onChange: function onChange(e) {
      fetchPriceLists(1, product.value.id, e.target.value, level);
      setFrom(e.target.value);
    },
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewProductPriceTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
    price_list: price_list,
    currentPrice: product ? product.value.price : "",
    uploadPriceList: uploadPriceList,
    updatePriceList: updatePriceList,
    deletePriceList: deletePriceList
  })))));
}

/***/ }),

/***/ "./frontend/src/components/Prices/ViewProductPriceTable.js":
/*!*****************************************************************!*\
  !*** ./frontend/src/components/Prices/ViewProductPriceTable.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewProductPriceTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _PriceListRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PriceListRow */ "./frontend/src/components/Prices/PriceListRow.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function ViewProductPriceTable(props) {
  var price_list = props.price_list,
      currentPrice = props.currentPrice,
      uploadPriceList = props.uploadPriceList,
      updatePriceList = props.updatePriceList,
      deletePriceList = props.deletePriceList;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      minAmount = _useState2[0],
      setMinAmount = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      maxAmount = _useState4[0],
      setMaxAmount = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(currentPrice),
      _useState6 = _slicedToArray(_useState5, 2),
      rate = _useState6[0],
      setRate = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      disc_amount = _useState8[0],
      setDiscAmount = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState10 = _slicedToArray(_useState9, 2),
      perc_amount = _useState10[0],
      setPercAmount = _useState10[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setRate(currentPrice);
    var view_price = price_list.sort(function (a, b) {
      return b.max_amount - a.max_amount;
    });
    setMinAmount(view_price[0] ? view_price[0].max_amount + 1 : "");
  }, [currentPrice, price_list]);

  function addPriceList() {
    uploadPriceList(minAmount, maxAmount, rate, disc_amount, perc_amount);
    setMinAmount(price_list[0] ? price_list[0].max_amount + 1 : "");
    setMaxAmount("");
    setRate(currentPrice);
    setDiscAmount("");
    setPercAmount("");
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Price Table")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Min Amount*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Max Amount*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Rate Per Product*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Disc Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Perc Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter min amount",
    value: minAmount,
    name: "minAmount",
    onChange: function onChange(e) {
      return setMinAmount(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter max amount",
    value: maxAmount,
    name: "maxAmount",
    onChange: function onChange(e) {
      return setMaxAmount(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter rate",
    value: rate,
    name: "rate",
    onChange: function onChange(e) {
      return setRate(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter discount amount",
    value: disc_amount,
    name: "disc_amount",
    onChange: function onChange(e) {
      return setDiscAmount(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Please enter discount percentage",
    value: perc_amount,
    name: "disc_amount",
    onChange: function onChange(e) {
      return setPercAmount(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      return addPriceList();
    },
    className: "btn btn-primary"
  }, "Add"))), price_list.map(function (price, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PriceListRow__WEBPACK_IMPORTED_MODULE_1__["default"], {
      price: price,
      index: index,
      key: index,
      updatePriceList: updatePriceList,
      deletePriceList: deletePriceList
    });
  })))));
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

/***/ })

}]);