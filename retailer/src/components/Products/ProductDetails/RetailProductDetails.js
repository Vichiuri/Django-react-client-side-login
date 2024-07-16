import React, { Component } from "react";
import ViewRetailProductDetails from "./ViewRetailProductDetails";
import "../Products.css";
import { connect } from "react-redux";
import {
  fetchProductDetails,
  fetchPriceSlabs,
} from "../../../redux/Actions/RetailerProduct";
import { addProductToCart } from "../../../redux/Actions/RetailerCart";
import SimpleBackdrop from "../../../../../frontend/src/widgets/SimpleBackDrop";
import RetailerSnackBar from "../../../widgets/RetailerSnackBar";

class RetailerProductDetails extends Component {
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
    const view_id = this.props.match.params.id;
    if (error !== prevProps.error) this.setResponse(error);
    else if (message !== prevProps.message) {
      if (message.status == 201) {
        this.setState({ currentPage: 1 });
      }
      this.setResponse(message);
    }

    if (prevProps.match.params.id !== view_id)
      this.props.fetchProductDetails(view_id);
  }

  componentDidMount() {
    const view_id = this.props.match.params.id;
    if (view_id) this.props.fetchProductDetails(view_id);
  }

  changePage(page) {
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
    const { productsReducer, addProductToCart, fetchPriceSlabs } = this.props;
    const { isLoading, product_detail, related_products, product_slabs } =
      productsReducer;
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
    return (
      <main
        id="maincontent"
        class="page-main"
        style={{
          backgroundColor: "#ffff",
          margin: "30px auto",
        }}
      >
        <SimpleBackdrop open={isLoading} />
        <ViewRetailProductDetails
          detail={product_detail}
          related_products={related_products}
          addProductToCart={addProductToCart}
          product_slabs={product_slabs}
          fetchPriceSlabs={fetchPriceSlabs}
        />
        <RetailerSnackBar
          values={snackValues}
          closeSnackBar={this.closeSnackBar}
        />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  productsReducer: state.retailerProductsReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** View product details description view  */
export default connect(mapStateToProps, {
  fetchProductDetails,
  addProductToCart,
  addProductToCart,
  fetchPriceSlabs,
})(RetailerProductDetails);
