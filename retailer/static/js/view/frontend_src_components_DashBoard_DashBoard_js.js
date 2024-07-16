"use strict";
(self["webpackChunkbiz_app"] = self["webpackChunkbiz_app"] || []).push([["frontend_src_components_DashBoard_DashBoard_js"],{

/***/ "./frontend/src/components/DashBoard/DashBoard.js":
/*!********************************************************!*\
  !*** ./frontend/src/components/DashBoard/DashBoard.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _DashBoard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashBoard.css */ "./frontend/src/components/DashBoard/DashBoard.css");
/* harmony import */ var _widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/SimpleBackDrop */ "./frontend/src/widgets/SimpleBackDrop.js");
/* harmony import */ var _widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/CustomSnackBar */ "./frontend/src/widgets/CustomSnackBar.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_Actions_DashBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/Actions/DashBoard */ "./frontend/src/redux/Actions/DashBoard.js");
/* harmony import */ var _redux_Actions_Reports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/Actions/Reports */ "./frontend/src/redux/Actions/Reports.js");
/* harmony import */ var _utils_FormatInputDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/FormatInputDate */ "./frontend/src/utils/FormatInputDate.js");
/* harmony import */ var _utils_PermissionHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/PermissionHandler */ "./frontend/src/utils/PermissionHandler.js");
/* harmony import */ var _new_dashboard_view_new_dashboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new_dashboard/view_new_dashboard */ "./frontend/src/components/DashBoard/new_dashboard/view_new_dashboard.js");
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












var DashBoard = /*#__PURE__*/function (_Component) {
  _inherits(DashBoard, _Component);

  var _super = _createSuper(DashBoard);

  function DashBoard(props) {
    var _this;

    _classCallCheck(this, DashBoard);

    _this = _super.call(this, props);
    _this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: {
        vertical: "top",
        horizontal: "center"
      }
    };
    _this.closeSnackBar = _this.closeSnackBar.bind(_assertThisInitialized(_this));
    _this.setResponse = _this.setResponse.bind(_assertThisInitialized(_this));
    _this.changePage = _this.changePage.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DashBoard, [{
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
      this.props.fetchDashBoard();
      var from_date = (0,_utils_FormatInputDate__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date().setDate(new Date().getDate() - 6));
      var to_date = (0,_utils_FormatInputDate__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date().setDate(new Date().getDate()));
      this.props.fetchOrdersStatics(from_date, to_date);
      this.props.fetchRetailersStatics(from_date, to_date);
      this.props.fetchProductStatics(from_date, to_date);
    }
  }, {
    key: "changePage",
    value: function changePage(page) {
      this.setState({
        currentPage: page
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
          dashboardReducer = _this$props2.dashboardReducer,
          reportsReducer = _this$props2.reportsReducer,
          fetchOrdersStatics = _this$props2.fetchOrdersStatics,
          auth = _this$props2.auth;
      var isLoading = dashboardReducer.isLoading,
          dashBoardCount = dashboardReducer.dashBoardCount,
          view_retailers = dashboardReducer.view_retailers,
          view_products = dashboardReducer.view_products;
      var _this$state = this.state,
          openSnackBar = _this$state.openSnackBar,
          isError = _this$state.isError,
          responseMessage = _this$state.responseMessage,
          snackPosition = _this$state.snackPosition;
      var snackValues = {
        isError: isError,
        responseMessage: responseMessage,
        openSnackBar: openSnackBar,
        snackPosition: snackPosition
      };

      if (!auth.group.permission.can_view_dashboard) {
        return (0,_utils_PermissionHandler__WEBPACK_IMPORTED_MODULE_8__["default"])(this.props.auth.group.permission);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SimpleBackDrop__WEBPACK_IMPORTED_MODULE_2__["default"], {
        open: isLoading || reportsReducer.isLoading
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_new_dashboard_view_new_dashboard__WEBPACK_IMPORTED_MODULE_9__["default"], {
        order_reports: reportsReducer.order_reports,
        fetchOrdersStatics: fetchOrdersStatics,
        dashBoardCount: dashBoardCount,
        view_retailers: view_retailers,
        view_products: view_products,
        product_reports: reportsReducer.product_reports
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CustomSnackBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        values: snackValues,
        closeSnackBar: this.closeSnackBar
      }));
    }
  }]);

  return DashBoard;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.authReducer,
    dashboardReducer: state.dashboardReducer,
    reportsReducer: state.reportsReducer,
    error: state.errorsReducer,
    message: state.messagesReducer
  };
};
/** Retailer View Dashboard */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, {
  fetchDashBoard: _redux_Actions_DashBoard__WEBPACK_IMPORTED_MODULE_5__.fetchDashBoard,
  fetchOrdersStatics: _redux_Actions_Reports__WEBPACK_IMPORTED_MODULE_6__.fetchOrdersStatics,
  fetchRetailersStatics: _redux_Actions_Reports__WEBPACK_IMPORTED_MODULE_6__.fetchRetailersStatics,
  fetchProductStatics: _redux_Actions_Reports__WEBPACK_IMPORTED_MODULE_6__.fetchProductStatics
})(DashBoard));

/***/ }),

/***/ "./frontend/src/components/DashBoard/new_dashboard/dash_board_map_view.js":
/*!********************************************************************************!*\
  !*** ./frontend/src/components/DashBoard/new_dashboard/dash_board_map_view.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DashBoardMapView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _south_paw_react_vector_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @south-paw/react-vector-maps */ "./node_modules/@south-paw/react-vector-maps/dist/react-vector-maps.esm.js");
/* harmony import */ var _utils_kenya_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/kenya.json */ "./frontend/src/utils/kenya.json");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function DashBoardMapView(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-xl-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "white_card card_height_100  mb_20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "white_card_header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "box_header m-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "main-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "m-0"
  }, "Locations")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header_more_tool"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "dropdown-toggle",
    id: "dropdownMenuButton",
    "data-toggle": "dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "ti-more-alt"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dropdown-menu dropdown-menu-right",
    "aria-labelledby": "dropdownMenuButton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "ti-eye"
  }), " Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "ti-trash"
  }), " Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-edit"
  }), " Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "ti-printer"
  }), " Print"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-download"
  }), " Download")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "white_card_body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_south_paw_react_vector_maps__WEBPACK_IMPORTED_MODULE_1__.VectorMap, _extends({}, _utils_kenya_json__WEBPACK_IMPORTED_MODULE_2__, {
    className: "dashboard_w_map pb_20"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "world_list_wraper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "single_progressbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
    className: "f_s_14 f_w_400"
  }, "Nairobi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "bar4",
    className: "barfiller"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tipWrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "tip"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "fill",
    "data-percentage": "81"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "single_progressbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Nakuru"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "bar5",
    className: "barfiller"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tipWrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "tip"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "fill",
    "data-percentage": "58"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "single_progressbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Kisumu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "bar6",
    className: "barfiller"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tipWrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "tip"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "fill",
    "data-percentage": "42"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "single_progressbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Mombasa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "bar7",
    className: "barfiller"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tipWrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "tip"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "fill",
    "data-percentage": "55"
  })))))))))));
}

/***/ }),

/***/ "./frontend/src/components/DashBoard/new_dashboard/dash_board_progress_chart.js":
/*!**************************************************************************************!*\
  !*** ./frontend/src/components/DashBoard/new_dashboard/dash_board_progress_chart.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DashBoardProgressChart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function DashBoardProgressChart(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      series = _useState2[0],
      setSeries = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      options = _useState4[0],
      setOptions = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setSeries([76]);
    setOptions({
      chart: {
        type: "radialBar",
        offsetY: -20,
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            margin: 5,
            // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              color: "#999",
              opacity: 1,
              blur: 2
            }
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: -2,
              fontSize: "22px"
            }
          }
        }
      },
      grid: {
        padding: {
          top: -10
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91]
        }
      },
      labels: ["Average Results"]
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "chart"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_apexcharts__WEBPACK_IMPORTED_MODULE_1__["default"], {
    series: series,
    options: options,
    type: "radialBar",
    height: 300
  }));
}

/***/ }),

/***/ "./frontend/src/components/DashBoard/new_dashboard/new_view_dash_board_chart.js":
/*!**************************************************************************************!*\
  !*** ./frontend/src/components/DashBoard/new_dashboard/new_view_dash_board_chart.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewViewDashBoardChart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js");
/* harmony import */ var _utils_FormatDateNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/FormatDateNames */ "./frontend/src/utils/FormatDateNames.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function NewViewDashBoardChart(props) {
  var order_reports = props.order_reports,
      fetchOrdersStatics = props.fetchOrdersStatics,
      product_reports = props.product_reports;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      series = _useState2[0],
      setSeries = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      options = _useState4[0],
      setOptions = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setSeries([{
      name: "Orders",
      type: "column",
      data: order_reports.map(function (item) {
        return item.count;
      }) //   [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],

    }, {
      name: "Products",
      type: "area",
      data: product_reports.map(function (l_item) {
        return l_item.count;
      }) //    [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],

    }]);
    setOptions({
      chart: {
        height: 350,
        type: "line",
        stacked: false,
        toolbar: {
          show: true,
          tools: {
            download: true,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false
          }
        }
      },
      stroke: {
        width: [0, 2, 5],
        curve: "smooth"
      },
      plotOptions: {
        bar: {
          columnWidth: "50%"
        }
      },
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
      },
      labels: order_reports.map(function (item) {
        return (0,_utils_FormatDateNames__WEBPACK_IMPORTED_MODULE_2__.getDateName)(item.date);
      }),
      markers: {
        size: 0
      },
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        title: {
          text: "Points"
        },
        min: 0,
        max: Math.max.apply(Math, _toConsumableArray(order_reports.map(function (item) {
          return item.count;
        }))) + 20
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function formatter(y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }

            return y;
          }
        }
      }
    });
  }, [order_reports]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "chart"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_apexcharts__WEBPACK_IMPORTED_MODULE_1__["default"], {
    options: options,
    series: series,
    type: "line",
    height: 300
  }));
}

/***/ }),

/***/ "./frontend/src/components/DashBoard/new_dashboard/view_dash_board_customers.js":
/*!**************************************************************************************!*\
  !*** ./frontend/src/components/DashBoard/new_dashboard/view_dash_board_customers.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewDashboarCustomers)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ViewDashboarCustomers(_ref) {
  var view_retailers = _ref.view_retailers;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-xl-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "white_card card_height_100 mb_30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "white_card_header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "row align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "main-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    "class": "m-0"
  }, "Top Customers"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": " QA_section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "QA_table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "dataTables_wrapper no-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    "class": "table lms_table_active2 p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    scope: "col"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    scope: "col"
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    scope: "col"
  }, "Orders"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    scope: "col"
  }, "Total"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, view_retailers.map(function (retailer, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      "class": "customer d-flex align-items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      "class": "thumb_34 mr_15 mt-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      "class": "img-fluid",
      src: retailer.contact_pic ? "..".concat(retailer.contact_pic) : "../static/images/user.png",
      alt: ""
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      "class": "f_s_12 f_w_400 color_text_6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "media-body align-self-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
      className: "mt-0  font-weight-medium"
    }, retailer.retailer_profile ? retailer.retailer_profile.contact_name : retailer.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, retailer.retailer_profile ? retailer.retailer_profile.contact_email : retailer.email))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      "class": "f_s_12 f_w_400 color_text_7"
    }, retailer.order_count ? retailer.order_count.orders_count : 0, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      "class": "f_s_12 f_w_400 color_text_6"
    }, " ", "Ksh.", " ", retailer.order_count ? retailer.order_count.revenue_count : 0));
  }))))))));
}

/***/ }),

/***/ "./frontend/src/components/DashBoard/new_dashboard/view_dash_board_products.js":
/*!*************************************************************************************!*\
  !*** ./frontend/src/components/DashBoard/new_dashboard/view_dash_board_products.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewDashBoardProducts)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_FormatCommas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/FormatCommas */ "./frontend/src/utils/FormatCommas.js");


function ViewDashBoardProducts(_ref) {
  var view_products = _ref.view_products;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-xl-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "white_card card_height_100 mb_30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "white_card_header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "row align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "main-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    "class": "m-0"
  }, "Top Products"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "white_card_body QA_section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "QA_table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "dataTables_wrapper no-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    "class": "table lms_table_active2 p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    scope: "col"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    scope: "col"
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    scope: "col"
  }, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    scope: "col"
  }, "Stock"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, view_products.map(function (product, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      "class": "customer d-flex align-items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      "class": "thumb_34 mr_15 mt-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      "class": "img-fluid",
      src: product.product_images[0] != null && product.product_images[0].image != null ? "..".concat(product.product_images[0].image) : "../static/images/logo.svg",
      alt: ""
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      "class": "f_s_12 f_w_400 color_text_6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      "class": "f_s_12 f_w_600 color_text_5"
    }, product.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      "class": "f_s_12 f_w_400 color_text_7"
    }, " ", product.price_currency, " ", (0,_utils_FormatCommas__WEBPACK_IMPORTED_MODULE_1__["default"])(product.price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      "class": "f_s_12 f_w_400 color_text_6"
    }, product.stock_qty));
  }))))))));
}

/***/ }),

/***/ "./frontend/src/components/DashBoard/new_dashboard/view_dash_board_sales_stats.js":
/*!****************************************************************************************!*\
  !*** ./frontend/src/components/DashBoard/new_dashboard/view_dash_board_sales_stats.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewDashBoardSalesStats)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


function ViewDashBoardSalesStats(_ref) {
  var _dashBoardCount$compl, _dashBoardCount$compl2, _dashBoardCount$total, _dashBoardCount$total2, _dashBoardCount$reven;

  var dashBoardCount = _ref.dashBoardCount;

  function calculateSalesDiff(complete, total) {
    return total - complete;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/home/orders",
    className: "col-xl-4 text-Deco"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "white_card card_height_100 mb_30 overflow_hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "white_card_header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "box_header m-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "main-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "m-0"
  }, "Sales Details")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "white_card_body pb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Sales_Details_plan"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "single_plan d-flex align-items-center justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "plan_left d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "thumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "../static/images/icon2/3.svg",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, (_dashBoardCount$compl = dashBoardCount === null || dashBoardCount === void 0 ? void 0 : dashBoardCount.complete_orders) !== null && _dashBoardCount$compl !== void 0 ? _dashBoardCount$compl : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Complete Orders"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "single_plan d-flex align-items-center justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "plan_left d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "thumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "../static/images/icon2/1.svg",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, calculateSalesDiff((_dashBoardCount$compl2 = dashBoardCount === null || dashBoardCount === void 0 ? void 0 : dashBoardCount.complete_orders) !== null && _dashBoardCount$compl2 !== void 0 ? _dashBoardCount$compl2 : 0, (_dashBoardCount$total = dashBoardCount === null || dashBoardCount === void 0 ? void 0 : dashBoardCount.total_orders) !== null && _dashBoardCount$total !== void 0 ? _dashBoardCount$total : 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Pending Orders"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "single_plan d-flex align-items-center justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "plan_left d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "thumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "../static/images/icon2/4.svg",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, (_dashBoardCount$total2 = dashBoardCount === null || dashBoardCount === void 0 ? void 0 : dashBoardCount.total_orders) !== null && _dashBoardCount$total2 !== void 0 ? _dashBoardCount$total2 : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Total Orders"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "single_plan d-flex align-items-center justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "plan_left d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "thumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "../static/images/icon2/2.svg",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Ksh. ", (_dashBoardCount$reven = dashBoardCount === null || dashBoardCount === void 0 ? void 0 : dashBoardCount.revenue) !== null && _dashBoardCount$reven !== void 0 ? _dashBoardCount$reven : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Total Revenue")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "chart_wrap overflow_hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "chart4"
  }))));
}

/***/ }),

/***/ "./frontend/src/components/DashBoard/new_dashboard/view_dash_board_values.js":
/*!***********************************************************************************!*\
  !*** ./frontend/src/components/DashBoard/new_dashboard/view_dash_board_values.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewDashBoardValues)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function ViewDashBoardValues(_ref) {
  var dashBoardCount = _ref.dashBoardCount;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      products = _useState2[0],
      setProducts = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      retailers = _useState4[0],
      setRetailers = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      salesmen = _useState6[0],
      setSalesMen = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      offers = _useState8[0],
      setOffers = _useState8[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setProducts(dashBoardCount !== null && dashBoardCount !== void 0 && dashBoardCount.product_count ? dashBoardCount.product_count : 0);
    setRetailers(dashBoardCount !== null && dashBoardCount !== void 0 && dashBoardCount.retailers_count ? dashBoardCount.retailers_count : 0);
    setSalesMen(dashBoardCount !== null && dashBoardCount !== void 0 && dashBoardCount.salesmen ? dashBoardCount.salesmen : 0);
    setOffers(dashBoardCount !== null && dashBoardCount !== void 0 && dashBoardCount.offers ? dashBoardCount.offers : 0);
  }, [dashBoardCount]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-xl-4 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "white_card card_height_100 mb_30 user_crm_wrapper "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/home/retailers",
    className: "col-lg-6 col-md-6 col-sm-6 col-xs-6 text-Deco p-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "single_crm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "crm_head d-flex align-items-center justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "thumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "../static/images/crm/businessman.svg",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-ellipsis-h f_s_11 white_text"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "crm_body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, retailers), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Customers")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/home/products",
    className: "col-lg-6 col-md-6 col-sm-6 col-xs-6 text-Deco p-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "single_crm "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "crm_head crm_bg_1 d-flex align-items-center justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "thumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "../static/images/crm/customer.svg",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-ellipsis-h f_s_11 white_text"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "crm_body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, products), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Products")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/home/sales",
    className: "col-lg-6 col-md-6 col-sm-6  col-xs-6 text-Deco p-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "single_crm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "crm_head crm_bg_2 d-flex align-items-center justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "thumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "../static/images/crm/infographic.svg",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-ellipsis-h f_s_11 white_text"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "crm_body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, salesmen), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "SalesMen")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "",
    className: "col-lg-6 col-md-6 col-sm-6 col-xs-6 text-Deco p-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "single_crm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "crm_head crm_bg_3 d-flex align-items-center justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "thumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "../static/images/crm/sqr.svg",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-ellipsis-h f_s_11 white_text"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "crm_body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, offers), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Active Offers"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "crm_reports_bnner mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-end "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-6 p-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Create Custom Reports"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Select what you want to view here."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#"
  }, "Read More ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-arrow-right"
  }), " "))))));
}

/***/ }),

/***/ "./frontend/src/components/DashBoard/new_dashboard/view_new_dashboard.js":
/*!*******************************************************************************!*\
  !*** ./frontend/src/components/DashBoard/new_dashboard/view_new_dashboard.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewNewDashoard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _new_dash_board_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new_dash_board.css */ "./frontend/src/components/DashBoard/new_dashboard/new_dash_board.css");
/* harmony import */ var _view_dash_board_sales_stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view_dash_board_sales_stats */ "./frontend/src/components/DashBoard/new_dashboard/view_dash_board_sales_stats.js");
/* harmony import */ var _view_dash_board_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view_dash_board_values */ "./frontend/src/components/DashBoard/new_dashboard/view_dash_board_values.js");
/* harmony import */ var _view_dash_board_customers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view_dash_board_customers */ "./frontend/src/components/DashBoard/new_dashboard/view_dash_board_customers.js");
/* harmony import */ var _new_view_dash_board_chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new_view_dash_board_chart */ "./frontend/src/components/DashBoard/new_dashboard/new_view_dash_board_chart.js");
/* harmony import */ var _view_dash_board_products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view_dash_board_products */ "./frontend/src/components/DashBoard/new_dashboard/view_dash_board_products.js");
/* harmony import */ var _dash_board_progress_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dash_board_progress_chart */ "./frontend/src/components/DashBoard/new_dashboard/dash_board_progress_chart.js");
/* harmony import */ var _dash_board_map_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dash_board_map_view */ "./frontend/src/components/DashBoard/new_dashboard/dash_board_map_view.js");









/** New Distributor view dashboard */

function ViewNewDashoard(props) {
  var _dashBoardCount$month, _dashBoardCount$month2, _dashBoardCount$month3;

  var order_reports = props.order_reports,
      fetchOrdersStatics = props.fetchOrdersStatics,
      dashBoardCount = props.dashBoardCount,
      view_retailers = props.view_retailers,
      product_reports = props.product_reports,
      view_products = props.view_products;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row ml-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-xl-8 p-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "white_card  card_height_100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "white_card_header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row align-items-center justify-content-between flex-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "main-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "m-0"
  }, "Stoke Details"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "white_card_body dashboard_chart"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_new_view_dash_board_chart__WEBPACK_IMPORTED_MODULE_5__["default"], {
    order_reports: order_reports,
    fetchOrdersStatics: fetchOrdersStatics,
    product_reports: product_reports
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_view_dash_board_values__WEBPACK_IMPORTED_MODULE_3__["default"], {
    dashBoardCount: dashBoardCount
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_view_dash_board_customers__WEBPACK_IMPORTED_MODULE_4__["default"], {
    view_retailers: view_retailers
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-xl-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "white_card card_height_100 mb_30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "white_card_header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "box_header m-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "main-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "m-0"
  }, "Sales Monthly Summary")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "white_card_body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dash_board_progress_chart__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "monthly_plan_wraper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "single_plan d-flex align-items-center justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "plan_left d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "thumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "../static/images/icon2/7.svg",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Monthly Delivered Orders"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, (_dashBoardCount$month = dashBoardCount === null || dashBoardCount === void 0 ? void 0 : dashBoardCount.monthly_complete_order) !== null && _dashBoardCount$month !== void 0 ? _dashBoardCount$month : 0, " Completed order this month")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "single_plan d-flex align-items-center justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "plan_left d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "thumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "../static/images/icon2/6.svg",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Monthly Revenue"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Ksh. ", (_dashBoardCount$month2 = dashBoardCount === null || dashBoardCount === void 0 ? void 0 : dashBoardCount.monthly_revenue) !== null && _dashBoardCount$month2 !== void 0 ? _dashBoardCount$month2 : 0, " in total revenue")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "single_plan d-flex align-items-center justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "plan_left d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "thumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "../static/images/icon2/5.svg",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "New Retailer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, (_dashBoardCount$month3 = dashBoardCount === null || dashBoardCount === void 0 ? void 0 : dashBoardCount.monthly_retailer) !== null && _dashBoardCount$month3 !== void 0 ? _dashBoardCount$month3 : 0, " Joined this month")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_view_dash_board_sales_stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dashBoardCount: dashBoardCount
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_view_dash_board_products__WEBPACK_IMPORTED_MODULE_6__["default"], {
    view_products: view_products
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dash_board_map_view__WEBPACK_IMPORTED_MODULE_8__["default"], null));
}

/***/ }),

/***/ "./frontend/src/redux/Actions/Reports.js":
/*!***********************************************!*\
  !*** ./frontend/src/redux/Actions/Reports.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchIndividualSalesManStatics": () => (/* binding */ fetchIndividualSalesManStatics),
/* harmony export */   "fetchOrdersStatics": () => (/* binding */ fetchOrdersStatics),
/* harmony export */   "fetchProductStatics": () => (/* binding */ fetchProductStatics),
/* harmony export */   "fetchRetailersStatics": () => (/* binding */ fetchRetailersStatics),
/* harmony export */   "fetchSalesTargetReport": () => (/* binding */ fetchSalesTargetReport)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/TokenConfig */ "./frontend/src/utils/TokenConfig.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Messages */ "./frontend/src/redux/Actions/Messages.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./frontend/src/redux/Actions/types.js");




var fetchOrdersStatics = function fetchOrdersStatics(from_date, to_date) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_REPORTS_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__["default"])(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/order_statics/?from_date=".concat(from_date, "&to_date=").concat(to_date), config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_REPORTS_LOADED,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_REPORTS_ERROR
      });
    });
  };
};
var fetchRetailersStatics = function fetchRetailersStatics(from_date, to_date) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_REPORTS_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__["default"])(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/retailer_statics/?from_date=".concat(from_date, "&to_date=").concat(to_date), config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.RETAILER_REPORTS_LOADED,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_REPORTS_ERROR
      });
    });
  };
};
var fetchProductStatics = function fetchProductStatics(from_date, to_date) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_REPORTS_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__["default"])(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/dist_statics/?from_date=".concat(from_date, "&to_date=").concat(to_date), config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.PRODUCT_REPORTS_LOADED,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_REPORTS_ERROR
      });
    });
  };
};
var fetchSalesTargetReport = function fetchSalesTargetReport(from_date, period) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_REPORTS_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__["default"])(getState);
    var url = period ? "../retailer/api/sales_group_statics/?from_date=".concat(from_date, "&period=").concat(period) : "../retailer/api/sales_group_statics/?from_date=".concat(from_date);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.SALES_TARGET_REPORT_LOADED,
        payload: res.data
      });
    })["catch"](function (error) {
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_REPORTS_ERROR
      });
    });
  };
};
var fetchIndividualSalesManStatics = function fetchIndividualSalesManStatics(from_date, sales_group) {
  return function (dispatch, getState) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_REPORTS_LOADING
    });
    var config = (0,_utils_TokenConfig__WEBPACK_IMPORTED_MODULE_1__["default"])(getState);
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("../retailer/api/sales_man_statics/?from_date=".concat(from_date, "&salegroup_id=").concat(sales_group), config).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.SALES_TARGET_INDIVIDUAL_LOADED,
        payload: res.data
      });
    })["catch"](function (error) {
      console.log(error);
      var errors = {
        responseMessage: error.response.data,
        status: error.response.status
      };
      dispatch((0,_Messages__WEBPACK_IMPORTED_MODULE_2__.createErrorMessage)(errors));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__.ORDER_REPORTS_ERROR
      });
    });
  };
};

/***/ }),

/***/ "./frontend/src/utils/FormatDateNames.js":
/*!***********************************************!*\
  !*** ./frontend/src/utils/FormatDateNames.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDateName": () => (/* binding */ getDateName),
/* harmony export */   "getMonthIndexName": () => (/* binding */ getMonthIndexName),
/* harmony export */   "getMonthName": () => (/* binding */ getMonthName),
/* harmony export */   "getSlashedDate": () => (/* binding */ getSlashedDate)
/* harmony export */ });
function getDateName(mDate) {
  var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  var date = new Date(mDate);
  return days[date.getDay()];
}
function getMonthName(mDate) {
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var date = new Date(mDate);
  return monthNames[date.getMonth()];
}
function getMonthIndexName(index) {
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  return monthNames[index - 1];
}
function getSlashedDate(mDate) {
  var date = new Date(mDate);
  var day = date.getDate() < 10 ? "0".concat(date.getDate()) : date.getDate();
  var month = date.getMonth() < 10 ? "0".concat(date.getMonth()) : date.getMonth();
  var year = date.getFullYear();
  return day + "/" + month + "/" + year;
}

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

