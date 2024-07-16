import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import "./Navigation.css";
import { logOutRetailer } from "../../redux/Actions/RetailerAuth";
import {
  fetchRetailerDist,
  updateRetailerDistributor,
} from "../../redux/Actions/RetailerDistributors";
import { searchRetailerProduct } from "../../redux/Actions/RetailerProduct";
import SimpleBackdrop from "../../../../frontend/src/widgets/SimpleBackDrop";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: { vertical: "top", horizontal: "center" },
      currentPage: 1,
    };
    this.closeSnackBar = this.closeSnackBar.bind(this);
    this.setResponse = this.setResponse.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { error, message } = this.props;
    if (error !== prevProps.error) this.setResponse(error);
    else if (message !== prevProps.message) {
      if (message.status == 201) {
        this.setState({ currentPage: 1 });
      }
      this.setResponse(message);
    }
  }

  componentDidMount() {}

  changePage(page) {
    if (page == 2) {
      this.props.fetchCategories();
      this.props.fetchProductUnits();
    }
    this.setState({ currentPage: page });
  }

  setResponse(response) {
    let value = Object.keys(response.responseMessage)[0];
    const responseMessage = response.responseMessage[value];
    if (responseMessage instanceof Array)
      this.setState({
        responseMessage: responseMessage[0],
        isError: response.isError,
        openSnackBar: true,
      });
    else
      this.setState({
        responseMessage: responseMessage,
        isError: response.isError,
        openSnackBar: true,
      });
  }

  closeSnackBar() {
    this.setState({ openSnackBar: false });
  }

  render() {
    const {
      logOutRetailer,
      auth,
      cartReducer,
      distReducer,
      fetchRetailerDist,
      updateRetailerDistributor,
      productsReducer,
      searchRetailerProduct,
    } = this.props;
    const { view_cart } = cartReducer;

    const {
      openSnackBar,
      isError,
      responseMessage,
      snackPosition,
      currentPage,
    } = this.state;
    const snackValues = {
      isError,
      responseMessage,
      openSnackBar,
      snackPosition,
    };
    const { account } = auth;
    return (
      <div>
        <SimpleBackdrop open={distReducer.isLoading} />
        <NavBar
          logOutRetailer={logOutRetailer}
          account={account}
          cart={view_cart}
          fetchRetailerDist={fetchRetailerDist}
          distributors={distReducer.distributors}
          categories={productsReducer.categories}
          updateRetailerDistributor={updateRetailerDistributor}
          searchRetailerProduct={searchRetailerProduct}
          productLoading={productsReducer.isLoading}
          searchProducts={productsReducer.search_product}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  cartReducer: state.retailerCartReducer,
  distReducer: state.retailerDistReducer,
  productsReducer: state.retailerProductsReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** Retailer navbar for redirection */
export default connect(mapStateToProps, {
  logOutRetailer,
  fetchRetailerDist,
  updateRetailerDistributor,
  searchRetailerProduct,
})(Navigation);