/***/ "./frontend/src/utils/PermissionHandler.js":
/*!*************************************************!*\
  !*** ./frontend/src/utils/PermissionHandler.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(permission) {
  if (permission.can_view_dashboard) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
      to: "/home/dashboard"
    });
  } else if (permission.can_view_products) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
      to: "/home/products"
    });
  } else if (permission.can_view_product_category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
      to: "/home/categories"
    });
  } else if (permission.can_view_orders) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
      to: "/home/orders"
    });
  } else if (permission.can_view_salesmen) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
      to: "/home/sales"
    });
  } else if (permission.can_view_retailer) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
      to: "/home/retailers"
    });
  } else if (permission.can_view_deliveries) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
      to: "/home/deliveries"
    });
  } else if (permission.can_view_offers) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
      to: "/home/offers"
    });
  } else if (permission.can_view_users) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
      to: "/home/groups"
    });
  } else if (permission.can_manage_mobile) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
      to: "/home/banners"
    });
  } else {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("account");
    window.location.assign("../forbidden");
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/DashBoard/DashBoard.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/src/components/DashBoard/DashBoard.css ***!
  \***********************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".dashboard_round_img {\n    width: 70px;\n    height: 70px;\n    overflow: hidden;\n    /* border-radius: 35px; */\n}\n\n.dashboard_round_img img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n}\n\n.dashboard_product_img {\n    width: 150px;\n    height: 150px;\n    overflow: hidden;\n    border-radius: 10px;\n}\n\n.dashboard_product_img img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/DashBoard/new_dashboard/new_dash_board.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/src/components/DashBoard/new_dashboard/new_dash_board.css ***!
  \******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".white_card {\n    background-color: #ffffff;\n    border-radius: 15px;\n}\n\n.white_card .white_card_header {\n    padding: 22px 30px;\n}\n\n.white_card .white_card_body {\n    padding: 5px 30px 15px 30px;\n}\n\n\n/* .mb_30 {\n    margin-bottom: 30px !important;\n} */\n\n.card_height_100 {\n    height: calc(100% - 25px);\n}\n\n.user_crm_wrapper {\n    background: transparent;\n}\n\n.user_crm_wrapper .single_crm {\n    background: #fff;\n    border-radius: 15px;\n    /* margin-bottom: 15px; */\n    padding: 5px;\n}\n\n.user_crm_wrapper .single_crm .crm_head {\n    background: #ff7ea5;\n    padding: 2px 10px;\n    border-radius: 13px;\n}\n\n.user_crm_wrapper .single_crm .crm_head i {\n    color: #fff;\n}\n\n.crm_bg_1 {\n    background: #20deff !important;\n}\n\n.crm_bg_2 {\n    background: #c388f6 !important;\n}\n\n.crm_bg_3 {\n    background: #f5f5ff !important;\n}\n\n.user_crm_wrapper .single_crm .crm_body {\n    padding: 5px 10px;\n}\n\n.user_crm_wrapper .single_crm .crm_body h4 {\n    font-size: 22px;\n    font-weight: 700;\n    color: #242934;\n}\n\n.user_crm_wrapper .single_crm .crm_body p {\n    font-size: 14px;\n    color: #9b9aba;\n    font-weight: 400;\n}\n\n.main-title h3 {\n    font-family: \"Mulish\", sans-serif;\n    font-weight: 700;\n    font-size: 18px;\n    color: #474d58;\n}\n\n.single_user_pil {\n    background: #f5f5ff;\n    padding: 10px 20px;\n    border-radius: 15px;\n    transition: 0.3s;\n    margin-bottom: 15px;\n}\n\n.thumb_34 {\n    width: 34px;\n    height: 34px;\n}\n\n.mr_15 {\n    margin-right: 15px;\n    margin-top: 7px;\n}\n\n.f_w_400 {\n    font-weight: 400;\n}\n\n.f_s_14 {\n    font-size: 14px;\n}\n\n.single_user_pil .user_pils_thumb img {\n    border: 1px solid #94c0d4;\n}\n\n.radius_50 {\n    border-radius: 50%;\n}\n\n.dataTables_wrapper {\n    position: relative;\n    clear: both;\n}\n\n.QA_section .QA_table .table {\n    margin-bottom: 0 !important;\n}\n\n.QA_section .QA_table .table {\n    background: #ffffff;\n    border-radius: 10px;\n}\n\ntable.dataTable {\n    width: 100% !important;\n    margin: 0 auto;\n    margin-bottom: 0px;\n    clear: both;\n    border-collapse: separate;\n    border-spacing: 0;\n}\n\n.QA_section .QA_table .table thead th:first-child {\n    border-radius: 5px 0px 0px 5px;\n    border-left: 1px solid #e5ecff !important;\n}\n\n.QA_section .QA_table .table thead th {\n    padding: 9px 15px;\n    font-size: 12px;\n    font-weight: 600;\n    color: #474d58;\n    white-space: nowrap;\n    text-transform: capitalize;\n    font-family: \"Mulish\", sans-serif;\n    background: #fff;\n    border: 0 !important;\n    background: transparent;\n    border-top: 1px solid #e5ecff !important;\n    border-bottom: 1px solid #e5ecff !important;\n    position: relative;\n}\n\n.monthly_plan_wraper .single_plan {\n    margin-bottom: 15px;\n}\n\n.monthly_plan_wraper .single_plan .plan_left .thumb {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    margin-right: 10px;\n    padding: 12px;\n    background: #f5f5ff;\n    line-height: 1;\n}\n\n.Sales_Details_plan .single_plan {\n    margin-bottom: 30px;\n}\n\n.Sales_Details_plan .row .col-lg-6:nth-child(1) .thumb {\n    background: #eee5ff;\n}\n\n.Sales_Details_plan .single_plan .plan_left .thumb {\n    width: 45px;\n    height: 45px;\n    border-radius: 0.42rem;\n    margin-right: 10px;\n    padding: 12px;\n    line-height: 1;\n}\n\n.Sales_Details_plan .single_plan .plan_left h5 {\n    font-size: 16px;\n    font-weight: 700;\n    color: #474d58;\n    margin-bottom: 0;\n}\n\n.Sales_Details_plan .single_plan .plan_left span {\n    font-size: 12px;\n    color: #b5b5c3 !important;\n    font-weight: 700;\n    line-height: 12px;\n}\n\n.box_header {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 30px;\n    align-items: center;\n}\n\n.dashboard_w_map {\n    height: 450px;\n    fill: #a82b2b;\n    cursor: pointer;\n    outline: none;\n}\n\n.dashboard_w_map path:hover {\n    fill: rgba(168, 43, 43, 0.83);\n}\n\n.dashboard_w_map path:focus {\n    fill: rgba(168, 43, 43, 0.6);\n}\n\n.pb_20 {\n    padding-bottom: 20px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./frontend/src/components/DashBoard/DashBoard.css":
/*!*********************************************************!*\
  !*** ./frontend/src/components/DashBoard/DashBoard.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_DashBoard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./DashBoard.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/DashBoard/DashBoard.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_DashBoard_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_DashBoard_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./frontend/src/components/DashBoard/new_dashboard/new_dash_board.css":
/*!****************************************************************************!*\
  !*** ./frontend/src/components/DashBoard/new_dashboard/new_dash_board.css ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_new_dash_board_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./new_dash_board.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/src/components/DashBoard/new_dashboard/new_dash_board.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_new_dash_board_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_new_dash_board_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./frontend/src/utils/kenya.json":
/*!***************************************!*\
  !*** ./frontend/src/utils/kenya.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"id":"kenya","name":"Kenya","viewBox":"0 0 457.63434 580.54065","layers":[{"id":"ke-28","name":"Mombasa","d":"m 324.53705,546.78063 0,0 -0.43,0.09 0.26,-0.21 0.17,0.12 z m 3.27,-3.23 0,0 0.41,0.73 -0.14,0.32 0.36,-0.43 1.25,0.63 -0.2,0.84 -1.71,3.27 -0.9,-0.58 0.71,-1.39 -0.36,-0.03 -1.33,-1.78 -0.73,0.72 -0.01,0.77 -0.51,0.1 0.39,-0.66 -0.52,-0.9 0.3,-0.37 -0.15,-0.45 0.41,-0.42 0.21,0.14 -0.22,-0.46 0.48,-0.03 0.09,0.23 0.24,-0.23 0.04,0.23 0.52,-0.16 0.25,0.44 -0.29,-0.67 0.63,0.17 0.45,-0.21 0.07,-0.54 0.26,0.72 z m 0.33,-1.46 0,0 -0.09,-0.11 0.1,0.04 -0.01,0.07 z m 0.96,-0.42 0,0 0.56,0.31 -0.32,0.24 0.13,0.32 0.31,0 -0.09,0.49 0.42,0.91 -0.7,0.51 -0.43,-0.25 -0.02,-0.39 -0.03,0.24 -0.81,-0.68 -0.39,-1.12 1.37,-0.58 z m 0.12,-2.06 0,0 -0.12,-0.13 0.15,-0.12 -0.03,0.25 z m -2.96,-1.82 0,0 -0.16,-0.06 0.17,-0.03 -0.01,0.09 z m 1.9,-0.1 0,0 0.41,0.05 -0.19,0.37 0.48,0.91 -0.1,0.24 -0.45,-0.13 0.11,-0.36 -0.85,-0.53 -0.42,0.6 -0.84,-0.42 0.26,-0.8 0.45,0.22 0.74,-0.35 0.4,0.2 z m -2.56,0.36 0,0 0.24,-0.08 0.04,0.65 -0.63,0.56 0.85,-0.26 0.19,0.23 -0.19,0.14 0.7,0.16 -0.05,0.34 0.27,-0.47 0.41,0.07 0.28,2.14 0.56,0.06 -0.09,0.27 -0.62,-0.09 -0.15,0.29 0.23,0.3 -3.11,0.13 0.19,-1.11 -0.76,0.02 -0.41,-0.33 0.03,-1.45 0.37,-0.43 -0.36,-0.58 0.89,-0.46 0.85,-1.14 0.44,0.32 -0.17,0.72 z m 4.77,-2.41 0,0 0.57,0.02 -0.34,0.56 0.29,-0.14 0.06,0.51 0.61,0.29 -0.49,0.21 -0.66,-0.3 -0.03,0.36 0.83,-0.01 -0.13,0.25 0.5,-0.22 -0.23,0.32 0.31,0.17 0.05,-0.68 0.84,0.32 0.68,-0.25 1.58,0.56 -2.03,2.32 -0.18,0.73 0.25,0.46 -1.54,2.06 -0.82,0.38 -0.46,-0.46 -0.01,-0.67 -0.42,-0.09 0.19,-0.49 -0.31,-0.1 -0.1,-0.4 0.28,-0.09 0.04,-0.46 -0.12,0.41 -0.68,-0.07 0,-0.44 0.6,-0.38 -0.25,-0.6 0.32,-0.44 -0.25,-0.14 -0.02,-0.78 -0.19,0.48 -0.23,-0.44 0.12,-1.35 -0.22,-0.2 -0.13,0.63 -0.47,-0.26 0.27,-0.47 -0.18,-0.55 -0.44,-0.27 0,-0.31 1.64,-0.25 0.9,0.27 z"},{"id":"ke-19","name":"Kwale","d":"m 314.37705,580.29063 0,0 -0.16,-0.09 0.21,-0.07 -0.05,0.16 z m -0.28,-1 0,0 -0.1,-0.07 0.12,-0.02 -0.02,0.09 z m -0.15,0 0,0 -0.18,-0.07 0.08,-0.04 0.1,0.11 z m -1.96,-1.71 0,0 1.61,0.21 0.33,-0.22 0.27,0.78 -0.23,0.14 -0.86,-0.42 -1.38,0 0.23,-0.22 -0.2,-0.39 0.23,0.12 z m -7.64,-0.21 0,0 0.08,-0.29 0.09,0.12 -0.17,0.17 z m -0.73,-0.39 0,0 -0.06,-0.18 0.22,0.11 -0.16,0.07 z m 0.66,0.19 0,0 -0.39,-0.31 0.24,-0.12 0.15,0.43 z m -0.54,-0.46 0,0 -0.04,-0.02 0.04,-0.1 0,0.12 z m 0.71,-0.11 0,0 -0.21,0.03 0.12,-0.22 0.09,0.19 z m 0.31,-0.54 0,0 -0.09,-0.06 0.13,-0.29 -0.04,0.35 z m 0.45,-0.43 0,0 -0.22,-0.13 -0.01,-0.37 0.23,0.5 z m 0.29,-0.28 0,0 -0.11,-0.11 0.46,-0.27 -0.35,0.38 z m 0.8,-0.27 0,0 -0.3,-0.07 -0.07,-0.1 0.37,0.17 z m 1.43,-0.93 0,0 0.11,0.27 -0.31,-0.25 0.1,-0.41 0.1,0.39 z m 6.84,-1.09 0,0 -0.54,0.03 0.53,-0.18 0.01,0.15 z m -0.48,-0.12 0,0 -0.23,-0.08 0.15,0 0.08,0.08 z m -5.25,0.01 0,0 -0.41,0.9 -0.22,-0.85 0.52,-0.21 0.11,0.16 z m 5.33,-0.11 0,0 -0.08,-0.08 0.08,0 0,0.08 z m 0.71,-0.12 0,0 -0.09,-0.1 0.1,-0.06 -0.01,0.16 z m 2.18,-0.66 0,0 -0.01,0.89 -0.71,0.85 -0.26,-0.07 -0.16,-1.43 -0.43,-0.44 0.29,0.24 0.07,-0.45 0.1,0.24 0.64,0.16 0.44,-1.52 0.47,0.26 -0.06,0.92 -0.38,0.35 z m 4.57,-6.57 0,0 -0.08,-0.19 0.22,-0.1 -0.14,0.29 z m -12.26,-50.46 0,0 0.45,1.35 0.68,0.2 0.48,0.54 -0.26,2.03 0.33,0.08 0.35,0.9 -0.04,2.27 -0.22,-0.02 -0.18,0.52 0.37,0.31 0.19,1.16 0.92,0.73 1.05,-0.23 0.04,1.7 -0.64,0.31 0.42,0.24 0.04,0.37 -0.75,0.48 0.11,0.97 1.11,0.97 0.28,-0.23 0.33,0.16 0.73,-0.16 1.42,1.61 1.2,0.59 1,1.28 0.62,0.23 0.33,0.98 1.15,0.85 -0.16,0.26 0.18,0.41 0.42,0.11 -0.15,0.93 1.08,1.33 -0.09,1.27 0.64,-0.47 0.78,0.56 0.15,0.59 -0.41,0.94 0.79,1.01 0.12,2.76 0.45,0.97 -0.57,0.98 1.05,-0.25 0.01,-0.77 0.73,-0.72 1.33,1.78 0.36,0.03 -0.71,1.39 0.88,0.59 -1.57,2.65 -0.87,3.06 -0.86,0.07 0.76,0.05 0.03,0.74 -2.79,6.8 -0.6,2.72 -0.29,-0.04 0.18,-0.89 -0.24,-0.8 -0.29,-0.22 -0.27,0.17 -0.14,-0.37 -0.12,0.2 -0.52,-0.15 -0.12,1.22 0.17,-0.29 0.15,0.27 -0.2,0.89 -0.38,0.3 -0.7,-0.12 0.56,0.26 -0.12,1.29 -1.16,1.17 -0.81,2.52 -0.22,-0.11 -0.07,-0.61 -0.8,-0.82 -0.28,0.78 -0.6,-0.33 -0.3,0.19 0.24,1.07 -0.65,-0.08 -0.32,0.92 -0.25,-0.14 -0.82,0.4 0.09,-0.52 -0.89,0 -0.09,-0.21 -0.06,0.88 0.64,0.42 0.15,1.54 0.34,-0.48 -0.28,0.79 0.78,2.76 -1.34,0.14 -1.8,-0.6 -1.09,0.35 -0.53,-0.53 -0.09,0.18 -0.06,-0.25 -0.18,0.2 -0.23,-0.13 -0.06,-0.52 0.28,-0.53 0.33,0.27 0.02,-0.37 0.33,0.06 -0.41,-0.57 -0.57,0.25 0.68,-0.69 -0.24,-0.23 0.15,-0.82 0.63,-0.65 0.35,0.08 -0.16,-0.43 -0.57,0.09 -0.57,-0.51 0.33,0.69 -1.39,0.16 -0.88,0.99 -0.12,-0.28 -0.16,0.3 -0.18,-0.34 -0.52,0.22 -1,-0.87 -0.15,0.14 0.57,1.3 0.97,0.45 -0.36,0.16 -0.27,-0.3 -0.55,0.89 0.03,-0.54 -0.21,-0.09 -0.41,0.83 -0.23,-0.29 -0.45,0.27 0.37,0.21 -0.37,0.13 -0.2,0.54 0.56,-0.03 -0.84,0.15 -0.39,0.76 0.16,0.33 0.4,-0.1 -0.28,0.7 -0.29,-0.2 0.14,0.34 0.33,0.27 0.36,-0.29 -0.41,0.67 -0.66,-0.11 -0.24,-0.52 -0.48,0.08 -0.15,-0.53 -42.58,-29.86 28.52,-10.22 5.24,-11.41 -6.26,-3.69 2.15,-3.64 5.5,3.29 1.77,-7 11.87,0.07 1.09,-0.26 z"},{"id":"ke-39","name":"Taita Taveta","d":"m 265.18705,481.59063 0,0 1,0.39 1.17,0.04 0.58,0.65 0.84,-0.22 -0.04,0.63 1.98,0.37 1.07,0.95 0.22,0.61 1.8,-0.15 0.6,-0.28 1.62,0.64 2.22,0.05 0.32,0.27 1.67,0.25 -0.09,0.35 -0.57,0.1 0.44,0.43 1.68,-0.48 0.39,-0.39 0.32,0.44 0.92,-0.2 1.72,-1.08 1.21,0.35 0.96,-0.25 0.3,-0.33 2.07,0.34 0.44,-0.07 0.65,-0.76 1.95,-0.32 0.47,0.22 0.51,-0.19 0.03,0.55 0.91,0.56 1.03,0.1 0.07,0.45 0.34,0.15 0.13,-0.54 0.87,-0.41 0.48,-0.66 0.89,-0.31 0.33,1.28 0.45,0.02 0.14,0.42 0.49,-0.24 0.69,1.19 0.32,-0.03 0.33,-0.48 0.42,0.37 0.78,-0.13 1.28,0.44 -8.95,35.54 -5.5,-3.29 -2.15,3.65 6.25,3.68 -5.23,11.41 -28.51,10.22 -37.89,-26.58 -1.32,-3.22 -0.95,-4.27 -0.94,-0.31 -0.41,-0.48 -1.37,-0.17 -0.7,-0.87 -0.85,-0.26 -2.84,0.7 -0.87,0 -0.15,-0.5 0.62,-0.68 0.56,-2 -0.22,-0.31 -0.55,0.16 -0.66,-0.25 -0.73,0.23 0,-1.23 4.38,-4.77 1.04,-0.14 0.28,-0.36 0,-1.51 1.53,-0.69 -1.18,-7.39 5.89,-0.38 0.61,-0.37 1.02,0.45 0.63,0.68 1.13,-0.42 0.07,-5.7 0.95,-0.07 1.39,-10.96 1.33,-1 1.21,-5.24 1.96,0.67 7.72,-4.13 1.08,-1 1.33,0.01 0.61,-1.1 0.32,0.83 5.91,4.33 2.82,3.61 1.79,3.08 1.73,1.79 0.84,0.53 0.71,0.05 1.18,1.57 1.11,0.94 0.5,1.03 1.75,-0.73 0.26,0.34 1.18,-0.01 0.33,-0.48 1.12,-0.07 0.43,0.35 z"},{"id":"ke-94","name":"Kilifi","d":"m 346.49705,505.25063 0,0 -0.11,-0.05 0.06,-0.02 0.05,0.07 z m 0.63,-1.62 0,0 -0.07,-0.29 0.41,-0.14 -0.34,0.43 z m -0.88,-0.45 0,0 -0.27,0.49 -0.64,-0.27 0.81,-0.2 0.12,-0.37 -0.02,0.35 z m 1.32,-0.41 0,0 -0.06,-0.09 0.07,-0.07 -0.01,0.16 z m -0.74,0.08 0,0 -0.37,-0.2 0.11,-0.55 0.26,0.75 z m 11.07,-21.23 0,0 -0.07,-0.1 0.37,-0.41 -0.3,0.51 z m 0.53,-0.31 0,0 -0.39,-0.89 0.35,0.48 0.04,0.41 z m -0.9,-0.31 0,0 -0.21,-0.38 0.14,-0.46 0.07,0.84 z m 0.16,-1.79 0,0 -0.05,0.51 -0.2,-1.09 0.55,-1.76 -0.44,1.7 0.14,0.64 z m 0.35,-3.26 0,0 -0.18,-0.54 0.2,-0.29 -0.02,0.83 z m 0.83,-3.83 0,0 -0.15,-0.14 0.12,-0.15 0.03,0.29 z m -0.25,-0.33 0,0 -0.08,-0.07 0.08,-0.02 0,0.09 z m -0.36,-1.16 0,0 -0.02,0.27 -0.32,-0.38 0.34,0.11 z m -0.48,-0.04 0,0 -0.28,-0.39 0.24,-0.01 0.04,0.4 z m 0.97,-0.34 0,0 0.08,-0.61 0.1,0.12 -0.18,0.49 z m -0.5,-0.29 0,0 0,-0.31 0.14,-0.1 -0.14,0.41 z m 0.11,-0.61 0,0 -0.01,-0.13 0.31,-0.28 -0.3,0.41 z m 0.56,-0.7 0,0 0.2,-0.61 0.14,-0.02 -0.34,0.63 z m 0.03,-0.42 0,0 -0.04,-0.09 0.09,-0.23 -0.05,0.32 z m -0.21,-0.07 0,0 -0.48,0.04 0.36,-0.35 0.12,0.31 z m -0.78,-0.34 0,0 -0.13,-0.07 0.15,-0.15 -0.02,0.22 z m 0.19,-0.32 0,0 -0.15,-0.07 0.05,-0.12 0.1,0.19 z m 0.33,-0.56 0,0 0.17,0.39 -0.36,0.4 0.16,-1.21 0.03,0.42 z m -0.13,-0.58 0,0 -0.14,0.2 -0.62,-0.08 0.16,0.8 -0.49,-0.03 0.46,0.82 0.3,0.15 0.12,-0.26 0.11,0.88 -0.39,0.55 -0.28,-0.55 0.07,0.58 -0.23,0.08 0.37,0.11 0.04,0.44 -0.49,-0.04 0.12,0.46 -0.28,0.24 0.31,0.13 0.15,0.46 0.26,-0.43 0.75,1.39 -0.14,0.68 0.18,-0.13 0.12,0.21 -0.54,0.5 0.09,0.34 -0.34,0.81 0.05,-0.36 -0.15,0.17 -0.34,1.42 -0.29,0 -0.13,-0.76 -0.14,1.3 -0.27,-0.17 -0.2,0.29 0.22,0.5 1.22,-0.68 -0.43,1.35 -0.36,-0.51 -0.44,0.33 -0.01,0.51 0.67,-0.2 -0.12,1.31 -0.45,0.16 0.15,1.36 -0.28,2.61 0.24,-0.12 -0.49,0.49 0.11,1.62 0.38,-0.27 -0.26,-0.19 0.44,-0.5 0.24,0.33 0.31,-0.12 0.15,-0.79 0.64,-0.43 0.37,-1 0.91,-0.22 1.03,0.15 1.05,-0.93 0.25,0.52 -0.21,0.51 -0.31,-0.2 -0.6,0.49 -0.96,0.25 -0.54,0.66 -0.05,0.64 -0.78,0.27 -0.5,0.52 -0.2,0.6 0.2,0.78 -1.08,1.14 0.32,0.72 0.07,1.9 -1.32,1.6 -0.7,-0.56 0.38,0.53 -0.08,0.39 0.21,-0.08 -0.76,1.29 -0.2,1.01 0.62,1.06 -0.12,1.42 0.33,0.52 -0.67,1.86 -3.8,2.66 -1.62,0.8 -0.02,0.29 -0.6,0.1 -0.02,0.32 -0.42,-0.07 -1.82,1.6 -0.3,-0.09 0.12,-0.65 0.64,-0.47 0.55,0.13 0.26,-0.21 -0.35,-0.08 0.13,-0.71 -0.54,-1.05 0.74,-1.09 -2.66,1.03 0.31,0.59 -0.44,0.4 -0.37,-0.17 -0.22,0.2 0.14,0.9 -0.31,0.32 0.53,0.25 -0.47,0.73 0.63,-0.6 0.31,0.42 0.75,0.22 0.12,1.1 -2.32,4.8 -1.46,4.33 -1.96,3.76 -1.29,-0.05 -1.71,-1.66 -1.28,0.14 -0.11,-0.2 -0.11,0.35 -0.36,0.06 -0.25,-0.86 0.23,0.07 -0.06,-0.55 0.39,-0.12 -0.07,-0.27 -0.82,0.61 -0.01,0.47 0.49,0.75 1.33,0.05 0.05,0.43 0.3,0.14 -0.74,0.28 -0.37,-0.41 -0.58,0.16 0.76,0.6 0.14,0.71 0.32,-0.25 0.25,0.44 0.75,-0.1 0.42,-0.69 0.17,0.21 0.45,-0.47 0.41,0.39 1.02,0.23 0.32,0.71 -0.12,1.29 -0.6,0.17 -0.91,-0.2 0.91,0.29 0.6,-0.17 0.27,0.97 -1.49,3.91 -0.81,3.25 -3.29,7.07 -1.17,0.71 -0.9,-0.49 -0.59,0.24 -0.68,-0.18 -0.23,-0.39 0.1,-0.49 -0.46,-0.49 0.84,-1.49 -0.01,-0.22 -0.31,0.04 -0.21,0.68 -0.76,0.37 -0.25,-0.29 -0.12,0.88 -1.05,-0.18 -1.64,0.25 0.06,0.49 0.37,0.09 0.19,0.55 -0.37,0.33 0.19,0.54 -0.51,-0.13 -0.74,0.35 -0.47,-0.42 -0.63,0.22 -0.59,-0.63 -0.85,1.14 -0.86,0.41 0.33,0.63 -0.38,0.43 -0.77,-0.56 -0.64,0.47 0.09,-1.27 -1.08,-1.33 0.15,-0.93 -0.42,-0.11 -0.28,-1 -0.89,-0.52 -0.33,-0.98 -0.62,-0.23 -1,-1.28 -1.2,-0.59 -1.42,-1.61 -0.73,0.16 -0.33,-0.16 -0.28,0.23 -1.11,-0.97 -0.11,-0.97 0.75,-0.48 -0.04,-0.37 -0.42,-0.24 0.64,-0.31 -0.04,-1.7 -1.05,0.23 -0.92,-0.73 -0.19,-1.16 -0.37,-0.31 0.18,-0.52 0.22,0.02 0.04,-2.27 -0.35,-0.9 -0.33,-0.08 0.26,-2.03 -0.48,-0.54 -0.68,-0.2 -0.45,-1.35 -1.09,0.26 -11.87,-0.07 7.22,-28.51 38.37,-43.45 16.35,23.1 z"},{"id":"ke-21","name":"Lamu","d":"m 389.06705,442.41063 0,0 0.36,0.14 -0.04,0.37 -0.47,-0.23 -0.02,-0.39 0.17,0.11 z m 3.99,-0.52 0,0 -0.32,0.03 0.39,-0.46 -0.07,0.43 z m -1.34,-0.54 0,0 -0.09,-0.16 0.14,0.09 -0.05,0.07 z m 1.64,0.07 0,0 -0.01,-0.33 0.17,0.1 -0.16,0.23 z m -1.68,-0.82 0,0 0.54,-0.04 -0.72,0.28 -0.09,-0.37 0.27,0.13 z m -0.78,-0.47 0,0 0.24,0.1 -0.09,0.24 -0.39,-0.18 0.24,-0.16 z m -1.14,0.05 0,0 -0.12,-0.12 0.07,-0.01 0.05,0.13 z m 9.53,-0.47 0,0 1.34,2.38 -0.11,0.3 -2.55,0.13 -3.12,1.97 -0.04,-1.94 0.19,0.02 0.06,-0.88 0.32,-0.43 1.25,0.15 -0.63,-0.61 0.48,-0.52 1.3,-0.03 0.21,-0.29 0.12,0.27 0.52,-0.54 0.48,-0.16 0.18,0.18 z m -4.31,0.18 0,0 0.45,-0.47 -0.15,0.33 -0.3,0.14 z m -0.22,-0.44 0,0 0.05,-0.13 0.17,-0.02 -0.22,0.15 z m 0.2,-0.55 0,0 0.01,0.13 -0.4,0.05 0.39,-0.18 z m 6.65,-0.21 0,0 -0.15,-0.12 0.13,0 0.02,0.12 z m 0.55,-0.09 0,0 -0.1,-0.1 -0.01,-0.12 0.11,0.22 z m 2.51,-0.25 0,0 0.27,-0.03 0.08,0.28 -0.55,-0.29 0.2,0.04 z m -0.75,-0.11 0,0 0.87,2.08 -0.84,0.85 -1.05,1.93 -0.95,0.52 -1.13,-0.05 -0.33,-0.44 0.49,-0.66 0.09,0.26 0.16,-0.34 0.66,-0.32 1.04,0.32 0.5,-0.96 -0.55,0.42 -0.57,-0.35 -0.59,0.15 -0.37,-0.2 -1.05,-1.47 -0.44,-1.72 0.81,0.12 0.46,0.44 0.07,-0.17 0.16,0.44 0.56,0.01 -0.36,1.02 0.43,0.27 0.17,-0.18 -0.33,-0.24 0.73,-0.91 -0.15,-0.39 0.53,0.03 0.46,0.58 -0.51,0.51 0.31,0.4 0.76,-0.46 -0.27,-0.28 0.23,-0.6 -0.44,-0.47 0.21,-0.26 0.23,0.12 z m 0.26,-3.49 0,0 -0.06,-0.03 0.03,-0.07 0.03,0.1 z m 4.63,-0.1 0,0 -0.72,-0.04 -0.15,-0.44 0.68,-0.12 0.34,0.3 -0.15,0.3 z m -4.13,-1.05 0,0 0.19,0.27 -0.79,0.34 0.18,-0.55 0.42,-0.06 z m 2.33,-0.08 0,0 -0.41,0.05 0.15,-0.27 0.26,0.22 z m 3.02,-0.52 0,0 0.18,0.23 -0.24,-0.05 0.06,-0.18 z m -4.77,-1.92 0,0 -0.22,-0.13 0.16,-0.15 0.06,0.28 z m 0.04,-0.4 0,0 0.14,0.09 -0.15,-0.01 0.01,-0.08 z m 8.18,0.81 0,0 0.44,-0.2 0.36,0.45 -0.66,0.29 -0.87,-0.4 -0.11,-0.3 0.28,-0.23 0.06,-0.62 0.31,0.21 -0.13,0.58 0.32,0.22 z m -4.95,-1.05 0,0 0.41,0.32 -0.51,0.93 -0.94,0.08 -0.92,0.94 -0.61,0.02 0.47,0.45 -0.22,0.25 -0.95,0.04 -0.66,-0.39 -0.08,-0.81 -0.75,-0.2 0.21,-0.56 0.95,-0.33 0.32,0.03 -0.09,0.51 0.63,0.46 0.06,-1.11 0.76,0.25 0.58,-0.54 0.79,-0.23 -0.03,-0.2 0.58,0.09 z m 1.83,-1.91 0,0 0.67,0.22 -0.11,-0.31 0.28,-0.06 0.98,0.97 -0.15,-0.46 0.31,-0.11 0.7,0.62 -0.29,0.27 0.83,-0.13 -0.43,-0.45 0.17,-0.07 0.53,0.43 0.85,0.18 0.13,0.52 -0.73,0.8 -0.11,-0.35 -0.58,0.36 -0.23,-0.77 -1.45,-0.07 -0.56,0.98 -0.3,0.01 0.67,0.42 0.16,0.51 -0.24,0.53 0.53,0.35 -0.55,0.48 -1.1,-0.16 0.28,-0.24 -0.32,-0.08 -0.05,-0.59 0.48,-0.2 -0.13,-0.27 -0.15,0.33 -0.32,-0.03 -0.08,-0.31 -0.29,0.1 0.28,0.4 -0.69,0.33 0.53,0.13 -1.16,0.42 -0.65,-0.07 0.45,-0.2 0.27,-0.62 -0.31,-0.02 0.28,-1.18 0.61,-0.05 -0.51,-0.82 0.96,-0.36 0.35,-0.65 -0.31,-0.23 0.41,-0.71 0.09,0.21 z m 1.44,0.06 0,0 -0.16,-0.16 0.15,-0.14 0.01,0.3 z m -0.3,-0.13 0,0 -0.13,-0.21 0.15,0.06 -0.02,0.15 z m -7.65,-0.2 0,0 0.11,0.16 -0.38,0.02 0.13,-0.58 0.14,0.4 z m 13.19,-2.58 0,0 0.35,0.1 0.3,0.6 -0.72,-0.38 0.07,-0.32 z m -1.35,-0.96 0,0 -0.22,0.24 0.02,-0.27 0.2,0.03 z m -1.23,-0.58 0,0 0.32,0.1 -0.04,0.39 -0.31,0.07 -0.13,-0.29 -0.11,0.28 -0.58,-0.1 0.44,-0.16 0.13,-0.35 0.28,0.06 z m 1.69,0.35 0,0 -0.3,-0.41 0.34,-0.32 -0.04,0.73 z m 5.27,1.12 0,0 -1.31,1.57 -0.36,0.06 1.37,-2.01 1.76,-1.73 -1.46,2.11 z m -1.52,-2.38 0,0 0.1,0.1 -0.4,-0.15 0.3,0.05 z m -0.75,-0.17 0,0 0.29,0.14 -0.39,-0.07 0.1,-0.07 z m 0.24,-0.1 0,0 0.02,0.11 -0.24,-0.08 0.22,-0.03 z m -4.5,0.18 0,0 0.01,0.24 0.52,-0.21 0.14,0.36 -1.86,0.22 0.32,-0.61 0.17,0.15 0.17,-0.28 0.37,0.13 0.2,-0.22 -0.04,0.22 z m 4.12,-0.12 0,0 -0.11,-0.12 0.15,-0.01 -0.04,0.13 z m 2.31,-0.56 0,0 0.17,0.2 -0.28,0.44 0.11,-0.64 z m -0.72,0.09 0,0 -0.13,-0.11 0.28,-0.02 -0.15,0.13 z m -4.48,0.01 0,0 -0.07,0.22 -0.19,-0.24 0.21,-0.24 0.05,0.26 z m 1.27,-0.99 0,0 -0.15,-0.1 0.21,-0.17 -0.06,0.27 z m 1.42,-0.13 0,0 -0.13,-0.29 0.15,0.18 -0.02,0.11 z m 6.3,-0.18 0,0 -1.08,1.05 0.77,-1.21 0.31,0.16 z m -7.42,-0.18 0,0 -0.25,0.08 0.11,-0.16 0.14,0.08 z m 1.48,0.07 0,0 0.02,-0.2 0.19,-0.03 -0.21,0.23 z m -0.92,-0.32 0,0 -0.12,-0.13 0.19,-0.12 -0.07,0.25 z m -0.77,-0.23 0,0 0.08,0.27 -0.3,0.09 -0.02,-0.32 0.24,-0.04 z m 7.85,0.03 0,0 -0.58,0.25 0.25,-0.33 0.33,0.08 z m -7.89,-0.36 0,0 0.19,0.05 -0.23,0.17 0.04,-0.22 z m 9.11,-0.06 0,0 -0.03,-0.04 0.07,-0.04 -0.04,0.08 z m -1.11,0.77 0,0 0.47,-0.85 0.23,0.01 -0.7,0.84 z m -7.05,-0.51 0,0 0.13,-0.35 0.37,0 -0.5,0.35 z m 7.95,-0.31 0,0 -0.04,-0.04 0.16,-0.07 -0.12,0.11 z m 0.48,-0.73 0,0 0.2,-0.44 0.19,0.03 -0.39,0.41 z m 1.44,-2.2 0,0 0.2,0.13 -0.53,0.22 0.33,-0.35 z m 2.26,-1.06 0,0 -3.07,2.81 1.51,-1.94 1.06,-0.57 0.22,-0.38 0.28,0.08 z m 0.1,-0.08 0,0 -0.05,-0.08 0.09,-0.1 -0.04,0.18 z m 0.58,-0.66 0,0 -0.04,-0.04 0.06,-0.1 -0.02,0.14 z m -0.74,0.01 0,0 -0.05,-0.11 0.14,-0.18 -0.09,0.29 z m 0.87,-0.27 0,0 0.17,-0.48 0,0.2 -0.17,0.28 z m 1.3,-0.89 0,0 -0.09,-0.02 0.16,-0.19 -0.07,0.21 z m 0.53,-1.03 0,0 -0.06,-0.01 0.05,-0.14 0.01,0.15 z m 0.08,-0.2 0,0 -0.07,-0.01 -0.01,-0.08 0.08,0.09 z m 1.07,-1.53 0,0 -0.61,0.78 0.33,-0.81 0.75,-0.38 -0.47,0.41 z m 0.3,-0.44 0,0 -0.1,-0.34 0.17,0.23 -0.07,0.11 z m -5.07,3.94 0,0 0.2,0.01 -0.38,0.62 -1.3,1.02 -0.16,0.34 0.19,0.11 -0.46,0.51 -0.21,0.09 -0.36,-0.5 -0.65,0.29 -0.02,0.23 0.64,-0.2 0,0.25 0.46,0.22 0.27,-0.2 -1.65,1.48 -0.57,1.11 -0.67,0.17 -0.91,1.2 -0.01,0.51 -0.56,0.38 -0.11,0.63 -0.03,-0.39 -0.44,0 -0.49,0.8 -1,0.78 -0.13,-1.09 0.43,-0.5 -0.14,-0.88 -0.7,-0.25 -0.18,0.25 -0.13,-0.37 -0.38,0.4 -0.34,-0.11 0.17,0.37 -0.35,0.15 0.11,0.32 -0.71,-0.14 0.31,-0.32 -0.3,0 0,-0.34 0.4,0.02 -0.03,-0.3 0.52,-0.33 -0.21,-0.82 0.19,-0.28 -0.77,0.6 0.14,-0.66 -0.3,0.23 0.04,-0.63 -1,0.57 0.35,-0.77 -0.28,-0.1 0.33,-0.44 -0.92,0.63 -0.44,0 -0.28,0.6 -0.77,0.62 -0.24,-0.1 -0.09,0.46 -0.31,-0.19 0.01,0.34 -0.56,0.15 0.11,0.42 -0.94,0.87 0.07,-0.31 -0.84,0.75 -0.35,-0.09 -0.12,0.35 -0.22,-0.35 -0.2,0.72 -0.33,-0.69 -0.97,0.5 -0.21,-0.15 -1.27,0.87 -0.24,-0.14 0.05,0.47 -0.35,-0.01 0.15,0.43 -0.22,0.22 0.25,0.19 -0.26,0.03 0.03,0.65 -0.13,-0.52 -0.27,-0.01 -0.19,0.44 -0.45,0.23 0.05,0.31 -0.66,1.1 -0.56,-0.3 -0.05,0.34 -0.48,0.35 -0.28,-0.36 0.22,-0.43 -0.2,-0.3 -0.87,0.42 -0.17,-0.8 -0.38,-0.32 0.44,-0.35 -0.39,-0.94 0.24,-0.62 0.26,0.06 -0.13,-1.36 0.22,-0.07 -0.61,-0.71 0.29,-0.06 0.9,-1.5 0.18,0.25 0.08,-0.36 0.28,0.12 -0.05,-0.67 0.49,-0.17 0.22,0.22 0.15,-0.44 0.94,-0.72 0.21,0.11 -0.08,-0.35 0.32,-0.27 -0.38,-0.77 -0.24,-0.02 -0.27,0.66 -0.96,0.87 -0.48,-0.1 -0.2,0.3 -0.26,-0.55 0.01,0.48 -0.39,0.38 0.28,0.13 -0.64,0.31 0.19,0.16 -0.42,-0.02 -0.35,-0.39 0.27,0.63 0.41,0.11 -0.24,0.46 -0.26,0.07 -0.47,-0.38 0.27,0.44 -0.34,0.05 -0.73,0.94 0.2,0.04 0.02,0.73 0.41,0.11 -0.37,0.79 0.24,0.54 -0.41,0.47 0.02,0.49 -0.21,-0.36 0.13,0.57 -0.68,1.29 0.38,0.21 0.05,0.65 0.21,0.01 -0.17,0.73 0.26,0.55 -0.22,0.36 -0.37,-0.38 -0.17,0.35 0.25,0.26 -0.33,0.09 -0.26,-0.04 -0.36,-0.78 0.37,-0.57 -1.16,-1.06 0.13,-0.14 -0.33,-0.03 0.4,-0.48 0.27,0.17 -0.27,-0.35 0.43,0.03 0.15,-0.61 -0.89,-0.06 -0.32,-0.91 -1.02,-0.07 0.29,-0.44 -0.44,0.08 -0.16,0.48 -0.33,-0.05 0.46,-0.19 -0.9,0.01 -0.28,-0.35 0.36,-0.71 -0.35,0.06 -0.03,-1.18 -0.54,1.19 -0.67,-0.22 0.19,-0.54 -0.26,-0.69 -0.62,-0.32 0.04,-0.56 -0.28,0.55 0.5,0.87 -0.14,0.25 -0.61,-0.07 0.03,-0.24 -1.04,0.05 0.26,-0.14 -0.34,0.02 0.19,-0.42 -0.35,0.37 -0.36,-0.47 -0.93,-0.04 -0.05,-0.33 -0.23,0.3 -0.44,-0.15 -0.06,-0.36 -0.27,0.5 0.94,0.31 0.39,0.26 -0.14,0.23 0.27,-0.07 0.38,0.44 1.01,0.32 -0.29,0.35 0.52,-0.02 0.67,0.39 0.51,-0.13 0.69,0.49 -0.13,0.23 0.59,0.04 0.49,0.48 -0.05,0.23 -0.47,-0.08 -0.26,0.35 -1.46,0.07 -0.24,0.4 1.11,-0.13 0.63,0.3 0.43,-0.53 0.72,0.33 0.59,-0.17 0.17,-0.31 0.6,0.12 -0.17,2.03 -0.72,-0.54 0,-0.27 -0.58,0.03 0.38,0.3 -0.52,0.37 0.88,0.34 0.22,0.63 -0.78,-0.4 -0.41,0.57 -1.3,0.32 1.03,0.07 0,0.32 0.9,-0.84 0.03,0.33 -0.5,0.37 0.4,0.13 0.35,-0.35 0.32,0.16 0.17,-0.17 -0.12,0.76 0.48,-0.35 0.47,0.69 -0.1,2.18 0.44,1.76 -0.17,1.42 0.23,1.55 0.38,0.62 -1.31,-0.51 -0.22,-0.79 -0.14,0.24 -0.3,-0.2 -0.27,0.22 0.12,-0.76 -0.38,-0.18 -0.09,0.54 -0.67,0.27 0.53,0.15 0.23,0.55 -1.29,-0.06 1.08,0.55 -0.26,0.06 0.14,0.22 -0.51,-0.16 -0.37,0.49 0.88,0.03 -1.54,0.41 0.33,-0.32 -0.32,-0.05 -1.25,0.58 0.77,-0.7 -1.24,-0.18 -1.05,0.54 -0.07,-0.29 -0.27,0 -0.32,0.39 0.31,-0.02 0.25,0.36 -1.06,0.87 -0.19,-0.89 -0.37,0.31 -0.03,-0.56 0.23,-0.17 -0.34,0.06 -0.33,0.8 -0.29,0.01 -0.52,-0.38 -0.17,-1.08 -0.11,1.02 -0.34,-0.46 -0.41,0.02 -0.25,-1.02 -0.12,0.43 -0.27,-0.57 -0.86,-0.55 0.07,-0.27 -0.59,0.12 1.03,0.78 0.71,1.23 -0.04,0.59 -0.17,-0.23 -0.37,0.64 -0.56,0.06 -0.37,-0.31 0.3,0.47 0.85,0 0.28,0.32 0.56,-0.6 0.25,0.62 1,0.47 -0.73,-0.28 -0.32,0.67 0.63,0.31 0.29,0.64 0.09,-0.17 0.15,0.65 -0.56,-0.75 -1.29,-0.49 0.24,-0.55 -0.27,-0.25 -0.27,0.37 -0.34,-0.1 -0.09,-0.34 -0.41,-0.02 0.57,0.9 -0.55,-0.13 -0.1,-0.27 -0.77,0.58 0.72,0.29 0.04,0.86 0.36,-0.17 0.89,0.3 0.05,-0.43 1.82,0.78 0.4,1.45 -0.12,0.44 0.45,0.07 0.07,0.52 0.48,0 -0.3,0.52 -0.55,0.03 0.16,0.31 0.49,-0.07 -0.52,0.34 -0.01,0.36 -0.53,0.49 0.49,-0.32 0.26,0.28 -0.08,-0.72 0.37,0.02 0.52,-0.65 -0.06,-0.49 0.3,-0.14 -0.21,-0.8 0.52,0.28 -0.08,-0.63 0.4,0.65 0.8,0.24 0.43,0.81 -0.05,1.13 -2.64,2.08 -0.47,1.39 -1.32,-0.04 -0.8,0.39 -3.83,0.68 -12.75,-4.03 -10.93,0.03 0,-8.54 -2.38,-12.35 39.73,-18.21 37.68,-3.2 -2.42,2.37 -1.54,2.46 -0.75,0.39 -2.4,2.7 -0.51,0.28 -0.44,0.82 z"},{"id":"ke-23","name":"Makueni","d":"m 208.19705,399.09063 0,0 0.26,0.16 -0.25,0.35 0.68,0.28 -0.34,0.33 1,-0.01 -0.06,0.41 0.3,0.06 1.14,-0.82 0.06,0.56 1.06,0.25 0.81,1.34 0.55,-0.14 0.1,1.37 0.99,2 1.25,-1.13 0.05,-2.26 0.6,-0.15 0.19,0.22 0.26,-0.24 0.61,1.25 0.4,0.22 0.9,-0.77 -0.2,-0.83 0.73,-0.67 0.58,-0.14 0.4,0.61 0.65,0.37 1.81,3.37 -0.17,0.36 1.12,0.95 0.05,0.94 0.55,0 0.36,0.51 -0.14,1.08 0.57,0.21 0.61,2.35 -0.22,0.77 -0.62,0 -0.15,0.65 0.5,1.02 1.84,1.94 0.68,0.4 -0.4,0.82 0.2,0.41 0.75,0.22 -0.13,0.34 0.46,1.35 -0.05,0.61 0.7,0.04 -0.55,1.66 0.34,0.5 -0.06,0.7 0.92,2.09 -0.1,0.28 0.47,0.28 -0.08,0.3 0.28,0.24 -0.12,0.46 0.27,0.2 -0.28,0.59 0.69,0.18 0.27,0.7 -0.07,0.53 0.37,0.83 -0.36,3.43 0.5,0.6 0.11,1.37 3.24,-1.11 0.39,0.85 1.22,0.39 -0.08,0.64 0.36,0.36 0.29,1.14 0.6,0.43 -0.36,0.45 0.31,0.2 0.37,2.03 0.44,-0.02 0.26,0.63 0.61,0.02 0.17,0.48 0.63,0.33 -0.17,0.8 0.37,0.15 0.11,0.61 0.42,0.33 1.3,0.18 1.55,0.99 0.65,-0.02 0.74,0.85 0.76,0.09 0.65,2.55 0.55,0.11 0.25,0.46 0.5,0 0.4,0.64 1.23,0.19 0.78,3.37 0.47,0.25 0.35,0.7 0.58,0.22 -0.04,0.5 0.56,1.01 0.07,1.11 0.89,0.42 -0.39,0.46 0.41,1.19 0.5,0.22 0.86,2.78 0.31,0.25 -0.04,0.41 0.88,0.8 0.55,2.06 2.29,5.08 -0.53,0.52 -0.24,0.88 0.48,0.42 0.27,1.18 -0.21,0.59 0.67,0.34 -0.07,0.45 0.43,0.32 -0.11,0.6 0.62,0.09 -0.22,0.64 0.58,0.21 0.86,2.3 0.69,0 0.28,1.08 1.51,1.12 -0.31,0.47 -1.2,0.02 -0.26,-0.34 -1.75,0.73 -0.5,-1.03 -1.11,-0.94 -1.18,-1.57 -0.71,-0.05 -0.84,-0.53 -1.73,-1.79 -1.79,-3.08 -2.82,-3.61 -5.91,-4.33 -0.32,-0.83 -0.61,1.1 -1.33,-0.01 -1.08,1 -7.72,4.13 -1.69,-0.45 -0.93,-1.16 -0.21,-1.12 0.35,-0.99 -0.5,-1.1 -1.18,-0.11 -0.59,-1.66 -0.72,-0.81 -1.64,-3.17 -14.41,-16.77 0.49,-0.16 0.35,-0.63 0.28,-0.05 0.33,0.46 0.47,-0.22 0,-0.33 0.81,0.24 0.5,-0.66 0.86,0 -0.11,-0.41 0.24,-0.06 0.37,-0.91 -0.19,-2 0.57,-0.29 1.1,-1.54 0.56,-0.34 0.61,0.07 -0.04,-0.24 -0.93,-0.39 -0.49,-0.96 -1.95,-0.54 -2.46,0.35 -1.56,-0.43 -1.73,-1.56 -0.83,0.04 -0.44,-0.26 0.1,-0.45 -0.46,-0.47 -4.76,-1.82 -5.23,-3.49 -2.65,-0.27 -0.29,-0.26 -0.56,0.13 -1.15,-0.69 -0.21,-1 -0.64,-1.01 -1.03,-0.5 -0.59,-0.75 -2.8,-0.12 -0.28,-0.65 -0.69,-0.37 -1.04,-1.68 0.41,-0.2 0.15,-1.54 -0.42,-0.71 -0.71,-0.31 0.36,-0.41 -0.3,-0.23 0.14,-0.52 -0.23,-0.35 1.07,-1.87 2.66,-0.26 0.8,-0.34 1.36,-1.94 2.01,1.99 0.67,-0.97 0.61,-0.02 -0.86,-2 1.42,-1.03 0.43,0.45 1.52,-0.23 0.67,0.15 0.27,-0.26 0.64,0.17 2.3,-0.96 -2.87,-5.62 -1.63,-1.62 2.77,-2.4 2.98,0.74 1.67,-0.83 0.54,0.19 0.72,-0.26 1.02,0.61 0.55,-0.16 0.36,0.72 1.64,0.02 z"},{"id":"ke-30","name":"Nairobi","d":"m 182.66705,383.30063 0,0 -0.03,0.74 -0.23,-0.1 -0.61,0.28 -0.26,0.42 -0.33,-0.01 -0.25,0.64 0.21,0.4 -2.95,-0.64 -1.27,0.5 -0.43,-1.09 -1.27,0.45 0.57,1.29 -0.21,0.27 -2.24,0.91 -2.02,1.89 0.59,0.63 0.4,0.98 1.12,0.64 0.26,1.07 0.86,0.89 -0.12,0.27 -0.81,-0.61 -0.74,0.05 -2.53,-1.06 0.21,-0.27 -0.39,-0.19 -1.26,-0.18 -0.85,-0.44 -0.32,-0.61 -0.46,0.17 -0.94,-0.46 -0.72,0.45 -0.71,-0.22 -1.15,0.2 -2.1,-0.49 -2.01,-1.57 -0.42,0.12 -0.98,-1.41 -0.19,0.09 -0.37,-0.3 0.17,-0.12 -0.53,-0.12 1.39,-2.11 0.01,-0.61 0.4,-0.36 -0.12,-0.46 1.61,0.07 0.5,-1.66 1.05,0.18 0.49,-0.84 1.18,0.51 0.81,-1.17 -0.38,-0.4 0.39,-0.64 2.42,1.34 -0.2,-0.48 1.06,0.3 0.12,-0.49 0.51,-0.05 0.15,-0.73 0.76,0.36 1.38,-0.17 -0.66,-1.17 0.63,-0.66 1.16,0.05 1.31,0.72 -1.72,1.85 0.66,0.65 1.93,0.64 1.81,-0.33 1.06,0.78 2.16,-1.54 1.03,-0.24 1.04,1.83 0.52,-0.3 0.36,0.66 -0.43,0.23 0.92,0.78 z"},{"id":"ke-10","name":"Kajiado","d":"m 138.71705,371.16063 0,0 8.89,4.19 2.54,1.9 -1.32,4.82 -1.28,1.81 9.68,1.89 0.36,0.59 -0.23,0.4 0.53,0.12 -0.17,0.12 0.37,0.3 0.19,-0.09 0.98,1.41 0.42,-0.12 1.79,1.48 2.32,0.58 1.15,-0.2 0.71,0.22 0.73,-0.45 0.93,0.46 0.46,-0.17 0.33,0.62 1.23,0.61 1.21,0.16 -0.83,3.94 0.38,0.55 2.25,-1.74 0.77,-0.18 0.76,0.11 -0.19,0.36 1.75,0.82 -0.41,0.85 0.23,0.45 -0.63,0.79 -0.21,1.52 0.26,0.47 0.96,0.49 7.51,10.07 1.33,0.52 0.51,-0.39 0.32,0.16 -0.14,0.83 0.15,0.4 0.49,0.25 -0.35,0.66 0.51,0.17 -0.54,0.79 0.05,0.42 -0.59,0.7 0.23,0.35 -0.14,0.52 0.3,0.23 -0.36,0.41 0.71,0.31 0.42,0.71 -0.13,1.48 -0.41,0.3 1.04,1.67 0.68,0.36 0.23,0.62 2.84,0.13 0.59,0.75 1.03,0.5 0.64,1.01 0.28,1.06 1.08,0.63 0.56,-0.13 0.29,0.26 2.65,0.27 5.23,3.49 4.76,1.82 0.46,0.47 -0.1,0.45 0.44,0.26 0.83,-0.04 1.73,1.56 1.56,0.43 2.46,-0.35 1.95,0.54 0.49,0.96 0.93,0.39 0.04,0.24 -0.61,-0.07 -0.56,0.34 -1.1,1.54 -0.57,0.29 0.19,2 -0.37,0.91 -0.24,0.06 0.11,0.41 -0.86,0 -0.5,0.66 -0.81,-0.24 0,0.33 -0.47,0.22 -0.33,-0.46 -0.28,0.05 -0.35,0.63 -0.49,0.16 14.41,16.77 1.64,3.17 0.72,0.81 0.59,1.66 1.18,0.11 0.5,1.1 -0.35,0.99 0.21,1.12 0.66,0.94 -1.21,5.24 -1.33,1 -1.39,10.96 -0.95,0.07 -0.07,5.68 -0.29,0.26 -0.86,0.18 -0.61,-0.68 -1.01,-0.45 -0.62,0.37 -5.89,0.38 -1.1,-6.88 -8.64,-5.87 -86.89,-48.74 0,-1.22 1.6,-0.01 0,-2.47 0.54,-1.89 -0.02,-1.98 0.24,-0.68 -0.21,-0.62 0.3,-0.61 -0.52,-1.26 0.57,-0.43 -0.98,-1.08 0.61,0.01 0.03,-0.76 0.38,0.03 0.32,-1.16 -0.07,-0.87 -0.38,-0.42 -0.15,-0.75 -0.6,0.2 0,-0.88 -0.67,-0.12 -0.07,-0.21 0.86,-1.02 0.02,-0.34 -0.58,-0.24 0.59,-0.47 0.22,-1.38 0.34,-0.22 -0.04,-0.42 0.34,0.14 0.16,-0.31 -0.12,-0.57 -0.55,-0.54 0.39,0.04 0.16,-0.3 0.5,0.34 0.07,-0.5 0.4,-0.23 -0.99,-2.82 0.28,-0.15 0.19,-1.62 0.45,-0.1 -0.05,-0.35 0.57,-0.98 0.36,0.08 0.37,-1.18 -0.09,-0.78 -1.81,-3.99 16.82,-18.02 -0.71,-7.23 z"},{"id":"ke-22","name":"Machakos","d":"m 192.86705,356.00063 0,0 0.3,-0.05 1.09,1.01 0.01,0.68 0.29,0.13 0.54,1.16 0.32,-0.01 -0.16,0.28 0.32,0.23 1.91,0 0.82,0.35 0.2,0.41 0.28,-0.32 0.76,0.24 0.81,-0.33 0.06,0.62 0.74,0.28 0.83,-0.21 0.35,0.45 1.54,0.32 -0.13,0.59 1.31,1.07 0.57,-0.43 0.69,0.16 0.28,0.83 0.75,-0.25 -0.04,-0.94 0.74,-0.74 0.34,0.07 0.49,-0.52 0.29,0.31 1.27,-0.13 0.23,-0.44 -0.19,-0.37 0.79,-0.1 0.21,-0.42 1.17,-0.15 0.18,-0.76 0.34,0 0.28,0.38 0.33,-0.19 0.66,0.31 0.41,-0.09 0.37,-0.96 0.55,-0.37 0.04,-1.52 0.46,0.05 0.49,-0.7 0.5,-0.18 0.97,-0.04 0.47,-0.33 0.5,0.16 0.94,2.62 1.67,-0.06 0.48,-0.29 0.56,-0.91 0.14,0.79 0.71,-0.59 0.5,0.07 0.28,0.43 0.66,-0.13 0.21,1.2 -0.44,0.2 0.19,0.34 -0.73,0.69 0,0.6 -0.3,0.14 -0.35,0.91 0.25,0.51 -0.37,0.39 0.64,0.21 0.27,0.61 0.27,-0.15 -0.04,0.59 0.23,-0.04 0.01,0.47 0.45,0.26 0.11,0.38 -0.3,0.06 -0.03,0.41 0.42,0.87 -0.18,-0.17 -0.33,0.32 0.73,0.04 0.59,0.58 -0.35,0.16 0.2,0.23 -1.09,0.7 0.17,0.63 -0.27,2.41 -0.86,1.22 -0.6,0.12 -0.11,0.57 -0.6,0.72 -0.59,1.96 -3.34,-2.84 -8.24,0.48 0.17,3.5 0.83,-0.29 0.74,0.41 2.3,4.05 1.35,1.15 -0.1,0.33 1.49,2.58 1.09,2.8 0.33,0.1 0.42,0.84 1.14,-0.12 0.55,0.36 1.23,1.52 0.1,0.49 0.34,-0.07 0.52,2.53 0.37,0.49 -1.16,0.38 -1.07,0.95 -0.39,0.88 -2.2,0.58 -1.43,-0.43 -0.87,0.57 0.42,0.58 0.64,0.07 1.11,1.85 0.99,0.75 0.2,0.63 -1.11,0.52 -0.2,0.29 0.2,0.83 -0.86,0.76 -0.44,-0.21 -0.61,-1.25 -0.26,0.24 -0.19,-0.22 -0.6,0.15 -0.05,2.26 -1.25,1.13 -0.99,-2 -0.09,-1.36 -0.56,0.13 -0.81,-1.34 -1.06,-0.25 -0.06,-0.56 -1.04,0.78 -0.37,0.01 0.06,-0.43 -1.06,-0.02 0.38,-0.28 -0.71,-0.33 0.2,-0.41 -1.83,-0.1 -0.36,-0.72 -0.55,0.16 -1,-0.61 -0.74,0.26 -0.54,-0.19 -1.67,0.83 -2.05,-0.65 -1.13,-0.06 -2.57,2.37 1.63,1.62 2.86,5.63 -2.29,0.95 -0.64,-0.17 -0.27,0.26 -0.67,-0.15 -1.52,0.23 -0.43,-0.45 -1.42,1.03 0.86,2 -0.61,0.02 -0.67,0.97 -2.01,-1.99 -1.36,1.94 -0.8,0.34 -2.66,0.26 -0.5,-0.21 0.35,-0.66 -0.53,-0.32 -0.01,-1.22 -0.36,-0.06 -0.43,0.35 -1.33,-0.52 -7.51,-10.07 -0.77,-0.29 -0.4,-0.55 0.16,-1.64 0.63,-0.79 -0.23,-0.45 0.41,-0.85 -1.75,-0.82 0.19,-0.36 -0.46,-0.14 -1.05,0.19 -1.95,1.66 -0.32,0.1 -0.38,-0.55 0.67,-3.64 2.53,1.06 0.74,-0.05 0.81,0.61 0.12,-0.27 -0.86,-0.89 -0.26,-1.07 -1.12,-0.64 -0.4,-0.98 -0.59,-0.63 2.02,-1.89 2.24,-0.91 0.21,-0.27 -0.57,-1.29 1.27,-0.45 0.43,1.09 1.27,-0.5 2.95,0.64 -0.21,-0.4 0.25,-0.64 0.33,0.01 0.26,-0.42 0.61,-0.28 0.23,0.1 0.05,-0.77 0.43,-0.1 -0.05,-0.68 0.52,-0.07 0.1,-0.63 0.88,-0.12 0.34,-0.41 0.65,-0.12 0,-0.83 0.37,-0.2 -0.24,-0.59 0.37,-0.12 1.14,-1.48 -0.12,-0.56 0.38,-1.09 -0.64,-1.29 0.73,-0.59 0.24,-0.61 1.15,-0.9 1.07,-0.24 0.79,0.27 1.32,-0.7 0.71,-0.1 1,0.31 2.58,2.64 2.66,-3.44 1.75,-1.28 -0.85,-1.22 -1.31,-0.81 -1.21,-0.68 -1.29,-0.17 -0.09,-0.41 1.67,-0.86 -0.7,-0.95 -0.99,1.09 -0.55,-0.67 0.02,-0.51 -0.47,0.18 -0.34,-0.41 0.63,-0.45 -0.38,-0.82 -2.31,-1.47 -1.47,-1.83 -1.52,-0.5 0.57,-0.89 1.28,0.12 0.28,-2.62 0.29,-0.39 0.79,-0.07 z"},{"id":"ke-13","name":"Kiambu","d":"m 151.23705,363.77063 0,0 0.9,-0.51 -0.39,-0.41 1.44,-0.98 0.63,-1.43 -0.47,-0.74 -0.22,-1.28 1.87,0.19 -0.59,-1.38 2.4,-2.35 0.47,0.18 0.75,-0.53 0.8,0.36 1.97,2.38 1.06,0.67 0.52,0.77 1.51,0.14 1.8,1.3 1.04,0.41 0.78,0.78 1.11,0.26 0.34,0.45 0.74,0.14 0.21,0.32 0.4,-0.08 0.33,0.85 0.82,0.1 0.3,0.86 2.44,1.57 0.58,1.01 0.83,0.19 2.44,1.98 0.83,1.11 0.8,0.17 1.2,-0.45 0.83,0.45 1.16,0.12 0.53,0.31 0.4,0.68 0.53,-0.27 1.26,0.31 1.15,-0.54 0.14,-0.56 0.94,0.47 1.22,-0.47 1,-0.94 0.71,0.4 1.16,-0.47 2.61,2.81 0.27,-0.12 0.56,0.75 0.55,0.27 0.3,-0.11 0.56,0.69 0.78,0.16 -1.13,1.3 -2.58,-2.64 -0.96,-0.3 -0.75,0.09 -1.32,0.7 -0.79,-0.27 -1.15,0.28 -2.04,2.06 0.64,1.29 -0.38,1.09 0.13,0.52 -1.15,1.52 -0.37,0.12 0.24,0.59 -0.37,0.2 0.09,0.71 -0.74,0.24 -0.34,0.41 -0.88,0.12 -0.1,0.63 -0.52,0.07 -0.03,0.75 -0.37,0.06 -0.92,-0.78 0.43,-0.23 -0.36,-0.66 -0.52,0.3 -1.04,-1.83 -1.03,0.24 -2.16,1.54 -1.06,-0.78 -1.79,0.33 -1.49,-0.42 -1.12,-0.87 1.72,-1.85 -1.31,-0.72 -1.16,-0.05 -0.63,0.66 0.66,1.17 -1.38,0.17 -0.76,-0.36 -0.15,0.73 -0.51,0.05 -0.12,0.49 -1.06,-0.3 0.2,0.48 -2.42,-1.34 -0.39,0.64 0.38,0.4 -0.81,1.17 -1.18,-0.51 -0.49,0.84 -1.05,-0.18 -0.5,1.66 -1.56,-0.15 0.07,0.54 -0.4,0.36 -0.01,0.61 -1.16,1.71 -0.36,-0.59 -9.68,-1.89 1.28,-1.81 1.77,-6.47 1.27,-1.54 0.18,0.08 1.22,-2.18 -0.23,-1.08 0.55,-3.49 -0.52,-0.23 0,-1 -0.28,-0.79 -0.43,-0.33 0.32,-0.74 -0.55,-0.45 -0.41,0.16 -0.48,-0.24 z"},{"id":"ke-27","name":"Migori","d":"m 41.74705,349.19063 0,0 0.37,2.3 -0.73,1.4 -0.73,9.78 0.81,3.7 0.53,0.16 -2.95,2.82 0.36,1.88 1.16,1.26 -0.17,0.75 0.41,1.37 0.42,0.55 0.35,1.68 -0.14,0.61 1.26,0.84 -0.06,0.59 1.03,0.69 0.12,0.66 0.88,0.15 2.4,10.2 -36.97,-20.81 -0.58,-0.08 -1.28,1.04 -0.72,0.22 -0.49,-0.4 -0.26,-1.6 -0.5,-0.47 -4.68,-0.08 -0.39,-11.36 8.73,0 0.91,-1.15 0.91,-0.24 0.58,0.28 0.73,-0.6 0.19,0.34 0.96,-0.71 0.48,0.36 0.44,-0.05 0.38,-0.65 0.72,0.29 0.62,-0.84 0.59,0.98 1.13,0.81 1.05,1.65 0.78,0.2 1.95,1.32 1.2,1.6 0.92,-0.22 0.08,-0.37 2.58,-0.5 0.63,-0.88 -0.38,-0.76 0.26,-0.16 2.39,1.3 1.78,1.39 0.72,-1.78 1.17,-1.15 -0.37,-0.67 -0.55,-0.24 0.34,-0.1 -0.08,-0.47 1.22,-0.83 -0.25,-0.29 0.27,-0.17 1.03,-0.06 0.49,-0.75 0.35,-2.38 0.97,-2.08 1.56,-0.56 0.25,0.12 -0.04,-0.5 0.97,-0.09 1.89,0.76 z"},{"id":"ke-29","name":"Murang\'a","d":"m 170.28705,346.02063 0,0 2.01,-0.02 0,-0.28 3.75,-1.62 0.54,0.47 1.1,0.03 0.63,0.39 1.25,0.19 0.6,0.87 2.28,1 0.1,0.53 0.5,0.24 0.76,0.14 1.01,-0.31 0.65,0.17 0.16,-0.32 0.84,0.01 0.02,0.78 0.42,0.26 0.14,0.76 1.15,-0.21 0.74,1.44 0.78,-0.9 0.63,-0.32 -0.05,0.54 0.44,0.85 -0.09,0.63 0.11,0.29 0.28,-0.02 0.3,0.74 -0.28,0.22 0.38,0.17 0.51,0.97 -0.19,0.16 0.47,0.42 -0.53,-0.18 -0.29,0.18 0.34,1.47 0.33,0.31 -0.3,0.42 -0.27,2.59 -1.28,-0.12 -0.57,0.89 1.52,0.5 1.47,1.83 2.31,1.47 0.38,0.82 -0.63,0.45 0.34,0.41 0.47,-0.18 -0.02,0.51 0.55,0.67 0.99,-1.09 0.7,0.95 -1.67,0.86 0.09,0.41 1.29,0.17 1.21,0.68 1.31,0.81 0.85,1.22 -1.75,1.28 -1.53,2.14 -0.78,-0.16 -0.56,-0.69 -0.3,0.11 -0.55,-0.27 -0.56,-0.75 -0.27,0.12 -2.61,-2.81 -1.16,0.47 -0.71,-0.4 -1,0.94 -1.22,0.47 -0.94,-0.47 -0.14,0.56 -1.15,0.54 -1.26,-0.31 -0.53,0.27 -0.4,-0.68 -0.53,-0.31 -1.16,-0.12 -0.83,-0.45 -1.2,0.45 -0.67,-0.12 -0.96,-1.16 -2.44,-1.98 -0.83,-0.19 -0.58,-1.01 -2.44,-1.57 -0.3,-0.86 -0.82,-0.1 -0.38,-0.89 -0.35,0.12 -0.21,-0.32 -0.74,-0.14 -0.34,-0.45 -1.11,-0.26 -0.78,-0.78 -1.04,-0.41 -1.8,-1.3 -1.51,-0.14 -0.52,-0.77 -1.06,-0.67 0.1,-1.07 -0.24,-0.43 0.86,-0.04 -0.83,-0.97 -0.83,-3.61 -0.11,-2.87 0.34,-1.57 -0.1,-1.95 0.87,-0.91 0.73,-0.29 0.72,0.29 1.83,-0.29 1.47,0.23 0.38,0.55 1.55,0.87 0.37,-0.1 0.89,0.83 1.49,0.08 z"},{"id":"ke-16","name":"Kisii","d":"m 54.57705,339.83063 0,0 1.19,1.29 0.06,0.96 -0.66,1.93 0.51,0.63 -0.17,0.28 0.67,0.59 -0.19,0.83 -0.37,0.28 -0.34,-0.49 -0.21,0.48 -1.11,-1.37 -0.3,-0.03 -0.63,0.48 -0.18,0.67 -0.91,0.92 -0.35,1.15 0.15,1.02 -0.77,-0.24 -0.73,0.47 0.48,0.86 0.75,-0.17 0.74,0.34 0.23,0.77 0.67,0.19 0.97,0.96 1.95,1.24 0.49,-0.07 0.61,0.83 0.91,0.04 1.22,0.7 3.95,6.65 -19.27,4.79 -1.45,-0.46 -1.02,0.02 -0.81,-3.7 0.73,-9.78 0.73,-1.4 -0.43,-2.01 0.46,-2.09 1.01,-1.68 1.35,-0.23 1.06,-1.47 2.69,-0.96 0.9,-0.78 4.68,-1.89 0.74,-0.55 z"},{"id":"ke-33","name":"Narok","d":"m 101.89705,345.79063 0,0 1.07,-1.42 0.03,-1.55 0.41,-0.03 1.22,-1.26 1.92,0.33 1.61,-4.62 0.66,0.09 0.17,1.09 1.22,-0.58 0.17,0.35 -0.44,1.25 3.3,1.85 0.85,1.17 1.64,0.22 0.2,0.3 0.61,0.09 2.03,4.14 -1.83,2.02 -1.97,-1.75 -2.25,0.11 0.19,0.37 -0.16,0.4 0.87,-0.05 2.18,2.68 -0.03,0.52 0.97,0.5 3.73,-2.91 1,0.88 3.94,-2.25 0.16,2.08 2.37,2.07 0.64,0.14 0.44,1.73 1.78,1.22 -0.57,0.73 0.46,0.36 -0.16,1.11 -1.72,1.85 0.67,2.02 1.16,2.06 -0.25,0.41 0.49,0.01 0.59,1.02 3.37,-1.16 4.08,7.78 0.71,7.23 -16.82,18.02 1.81,3.99 0.09,0.78 -0.37,1.18 -0.36,-0.08 -0.57,0.98 0.05,0.35 -0.45,0.1 -0.19,1.62 -0.28,0.15 0.99,2.82 -0.4,0.23 -0.07,0.5 -0.5,-0.34 -0.16,0.3 -0.39,-0.04 0.55,0.54 0.12,0.57 -0.16,0.31 -0.34,-0.14 0.04,0.42 -0.34,0.22 -0.22,1.38 -0.59,0.47 0.58,0.24 -0.02,0.34 -0.86,1.02 0.07,0.21 0.67,0.12 0,0.88 0.6,-0.2 0.15,0.75 0.38,0.42 0.07,0.87 -0.32,1.16 -0.38,-0.03 -0.03,0.76 -0.61,-0.01 0.98,1.08 -0.57,0.43 0.52,1.26 -0.3,0.61 0.21,0.62 -0.24,0.68 0.02,1.98 -0.54,1.89 0,2.47 -1.6,0.01 0,1.22 -72.58,-40.92 -2.4,-10.2 -0.88,-0.15 -0.12,-0.66 -1.03,-0.69 0.06,-0.59 -1.26,-0.84 0.14,-0.61 -0.35,-1.68 -0.42,-0.55 -0.41,-1.37 0.17,-0.75 -1.27,-1.55 -0.25,-1.59 3.26,-2.96 1.63,0.42 19.27,-4.79 3.96,0.92 9,7.29 0.51,0.03 0.09,-0.29 0.54,-0.08 0.18,-0.43 0.55,0.11 -0.03,-0.2 1.69,-0.96 0.43,0.01 0.28,-0.59 0.98,-0.34 -0.16,-0.23 0.2,-0.28 0.35,0.15 0.36,-0.4 0.26,0.4 0.26,-0.73 0.64,0.58 0.69,-0.88 1.15,-0.15 0.29,-0.51 1,-0.12 0.29,-0.78 -0.13,-0.8 0.27,-0.11 -0.21,-0.69 0.35,-0.09 0.02,-0.47 0.52,0 -0.07,-0.4 0.43,-0.29 0.41,-0.11 0.12,0.19 0.01,-0.39 0.34,-0.24 -0.03,-0.54 0.41,-0.03 0.46,-0.47 0.14,-0.87 0.46,-0.54 1.24,-0.41 1.3,-1.1 -5.96,-4.78 -1.69,-4.36 10.9,-3.25 0.8,4.77 1.49,0.72 1,1.07 0.46,-0.97 0.62,-0.29 0.28,-0.99 0.7,-0.64 0.54,-2.67 z"},{"id":"ke-34","name":"Nyamira","d":"m 65.39705,339.73063 0,0 0.27,0.45 -0.47,0.84 0.26,0.68 -0.21,0.14 0.18,0.35 -0.27,1.61 0.83,1.82 -0.29,0.93 0.36,0.67 -0.46,0.83 -0.01,0.64 0.97,2.05 -0.86,0.31 -0.51,0.5 2.49,5.38 -2.68,2.98 -0.73,-0.46 -0.59,0.13 0.25,1.52 -0.43,-0.14 -0.36,0.55 0.07,0.51 -3.95,-6.65 -1.22,-0.7 -0.91,-0.04 -0.61,-0.83 -0.49,0.07 -1.95,-1.24 -0.97,-0.96 -0.67,-0.19 -0.23,-0.77 -0.74,-0.34 -0.75,0.17 -0.48,-0.86 0.73,-0.47 0.77,0.24 -0.15,-1.02 0.35,-1.15 0.91,-0.92 0.18,-0.67 0.63,-0.48 0.3,0.03 1.11,1.37 0.21,-0.48 0.34,0.49 0.37,-0.28 0.19,-0.83 -0.67,-0.59 0.17,-0.28 -0.51,-0.63 0.66,-1.93 -0.06,-0.96 -1.19,-1.29 1.05,-0.71 1.3,-0.29 2.04,-1.05 1.71,-1.36 1.84,-0.79 1.07,-0.88 0.71,0.4 0.73,1.56 -0.26,1.86 -0.39,0.31 -0.04,0.71 1.06,0.14 z"},{"id":"ke-02","name":"Bomet","d":"m 81.19705,334.44063 0,0 2.74,-0.14 0.27,-0.23 0.59,0.19 0.54,-0.23 0.51,0.31 2.41,-2.28 7.75,12.73 -10.9,3.25 1.69,4.36 5.96,4.78 -1.3,1.1 -1.24,0.41 -0.46,0.54 -0.14,0.87 -0.46,0.47 -0.41,0.03 0.03,0.54 -0.34,0.24 -0.01,0.39 -0.12,-0.19 -0.41,0.11 -0.43,0.29 0.07,0.4 -0.52,0 -0.02,0.47 -0.35,0.09 0.21,0.69 -0.27,0.11 0.13,0.8 -0.29,0.78 -1,0.12 -0.29,0.51 -1.15,0.15 -0.69,0.88 -0.07,-0.28 -0.34,0.07 -0.3,-0.35 -0.19,0.71 -0.26,-0.4 -0.36,0.4 -0.35,-0.15 -0.2,0.28 0.16,0.23 -0.98,0.34 -0.3,0.6 -0.41,-0.02 -1.69,0.96 0.03,0.2 -0.55,-0.11 -0.18,0.43 -0.54,0.08 -0.09,0.29 -0.48,-0.02 -9.03,-7.3 -3.96,-0.92 -0.07,-0.51 0.36,-0.55 0.43,0.14 -0.25,-1.52 0.59,-0.13 0.73,0.46 2.68,-2.98 -2.49,-5.38 0.51,-0.5 0.86,-0.31 -0.96,-2.01 0,-0.68 0.46,-0.72 -0.36,-0.78 0.31,-0.8 -0.85,-1.95 0.27,-1.61 -0.18,-0.35 0.21,-0.14 -0.26,-0.68 0.47,-0.82 -0.21,-0.66 0.34,-0.28 0.85,-0.08 0.6,-0.99 0.74,0.04 0.15,-0.37 0.29,0.09 0.84,-0.52 0.76,0.11 0.15,0.25 0.38,-0.52 0.47,0.55 0.45,-0.12 0.52,0.42 0.35,-0.12 0.26,0.69 0.19,-0.08 0.2,0.31 1.94,-0.34 0.11,-0.5 -0.66,-0.27 0.54,-0.6 0.8,-1.9 1.55,0.12 0.93,-0.37 1.57,0.42 1.03,-0.48 0.39,-0.56 z"},{"id":"ke-08","name":"Homa Bay","d":"m 32.93705,328.28063 0,0 2.8,-1.58 9.94,-0.78 2.76,1.8 0.31,1.38 0.5,-0.22 0.72,0.75 0.24,-0.05 0.26,0.49 -0.42,0.1 0.15,0.51 0.41,0 -0.14,0.37 0.46,0.36 0.71,-0.16 0.69,1.12 0.06,0.96 1.94,0.25 0.25,0.3 0.25,-0.18 1.08,0.15 0.14,0.27 0.36,-0.44 1.2,-0.5 -0.06,1.03 0.85,-0.02 0.04,0.52 1.15,0.23 1.42,-0.36 0.69,0.21 0.17,-0.31 0.78,-0.18 0.43,-0.78 0.61,0.85 -0.1,0.38 -1.07,0.88 -1.84,0.79 -1.71,1.36 -2.04,1.05 -1.3,0.29 -1.79,1.26 -2.68,0.91 -2,0.98 -0.9,0.78 -2.69,0.96 -1.06,1.47 -1.35,0.23 -1.01,1.68 -0.4,1.8 -1.89,-0.76 -0.97,0.09 0.04,0.5 -1.59,0.24 -1.19,2.28 -0.35,2.38 -0.49,0.75 -1.03,0.06 -0.27,0.17 0.25,0.29 -1.22,0.83 0.08,0.47 -0.34,0.1 0.55,0.24 0.37,0.67 -1.17,1.15 -0.72,1.78 -1.78,-1.39 -2.39,-1.3 -0.26,0.16 0.38,0.76 -0.63,0.88 -2.58,0.5 -0.08,0.37 -0.92,0.22 -1.2,-1.6 -1.95,-1.32 -0.78,-0.2 -1.05,-1.65 -1.13,-0.81 -0.59,-0.98 -0.62,0.84 -0.72,-0.29 -0.38,0.65 -0.44,0.05 -0.48,-0.36 -0.96,0.71 -0.19,-0.34 -0.73,0.6 -0.58,-0.28 -0.91,0.24 -0.91,1.15 -8.73,0 -0.47,-13.75 0.46,-6.12 1.12,-6.72 16.7,0.01 2.42,4.33 0.67,0.59 0.78,0.11 0.94,-0.44 5.63,-4.81 3.49,-1.96 z"},{"id":"ke-06","name":"Embu","d":"m 229.90705,335.51063 0,0 0.43,0.09 -0.2,0.7 -1.09,1.44 -1.83,4 0.31,1.1 -0.26,1.58 1.03,0.81 1.21,1.57 -1.65,1.23 0.1,2.03 0.52,0.27 -0.27,1.3 0.71,-0.03 0.22,1.19 -0.71,1.67 -0.7,0.54 0.11,0.63 -0.5,0.2 -0.23,0.71 0.19,0.49 -0.64,0.4 -1.89,-0.03 -0.23,0.21 -0.34,-0.44 -0.5,-0.07 -0.71,0.59 -0.14,-0.79 -0.56,0.91 -0.48,0.29 -1.67,0.06 -0.94,-2.62 -0.5,-0.16 -0.47,0.33 -0.97,0.04 -0.5,0.18 -0.49,0.7 -0.46,-0.05 -0.04,1.52 -0.55,0.37 -0.37,0.96 -0.41,0.09 -0.66,-0.31 -0.33,0.19 -0.28,-0.38 -0.34,0 -0.18,0.76 -1.17,0.15 -0.21,0.42 -0.79,0.1 0.19,0.37 -0.23,0.44 -1.27,0.13 -0.29,-0.31 -0.49,0.52 -0.34,-0.07 -0.74,0.74 0.04,0.94 -0.75,0.25 -0.28,-0.83 -0.69,-0.16 -0.57,0.43 -1.31,-1.07 0.13,-0.59 -1.54,-0.32 -0.35,-0.45 -0.83,0.21 -0.74,-0.28 -0.06,-0.62 -0.81,0.33 -0.76,-0.24 -0.28,0.32 -0.2,-0.41 -0.82,-0.35 -1.89,0.02 -1.33,-1.81 -0.06,-0.73 -1.07,-0.98 -1.06,0.14 -0.06,-0.42 0.52,-1.28 2.4,-0.36 0.56,0.82 1.82,0.29 0.57,-0.3 0.07,-0.29 0.35,0.11 1.43,-0.66 1.03,-0.04 1.12,-0.83 1.32,0.15 0.06,-0.33 0.59,-0.25 1.29,0.33 -0.5,-0.78 -0.5,-0.21 0.04,-1.18 -0.3,-0.45 0.21,-0.99 -0.31,-1.05 0.87,-2 -0.65,-0.87 0.41,-1.02 -0.34,-0.31 -0.26,-0.97 -1.32,-0.65 -0.33,-1.14 -1.01,-1.04 0.11,-0.87 -0.33,-0.73 0.22,-1.85 -0.3,-0.36 0.22,-0.57 -0.07,-1.45 -6.61,-14.71 14.06,11.93 1.77,0.51 0.97,0.82 1.64,0.31 1.81,1.87 1.15,0.27 0.68,0.67 1.08,0.28 0.42,0.42 0.69,0.01 0.46,-0.29 1.07,0.21 1.46,-0.13 0.99,-0.59 1.55,-1.37 -0.12,-0.19 0.29,-0.26 0.78,-0.06 0.37,-0.81 0.8,-0.41 -0.06,-0.7 0.32,-0.25 0.16,-0.93 0.75,-0.39 0.47,0.58 -0.28,0.75 0.39,0.26 -0.41,1.21 0.66,0.31 -0.04,0.43 0.45,0.53 0.73,0.06 0,0.52 0.45,0.13 z"},{"id":"ke-15","name":"Kirinyaga","d":"m 201.17705,340.39063 0,0 0.99,1 0.33,1.14 1.32,0.65 0.26,0.97 0.34,0.31 -0.41,1.02 0.65,0.87 -0.87,2 0.31,1.05 -0.21,0.99 0.3,0.45 -0.04,1.18 0.5,0.21 0.5,0.78 -1.29,-0.33 -0.59,0.25 -0.06,0.33 -1.32,-0.15 -1.12,0.83 -1.03,0.04 -1.43,0.66 -0.35,-0.11 -0.07,0.29 -0.57,0.3 -1.82,-0.29 -0.56,-0.82 -2.4,0.36 -0.52,1.67 -0.62,-1.72 0.28,-0.21 0.54,0.15 -0.46,-0.39 0.19,-0.16 -0.51,-0.97 -0.38,-0.17 0.28,-0.22 -0.3,-0.74 -0.28,0.02 -0.11,-0.29 0.09,-0.63 -0.44,-0.85 0.06,-0.53 -0.64,0.31 -0.75,0.9 -0.77,-1.44 -1.15,0.21 -0.14,-0.76 -0.42,-0.26 -0.02,-0.81 0.43,-0.12 -0.26,-0.35 0.1,-0.6 0.25,-0.09 -0.03,-0.75 -0.56,-0.59 -0.5,0.02 -0.89,-1.42 0.34,-0.69 -0.18,-1.18 1.24,-1.55 -0.37,-0.87 0.87,-0.51 -0.11,-2.31 1.07,0.03 0.35,-0.23 -0.02,-0.51 0.35,-0.29 -0.01,-0.5 5.86,-15.16 6.61,14.71 0.07,1.45 -0.22,0.57 0.3,0.36 -0.22,1.85 0.33,0.73 -0.09,0.91 z"},{"id":"ke-18","name":"Kitui","d":"m 258.78705,315.45063 0,0 22.62,39.18 7.06,15.53 2.65,36.89 -0.91,0.98 -1.45,0.5 3.24,12.08 -12.57,24.35 -0.43,0.07 -0.33,0.72 -0.66,-0.07 -0.85,0.53 -1.05,0.24 -0.28,0.69 -0.89,0.6 -0.16,0.41 -1.66,1.02 -2.21,0.26 -1.12,-0.42 25.64,36.1 -0.85,-0.04 -0.91,-0.56 -0.06,-0.56 -0.51,0.19 -0.56,-0.22 -1.89,0.33 -0.62,0.75 -0.44,0.07 -2.07,-0.34 -0.3,0.33 -0.96,0.25 -1.21,-0.35 -1.72,1.08 -0.92,0.2 -0.32,-0.44 -1.29,0.76 -0.83,0.11 -0.39,-0.43 0.57,-0.1 0.09,-0.35 -1.67,-0.25 -0.32,-0.27 -2.22,-0.05 -1.62,-0.64 -0.6,0.28 -1.8,0.15 -0.22,-0.61 -1.07,-0.95 -1.92,-0.33 0.01,-0.65 -0.87,0.2 -0.6,-0.66 -1.19,-0.04 -1.37,-0.72 -1.14,0.06 -1.51,-1.12 -0.28,-1.08 -0.69,0 -0.86,-2.3 -0.58,-0.21 0.22,-0.64 -0.62,-0.09 0.11,-0.6 -0.43,-0.32 0.07,-0.45 -0.68,-0.36 0.22,-0.57 -0.27,-1.18 -0.48,-0.42 0.22,-0.86 0.54,-0.57 -2.28,-5.05 -0.55,-2.06 -0.88,-0.8 0.04,-0.41 -0.31,-0.25 -0.86,-2.78 -0.5,-0.22 -0.41,-1.19 0.39,-0.46 -0.89,-0.42 -0.07,-1.11 -0.56,-1.01 0.04,-0.5 -0.58,-0.22 -0.35,-0.7 -0.47,-0.25 -0.78,-3.37 -1.23,-0.19 -0.4,-0.64 -0.5,0 -0.25,-0.46 -0.55,-0.11 -0.65,-2.55 -0.76,-0.09 -0.74,-0.85 -0.65,0.02 -1.55,-0.99 -1.3,-0.18 -0.42,-0.33 -0.11,-0.61 -0.37,-0.15 0.17,-0.8 -0.63,-0.33 -0.17,-0.48 -0.61,-0.02 -0.26,-0.63 -0.44,0.02 -0.37,-2.03 -0.31,-0.2 0.36,-0.45 -0.6,-0.43 -0.29,-1.14 -0.36,-0.36 0.08,-0.64 -1.22,-0.39 -0.39,-0.85 -3.24,1.11 -0.11,-1.37 -0.5,-0.6 0.36,-3.43 -0.37,-0.83 0.07,-0.53 -0.27,-0.7 -0.69,-0.18 0.28,-0.59 -0.27,-0.2 0.12,-0.46 -0.28,-0.24 0.08,-0.3 -0.47,-0.28 0.1,-0.28 -0.92,-2.09 0.06,-0.7 -0.34,-0.5 0.55,-1.66 -0.7,-0.04 0.05,-0.61 -0.46,-1.35 0.13,-0.34 -0.75,-0.22 -0.2,-0.41 0.4,-0.82 -0.68,-0.4 -1.84,-1.94 -0.5,-1.02 0.15,-0.65 0.62,0 0.22,-0.77 -0.61,-2.35 -0.57,-0.21 0.14,-1.08 -0.36,-0.51 -0.55,0 -0.05,-0.94 -1.12,-0.95 0.17,-0.36 -1.81,-3.37 -0.65,-0.37 -0.64,-1.29 -0.42,-0.09 -0.53,-0.61 -1.11,-1.85 -0.64,-0.07 -0.42,-0.58 0.87,-0.57 1.43,0.43 2.2,-0.58 0.39,-0.88 1.07,-0.95 1.16,-0.38 -0.37,-0.49 -0.52,-2.53 -0.34,0.07 -0.55,-1.14 -1.31,-1.22 -1.18,0.1 -0.4,-0.83 -0.33,-0.1 -1.09,-2.8 -0.91,-1.26 -0.25,-1.05 -0.33,-0.27 0.1,-0.33 -0.72,-0.44 -1.5,-1.96 -0.91,-2.08 -0.91,-1.08 -1.18,0.24 -0.17,-3.5 8.24,-0.48 3.34,2.84 0.59,-1.96 0.6,-0.72 0.11,-0.57 0.6,-0.12 0.86,-1.22 0.27,-2.41 -0.17,-0.63 1.09,-0.7 -0.2,-0.23 0.34,-0.24 -0.31,-0.03 0.04,-0.27 -0.34,-0.21 -0.7,-0.03 0.33,-0.32 0.18,0.17 -0.45,-1.18 0.36,-0.21 -0.56,-0.59 0,-0.45 -0.24,0.02 0.04,-0.59 -0.27,0.15 -0.27,-0.61 -0.63,-0.18 0.37,-0.45 -0.26,-0.48 0.35,-0.91 0.3,-0.14 0.01,-0.64 0.72,-0.65 -0.19,-0.34 0.44,-0.2 -0.21,-1.2 1.47,-0.02 0.69,-0.4 -0.19,-0.54 0.23,-0.68 0.5,-0.2 -0.11,-0.63 0.7,-0.54 0.71,-1.67 -0.22,-1.19 -0.71,0.03 0.27,-1.3 -0.52,-0.27 -0.1,-2.03 1.65,-1.23 -1.21,-1.57 -1.04,-0.83 0.27,-1.56 -0.3,-1.13 1.82,-3.97 0.99,-1.21 0.2,-0.85 0.98,-0.19 0.74,-0.82 0.29,-1.71 0.26,-0.26 -0.39,-0.75 0.6,-0.55 -0.35,-0.59 0.44,-0.99 0.36,-0.18 -0.35,-0.72 0.74,-1.37 0.25,-1.13 1.54,0.06 1.18,0.42 2.46,-0.08 0.77,0.27 0.71,-0.19 1.24,-1.08 0.46,-0.97 1.09,-0.25 0.01,-0.66 1.1,-1.95 0.22,-2.11 0.46,-0.15 0.2,-0.38 0.52,0 0.06,-0.94 0.28,-0.16 0.51,-1.22 1.66,-1.05 1.21,0.51 0.48,-0.61 0.44,0.11 1.23,-1.88 1.17,0.8 0.97,-0.25 1.98,1.39 0.71,-0.76 0.57,0.16 0.94,-0.33 0.81,0.33 z"},{"id":"ke-40","name":"Tana River","d":"m 277.90705,315.10063 0,0 1.02,0.57 2.76,0.85 3.7,0.11 1.18,-0.55 0.63,0.7 0.41,0.06 0.94,-0.76 0.7,-0.21 0.28,-1.33 0.86,0.03 0.61,-0.6 0.23,0.36 0.33,0.01 0.73,-0.72 0.9,0.62 1.68,-0.42 0.5,1.06 1.36,1.32 0.22,0.58 1.05,0.69 0.03,0.6 0.74,-0.07 0.07,0.61 1.64,-0.2 0.41,0.58 0.73,-0.09 1.1,0.43 0.65,-0.6 0.71,-0.13 0.07,0.48 1.08,0.19 0.47,-0.17 0.15,0.45 1.02,-0.54 0.4,0.24 0.76,-0.3 0.54,0.2 0.48,-0.38 0.83,0.72 -0.18,0.7 0.53,-0.05 0.3,0.58 0.77,-0.42 0.1,0.5 0.46,-0.33 1.24,1.59 0.73,-0.12 0.19,0.4 0.35,-0.28 1.19,-0.04 1.01,1.15 0.48,0.04 0.8,0.6 0.14,0.68 0.42,0.48 0.65,0.16 0.1,0.3 0.44,-0.06 0.69,1.65 0.42,0.27 -0.27,0.93 0.46,-0.11 0.3,-0.55 0.54,0.44 0.42,-0.24 1.09,2.2 0.93,0.46 0.15,0.43 0.39,-0.16 0.26,0.6 -0.13,0.28 0.41,0.11 -0.16,0.3 0.23,0.29 -0.3,0.41 0.28,0.2 0.02,0.83 0.33,0.22 -0.1,0.65 0.69,0.02 -0.19,1.71 0.21,0.16 0.27,-0.24 0.01,0.43 0.91,0.65 -0.37,0.78 0.1,1.09 0.54,0.31 0.01,0.67 0.41,0.54 1.21,0.86 -0.03,0.28 -0.38,0.08 0.1,0.63 0.52,-0.09 0.21,0.57 0.6,-0.32 -0.05,1.3 0.41,0.23 0.03,0.42 0.39,-0.21 -0.18,0.54 1.94,0.11 0.45,-0.34 0.06,0.48 0.55,0.52 0.38,-0.23 0.52,0.56 0.63,0.1 -0.44,0.96 0.76,1.3 -0.13,0.55 0.54,-0.07 0.09,0.65 0.53,-0.05 -0.24,0.59 0.14,0.57 0.26,0.39 0.29,-0.2 -0.15,0.57 0.42,0.07 -0.06,1.28 -0.34,-0.07 0.15,0.51 0.91,0.38 -0.47,0.23 0.09,0.51 -0.49,0.2 0.42,0.46 -0.42,0.24 0.21,0.31 0.85,0.24 -0.12,0.67 0.51,0.02 -0.5,0.62 0.96,0.03 -0.36,0.38 0.55,0.5 0.11,1.11 -0.6,-0.05 0.35,0.45 -0.09,0.37 0.28,0 0.16,-0.56 0.56,0.37 -0.44,1.25 0.47,0.63 -0.55,0.33 0.34,0.26 -0.23,0.29 0.73,1.05 -0.22,0.58 0.68,0.1 0.34,0.51 -0.55,0.57 0.03,0.66 0.71,-0.41 -0.09,1.05 0.31,-0.08 0.45,0.32 -0.5,0.21 0.39,0.71 -0.33,0.62 0.21,0.3 0.51,0.06 0.03,1.22 0.78,0.82 -0.24,0.5 0.5,0.41 -0.21,0.36 0.29,0.65 0.42,0.09 0.37,2.94 0.23,0.22 0.42,-0.1 0.07,0.43 0.62,0.33 0.4,1.32 1.04,1.46 -0.07,0.53 0.54,0.01 0.1,0.59 0.54,0.13 -0.27,0.67 0.24,0.39 -0.26,0.27 0.72,0.1 -0.38,0.83 0.42,0.15 0.18,0.42 -0.41,0.3 0.1,0.5 -0.41,0.42 0.29,0.44 -0.4,0.36 0.4,1.41 0.43,0.27 -0.62,1.07 0.07,0.76 0.41,-0.06 0.31,0.82 -0.33,0.28 0.74,1.23 0.15,1.21 0.38,0.12 0.17,0.48 -0.26,1.13 0.32,0.18 -0.19,0.41 0.36,1 -0.39,0.12 0.07,0.29 0.35,0.19 1.84,-1.13 0.93,0.19 1.03,1.92 0.55,2.58 1.62,1.91 0.62,1.23 0.34,2.1 -0.1,3.02 0.72,1.51 -0.75,2.28 0.3,3.42 1.4,2.26 0.11,4.19 -0.19,1.35 0.62,1.18 0,1.16 0.44,0.83 2.56,13.36 0,8.54 10.94,-0.03 12.74,4.03 3.83,-0.68 -3.15,2.21 -2.04,2.38 -1.88,1.21 -0.41,-0.04 -1.72,-0.5 -1.25,-0.81 -0.89,-0.1 -0.75,-0.69 -0.47,-0.03 -0.15,-0.17 0.42,-0.65 -0.36,-0.48 -0.57,-0.14 0.03,0.59 -0.39,-0.17 0.04,-0.45 -0.23,-0.16 0.04,0.26 -0.68,0.04 -0.21,0.36 -0.51,-0.23 0.45,0.62 -0.25,0.08 -0.37,-0.46 -0.44,1.08 -0.63,0.14 0.01,0.45 0.89,0.16 1.92,-0.94 1.31,0.52 -3.15,0.54 -3.49,1.36 -4.08,2.11 -3.57,2.58 0.39,-0.79 0.5,0 0.55,-0.73 2.15,-1.17 0.63,-0.64 -2.85,1.65 -1.2,0.98 -0.57,0.75 0.14,0.34 -1.64,1.63 -2.12,3.14 -0.2,-0.11 0.15,-0.45 -0.42,0.04 0.5,-0.17 -0.13,-0.25 0.24,-0.18 -0.33,-0.13 0.6,-0.59 -0.2,-0.18 0.28,-0.33 -0.16,-0.72 -1.14,0.12 -0.4,1.25 0.49,-0.24 0.41,0.34 -0.67,0.78 -16.54,-23.36 -38.44,43.66 -0.07,-0.43 -0.68,0.05 -0.52,-0.31 -0.76,0.13 -0.42,-0.37 -0.33,0.48 -0.32,0.03 -0.69,-1.19 -0.49,0.24 -0.14,-0.42 -0.45,-0.02 -0.28,-1.27 -0.94,0.3 -0.48,0.66 -0.87,0.41 -0.05,0.5 -0.42,-0.11 -0.01,-0.41 -25.85,-36.19 1.12,0.42 2.21,-0.26 1.66,-1.02 0.16,-0.41 0.89,-0.6 0.28,-0.69 1.05,-0.24 0.85,-0.53 0.66,0.07 0.33,-0.72 0.43,-0.07 12.57,-24.35 -3.24,-12.08 1.45,-0.5 0.91,-0.98 -2.65,-36.89 -7.06,-15.53 -22.62,-39.18 0.23,-0.26 1.17,0.83 1.35,-0.58 0.44,-0.91 1.76,0.21 0.63,-0.49 -0.05,-0.68 0.6,0.01 0.08,-0.65 0.69,-0.88 0.83,0.1 1.91,0.91 0.57,-0.25 1.54,1.34 0.56,-0.01 0.48,-0.39 1.45,0.49 0.42,-0.8 1.37,1.16 2.15,0.67 0.94,-0.17 z"},{"id":"ke-36","name":"Nyeri","d":"m 194.39705,319.81063 0,0 -5.86,15.16 0.01,0.5 -0.35,0.29 0.02,0.51 -0.35,0.23 -1.07,-0.03 0.11,2.31 -0.87,0.51 0.37,0.87 -1.24,1.55 0.18,1.18 -0.32,0.85 0.87,1.26 0.5,-0.02 0.53,0.52 0.06,0.82 -0.25,0.09 -0.1,0.6 0.26,0.36 -1.27,0.13 -0.16,0.32 -0.65,-0.17 -1.01,0.31 -0.76,-0.14 -0.5,-0.24 -0.1,-0.53 -2.28,-1 -0.6,-0.87 -1.25,-0.19 -0.63,-0.39 -1.1,-0.03 -0.56,-0.47 -3.73,1.62 0,0.28 -3.5,-0.06 -0.89,-0.83 -0.37,0.1 -1.55,-0.87 -0.38,-0.55 -1.5,-0.24 -1.8,0.3 -0.72,-0.29 -0.73,0.29 -0.94,1.06 0.12,1.97 -0.15,0.23 -0.42,-0.36 -1,-1.56 -0.02,-0.81 -0.57,-0.3 -0.44,-2.89 -0.39,-0.48 0.54,-1.95 -0.09,-0.99 -0.79,-0.22 0.1,-1.46 -1.59,-1.84 0.46,-0.81 -1.68,-0.95 0.71,-0.94 -0.41,-1.24 0.35,-1.33 3.97,-7.2 -0.19,-0.64 0.41,0 -1.62,-1.22 3.05,-0.93 0.29,-0.41 2.08,-0.5 0.62,-0.66 0.11,0.31 1.47,-0.46 2.19,-0.18 0,1.84 1.74,0.44 -0.17,0.66 0.72,1.3 -1.09,1.14 -0.71,0 0.98,3.24 0.8,-0.3 0.52,0.64 4.77,1.4 1.38,0.65 0.59,-1.42 -0.44,-0.89 0.75,-0.4 0.6,-0.97 -0.27,-0.6 0.56,-2.31 -0.7,-0.23 0.13,-1.52 -0.74,-0.26 -0.58,-0.61 -0.41,-3.61 2.74,-1.3 1.55,-2.24 0.67,-0.68 0.45,0.06 0.33,-0.51 -0.02,0.71 2.69,2.96 0.39,-1 10.14,6.53 z"},{"id":"ke-17","name":"Kisumu","d":"m 35.82705,312.05063 0,0 0.78,0.37 0.41,-0.36 0.46,0.01 -0.09,1.12 0.21,0.27 0.62,-0.24 0.38,-0.27 0.55,-1.36 -0.18,-0.49 0.85,-0.64 0.57,0.75 1.36,0 1.44,0.79 1.59,-0.22 -0.21,0.91 0.42,-0.33 0.79,0.06 0.39,-0.66 0.72,-0.22 0.71,1.1 0.41,-0.06 0.43,0.5 0.48,-0.91 1.03,0.22 0.36,-0.81 0.92,-0.99 0.35,-0.05 0.52,-0.62 0.69,-0.12 -1.54,2.1 0.3,0.58 1.01,0.32 5.4,-0.1 -0.07,0.38 0.22,0.19 1.79,-0.33 -0.13,-0.23 0.68,0.31 0.8,-0.44 0.64,0.01 -0.03,-0.27 1,0.54 2.47,0.35 0.89,1.89 0.36,-0.66 1.11,-0.69 0.2,-0.76 0.37,-0.29 -0.06,-1.32 2.95,2.03 0.55,-0.45 1.84,-0.28 0.7,0.16 0.86,0.48 0.32,1.72 0,2.22 0.57,0.75 0.96,0.05 0.97,1.83 0.4,-0.44 0.42,0.7 -0.25,0.51 0.52,-0.05 0.36,0.62 1.98,0.02 0.01,0.91 0.67,2.53 -1.63,0.71 -0.88,-0.61 -1.59,-0.02 -0.51,-0.25 -0.02,-0.55 -0.78,-0.62 -0.16,-0.65 -0.47,-0.04 -0.27,-0.4 -0.75,0.02 -0.2,-1.1 -0.65,-0.52 -1,-0.34 -0.17,0.35 -1.15,-0.19 -0.47,0.2 -0.99,-0.16 -0.54,-0.43 -1.39,2.61 -1.8,0.4 -0.51,0.4 -0.32,1.08 -0.31,3.42 -2.53,2.53 0.23,3.02 -0.52,0.75 -0.78,0.18 -0.15,0.31 -0.71,-0.21 -0.89,0.37 -1.67,-0.24 -0.01,-0.49 -0.24,-0.1 -0.64,0.1 0.05,-1.04 -1.2,0.5 -0.36,0.44 -0.14,-0.27 -1.08,-0.15 -0.25,0.18 -0.25,-0.3 -1.94,-0.25 -0.06,-0.96 -0.69,-1.12 -0.71,0.16 -0.46,-0.36 0.14,-0.37 -0.41,0 -0.15,-0.51 0.42,-0.1 -0.26,-0.49 -0.24,0.05 -0.72,-0.75 -0.5,0.22 -0.31,-1.38 -2.76,-1.8 -9.94,0.78 -2.8,1.58 -4.11,-12.63 2.79,-2.06 1.45,-0.71 2.48,-0.52 0.28,-0.31 z"},{"id":"ke-12","name":"Kericho","d":"m 87.32705,309.71063 0,0 1.73,-0.1 0.31,0.42 -0.72,0.28 0.07,0.25 1.12,-0.27 1.99,0.39 0.14,-0.42 0.39,0.03 1.18,1.37 2.23,-0.05 1.58,1.42 1.26,0.2 0.35,0.81 -0.22,0.23 0.32,0.39 -0.93,1.14 -0.51,0.19 -0.03,0.41 0.49,0.66 -1.1,1.14 -0.29,-0.02 -0.1,0.39 0.16,1.01 0.58,0.68 0.81,-0.48 0.85,0 0.45,0.05 0.4,0.77 0.9,-0.1 -0.28,1.28 0.45,0.19 -0.55,0.3 -0.14,0.62 -0.32,0.09 0.1,1.69 -0.63,2.01 -0.82,0.25 -0.05,0.69 -0.61,0.35 -0.52,-0.29 -0.39,0.27 -0.17,-0.59 -0.54,-0.32 -0.64,1.74 -0.68,-0.26 0.19,-1.22 -2.48,-1.29 -0.2,0.6 -1.25,-0.06 -1.91,0.5 -3.25,1.41 2.21,3.6 -2.38,2.27 -0.54,-0.3 -3,0.45 -0.93,-0.18 -0.62,0.72 -1.09,0.47 -1.49,-0.43 -0.93,0.37 -1.55,-0.12 -0.8,1.9 -0.54,0.6 0.66,0.27 -0.11,0.5 -1.94,0.34 -0.2,-0.31 -0.19,0.08 -0.26,-0.69 -0.35,0.12 -0.52,-0.42 -0.45,0.12 -0.48,-0.55 -0.37,0.52 -0.15,-0.25 -0.76,-0.11 -0.84,0.52 -0.29,-0.09 -0.15,0.37 -0.74,-0.04 -0.6,0.99 -0.85,0.08 -0.4,0.47 -1.03,-0.1 0.66,-2.92 -0.73,-1.56 -0.7,-0.38 0.09,-0.44 -0.52,-0.78 -0.23,-3.02 2.53,-2.53 0.31,-3.42 0.32,-1.08 0.51,-0.4 1.8,-0.4 1.39,-2.61 0.54,0.43 0.99,0.16 0.47,-0.2 1.15,0.19 0.18,-0.35 1.64,0.86 0.2,1.1 0.75,-0.02 0.27,0.4 0.47,0.04 0.16,0.65 0.78,0.62 0.03,0.56 0.51,0.24 1.58,0.02 0.86,0.6 1.54,-0.5 -0.57,-3.64 -1.98,-0.02 -0.36,-0.62 -0.52,0.05 0.25,-0.51 -0.42,-0.7 -0.4,0.44 -0.97,-1.83 -0.96,-0.05 -0.57,-0.75 3.06,-0.41 1.59,-0.72 1.89,1.3 1.75,0.05 1.75,-1.32 1.25,-0.52 -1.16,-3.07 0.56,-1.7 1.37,-0.77 -0.15,-0.39 z"},{"id":"ke-41","name":"Tharaka","d":"m 244.56705,310.06063 0,0 0.41,0.25 0.83,-0.25 0.94,0.39 -0.16,0.32 0.45,0.12 0.13,0.7 0.88,0.66 0.27,-0.39 0.32,0 1.83,0.58 0.84,1.15 -0.15,0.32 0.48,0.2 -0.45,0.88 -0.62,0.49 -0.15,0.5 -0.45,-0.1 -0.45,0.6 -1.23,-0.51 -1.67,1.06 -0.51,1.22 -0.28,0.16 -0.06,0.94 -0.52,0 -0.2,0.38 -0.46,0.15 -0.22,2.11 -1.1,1.95 -0.01,0.66 -1.09,0.25 -0.46,0.97 -1.24,1.08 -0.71,0.19 -0.77,-0.27 -2.46,0.08 -1.18,-0.42 -1.49,-0.11 -0.3,1.18 -0.74,1.37 0.35,0.72 -0.36,0.18 -0.44,0.99 0.35,0.59 -0.6,0.55 0.39,0.75 -0.26,0.26 -0.29,1.71 -1.12,0.91 -1.13,0 -0.29,-0.3 0.09,-0.38 -0.78,-0.1 -0.45,-0.53 0.04,-0.43 -0.61,-0.23 0.36,-1.29 -0.39,-0.26 0.28,-0.75 -0.47,-0.58 -0.75,0.39 -0.16,0.93 -0.32,0.25 0.06,0.7 -0.8,0.41 -0.37,0.81 -0.78,0.06 -0.29,0.26 0.12,0.19 -1.55,1.37 -0.99,0.59 -1.46,0.13 -1.07,-0.21 -0.46,0.29 -0.69,-0.01 -0.42,-0.42 -1.08,-0.28 -0.68,-0.67 -1.15,-0.27 -1.81,-1.87 -1.64,-0.31 -0.97,-0.82 -1.77,-0.51 -14.06,-11.93 12.56,1.73 3.61,0.11 0.69,0.63 0.67,0.02 0.57,0.63 0.87,0.08 0.21,0.3 1.05,0.24 0.22,-0.71 0.99,0.19 2.83,-0.48 0.68,-0.65 0.32,0.01 1.06,-1.81 0.54,0.15 0.38,-0.24 0.69,0.42 3.47,-2.34 -0.32,-0.45 0.19,-0.25 -0.31,-0.22 0.73,-2.06 -0.8,-2.2 0.1,-0.67 0.23,-0.39 1.09,-0.09 0.63,0.47 0.43,0 0.47,-1.65 0.96,0.26 1.1,-0.07 0.35,-0.73 -0.12,-0.44 0.45,-0.06 0.5,-0.63 -0.58,-0.39 0.78,-1.18 1.94,-0.12 1.22,0.44 0.34,0.47 0.39,0.09 0.83,1.44 0.62,-0.15 0.87,0.22 0.51,-0.42 0.3,0.17 0.7,-1.12 0.55,0.08 0.53,-0.56 0.22,0.4 1.08,0.03 1.35,1.18 0.9,0.16 0.53,0.41 z"},{"id":"ke-35","name":"Nyandarua","d":"m 157.21705,319.92063 0,0 1.62,1.22 -0.41,0 0.19,0.64 -3.97,7.2 -0.35,1.33 0.41,1.24 -0.71,0.94 1.68,0.95 -0.46,0.81 1.59,1.84 -0.1,1.46 0.79,0.22 0.09,0.99 -0.54,1.95 0.39,0.48 0.44,2.89 0.57,0.3 0.06,0.9 1.38,1.83 -0.03,4.04 0.83,3.61 0.83,0.97 -0.86,0.04 0.24,0.43 -0.1,1.07 -1.97,-2.38 -0.8,-0.36 -0.75,0.53 -0.47,-0.18 -2.4,2.35 0.59,1.38 -1.87,-0.19 0.22,1.28 0.47,0.74 -0.63,1.43 -1.44,0.98 0.39,0.41 -0.9,0.51 -0.57,-0.68 0.43,-2.26 -0.12,-1.06 0.56,-0.7 -1.53,-5.26 -0.82,-1.97 1.3,-0.85 -1.25,-2.49 0.4,-0.23 -0.16,-0.69 -0.47,-0.33 0.19,-0.42 -0.37,-0.18 -0.04,-0.63 -0.52,0.81 -2.06,0.4 -0.86,-1.01 -0.2,-2.4 -2.19,0.46 -0.45,-0.37 0.24,-1.15 -0.41,-1.2 0.33,-0.42 -0.27,-0.45 0.09,-0.58 -0.37,-0.38 -0.01,-1.48 -0.49,-0.6 0.14,-1.21 -0.2,-0.84 -0.33,-0.24 -0.05,-1 -0.72,-0.52 -0.31,-0.96 -1.55,0.75 -1.23,-0.12 -0.16,-1.08 -0.99,0.37 -0.97,0.94 -0.68,-2.9 -0.78,0.17 -1.05,-0.2 -0.39,0.74 -0.79,-4.7 2.02,-0.94 -1.3,-2.57 -0.28,0.09 -0.36,-0.52 -0.66,-3.73 1.22,-1.78 0.36,0.14 0,0.43 1.05,0.13 0.32,-1.81 -0.21,-2.01 0.25,-0.23 0.27,-1.62 0.67,-0.03 0.23,-1.17 1.23,-0.74 0.04,0.41 0.29,-0.03 0.23,-0.62 2.46,-0.85 -0.52,-1.82 0.7,-0.44 0.32,0.11 0.52,1.15 1.22,0.96 0.04,-0.32 0.4,0.39 0.39,-0.14 -0.02,-0.41 0.83,0.03 0.6,-0.37 -1.33,-0.78 1.28,-1.47 1.03,-0.35 1.22,-2.79 2.75,3.15 0.62,2.09 3,-1.27 0.82,1.53 0.05,0.93 0.58,1.4 2.03,-0.73 0.85,1.89 -3.88,0.24 -0.46,0.73 -0.84,0.62 -0.82,1.35 0.73,0.71 -0.3,0.61 0.41,0.08 0.53,0.62 3.68,0.29 1.19,2.59 0.21,-0.06 z"},{"id":"ke-45","name":"Vihiga","d":"m 58.18705,299.78063 0,0 -0.58,2.52 -1.76,0.67 -0.13,0.37 -1.31,0.93 0.01,2.11 -0.63,0.84 0.05,0.5 -0.58,0.8 -0.08,0.58 -1.55,-0.04 -2.74,2.31 -0.29,-0.73 -0.85,0.12 -0.2,0.54 0.46,1.28 -0.41,0.06 -0.71,-1.1 -0.72,0.22 -0.39,0.66 -0.79,-0.06 -0.43,0.32 0.22,-0.9 -1.59,0.22 -1.44,-0.79 -1.36,0 -0.57,-0.75 -0.85,0.64 0.18,0.49 -0.55,1.36 -0.38,0.27 -0.62,0.24 -0.21,-0.27 0.09,-1.12 -0.46,-0.01 -0.41,0.36 -0.78,-0.37 0.54,-0.63 -0.35,-0.56 0.79,-0.73 0.17,-1.45 0.34,-0.19 0.01,-1.42 -0.3,-0.97 0.43,-0.43 0.6,0.03 0.79,-0.49 -0.03,-0.64 2.94,-0.8 1.48,0.16 0.72,-0.18 0.36,0.47 0.75,-0.74 0.49,0.19 0.01,-0.48 0.71,-0.01 1.18,-0.53 0.03,0.41 0.53,0.34 2.19,-1.35 0.26,0.12 0.85,-0.38 0.6,0.13 -0.01,-0.89 -0.27,-0.37 0.3,-0.11 1.7,0.16 0.8,-0.91 0.41,0.22 0.41,-0.28 0.55,0.14 0.5,-0.53 0.61,0.64 1.27,-0.21 z"},{"id":"ke-31","name":"Nakuru","d":"m 134.23705,312.43063 0,0 -0.27,1.62 -0.25,0.23 0.21,2.01 -0.32,1.81 -1.05,-0.13 0,-0.43 -0.36,-0.14 -1.22,1.78 0.66,3.73 0.36,0.52 0.28,-0.09 1.3,2.57 -2.02,0.94 0.79,4.7 0.39,-0.74 1.05,0.2 0.78,-0.17 0.68,2.9 0.97,-0.94 0.99,-0.37 0.16,1.08 1.23,0.12 1.55,-0.75 0.31,0.96 0.72,0.52 0.05,1 0.33,0.24 0.2,0.84 -0.14,1.21 0.49,0.6 0.01,1.48 0.37,0.38 -0.09,0.58 0.27,0.45 -0.33,0.42 0.41,1.2 -0.24,1.14 0.45,0.38 2.19,-0.46 0.2,2.4 0.86,1.01 2.06,-0.4 0.52,-0.81 0.04,0.63 0.37,0.19 -0.19,0.41 0.47,0.33 0.16,0.69 -0.4,0.23 1.25,2.49 -1.3,0.85 0.82,1.97 1.53,5.26 -0.56,0.7 0.12,1.06 -0.43,2.26 0.57,0.68 0.48,0.24 0.41,-0.16 0.55,0.45 -0.32,0.74 0.43,0.33 0.28,1.79 0.52,0.23 0.08,0.48 -0.63,3.01 0.23,1.08 -1.22,2.18 -0.18,-0.08 -1.27,1.54 -0.45,1.65 -2.54,-1.9 -8.89,-4.19 -4.08,-7.78 -3.37,1.16 -0.59,-1.02 -0.49,-0.01 0.25,-0.41 -1.16,-2.06 -0.67,-2.02 1.72,-1.85 0.16,-1.11 -0.46,-0.36 0.57,-0.73 -1.78,-1.22 -0.44,-1.73 -0.64,-0.14 -2.37,-2.07 -0.16,-2.08 -3.94,2.25 -1,-0.88 -3.73,2.91 -0.97,-0.5 0.03,-0.52 -2.18,-2.68 -0.87,0.05 0.16,-0.4 -0.19,-0.37 2.25,-0.11 1.97,1.75 1.83,-2.02 -2.17,-4.3 -2.31,-0.45 -0.85,-1.17 -3.3,-1.85 0.44,-1.25 -0.17,-0.35 -1.22,0.58 -0.17,-1.09 -0.66,-0.09 -1.61,4.62 -1.92,-0.33 -1.22,1.26 -0.43,0.05 0.04,1.36 -1.06,1.28 -0.6,2.98 -0.71,0.65 -0.27,0.98 -0.63,0.3 -0.39,0.94 -1.06,-1.05 -1.49,-0.72 -0.79,-4.75 -9.97,-16.35 3.25,-1.41 1.91,-0.5 1.25,0.06 0.2,-0.6 2.48,1.29 -0.19,1.22 0.68,0.26 0.64,-1.74 0.54,0.32 0.17,0.59 0.39,-0.27 0.52,0.29 0.61,-0.35 0.05,-0.69 0.82,-0.25 0.36,-0.78 0.27,-1.23 -0.1,-1.69 0.32,-0.09 0.14,-0.62 0.55,-0.3 -0.45,-0.19 0.28,-1.28 -0.9,0.1 -0.4,-0.77 -0.45,-0.05 -0.85,0 -0.81,0.48 -0.58,-0.68 -0.16,-1.04 0.1,-0.36 0.29,0.02 1.1,-1.14 -0.49,-0.66 0.03,-0.41 0.51,-0.19 0.93,-1.14 0.53,1.15 1.08,-0.42 1.17,0.12 -0.05,1.15 0.25,0.78 0.77,0.75 1.33,2.14 -0.39,0.73 0.15,2.25 0.53,0.46 1.67,0.26 0.96,-1.72 -0.46,-0.15 1.02,-1.72 -0.03,-2.89 0.94,-0.66 0.84,1.11 3.15,-4.77 1,0.89 0.35,-0.2 0.98,1.93 0.58,-0.25 -0.03,-0.31 1.25,-1.21 1.14,-2 0.5,-1.66 -0.13,-0.44 -2.63,-2.8 0.61,-1.47 1.18,0.45 0.25,0.54 -0.01,1.2 1.85,-0.16 0.53,1.64 1.95,0.58 0.62,0.95 2.42,1.04 1.06,-1.13 -0.39,-3.16 1.26,0.12 1.18,-7.23 2.84,-0.77 -0.12,-0.98 -0.66,-0.22 -0.32,-0.47 1.39,-0.36 1.94,1.47 2.3,3.48 0.44,1.18 0.19,0.92 -1,1.33 -0.82,1.83 0.57,1.71 -0.55,2.76 z"},{"id":"ke-38","name":"Siaya","d":"m 26.48705,293.64063 0,0 1.5,1.21 -0.42,0.58 0.68,0.79 -0.19,1.57 -0.82,0.27 0.46,1.26 -0.38,1.53 0.9,-0.32 1.58,-1.53 0.93,-0.33 0.38,0.68 -0.87,0.26 -0.59,0.88 0.9,1.07 -0.4,0.65 -0.56,0.24 0.67,0.37 1.74,-0.66 0.85,0.34 -0.01,0.76 -0.58,0.41 -0.85,0.03 0.13,0.43 1.21,0.45 -0.36,0.14 -0.02,0.58 0.34,-0.17 0.78,0.2 0.11,-0.51 0.47,-0.27 -0.44,-0.35 0.27,-0.32 0.47,0.53 0.3,-0.7 0.63,0.36 0.97,-0.82 0.78,0.63 -0.12,0.54 -0.47,0.27 0.9,0.37 -0.32,0.43 0.29,0.31 -0.3,0.3 0.3,0.97 -0.01,1.42 -0.34,0.19 -0.17,1.45 -0.79,0.73 0.26,0.68 -0.73,0.82 -2.48,0.52 -1.45,0.71 -2.79,2.06 4.11,12.63 -3.49,1.96 -5.63,4.81 -0.94,0.44 -0.78,-0.11 -0.67,-0.59 -2.42,-4.33 -16.7,-0.01 1.97,-11.88 -1.81,-5.91 3.94,0.05 1.3,-1.53 1.36,-5.18 0.45,-0.82 -0.11,-0.85 0.87,-0.39 0.25,0.13 0.48,-0.67 0.3,0.01 -0.11,0.59 0.63,-1.13 -0.12,-1.77 -0.38,-0.61 0.61,-1.9 0.02,-1.3 1.27,-0.89 1.09,-1.79 0.06,-0.62 0.97,0.33 0.73,1.08 0.84,0.47 0.07,0.43 0.18,-1.61 1.7,-0.08 0.72,-1.36 0.78,-0.1 1.33,0.45 2.67,-0.23 1.32,0.32 0.3,0.46 0.5,-0.51 z"},{"id":"ke-32","name":"Nandi","d":"m 53.90705,279.97063 0,0 11.1,-0.9 3.1,1.28 0.38,-0.88 0.58,0.55 0.68,0.08 0.7,0.5 0.95,-0.2 0.51,-0.45 -0.3,2.4 -1.18,1.86 2.07,3 1.01,2.37 1.73,2.87 4.56,6.64 2.1,1 -0.23,2.9 2,0.91 0.86,1.45 0.59,-0.41 0.43,0.21 1.93,4.95 -1.37,0.77 -0.56,1.7 1.16,3.07 -1.25,0.52 -1.75,1.32 -1.75,-0.05 -1.89,-1.3 -1.59,0.72 -3.06,0.41 0,-2.22 -0.32,-1.72 -0.85,-0.48 -0.71,-0.16 -1.84,0.28 -0.55,0.45 -2.95,-2.03 0.06,1.32 -0.37,0.29 -0.2,0.76 -1.11,0.69 -0.36,0.66 -0.89,-1.89 -2.47,-0.35 -1,-0.54 0.03,0.27 -0.64,-0.01 -0.8,0.44 -0.68,-0.31 0.13,0.23 -1.79,0.33 -0.22,-0.19 0.07,-0.38 -5.4,0.1 -1.01,-0.32 -0.3,-0.58 1.54,-2.1 -0.69,0.12 -0.52,0.62 -0.35,0.05 -0.92,0.99 -0.36,0.81 -1.02,-0.22 -0.47,0.9 -0.25,-0.01 -0.65,-1.74 0.08,-0.48 0.96,-0.2 0.29,0.73 2.74,-2.31 1.55,0.04 0.08,-0.58 0.58,-0.8 -0.05,-0.5 0.63,-0.84 -0.01,-2.11 1.31,-0.93 0.13,-0.37 1.76,-0.67 0.31,-0.62 -0.26,-0.33 0.68,-2.03 0.78,0.01 0.78,-1.94 1.27,0.04 -1.9,-4.3 -0.5,-2.38 0.67,0.17 0.4,-0.72 0.11,-2.76 -1.87,-3.42 -0.96,-1.03 -0.01,-0.55 -3.2,-2.47 z"},{"id":"ke-26","name":"Meru","d":"m 248.53705,299.78063 0,0 0.71,0.98 1.79,1.26 0.55,2.66 1.24,0.96 -0.29,1.07 0.93,0.5 0.01,0.4 0.49,-0.03 -0.27,0.95 0.72,0.35 0.01,1.03 1.13,0.92 0.14,0.45 1.23,0.7 -0.05,0.44 0.38,0.3 -0.04,0.81 0.39,0.54 -0.12,0.65 0.53,0.41 -0.98,0.32 -0.61,-0.14 -0.65,0.75 -2.03,-1.41 -0.97,0.25 -0.61,-0.63 -1.01,-0.36 0.15,-0.32 -0.84,-1.15 -1.83,-0.58 -0.32,0 -0.28,0.38 -0.85,-0.64 -0.16,-0.73 -0.44,-0.09 0.16,-0.33 -1.02,-0.4 -0.78,0.26 -0.91,-0.66 -0.9,-0.16 -1.35,-1.18 -1.08,-0.03 -0.19,-0.39 -0.56,0.55 -0.55,-0.08 -0.7,1.12 -0.43,-0.15 -0.19,0.34 -0.73,0.09 -0.31,-0.24 -0.65,0.14 -0.82,-1.44 -0.39,-0.09 -0.34,-0.47 -1.22,-0.44 -1.72,0.04 -1,1.26 0.58,0.39 -0.5,0.63 -0.45,0.06 0.12,0.44 -0.35,0.73 -1.1,0.07 -0.96,-0.26 -0.47,1.65 -0.43,0 -0.63,-0.47 -1.09,0.09 -0.23,0.39 -0.1,0.67 0.8,2.2 -0.73,2.06 0.31,0.22 -0.19,0.25 0.32,0.45 -3.47,2.34 -0.69,-0.42 -0.38,0.24 -0.54,-0.15 -1.06,1.81 -0.32,-0.01 -0.68,0.65 -2.83,0.48 -0.99,-0.19 -0.22,0.71 -1.05,-0.24 -0.21,-0.3 -0.87,-0.08 -0.57,-0.63 -0.67,-0.02 -0.69,-0.63 -3.61,-0.11 -12.56,-1.73 -9.86,-6.28 -0.28,-0.25 0.06,-0.4 -1.21,-0.97 -0.41,-1.11 -0.86,-0.92 1.29,-0.95 1.66,-0.09 0.8,-0.6 2,-0.44 1.96,-1.02 0.6,-0.39 0.09,-1.08 0.74,-0.15 0.31,0.4 1.46,-1.72 0.1,-1.38 1.51,-1.56 1.77,-0.26 -0.26,-0.46 0.86,-0.23 -0.03,-0.63 1.08,-2.24 -0.41,-0.41 0.73,-0.52 0.12,-0.48 1.42,-0.74 0,-0.69 1.62,-0.09 2.08,0.84 4.16,1.09 0.61,-0.86 0.16,-1.55 -0.18,-0.49 0.31,-0.53 0.16,-0.22 1.45,0.02 1.28,-1.9 -0.26,-2.33 -0.75,-0.02 -0.24,-1.04 -0.01,-2.33 0.31,-0.45 -0.01,-0.72 13.69,-4.61 13.45,-6.04 6.59,19.29 1.11,0.43 0.03,5.37 1.86,0.69 1.48,0.99 z"},{"id":"ke-04","name":"Busia","d":"m 30.06705,269.11063 0,0 -0.1,0.53 -0.52,-0.29 -1.1,0.15 0.72,2.22 -0.37,0.5 0.45,1.24 -1.95,0.9 -0.24,1.77 -0.53,0.51 0.03,0.79 0.39,0.65 -0.49,0.97 1.3,1.4 1,1.87 -1.3,0.53 0.27,1.87 -1.62,0.28 -0.06,1.18 -1.02,0.67 1,1.08 1.02,0.07 2.55,1.76 -1.21,0.67 -0.27,1.07 -0.64,0.37 -0.17,1.1 -1.22,1.18 -0.3,-0.46 -1.26,-0.31 -2.73,0.22 -1.76,-0.43 -0.35,0.08 -0.72,1.36 -1.7,0.08 -0.18,1.61 -0.07,-0.43 -0.84,-0.47 -0.73,-1.08 -0.97,-0.33 -0.06,0.62 -1.09,1.79 -1.29,0.94 0,1.25 -0.61,1.9 0.38,0.61 0.12,1.77 -0.63,1.13 0.11,-0.59 -0.3,-0.01 -0.48,0.67 -0.25,-0.13 -0.87,0.39 0.11,0.85 -0.45,0.82 -1.36,5.18 -1.3,1.53 -3.94,-0.05 -2.21,-7.22 0.12,-0.64 5.23,-7.11 -0.02,-0.28 0.99,-0.82 0.2,-0.8 0.94,-0.44 -0.09,-0.73 0.52,-0.3 0.02,-0.58 0.57,-0.43 -0.07,-0.7 0.79,-0.08 1.58,-1.36 0.49,-1.62 -0.5,-1.97 -0.59,-0.75 -0.01,-1.75 1.78,-1.37 -0.21,-1.69 0.35,-0.41 -0.35,-0.36 0.51,-0.8 0.05,-1.18 0.61,-1.59 0.8,-0.11 1.44,-1.16 0.51,0.07 0.35,-0.87 0.48,-0.35 0.85,0.15 0.3,-0.4 0.89,0.17 0.28,-0.35 0.61,0.19 1.43,-0.62 0.1,-2.16 1.97,-0.93 -0.33,-1.37 0.46,-2.54 2.5,-0.74 0.6,0.36 0.74,-0.1 1.02,1 0.36,-0.05 0.32,-0.58 0.7,0.03 0.52,1.79 z"},{"id":"ke-20","name":"Laikipia","d":"m 147.56705,262.76063 0,0 -0.36,1.9 10.7,0.01 1.01,-0.23 1.21,0.17 1.5,-0.61 1.23,-1.9 2.13,-0.63 1.27,0.77 1.06,3.17 0.56,0.32 -0.17,0.28 1.42,2.99 1.19,0.24 0.95,-0.39 0.62,0.67 0.33,-0.55 0.69,-0.27 -0.27,0.8 -0.2,3.63 -0.13,0.27 -0.46,-0.03 -0.21,1.63 -0.69,0.11 -0.23,0.5 -0.2,-0.06 -0.12,0.77 -0.25,-0.2 -0.95,0.92 -0.15,1.79 28.85,3.1 -0.55,0.64 0.03,1.5 -0.63,1.04 -0.04,0.94 0.34,1.62 0.48,0.21 0.43,1.45 0.53,0.29 -0.07,0.76 0.79,0.6 0.12,3.64 -0.33,0.22 -0.14,0.64 -0.64,0.19 -0.12,0.48 -0.73,0.52 0.41,0.41 -1.08,2.24 0.03,0.63 -0.86,0.23 0.26,0.46 -1.77,0.26 -1.51,1.56 -0.1,1.38 -1.46,1.72 -0.31,-0.4 -0.74,0.15 -0.09,1.08 -0.6,0.39 -1.96,1.02 -2,0.44 -0.8,0.6 -1.66,0.09 -1.29,0.95 0.86,0.92 0.41,1.11 1.21,0.97 -0.45,1.4 -2.69,-2.96 0.02,-0.71 -0.33,0.51 -0.45,-0.06 -0.67,0.68 -1.55,2.24 -2.71,1.24 0.38,3.67 0.58,0.61 0.74,0.26 -0.13,1.52 0.7,0.23 -0.56,2.31 0.27,0.6 -0.6,0.97 -0.75,0.4 0.44,0.89 -0.59,1.42 -1.38,-0.65 -4.77,-1.4 -0.52,-0.64 -0.8,0.3 -0.98,-3.24 0.71,0 1.09,-1.14 -0.72,-1.3 0.17,-0.66 -1.74,-0.44 0,-1.84 -2.19,0.18 -1.47,0.46 -0.11,-0.31 -0.62,0.66 -2.08,0.5 -0.29,0.41 -3.26,0.99 -1.19,-2.59 -3.42,-0.21 -1.2,-0.78 0.3,-0.61 -0.73,-0.71 2.01,-2.64 3.99,-0.3 -0.85,-1.89 -2.03,0.73 -0.58,-1.4 -0.05,-0.93 -0.82,-1.53 -3,1.27 -0.62,-2.09 -2.75,-3.15 -1.22,2.79 -1.03,0.35 -1.28,1.47 1.33,0.78 -0.6,0.37 -0.83,-0.03 0.02,0.41 -0.39,0.14 -0.4,-0.39 -0.04,0.32 -1.22,-0.96 -0.52,-1.15 -0.32,-0.11 -0.7,0.44 0.52,1.82 -2.46,0.85 -0.23,0.62 -0.29,0.03 -0.04,-0.41 -1.23,0.74 -0.23,1.17 -0.67,0.03 0.55,-2.76 -0.57,-1.71 0.82,-1.83 1,-1.33 -0.19,-0.92 -0.44,-1.18 -2.3,-3.48 -1.94,-1.47 0.76,-1 -1.79,-3.55 2.61,-6.42 3.7,-7.93 -1.05,-3.79 0.73,-0.74 3.2,-0.84 3.43,-3.31 3.93,-6.94 0.88,-0.47 z"},{"id":"ke-11","name":"Kakamega","d":"m 63.47705,260.43063 0,0 0.34,-0.39 0.79,-0.11 0.05,-0.24 0.46,0.17 0.26,-0.18 1.56,0.34 0.26,0.71 1.05,0.52 0.62,-0.38 -0.04,1.44 0.72,2.01 0.03,-0.4 0.31,-0.15 0.89,0.15 0.08,4.98 0.41,-0.02 -0.06,3.77 -0.21,0.43 0.28,0.26 -1.83,0.51 -0.55,0.7 -0.55,-0.36 -1.01,0.99 -0.88,0.05 -0.36,-0.24 -0.62,0.17 0.04,-0.41 -0.92,-0.25 0.09,0.61 -0.68,0.97 -1.67,-1.26 -0.2,0.35 -1.01,0.3 -0.69,0.85 -1.18,0.15 -1.36,0.89 -1.78,-0.81 0.4,0.37 -2.61,3.05 3.2,2.47 0.01,0.55 0.96,1.03 1.87,3.42 -0.11,2.76 -0.4,0.72 -0.67,-0.17 0.5,2.38 1.9,4.3 -1.27,-0.04 -0.78,1.94 -0.78,-0.01 -0.15,0.46 -1.27,0.21 -0.61,-0.64 -0.5,0.53 -0.55,-0.14 -0.41,0.28 -0.41,-0.22 -0.78,0.9 -1.28,-0.24 -0.72,0.19 0.25,0.38 0.01,0.89 -0.6,-0.13 -0.85,0.38 -0.26,-0.12 -2.19,1.35 -0.53,-0.34 0.02,-0.41 -1.23,0.53 -0.71,0.01 -0.01,0.48 -0.49,-0.19 -0.75,0.74 -0.36,-0.47 -3.2,0.17 -1.94,0.65 0.03,0.64 -0.79,0.49 -0.73,0.1 -0.29,-0.31 0.32,-0.43 -0.9,-0.38 0.47,-0.26 0.12,-0.57 -0.78,-0.6 -0.97,0.82 -0.63,-0.36 -0.3,0.7 -0.47,-0.53 -0.27,0.32 0.44,0.35 -0.47,0.27 -0.11,0.51 -0.78,-0.2 -0.34,0.17 0.02,-0.58 0.36,-0.14 -1.21,-0.45 -0.13,-0.43 0.85,-0.03 0.58,-0.41 0.01,-0.76 -0.85,-0.34 -1.74,0.66 -0.67,-0.37 0.56,-0.24 0.4,-0.65 -0.9,-1.07 0.59,-0.88 0.87,-0.26 -0.38,-0.68 -0.95,0.35 -1.59,1.53 -0.9,0.22 0.41,-1.45 -0.46,-1.26 0.82,-0.27 0.19,-1.57 -0.68,-0.79 0.42,-0.58 -1.5,-1.21 0.72,-0.67 0.17,-1.1 0.64,-0.37 0.27,-1.07 1.21,-0.67 -2.55,-1.76 -1.02,-0.07 -1,-1.08 1.02,-0.67 0.06,-1.18 0.74,-0.22 0.45,0.14 0.55,-0.56 0.96,-0.42 1.73,0.75 1.19,-0.34 1.27,-0.87 0.86,1.52 1.97,0.86 0.33,-1.05 0.75,-0.5 0.66,0.69 0.85,0.1 0.21,1.46 0.5,0.63 0.12,-1.46 0.74,-0.3 0.63,0.42 0.09,-0.75 0.54,-0.39 0.24,0.56 0.65,0.16 1.36,-0.52 0.66,-0.68 -0.16,-0.65 0.75,-0.12 0.75,-1.25 0.46,0.17 0.29,-0.3 0.38,0.11 0.31,-0.21 0.43,-0.43 0.23,-0.76 0.57,-0.2 0.65,-0.67 0.26,-0.93 1.85,-1.19 0.75,-0.11 -0.63,-0.77 0.97,-0.97 0.88,-0.45 0.36,-1.87 0.4,-0.66 0.73,-0.33 0.16,-0.51 1.22,0.03 0.59,-0.47 0.83,0.33 1.12,-0.93 0.18,-0.46 -0.42,-0.9 0.41,-0.87 0.62,0.04 0.51,-0.71 0.49,0.24 1.12,-0.45 1.15,0.67 0.81,-0.52 0.74,0.57 0.38,-0.51 0.5,0.19 -0.12,-0.39 0.37,-0.3 1.11,-0.15 0.18,-1.07 -0.2,-0.74 -0.65,-0.33 -0.63,-1 -0.77,-0.38 -0.16,-1.47 -0.67,-0.52 0.32,-1.6 z"},{"id":"ke-44","name":"Uasin Gishu","d":"m 83.02705,257.18063 0,0 1.05,0.52 0.39,-0.47 1.91,0.34 -0.25,1.73 3.08,0.43 -0.73,1.42 1.83,-0.05 0.25,1.02 -0.62,2.19 0.96,0.08 0.38,2.98 -0.28,0.32 -0.4,1.94 0.63,0.91 -0.04,0.46 -5.37,-0.07 4.08,6.57 -0.94,4.76 -0.16,3.19 0.09,1.2 0.93,1.04 0.17,1.19 -0.76,1.17 0.66,0.55 0.18,0.57 0.75,0.48 -0.09,1.62 0.32,0.4 -0.03,1.64 -0.48,0.79 0.2,0.31 -0.53,0.42 1.13,1.48 1.27,-0.35 0.71,0.3 -1.6,2.12 2.49,-0.04 0.65,-0.43 0.03,0.57 0.46,0.15 0.7,0.85 0.13,1.17 -0.91,2.01 -0.06,2.66 -1.83,-1.29 -0.08,0.56 0.31,0.45 -0.39,0.79 0.19,0.62 -0.85,0.04 -0.2,1.8 -0.39,-0.03 -0.14,0.42 -1.99,-0.39 -1.12,0.27 -0.07,-0.25 0.72,-0.28 -0.31,-0.42 -1.73,0.1 -1.78,-4.56 -0.43,-0.21 -0.59,0.41 -0.86,-1.45 -2,-0.91 0.23,-2.9 -2.1,-1 -4.56,-6.64 -1.73,-2.87 -1.01,-2.37 -2.07,-3 1.18,-1.86 0.3,-2.4 -0.51,0.45 -0.95,0.2 -0.7,-0.5 -0.68,-0.08 -0.58,-0.55 -0.38,0.88 -3.1,-1.28 -11.1,0.9 2.61,-3.05 -0.4,-0.37 1.78,0.81 1.36,-0.89 1.18,-0.15 0.69,-0.85 1.01,-0.3 0.2,-0.35 1.67,1.26 0.68,-0.97 -0.09,-0.61 0.92,0.25 -0.04,0.41 0.62,-0.17 0.36,0.24 0.88,-0.05 1.01,-0.99 0.55,0.36 0.55,-0.7 1.03,-0.46 0.79,-0.02 -0.27,-0.29 0.21,-0.43 0.06,-3.77 -0.41,0.02 -0.08,-4.98 -0.89,-0.15 -0.31,0.15 -0.03,0.4 -0.72,-2.01 0.04,-1.44 0.24,-0.28 -0.24,-0.43 0.21,-0.78 0.59,-0.33 0.09,-0.39 1.54,0.11 0.62,-0.31 0.39,0.15 1.04,-0.27 1.8,0.31 1.83,-1.2 0.85,0.32 0.51,0.78 0.85,0.36 0.72,1.36 1.39,-2.36 1.11,0.68 0.62,-1.41 z"},{"id":"ke-07","name":"Garissa","d":"m 308.12705,259.27063 0,0 0.86,-0.96 2.63,-1.65 5.85,-2.36 1.09,0.83 0.73,1.03 0.31,1.62 1.96,4.38 1.79,5.72 2.92,4.15 1.81,1.53 1.08,2.48 1.39,1.98 1.98,2.05 0.5,1.03 1.68,0.79 0.73,0.97 1.41,0.71 2.89,0.32 1.4,1.08 1.73,-0.22 2.23,1.85 2.01,1.15 1.94,0.61 2.66,0.37 3.93,2.85 1.86,0.96 4.15,4.19 5.59,3.04 2.51,0.15 1.55,0.74 1.36,-0.37 2.74,0.22 1.2,-0.65 0.7,0.29 0.39,-0.88 1.1,-1.04 1.82,0.6 1.2,0.03 0.51,-0.59 0.54,0.01 0.44,-0.42 2.03,0.04 1.95,-1.5 0.1,-0.73 0.63,-0.4 1.21,-2.4 1.11,-0.31 0.96,-1.03 1.21,-0.6 5.12,-1.42 1.33,-0.77 1.86,-1.8 3.37,-1.66 0.82,-0.66 0.04,73.95 32.57,43.94 -0.01,3.49 -37.68,3.2 -39.73,18.21 -0.63,-1.84 0,-1.16 -0.62,-1.18 0.19,-1.35 -0.11,-4.19 -1.4,-2.26 -0.3,-3.42 0.75,-2.28 -0.72,-1.51 0.1,-3.02 -0.34,-2.1 -0.62,-1.23 -1.62,-1.91 -0.55,-2.58 -1.03,-1.92 -0.93,-0.19 -1.84,1.13 -0.35,-0.19 -0.07,-0.29 0.39,-0.12 -0.36,-1 0.19,-0.41 -0.32,-0.18 0.26,-1.13 -0.17,-0.48 -0.38,-0.12 -0.15,-1.21 -0.74,-1.23 0.33,-0.28 -0.31,-0.82 -0.41,0.06 -0.07,-0.76 0.62,-1.07 -0.43,-0.27 -0.4,-1.41 0.4,-0.36 -0.29,-0.44 0.41,-0.42 -0.1,-0.5 0.41,-0.3 -0.18,-0.42 -0.42,-0.15 0.38,-0.83 -0.72,-0.1 0.26,-0.27 -0.24,-0.39 0.27,-0.67 -0.54,-0.13 -0.1,-0.59 -0.54,-0.01 0.07,-0.53 -1.04,-1.46 -0.4,-1.32 -0.62,-0.33 -0.07,-0.43 -0.42,0.1 -0.23,-0.22 -0.37,-2.94 -0.42,-0.09 -0.29,-0.65 0.21,-0.36 -0.5,-0.41 0.24,-0.5 -0.78,-0.82 -0.03,-1.22 -0.51,-0.06 -0.21,-0.3 0.33,-0.62 -0.39,-0.71 0.5,-0.21 -0.45,-0.32 -0.31,0.08 0.09,-1.05 -0.71,0.41 -0.03,-0.66 0.55,-0.57 -0.34,-0.51 -0.68,-0.1 0.22,-0.58 -0.73,-1.05 0.23,-0.29 -0.34,-0.26 0.55,-0.33 -0.47,-0.63 0.44,-1.25 -0.56,-0.37 -0.16,0.56 -0.28,0 0.09,-0.37 -0.35,-0.45 0.6,0.05 -0.11,-1.11 -0.55,-0.5 0.36,-0.38 -0.96,-0.03 0.5,-0.62 -0.51,-0.02 0.12,-0.67 -0.85,-0.24 -0.21,-0.31 0.42,-0.24 -0.42,-0.46 0.49,-0.2 -0.09,-0.51 0.47,-0.23 -0.91,-0.38 -0.15,-0.51 0.34,0.07 0.06,-1.28 -0.42,-0.07 0.15,-0.57 -0.29,0.2 -0.26,-0.39 -0.14,-0.57 0.24,-0.59 -0.53,0.05 -0.09,-0.65 -0.54,0.07 0.13,-0.55 -0.76,-1.3 0.44,-0.96 -0.63,-0.1 -0.52,-0.56 -0.38,0.23 -0.55,-0.52 -0.06,-0.48 -0.45,0.34 -1.94,-0.11 0.18,-0.54 -0.39,0.21 -0.03,-0.42 -0.41,-0.23 0.05,-1.3 -0.6,0.32 -0.21,-0.57 -0.52,0.09 -0.1,-0.63 0.38,-0.08 0.03,-0.28 -1.21,-0.86 -0.41,-0.54 -0.01,-0.67 -0.54,-0.31 -0.1,-1.09 0.37,-0.78 -0.91,-0.65 -0.01,-0.43 -0.27,0.24 -0.21,-0.16 0.19,-1.71 -0.69,-0.02 0.1,-0.65 -0.33,-0.22 -0.02,-0.83 -0.28,-0.2 0.3,-0.41 -0.23,-0.29 0.16,-0.3 -0.41,-0.11 0.13,-0.28 -0.26,-0.6 -0.39,0.16 -0.15,-0.43 -0.93,-0.46 -1.09,-2.2 -0.42,0.24 -0.54,-0.44 -0.3,0.55 -0.46,0.11 0.27,-0.93 -0.42,-0.27 -0.69,-1.65 -0.44,0.06 -0.1,-0.3 -0.65,-0.16 -0.42,-0.48 -0.14,-0.68 -0.8,-0.6 -0.48,-0.04 -1.01,-1.15 -1.19,0.04 -0.35,0.28 -0.19,-0.4 -0.73,0.12 -1.24,-1.59 -0.46,0.33 -0.1,-0.5 -0.77,0.42 -0.3,-0.58 -0.53,0.05 0.18,-0.7 -0.83,-0.72 -0.48,0.38 -0.54,-0.2 -0.76,0.3 -0.4,-0.24 -1.02,0.54 -0.15,-0.45 -0.47,0.17 -1.08,-0.19 -0.07,-0.48 -0.71,0.13 -0.65,0.6 -1.1,-0.43 -0.73,0.09 -0.41,-0.58 -1.59,0.22 -0.12,-0.63 -0.74,0.07 -0.03,-0.6 -1.05,-0.69 -0.22,-0.58 -1.36,-1.32 -0.5,-1.06 -1.68,0.42 -0.9,-0.62 -0.73,0.72 -0.33,-0.01 -0.23,-0.36 -0.61,0.6 -0.86,-0.03 -0.28,1.33 -0.7,0.21 -0.94,0.76 -0.41,-0.06 -0.63,-0.7 -1.18,0.55 -4.04,-0.19 -3.44,-1.34 -0.43,-0.35 0.29,-0.51 -0.73,-0.37 0.09,-0.58 -0.91,-2.47 -0.02,-1.07 -0.35,-0.91 -0.2,-2.57 0.25,-3.03 0.18,-0.59 1.15,-1.37 -0.07,-1.11 -4.52,-17.28 -0.84,-0.82 1.87,-0.06 0.6,0.21 0.27,-0.36 0.73,0.1 -0.1,-0.55 0.21,-0.22 0.66,0.36 0.88,-0.28 0.25,0.46 0.61,0.23 2.35,-2.31 1,-1.61 1.97,-1.12 0.66,-0.05 0.26,0.32 2,-0.26 0.88,-0.4 0.8,-1.29 2.15,0.41 0.49,-0.27 1.35,0.09 0.19,-0.87 0.59,-0.32 0.15,-1.06 0.43,-0.06 1.14,-1.2 1.81,0.61 0.68,-0.28 0.23,-0.51 2.31,-0.09 0.36,-0.9 1.57,-0.83 0.23,-1.73 1.27,-2.4 1.28,-1.46 0.68,-1.46 3.52,-3.64 z"},{"id":"ke-03","name":"Bungoma","d":"m 38.49705,245.40063 0,0 1.9,2.4 1.07,0.81 1.78,0.6 -0.59,1.45 4.86,6.93 1.67,0.97 0.96,-0.18 0.77,0.76 0.07,0.37 -0.78,0.86 1.47,3.92 -0.17,0.9 3.46,-1.22 3.33,-1.64 0.29,0.1 0.53,-0.98 0.97,-0.14 0.36,-0.41 1.19,-0.41 -0.03,0.28 1.87,-0.34 -0.32,1.57 0.67,0.55 -0.02,1.16 0.4,0.58 0.55,0.11 0.63,1 0.64,0.31 0.21,0.76 -0.2,1.09 -1.09,0.13 -0.37,0.3 0.12,0.39 -0.5,-0.19 -0.21,0.48 -0.42,0.04 -0.5,-0.58 -0.39,0.45 -0.45,0.06 -1.11,-0.66 -1.12,0.45 -0.49,-0.24 -0.51,0.71 -0.62,-0.04 -0.41,0.89 0.41,0.99 -1.09,1.22 -0.71,0 -0.32,-0.27 -0.59,0.47 -1.1,-0.08 -0.42,0.69 -0.6,0.2 -0.36,1.09 -0.32,0.21 0.14,0.53 -0.21,0.7 -0.88,0.45 -0.97,0.98 0.63,0.76 -0.75,0.11 -1.85,1.19 -0.26,0.93 -0.65,0.67 -0.57,0.2 -0.23,0.76 -0.43,0.43 -0.31,0.21 -0.38,-0.11 -0.29,0.3 -0.46,-0.17 -0.75,1.25 -0.75,0.12 0.16,0.65 -0.66,0.68 -1.36,0.52 -0.65,-0.16 -0.24,-0.56 -0.54,0.39 -0.09,0.75 -0.63,-0.42 -0.76,0.31 -0.1,1.45 -0.5,-0.63 -0.08,-1.34 -0.98,-0.22 -0.66,-0.69 -0.75,0.5 -0.33,1.05 -1.97,-0.86 -0.86,-1.52 -1.27,0.87 -1.21,0.34 -1.29,-0.71 -1.56,0.35 -0.21,-1.48 1.09,-0.3 0.19,-0.42 -1.04,-1.76 -1.24,-1.32 0.49,-0.97 -0.39,-0.65 -0.01,-0.94 0.32,0 0.19,-0.36 0.24,-1.77 1.95,-0.9 -0.45,-1.24 0.37,-0.5 -0.72,-2.22 1.1,-0.15 0.52,0.29 0.12,-0.82 -0.54,-1.5 -0.7,-0.03 -0.32,0.58 -0.36,0.05 -1.02,-1 -0.74,0.1 -0.5,-0.35 0.56,-0.38 0.3,-0.69 0.24,-0.1 0.15,0.23 0.15,-0.56 0.63,0.04 0.92,-0.44 -0.36,-1 0.49,-0.4 -0.04,-0.41 1.85,-1.21 0.23,-2.1 0.8,-0.65 0.86,-1.55 0.83,-5.99 0.56,-1.45 1.37,-2.04 0.02,-0.92 2.84,1.22 0.19,-2.87 z"},{"id":"ke-42","name":"Trans Nzoia","d":"m 52.18705,239.14063 0,0 5.17,-1.39 -0.26,1.84 3.77,0.33 1.2,-0.65 1.09,0.19 0.62,1.09 1.23,1.13 -0.53,0.67 0.37,0.53 2.37,1.45 0.22,-0.81 1.72,-0.27 0.41,0.24 1.6,-0.89 0.45,1.08 2.42,3.61 0.94,0.07 1.35,2.38 1.87,0.8 2.36,1.55 2.45,0.86 -0.03,0.56 -0.98,0.15 0.55,1.55 -0.73,0.34 -0.14,0.32 0.38,0.1 -0.17,0.17 0.21,0.93 0.93,0.11 -0.62,1.41 -1.11,-0.68 -1.39,2.36 -0.72,-1.36 -0.85,-0.36 -0.51,-0.78 -0.85,-0.32 -1.83,1.2 -1.8,-0.31 -1.04,0.27 -0.39,-0.15 -0.62,0.31 -1.5,-0.12 -0.13,0.4 -0.61,0.35 -0.19,0.76 0.23,0.47 -0.81,0.62 -0.92,-0.37 -0.53,-0.92 -2.16,-0.28 -0.07,0.25 -0.79,0.11 -0.34,0.39 -1.87,0.34 0.03,-0.28 -1.19,0.41 -0.36,0.41 -0.96,0.13 -0.54,0.99 -0.29,-0.1 -3.33,1.64 -3.46,1.22 0.17,-0.9 -1.47,-3.92 0.78,-0.86 -0.07,-0.37 -0.77,-0.76 -0.96,0.18 -1.67,-0.97 -4.86,-6.93 0.59,-1.45 -1.78,-0.6 -1.07,-0.81 -1.9,-2.4 3.3,-1.24 1.44,-1.12 0.43,-0.93 4.2,-0.71 1.34,0.22 0.4,-0.25 1.1,0.08 0.97,-1 0.51,-1.31 z"},{"id":"ke-05","name":"Keiyo-Marakwet","d":"m 102.63705,239.91063 0,0 -0.26,0.46 0.28,0.67 -0.42,1.33 0.36,0.22 0.2,1.26 -0.15,1.41 0.33,0.2 -0.5,1.19 -0.11,1.35 -0.33,0 -0.52,0.5 -0.02,0.45 -0.36,0.09 -0.31,0.91 0.21,0.6 -0.4,0.64 0.18,0.22 -0.29,0.06 -0.09,0.49 -0.49,0.14 -0.05,0.27 -0.39,-0.08 -0.31,0.27 0.11,0.5 -0.64,1.3 0.36,0.65 -0.22,0.22 0.04,1.05 -0.36,0.42 0.36,1.96 -0.21,0.45 -0.4,0.11 -0.16,2.28 0.16,0.81 0.99,0.79 -0.4,0.28 0.02,0.55 0.36,0.29 -0.49,0.62 0.19,1.27 -0.22,0.14 -0.46,2.27 -0.31,0.39 0.61,0.97 0.26,1.18 -0.46,0.63 0.11,0.17 -0.31,0.06 0.09,0.39 -1.15,0.32 0.22,1.6 -0.7,1.16 -0.05,0.69 0.11,0.54 0.85,0.69 -0.02,0.98 -0.6,1.05 0.02,1.25 0.54,0.59 0.07,0.78 1.02,0.45 0.04,1.2 0.83,1.21 -0.07,0.54 0.35,0.26 0.09,1.19 0.4,0.59 -0.31,0.97 0.31,0.71 0.38,-0.01 0.1,0.45 0.65,0.48 0.51,-0.03 0.43,0.41 0.13,-0.3 1.35,1.02 -0.66,2.27 0.24,0.53 -0.39,2.45 0.68,1.38 0.09,1.27 -1.69,1.33 0.19,1.12 -6.24,0.03 -0.59,-0.85 -0.46,-0.15 -0.03,-0.57 -0.65,0.43 -2.49,0.04 1.6,-2.12 -0.71,-0.3 -1.27,0.35 -1.13,-1.48 0.53,-0.42 -0.2,-0.31 0.48,-0.79 0.03,-1.64 -0.32,-0.4 0.09,-1.62 -0.75,-0.48 -0.18,-0.57 -0.66,-0.55 0.76,-1.17 -0.17,-1.19 -0.93,-1.04 -0.09,-1.2 0.16,-3.19 0.94,-4.76 -4.08,-6.57 5.37,0.07 0.04,-0.46 -0.63,-0.91 0.4,-1.94 0.28,-0.32 -0.38,-2.98 -0.96,-0.08 0.61,-1.9 -0.24,-1.3 -1.83,0.04 0.73,-1.42 -3.08,-0.43 0.25,-1.73 -1.91,-0.34 -0.39,0.47 -1.05,-0.52 -0.93,-0.11 -0.21,-0.93 0.17,-0.17 -0.38,-0.1 0.14,-0.32 0.73,-0.34 -0.55,-1.55 0.98,-0.15 0.03,-0.56 -2.45,-0.86 -2.36,-1.55 -1.87,-0.8 -1.35,-2.38 -0.94,-0.07 -2.42,-3.61 -0.45,-1.08 9.85,4.74 1.78,-0.89 10.76,-8.75 1.82,-0.37 0.55,0.48 1.3,0.18 1.78,-1.33 3.24,-0.9 -0.09,2.04 0.42,0.66 0.26,0.02 -0.39,0.75 0.19,0.68 z"},{"id":"ke-01","name":"Baringo","d":"m 102.88705,229.89063 0,0 -0.08,-0.96 0.97,-1.15 -0.22,-0.78 1.07,-1.4 1.22,-0.61 0.93,-2.46 0.44,-0.54 0.59,-3.65 -0.77,-0.37 -0.19,-0.77 0.89,-1.15 17.42,28.26 4.42,-0.08 8.17,10.27 1.34,-0.11 0.56,1.55 0.7,0.15 0.26,0.43 0.84,0.08 0.37,0.38 -0.14,1.14 0.53,1.27 0.41,0.3 0.87,-0.1 0.66,1.01 0.89,0.74 0.91,0.1 1.62,1.32 -0.88,0.47 -3.93,6.94 -3.43,3.31 -3.2,0.84 -0.73,0.74 1.05,3.79 -3.7,7.93 -2.61,6.42 1.79,3.55 -0.76,1 -1.39,0.36 0.32,0.47 0.66,0.22 0.12,0.98 -2.84,0.77 -1.18,7.23 -1.26,-0.12 0.39,3.16 -1.06,1.13 -2.42,-1.04 -0.62,-0.95 -1.95,-0.58 -0.53,-1.64 -1.85,0.16 0.01,-1.2 -0.25,-0.54 -1.18,-0.45 -0.61,1.47 2.76,3.12 -0.33,1.39 -0.69,1.31 -0.65,1.11 -1.22,1.18 0.05,0.29 -0.6,0.27 -0.98,-1.93 -0.35,0.2 -1,-0.89 -3.15,4.77 -0.84,-1.11 -0.94,0.66 0.03,2.89 -1.02,1.72 0.46,0.15 -0.96,1.72 -0.44,0.08 -0.62,-0.4 -0.64,0.05 -0.5,-0.45 -0.15,-2.25 0.39,-0.73 -1.33,-2.14 -0.77,-0.75 -0.25,-0.78 0.05,-1.15 -1.17,-0.12 -1.08,0.42 -0.85,-1.54 0.22,-0.23 -0.35,-0.81 -1.26,-0.2 -1.58,-1.42 -2.23,0.05 -1.18,-1.37 0.2,-1.8 0.85,-0.04 -0.19,-0.62 0.39,-0.79 -0.31,-0.45 0.08,-0.56 1.83,1.29 0.06,-2.66 0.91,-2.01 -0.13,-1.17 6.13,-0.03 -0.19,-1.12 1.69,-1.33 -0.09,-1.27 -0.68,-1.38 0.39,-2.45 -0.24,-0.53 0.66,-2.27 -1.35,-1.02 -0.13,0.3 -0.43,-0.41 -0.51,0.03 -0.65,-0.48 -0.1,-0.45 -0.38,0.01 -0.31,-0.71 0.31,-0.97 -0.4,-0.59 -0.09,-1.19 -0.35,-0.26 0.07,-0.54 -0.83,-1.21 -0.04,-1.2 -1.02,-0.45 -0.07,-0.78 -0.54,-0.59 -0.02,-1.25 0.6,-1.05 0.02,-0.98 -0.85,-0.69 -0.11,-0.54 0.05,-0.69 0.7,-1.16 -0.22,-1.6 1.15,-0.32 -0.09,-0.39 0.31,-0.06 -0.11,-0.17 0.46,-0.63 -0.26,-1.18 -0.61,-0.97 0.31,-0.39 0.46,-2.27 0.22,-0.14 -0.19,-1.27 0.49,-0.62 -0.36,-0.29 -0.02,-0.55 0.4,-0.28 -0.99,-0.79 -0.16,-0.81 0.16,-2.28 0.4,-0.11 0.21,-0.45 -0.36,-1.96 0.36,-0.42 -0.04,-1.05 0.22,-0.22 -0.36,-0.65 0.64,-1.3 -0.11,-0.5 0.31,-0.27 0.39,0.08 0.05,-0.27 0.49,-0.14 0.09,-0.49 0.29,-0.06 -0.17,-0.23 0.41,-0.89 -0.2,-0.54 0.24,-0.12 0.04,-0.59 0.38,-0.12 0.12,-0.55 0.73,-0.37 0.11,-1.35 0.5,-1.19 -0.33,-0.2 0.15,-1.41 -0.2,-1.26 -0.36,-0.22 0.42,-1.33 -0.28,-0.67 0.26,-0.46 -0.19,-0.68 0.39,-0.75 -0.26,-0.02 -0.42,-0.66 -0.05,-0.81 0.24,-0.4 -0.23,-0.02 0.31,-1.29 -0.69,-1.13 0.19,-1.16 0.65,-1.02 -0.19,-0.13 0.17,-0.64 0.55,-0.12 -0.3,-0.28 0.28,-0.36 -0.2,-0.55 z"},{"id":"ke-09","name":"Isiolo","d":"m 230.83705,238.97063 0,0 22.55,-17.99 2.48,-10.51 33.13,-19.23 1.3,1.59 -0.06,0.93 0.49,0.75 -0.19,0.71 0.27,1.04 1.45,1.84 0.88,0.59 1.09,1.92 0.53,0.31 0.29,0.78 1.52,1.41 0.4,0 0.58,0.69 1.08,0.67 0.78,1.38 -0.04,0.66 1.49,2.25 0.59,2.16 1.91,3.2 0.95,0.15 2.03,1.21 0.53,0.01 1.45,1.07 0.44,0.01 0.3,0.65 0.32,-0.06 0.4,0.52 1.1,0.53 1.61,2.32 0.72,0.62 0.08,0.5 0.42,0.03 0.29,0.7 0.91,0.15 1.3,1.19 0.49,0.13 -9.88,3.4 10.65,27.06 -5.85,2.35 -2.67,1.68 -4.34,4.57 -0.68,1.46 -1.28,1.46 -1.27,2.4 -0.23,1.73 -1.57,0.83 -0.38,0.91 -2.29,0.08 -0.23,0.51 -0.68,0.28 -1.81,-0.61 -1.14,1.2 -0.43,0.06 -0.15,1.06 -0.59,0.32 -0.19,0.87 -1.35,-0.09 -0.49,0.27 -2.15,-0.41 -0.8,1.29 -0.88,0.4 -2,0.26 -0.26,-0.32 -0.66,0.05 -1.97,1.12 -1,1.61 -2.35,2.31 -0.61,-0.23 -0.25,-0.46 -0.88,0.28 -0.66,-0.36 -0.21,0.22 0.1,0.55 -0.73,-0.1 -0.27,0.36 -0.6,-0.21 -1.87,0.06 0.84,0.82 4.52,17.28 0.07,1.11 -1.15,1.37 -0.18,0.59 -0.23,4.03 0.55,3.55 0.91,2.47 -0.09,0.58 0.73,0.37 -0.29,0.51 0.43,0.35 -0.94,0.17 -2.15,-0.67 -1.37,-1.16 -0.42,0.8 -1.45,-0.49 -0.48,0.39 -0.56,0.01 -1.54,-1.34 -0.57,0.25 -1.91,-0.91 -0.83,-0.1 -0.69,0.88 -0.08,0.65 -0.6,-0.01 0.05,0.68 -0.58,0.45 -1.81,-0.17 -0.44,0.91 -1.13,0.53 -0.49,0.01 -0.9,-0.79 -0.21,0.25 -0.38,-0.04 -0.89,-0.61 0.07,-0.72 -0.39,-0.54 0.04,-0.81 -0.38,-0.3 0.05,-0.44 -1.23,-0.7 -0.14,-0.45 -1.13,-0.92 -0.01,-1.03 -0.72,-0.35 0.27,-0.95 -0.49,0.03 -0.01,-0.4 -0.93,-0.5 0.29,-1.07 -1.24,-0.96 -0.55,-2.66 -1.79,-1.26 -0.26,-0.58 -1.06,-0.85 -2.73,-1.23 -0.03,-5.37 -1.11,-0.43 -6.59,-19.29 -13.45,6.04 -13.69,4.61 0.01,0.72 -0.31,0.45 0.01,2.33 0.24,1.04 0.75,0.02 0.26,2.33 -1.28,1.9 -1.45,-0.02 -0.16,0.22 -0.31,0.53 0.18,0.49 -0.16,1.55 -0.61,0.86 -4.16,-1.09 -2.08,-0.84 -1.62,0.09 0,0.69 -0.78,0.55 0.56,-1.43 -0.25,-0.73 0.04,-2.34 -0.79,-0.6 0.07,-0.76 -0.53,-0.29 -0.43,-1.45 -0.48,-0.21 -0.34,-1.62 0.04,-0.94 0.63,-1.04 -0.03,-1.5 0.55,-0.64 -28.85,-3.1 0.15,-1.79 0.95,-0.92 0.25,0.2 0.12,-0.77 0.2,0.06 0.23,-0.5 0.69,-0.11 0.21,-1.63 0.46,0.03 0.13,-0.27 0.2,-3.63 0.41,-1.44 0.78,0.58 1.86,-0.03 4.42,-1.59 0.67,0.37 0.16,-0.76 1.7,-0.48 0.45,0.38 0.43,-0.15 0.39,0.31 0.23,0.65 0.47,0.41 0.87,-0.08 0.04,0.45 0.54,0.08 0.38,0.51 1.92,-0.22 0.23,0.29 0.79,0.12 1.54,-1.35 0.6,-0.04 1.01,1.14 0.8,0.42 0.64,0.89 1.79,4.03 0.63,0.26 0.58,1.39 0.07,1.19 0.54,0.08 0.09,0.7 0.54,-0.03 0.95,0.63 1.88,-0.17 0.23,-0.21 1.09,0.16 1.33,-0.74 0.43,0.3 0.79,-0.04 0.03,0.72 2.27,0.63 0.75,-0.73 0.71,0.4 1.34,-0.1 0.15,-0.9 1.28,-0.18 0.73,-0.49 0.81,0.17 0.52,-0.88 -0.26,-0.13 0.07,-0.38 0.68,-0.61 0.83,-0.03 0.92,-0.57 0.55,-1.17 1.05,-0.24 0.84,0.72 1.31,-1.23 0.64,0.21 0.92,-0.31 0.89,0.33 2.43,-0.43 0.72,-0.56 -0.13,-0.8 0.23,-0.46 1.64,-1.07 -0.16,-0.31 0.26,-0.48 0.66,0.3 1.38,1.54 1.36,-1.05 0.23,-0.49 1.02,-0.71 0.77,-0.18 0.49,-0.87 1.68,-1.31 -0.12,-0.43 0.23,-0.21 0.25,0.08 -0.02,0.31 0.48,0 1.31,0.71 0.18,0.34 1.74,-0.11 -1.88,-1.4 -0.96,-16.02 -4.72,-6.24 -0.17,-3.92 z"},{"id":"ke-37","name":"Samburu","d":"m 161.73705,167.42063 0,0 1.15,-0.13 4.97,13.8 1.27,1.2 1.78,3.55 0.35,2.01 0.7,1.77 -0.15,1.47 0.42,0.03 0.06,2.36 -0.3,2.3 0.49,0.08 1.46,-0.48 3.27,2.28 5.12,0.11 4.74,1.38 0.64,1.64 2.36,1.73 0.71,1 1.23,0.23 2.29,6.48 2.54,1.33 5.29,8.85 1.5,1.89 5.06,9.04 1.1,0.94 0.29,0.51 -0.15,0.32 0.46,-0.17 0.6,-1.33 0.5,0.88 0.84,-0.04 0.06,-0.39 0.41,0 1.33,-0.98 0.25,0.32 0.95,-0.45 0.55,0.24 1.51,-0.48 1.53,-0.01 0.62,-0.34 1.19,-0.03 0.26,0.24 0.52,-0.56 0.66,0.31 1.34,-0.5 0.51,0.12 0.96,-0.29 0.54,-1.9 5.63,4.12 -0.31,7.1 0.17,3.92 4.72,6.24 0.96,16.02 1.88,1.4 -1.74,0.11 -0.18,-0.34 -1.31,-0.71 -0.48,0 0.02,-0.31 -0.25,-0.08 -0.23,0.21 0.12,0.43 -1.68,1.31 -0.49,0.87 -0.77,0.18 -1.02,0.71 -0.23,0.49 -1.36,1.05 -1.38,-1.54 -0.66,-0.3 -0.26,0.48 0.16,0.31 -1.64,1.07 -0.23,0.46 0.13,0.8 -0.72,0.56 -2.43,0.43 -0.89,-0.33 -0.92,0.31 -0.64,-0.21 -1.31,1.23 -0.84,-0.72 -1.05,0.24 -0.55,1.17 -0.92,0.57 -0.83,0.03 -0.68,0.61 -0.07,0.38 0.26,0.13 -0.52,0.88 -0.81,-0.17 -0.73,0.49 -1.28,0.18 -0.15,0.9 -1.34,0.1 -0.71,-0.4 -0.75,0.73 -2.27,-0.63 -0.03,-0.72 -0.79,0.04 -0.43,-0.3 -1.33,0.74 -1.09,-0.16 -0.23,0.21 -1.88,0.17 -0.95,-0.63 -0.54,0.03 -0.09,-0.7 -0.54,-0.08 -0.07,-1.19 -0.58,-1.39 -0.63,-0.26 -1.79,-4.03 -0.64,-0.89 -0.8,-0.42 -1.12,-1.18 -0.49,0.08 -1.54,1.35 -0.79,-0.12 -0.23,-0.29 -1.92,0.22 -0.38,-0.51 -0.54,-0.08 -0.04,-0.45 -0.87,0.08 -0.47,-0.41 -0.23,-0.65 -0.39,-0.31 -0.43,0.15 -0.4,-0.38 -1.75,0.48 -0.16,0.76 -0.67,-0.37 -2.81,1.18 -1.61,0.41 -0.38,-0.15 -0.43,0.28 -1.05,-0.1 -0.76,-0.59 -0.19,0.65 -0.66,0.27 -0.18,0.51 -0.36,0.04 -0.11,-0.51 -0.33,-0.16 -1.24,0.4 -0.19,-0.27 -0.68,0.02 -1.42,-2.99 0.17,-0.28 -0.56,-0.32 -1.06,-3.17 -1.27,-0.77 -2.13,0.63 -1.23,1.9 -1.5,0.61 -1.21,-0.17 -1.01,0.23 -10.7,-0.01 0.25,-2.11 -1.51,-1.11 -0.91,-0.1 -0.89,-0.74 -0.66,-1.01 -0.87,0.1 -0.41,-0.3 -0.16,-0.75 1.47,-1.03 1.42,-1.96 0.16,-0.75 -0.34,-1.04 0.36,0.15 0.15,1.11 0.63,0.11 -0.05,-1.04 -0.31,-0.05 0.02,-0.98 -0.68,-1.61 -0.06,-1.4 0.2,-0.34 -0.38,-0.75 0.42,-1.54 -0.65,-1.61 0.51,-1.8 -1.35,-0.78 -1.51,0.77 -0.04,-0.64 -0.26,-0.13 0.54,-0.42 -0.14,-1.49 0.27,-0.38 0.78,-0.33 0.1,0.34 0.23,-0.03 0.2,-0.55 -0.47,-0.57 0,-0.74 -0.54,0.47 -0.93,-0.69 0.19,-0.35 0.28,0 -0.06,-0.42 0.53,0.24 0.23,-0.37 0.84,0.69 0.9,0.33 0.44,0.58 0.41,-0.19 0,-0.41 -0.16,-0.63 -0.86,-0.96 0.12,-0.76 -0.29,-0.09 -0.76,0.56 -0.91,-0.34 -0.09,-0.44 -0.65,-0.27 0.87,-0.35 0.25,-0.55 0.63,-0.47 0.07,-0.63 0.73,-0.24 0.14,-0.46 0.9,-0.52 0.28,0.02 0.47,-1.7 -0.31,-0.28 -0.34,0.3 -0.44,-0.79 -1.13,0.22 -0.04,-0.39 -0.56,-0.15 -1.58,-1.56 -1.92,0.51 -0.46,-0.16 -1.69,-1.78 -1.7,0.34 -0.11,-0.34 0.63,-1.05 -0.22,-0.79 0.13,-1.78 0.21,-0.51 2.3,-2.05 0.05,0.41 1.1,-0.07 -0.13,-0.9 0.52,-0.45 0.45,0.62 -0.31,1.21 0.15,0.9 0.74,1.44 0.49,0 0.94,-2.19 1.22,-1.34 -0.01,-0.77 0.53,-1.01 0.37,-0.16 0.38,0.34 0.69,-0.13 -0.2,-0.44 0.48,-1.2 -0.03,-0.85 0.51,-0.59 -0.05,-0.51 0.42,-0.31 -0.07,-1.14 0.96,-0.33 -0.09,-0.51 0.32,-0.23 0.04,-0.56 0.74,-0.55 0.03,-0.29 -0.3,-0.14 0.65,-0.37 -0.21,-0.67 -0.47,0.6 0.1,-0.26 -0.43,-0.61 0.51,0.36 0.08,-0.47 -0.25,-0.2 0.35,-0.1 0.15,-0.43 -0.21,-0.3 0.4,-0.03 0.23,-0.77 -0.59,-0.04 -0.33,-0.57 -0.12,-0.57 0.45,0.06 0.13,-0.4 -0.23,-0.2 0.32,-0.63 -0.29,-0.38 -0.34,0.2 -0.03,-1.54 0.67,-0.39 0.04,-0.51 0.71,-0.37 -0.14,-0.46 0.32,-1.14 -0.2,-0.28 0.01,-1.84 -0.56,0.58 0.18,-0.6 0.47,-0.41 0.24,-1.01 -0.16,-0.75 0.06,-0.27 0.34,-0.02 -0.08,-1.34 0.25,-0.06 0.37,-0.99 0.71,-0.53 -0.26,-2.62 0.89,-0.97 0.45,-1.42 0.43,-0.05 0.87,-0.92 0.01,0.37 1.51,-0.44 1.14,-0.55 1.46,-1.14 1.09,-0.31 -0.05,-1.11 0.65,-0.35 -0.13,-0.76 0.27,-0.58 -0.41,-0.81 0.93,-0.75 0.05,-1.49 -7.02,-3.37 0,-2.62 0.45,0.53 0.58,-0.19 0.18,-0.9 0.47,0.15 0.21,0.43 0.3,-0.32 -0.08,1.1 0.32,-1.52 0.2,0.28 0.53,-0.37 0.85,-1.46 0.76,-0.72 0.81,0.16 -0.06,-0.63 0.33,-0.73 -0.2,-1.91 0.51,0.24 1.59,-0.32 z"},{"id":"ke-47","name":"West Pokot","d":"m 69.74705,161.18063 0,0 0.4,-1.65 0.15,0.32 1.35,-0.13 0.79,0.66 2.89,6.11 -0.27,2.43 0.13,1.45 0.52,1.19 -0.48,1.68 0.77,1.91 -0.26,1.57 1.66,1.12 0.57,0.68 1.74,3.42 0.96,4.04 3.04,10.14 0.1,2.63 0.33,1.04 -0.41,0.24 -0.39,0.85 4.38,4.4 0.43,0.11 0.03,0.28 0.79,0.16 0.28,0.66 -0.24,0.55 0.29,0.23 -0.33,0.51 0.77,0.28 0.03,0.45 0.22,-0.09 0.02,0.35 0.53,0.12 0.8,0.77 0.28,0.66 0.81,-0.25 1.03,0.1 2.34,0.86 1.07,-0.39 0.89,0.76 0.53,0.09 0.04,-0.21 1.69,0.52 0.74,0.78 1.6,0.93 1.27,0.06 2.42,2.06 1.71,0.39 -0.91,1.18 0.19,0.77 0.77,0.37 -0.59,3.65 -0.44,0.54 -0.91,2.43 -1.24,0.64 -0.53,0.56 0.06,0.31 -0.61,0.57 0.23,0.6 -0.15,0.54 -0.82,0.75 0.02,1.28 0.26,0.19 -0.28,0.4 0.3,0.28 -0.5,0.03 -0.22,0.7 0.18,0.21 -0.83,1.55 0.24,0.85 -0.21,0.07 0.41,0.13 0.25,0.66 -0.18,0.48 -3.24,0.9 -1.78,1.33 -1.3,-0.18 -0.55,-0.48 -1.82,0.37 -10.76,8.75 -1.78,0.89 -9.85,-4.74 -1.6,0.89 -0.41,-0.24 -1.72,0.27 -0.22,0.81 -2.37,-1.45 -0.37,-0.53 0.53,-0.67 -1.23,-1.13 -0.62,-1.09 -1.09,-0.19 -1.2,0.65 -3.77,-0.33 0.26,-1.84 -5.05,1.24 0.57,-0.52 -0.14,-2.15 -2.09,-2.95 0.61,-0.72 -0.88,-2.46 2.97,-2.08 1.02,0.01 0.3,-4.23 0.97,-0.54 0.36,-1.13 0.88,0.19 0.45,-0.67 0.58,0.05 1.25,-0.74 2.61,-5.09 0.73,-9.9 1.45,-4.91 -2.4,-3.23 -0.05,-1.07 -1.1,-3.68 1.63,-1.67 -1.49,-5.38 -1.85,-3.5 -1.7,-4.14 -1.26,-3.75 -0.12,-1.43 1.16,-1.65 1.27,-0.74 1.16,-0.16 -0.12,0.14 1.74,0.95 2.32,1.88 -0.17,-1.21 0.72,-0.51 0.04,-0.55 -1.43,-2.02 0.88,-4.76 0.33,-0.39 0.47,0.22 0.21,1.38 1.58,2.93 0.48,1.47 0.59,-0.15 1.12,-0.87 0.65,-1.35 0.17,-1.36 -0.32,-1.48 0.65,-2.69 0.64,-1.2 z"},{"id":"ke-46","name":"Wajir","d":"m 309.31705,112.57063 0,0 1.02,0.32 2.31,-0.11 1.55,0.28 0.57,-0.2 0.26,0.35 0.63,-0.32 0.13,0.5 0.31,-0.18 0.33,0.26 0.18,-0.26 0.68,0.28 0.91,-0.34 0.71,0.1 0.42,-0.43 0.38,0.15 0.1,-0.3 1.36,0.2 0.85,-0.35 0.73,0.38 3.23,-2 9.48,-9.57 0.66,19.17 14.71,6.25 7.92,8.67 4.98,5.85 12.76,5.87 0.2,0.95 -0.15,0.78 0.26,0.25 -0.23,0.89 0.57,0.37 -0.63,0.68 0.66,0.28 0,0.6 0.99,0.49 -0.05,1.98 -0.44,0.15 -0.28,0.62 -0.43,0.23 0.08,0.41 1.06,1.18 0.39,1.81 1.05,1.85 0.43,2.21 0.48,0.39 -0.17,0.45 1.26,1.64 0.02,1.27 0.9,0.88 -0.31,0.63 0.66,0.51 0.21,0.92 1.51,1.96 1.56,0.74 0.38,1.32 -0.11,0.56 0.6,0.71 0.06,0.49 1.88,1.53 0.55,1.18 0.74,0.58 1.35,0.19 1.34,0.56 1.92,1.54 1.45,0.18 0.22,0.62 1.93,2.24 2.25,1.9 1.71,0.82 2.65,-0.12 -0.01,98.06 -0.82,0.66 -3.37,1.66 -1.86,1.8 -1.33,0.77 -5.12,1.42 -1.21,0.6 -0.96,1.03 -1.11,0.31 -1.21,2.4 -0.63,0.4 -0.1,0.73 -1.95,1.5 -2.03,-0.04 -0.44,0.42 -0.54,-0.01 -0.51,0.59 -1.2,-0.03 -1.82,-0.6 -1.1,1.04 -0.39,0.88 -0.7,-0.29 -1.2,0.65 -2.74,-0.22 -1.36,0.37 -1.55,-0.74 -2.51,-0.15 -5.59,-3.04 -4.15,-4.19 -1.86,-0.96 -3.93,-2.85 -2.66,-0.37 -1.94,-0.61 -2.01,-1.15 -2.23,-1.85 -1.73,0.22 -1.4,-1.08 -2.89,-0.32 -1.41,-0.71 -0.73,-0.97 -1.69,-0.8 -0.49,-1.02 -1.98,-2.05 -1.39,-1.98 -1.08,-2.48 -1.81,-1.53 -2.92,-4.15 -1.79,-5.72 -1.96,-4.38 -0.31,-1.62 -0.73,-1.03 -1.09,-0.83 -3.59,-8.66 -7.06,-18.39 9.88,-3.4 -0.49,-0.13 -1.3,-1.19 -0.91,-0.15 -0.29,-0.7 -0.42,-0.03 -0.08,-0.5 -0.72,-0.62 -1.61,-2.32 -1.1,-0.53 -0.4,-0.52 -0.32,0.06 -0.3,-0.65 -0.44,-0.01 -1.45,-1.07 -0.53,-0.01 -2.03,-1.21 -0.95,-0.15 -1.91,-3.2 -0.59,-2.16 -1.49,-2.25 0.04,-0.66 -0.74,-1.32 -1.7,-1.42 -0.4,0 -1.52,-1.41 -0.29,-0.78 -0.53,-0.31 -1.09,-1.92 -0.88,-0.59 -1.43,-1.79 -0.29,-1.09 0.19,-0.71 -0.49,-0.75 0.06,-0.93 -1.78,-2.09 -1.04,-3.1 0.13,-3.12 -0.7,-3.89 0.58,-1.89 -0.27,-1.71 0.19,-1.54 -0.39,-2.29 -1.47,-3.75 -0.78,-3.68 5.04,-1.39 3.81,-6.25 -0.43,-0.79 0.71,-0.82 0.24,-1.27 0.77,-0.64 -0.05,-8.28 2.67,-0.06 0.67,-2.75 0.8,-0.42 0.56,-0.81 3.13,-0.23 2.63,-1.84 0.08,-0.39 2.28,-2.26 1.98,-1 1.3,-0.99 -0.29,-10.61 -0.19,-1.26 -0.58,-0.65 -0.84,-6.76 -0.67,-1.14 -0.12,-0.8 0.28,-0.87 0.77,-0.92 z"},{"id":"ke-24","name":"Mandera","d":"m 440.98705,83.65063 0,0 0.28,-0.44 0.32,0.27 0.23,-0.39 0,0.5 0.4,-0.11 0.71,0.74 0.88,-0.12 0.33,0.5 0.33,-1.01 0.31,0.31 0.27,-0.52 1.16,-0.3 0.28,-0.48 0.24,0.36 0.51,0.1 0.16,-0.43 0,0.56 0.34,-0.21 0.81,0.19 0.1,0.6 1.08,0.01 0.37,-0.5 0.39,0.28 0.39,-0.27 -0.02,0.49 0.32,0.13 -0.28,0.14 0.24,0.62 1.26,0.01 -0.02,0.47 0.28,0.14 0.18,-0.27 0.39,0.44 0.04,-0.51 0.37,-0.03 0.45,0.39 0.23,-0.15 0.02,-0.59 0.63,0.05 0.15,-0.4 0.22,0.24 0.55,-0.21 0.11,-0.37 0.84,-0.48 0.44,0.27 -33.04,47.12 -19.2,18.83 -0.03,36.94 -2.65,0.12 -1.71,-0.82 -2.25,-1.9 -1.93,-2.24 -0.22,-0.62 -1.45,-0.18 -1.92,-1.54 -1.34,-0.56 -1.35,-0.19 -0.74,-0.58 -0.55,-1.18 -1.88,-1.53 -0.06,-0.49 -0.6,-0.71 0.11,-0.56 -0.38,-1.32 -1.56,-0.74 -1.51,-1.96 -0.21,-0.92 -0.66,-0.51 0.31,-0.63 -0.9,-0.88 -0.02,-1.27 -1.26,-1.64 0.17,-0.45 -0.48,-0.39 -0.43,-2.21 -1.05,-1.85 -0.39,-1.81 -1.06,-1.18 -0.08,-0.41 0.43,-0.23 0.28,-0.62 0.44,-0.15 0.05,-1.98 -0.99,-0.49 0,-0.6 -0.66,-0.28 0.63,-0.68 -0.57,-0.37 0.23,-0.89 -0.26,-0.25 0.15,-0.78 -0.2,-0.95 -12.76,-5.87 -4.98,-5.85 -7.92,-8.67 -14.71,-6.25 -0.66,-19.17 5.28,-11.42 14.47,-7.6 2.02,-0.78 1.57,-1.07 0.37,-0.75 0.34,-0.12 0.57,0.3 10.37,-4.22 0.44,0.12 0.38,-0.51 16.96,-6.88 0.16,-0.35 1.49,-0.18 1.07,-0.69 0.68,-1.01 1.39,-0.06 0.56,0.79 2.46,1.17 0.12,-0.22 0.62,0.19 0.42,1.14 0.72,0.04 1.01,0.81 0.08,1.2 0.72,0.55 0.38,1.5 2.83,0.78 1.14,0.94 0.36,0.79 1.01,0.09 1.16,1.64 0.51,0.12 0.12,0.38 0.65,0 0.4,0.86 0.95,0.87 0.35,1.02 0.6,0.13 0.12,0.41 1.19,0.56 -0.33,0.36 0.28,0.77 0.62,-0.04 0.62,0.55 -0.11,0.26 0.68,0.13 -0.32,0.3 1.39,0.52 0.99,0.86 0.37,-0.11 1.61,0.53 0.02,-0.56 0.5,-0.22 -0.04,-0.23 0.88,0.14 0.5,-0.55 0.29,0.58 0.21,-0.3 0.4,0.18 0.37,-0.21 0.89,0.31 0.18,-0.25 0.03,0.41 0.85,0 -0.1,-0.37 0.19,-0.09 0.51,0.52 0.66,0.13 -0.04,-0.19 0.6,0.34 1.43,-0.52 0.23,-0.61 1.29,0.49 0.14,-0.47 0.39,0.07 0.38,-0.33 1.39,0.91 1.09,-0.04 0.07,-0.46 0.54,0.14 0.81,-0.24 0.33,0.27 0.42,-0.19 0.27,0.21 0.19,-0.46 0.65,0.02 0.3,-0.38 0.37,0.39 -0.11,0.34 0.4,0.1 0.52,-0.33 0.28,-0.75 1.32,-0.66 0.72,0.48 0.22,0.45 3.15,-0.42 z"},{"id":"ke-25","name":"Marsabit","d":"m 122.52705,56.16063 0,0 10.36,0.29 0.8,-0.36 0.96,0.38 16.19,0.36 4.54,-0.55 1.03,0.03 0.97,0.68 1.07,0.02 9.35,-0.49 2.05,1.04 1.71,0.39 2.87,1.23 -0.01,0.31 1.53,0.15 1.1,1 0.27,-0.13 0.65,0.49 0.67,-0.8 0.65,0.62 0.24,-0.07 0.98,1.66 0.74,-0.09 0.73,0.33 1.32,2.05 1.05,0.78 0.34,-0.1 16.14,10.56 0.18,-0.1 19.61,13.95 8.68,5.79 4.07,2.25 2.53,2.58 5.4,4.78 0.41,-0.32 2.61,-0.54 15.24,1.04 4.27,-1.41 -0.01,-0.75 -0.37,-0.53 1.06,-0.27 0.72,0.55 0.59,1.41 1.08,0.8 1.33,0.07 0.69,-0.44 3.09,1.16 0.62,-0.97 -0.23,-0.64 0.57,-0.27 0.32,0.16 1.48,2.96 10.9,3.42 3.1,-0.17 -0.03,-0.58 0.52,-0.28 0.67,0.15 0.08,0.24 1.13,-0.23 0.25,-0.31 0.31,0.46 0.58,0.26 0.16,-0.66 0.57,0 0.3,-0.26 1.01,0.4 1.34,-0.57 0.03,-0.49 0.5,0.01 1.02,0.98 1.46,0.66 1.2,0.09 -0.03,0.52 1.57,0.66 0.6,-0.2 0.17,0.8 1.95,-0.17 2.33,0.61 1.38,-0.46 1.48,0.49 -0.77,0.92 -0.28,0.87 0.12,0.8 0.67,1.14 0.84,6.76 0.58,0.65 0.19,1.26 0.29,10.61 -1.3,0.99 -1.98,1 -2.28,2.26 -0.08,0.39 -2.63,1.84 -3.13,0.23 -0.56,0.81 -0.8,0.42 -0.67,2.75 -2.67,0.06 0.05,8.28 -0.77,0.64 -0.24,1.27 -0.71,0.82 0.43,0.79 -3.81,6.25 -5.04,1.39 0.78,3.68 1.47,3.75 0.39,2.29 -0.19,1.54 0.27,1.71 -0.58,1.82 0.7,3.96 -0.14,3.07 1.05,3.15 0.48,0.5 -33.13,19.23 -2.48,10.51 -22.55,17.99 0.31,-7.1 -5.63,-4.12 -0.54,1.9 -0.96,0.29 -0.51,-0.12 -1.34,0.5 -0.66,-0.31 -0.52,0.56 -0.26,-0.24 -1.19,0.03 -0.62,0.34 -1.53,0.01 -1.51,0.48 -0.55,-0.24 -0.95,0.45 -0.25,-0.32 -1.33,0.98 -0.41,0 -0.06,0.39 -0.84,0.04 -0.5,-0.88 -0.6,1.33 -0.46,0.17 0.15,-0.32 -0.29,-0.51 -1.1,-0.94 -5.06,-9.04 -1.5,-1.89 -5.29,-8.85 -2.54,-1.33 -2.29,-6.48 -1.23,-0.23 -0.71,-1 -2.36,-1.73 -0.64,-1.64 -4.74,-1.38 -5.12,-0.11 -3.27,-2.28 -1.46,0.48 -0.49,-0.08 0.3,-2.3 -0.06,-2.36 -0.42,-0.03 0.15,-1.47 -0.7,-1.77 -0.35,-2.01 -1.78,-3.55 -1.27,-1.2 -4.97,-13.8 -2.43,0.43 -0.82,-0.22 0.2,1.91 -0.33,0.73 0.06,0.63 -0.81,-0.16 -0.76,0.72 -0.85,1.46 -0.53,0.37 -0.2,-0.28 -0.32,1.52 0.1,-1.08 -0.32,0.3 -0.62,-0.6 -0.24,0.92 -0.58,0.19 -1.03,-1.01 -0.34,0.39 -1.05,0.14 -0.39,0.44 -1.1,-0.42 -1.01,-2.51 0.33,-4.23 -0.33,-0.25 -0.56,-1.95 -1.18,-0.82 -1.22,-1.97 -1.1,-0.15 -0.86,-1.23 -0.25,-2.53 0.77,-1.56 -1.07,-0.83 -0.41,-0.93 -0.13,-1.5 -1.32,-2.16 -0.83,-2.12 -1.21,-1.37 -0.82,-0.12 -2.64,-1.38 -0.95,-0.24 -0.73,-0.95 -0.87,-3.29 -0.01,0.62 -0.4,0.3 -0.73,-0.44 -0.55,-0.1 -0.11,0.21 -1.77,-0.77 -3.29,0.08 0.17,-0.7 -0.44,0.3 0.02,-0.39 -0.33,0.03 1.01,-3.25 0,-2.06 0.43,-0.16 0.26,-0.57 -0.05,-2.62 -0.67,-1.27 0.68,-2.07 0.05,-1.55 -0.33,-0.41 -0.25,0.8 -0.67,-0.06 -1.05,-0.58 -2.19,-0.34 -1.31,-0.76 -0.08,-69.66 z"},{"id":"ke-43","name":"Turkana","d":"m 107.96705,5.20063 0,0 0.55,-0.15 0.77,0.31 0.19,0.37 1.05,0.06 0.04,0.32 0.8,0.57 0.45,-0.09 0.05,0.72 -0.25,0.97 -0.36,0.06 -0.62,0.99 -0.71,0.58 -0.14,1.16 0.62,1.77 0.92,0.53 0.54,1.12 -0.13,1.45 -2.86,3.54 0.02,17.97 7.84,8.83 -0.6,2.53 0.29,2.09 6.1,5.26 0.08,69.66 1.31,0.76 2.19,0.34 1.05,0.58 0.67,0.06 0.25,-0.8 0.33,0.41 -0.05,1.55 -0.68,2.07 0.67,1.27 0.05,2.62 -0.26,0.57 -0.43,0.16 0,2.06 -1.01,3.25 0.33,-0.03 -0.02,0.39 0.44,-0.3 -0.17,0.7 3.29,-0.08 1.77,0.77 0.11,-0.21 0.55,0.1 0.73,0.44 0.4,-0.3 0.01,-0.62 0.87,3.29 0.73,0.95 4.51,1.84 1.19,1.39 0.75,2 1.3,2.13 0.15,1.53 0.41,0.93 1.07,0.8 -0.77,1.59 0.25,2.53 0.86,1.23 1.1,0.15 1.22,1.97 1.18,0.82 0.56,1.95 0.33,0.25 -0.33,4.23 0.88,2.38 1.23,0.55 0.39,-0.44 1.05,-0.14 0.35,-0.38 0.57,0.47 0,2.62 7.02,3.37 -0.05,1.49 -0.93,0.75 0.41,0.81 -0.27,0.58 0.13,0.76 -0.65,0.35 0.09,1.06 -1.13,0.36 -1.46,1.14 -1.14,0.55 -1.51,0.44 -0.01,-0.37 -0.87,0.92 -0.43,0.05 -0.45,1.42 -0.89,0.97 0.26,2.62 -0.71,0.53 -0.37,0.99 -0.25,0.06 0.08,1.34 -0.34,0.02 -0.06,0.27 0.16,0.75 -0.24,1.01 -0.47,0.41 -0.18,0.6 0.56,-0.58 -0.01,1.84 0.2,0.28 -0.32,1.14 0.14,0.46 -0.71,0.37 -0.04,0.51 -0.67,0.39 0.03,1.54 0.34,-0.2 0.29,0.38 -0.32,0.63 0.23,0.2 -0.13,0.4 -0.45,-0.06 0.12,0.57 0.33,0.57 0.59,0.04 -0.23,0.77 -0.4,0.03 0.21,0.3 -0.15,0.43 -0.35,0.1 0.25,0.2 -0.08,0.47 -0.51,-0.36 0.43,0.61 -0.1,0.26 0.47,-0.6 0.21,0.67 -0.65,0.37 0.3,0.14 -0.03,0.29 -0.74,0.55 -0.04,0.56 -0.32,0.23 0.09,0.51 -0.96,0.33 0.07,1.14 -0.42,0.31 0.05,0.51 -0.51,0.59 0.03,0.85 -0.48,1.2 0.2,0.44 -0.69,0.13 -0.38,-0.34 -0.37,0.16 -0.53,1.01 0.01,0.77 -1.22,1.34 -0.94,2.19 -0.49,0 -0.74,-1.44 -0.15,-0.9 0.31,-1.21 -0.45,-0.62 -0.52,0.45 0.13,0.9 -1.1,0.07 -0.05,-0.41 -2.3,2.05 -0.21,0.51 -0.13,1.78 0.22,0.79 -0.63,1.05 0.11,0.34 1.7,-0.34 1.69,1.78 0.46,0.16 1.92,-0.51 1.58,1.56 0.56,0.15 0.04,0.39 1.13,-0.22 0.44,0.79 0.34,-0.3 0.31,0.28 -0.47,1.7 -0.28,-0.02 -0.9,0.52 -0.14,0.46 -0.73,0.24 -0.07,0.63 -0.63,0.47 -0.25,0.55 -0.87,0.35 0.65,0.27 0.09,0.44 0.91,0.34 0.76,-0.56 0.29,0.09 -0.12,0.76 0.86,0.96 0.16,0.63 0,0.41 -0.41,0.19 -0.44,-0.58 -0.9,-0.33 -0.84,-0.69 -0.23,0.37 -0.53,-0.24 0.06,0.42 -0.28,0 -0.19,0.35 0.93,0.69 0.54,-0.47 0,0.74 0.47,0.57 -0.2,0.55 -0.23,0.03 -0.1,-0.34 -0.78,0.33 -0.27,0.38 0.14,1.49 -0.54,0.42 0.26,0.13 0.04,0.64 1.51,-0.77 1.35,0.78 -0.51,1.8 0.65,1.61 -0.42,1.54 0.38,0.75 -0.2,0.34 0.06,1.4 0.68,1.61 -0.02,0.98 0.31,0.05 0.05,1.04 -0.63,-0.11 -0.15,-1.11 -0.36,-0.15 0.34,1.04 -0.16,0.75 -1.42,1.96 -1.47,1.03 -0.37,-0.52 0.13,-1.16 -0.36,-0.36 -0.84,-0.08 -0.26,-0.43 -0.7,-0.15 -0.56,-1.55 -1.34,0.11 -8.17,-10.27 -4.42,0.08 -17.4,-28.29 -1.71,-0.39 -2.42,-2.06 -1.27,-0.06 -1.6,-0.93 -0.74,-0.78 -1.69,-0.52 -0.04,0.21 -0.53,-0.09 -0.89,-0.76 -1.07,0.39 -2.34,-0.86 -1.03,-0.1 -0.81,0.25 -0.28,-0.66 -0.8,-0.77 -0.53,-0.12 -0.02,-0.35 -0.22,0.09 -0.03,-0.45 -0.77,-0.28 0.33,-0.51 -0.29,-0.23 0.24,-0.55 -0.28,-0.66 -0.79,-0.16 -0.03,-0.28 -0.43,-0.11 -4.38,-4.4 0.39,-0.85 0.41,-0.24 -0.33,-1.04 0.09,-1.49 -0.52,-2.52 -2.34,-7.47 -1.53,-5.94 -1.54,-2.81 -0.57,-0.68 -1.66,-1.12 0.26,-1.57 -0.77,-1.91 0.48,-1.68 -0.52,-1.19 -0.13,-1.45 0.27,-2.43 -2.89,-6.11 -0.79,-0.66 -1.62,-0.04 -1.57,5.39 0.32,1.48 -0.17,1.36 -0.81,1.52 -1.38,0.91 -2.15,-4.26 -0.28,-1.56 -0.6,-0.18 -0.43,0.96 -0.66,4.13 1.43,2.02 -0.04,0.55 -0.72,0.51 0.17,1.21 -2.32,-1.88 -1.74,-0.95 0.6,-0.29 0.09,-0.8 -0.32,-0.03 -0.88,-2.51 -1.1,-0.01 -0.89,-4.08 -0.23,-0.3 -0.78,0.21 -0.07,0.96 -0.62,0.11 -0.88,-0.72 -1.24,-2.13 -1.81,-2 -0.52,-1.62 -0.83,-0.79 0.51,-2.99 -0.98,-4.15 -0.39,-0.36 -0.6,0.17 -0.71,-1.68 -1.41,-0.58 -0.57,-0.73 -0.55,0.87 -2.24,-0.27 -0.76,-2.29 -2.35,-1.06 -0.62,-4.47 -0.62,-1.1 -0.11,-4.34 -0.93,-0.79 -0.67,-1.48 -1.96,-0.7 -1.06,0.55 -0.68,-1.33 -1.26,-0.55 -0.3,-0.48 -0.44,-5.74 -1.06,-3.45 -1.64,-1.61 0.05,-2.45 0.47,-0.22 0.53,-0.9 -0.13,-0.97 -1.46,-1.85 -0.13,-0.52 0.44,0.19 1.54,-0.16 1.57,-1.57 0.32,-3.43 -0.19,-1.89 0.56,-3.31 -0.47,-0.42 -2.95,-0.92 -0.2,-0.76 -1.7,-1.66 -0.93,-0.01 -1.68,0.45 -1.24,2.37 0.29,-1.51 -2.31,-2 -1.24,-2.11 -0.72,0.18 -0.23,0.37 -0.45,-0.57 -2.82,0.97 -0.37,-0.36 1.43,-0.54 -0.1,-0.69 -2,-0.28 -0.02,-0.4 0.55,-0.18 0.95,-1.22 2.63,0.05 0,-1.18 -0.57,-1.73 -2.29,0.09 -0.47,0.56 -2.25,-0.11 -2.25,0.6 0.16,-1.37 1.61,-0.94 0.85,-3.42 -1.62,-0.87 -1.4,-1.53 -1.12,-0.33 -0.12,-1.07 1.75,-0.55 0.15,-1.78 -0.64,-0.94 -1.02,-0.47 -0.75,-1.58 0.92,-1.22 -1.05,-2.08 -3.19,-2.53 21.32,-20.3 47.38,-40.17 5.56,-8.84 11.04,0.05 4.28,0.39 1.59,0.43 0.28,0.27 -0.15,0.22 0.61,0.49 0.25,-0.01 0.03,-0.3 0.64,-0.01 -0.03,0.5 0.24,0.16 -0.13,0.69 0.81,-0.11 1.12,-0.65 0.21,0.37 0.91,0.17 0.47,-0.3 0.56,0.25 0.53,-0.36 1.02,0.02 -0.05,0.34 0.39,-0.06 -0.02,0.82 0.3,-0.33 0.12,0.25 0.34,-0.27 0.11,0.31 0.48,-0.06 0.07,0.26 0.22,-0.24 0.26,0.3 -0.21,0.13 0.18,0.51 1.13,0.57 -0.09,-0.53 0.54,0.08 0.77,0.6 z"}]}');

/***/ })

}]);