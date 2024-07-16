import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchFavouriteProducts,
  removeFavouriteProducts,
  clearFavouriteProducts,
} from "../../../redux/Actions/RetailerProduct";
import { addProductToCart } from "../../../redux/Actions/RetailerCart";
import SimpleBackdrop from "../../../../../frontend/src/widgets/SimpleBackDrop";
import RetailerSnackBar from "../../../widgets/RetailerSnackBar";
import ViewFavouriteProducts from "./ViewFavouriteProducts";
import "../Products.css";

class FavouriteProducts extends Component {
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

  componentDidMount() {
    this.props.fetchFavouriteProducts(1);
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
      productsReducer,
      removeFavouriteProducts,
      addProductToCart,
      clearFavouriteProducts,
    } = this.props;
    const { isLoading, fav_prods } = productsReducer;
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
        className="page-main"
        style={{
          backgroundColor: "white",
          margin: "10px auto",
        }}
      >
        <SimpleBackdrop open={isLoading} />
        <ViewFavouriteProducts
          fav_prods={fav_prods}
          removeFavouriteProducts={removeFavouriteProducts}
          addProductToCart={addProductToCart}
          clearFavouriteProducts={clearFavouriteProducts}
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

/** Retailer Favourite profucts  */
export default connect(mapStateToProps, {
  fetchFavouriteProducts,
  removeFavouriteProducts,
  addProductToCart,
  clearFavouriteProducts,
})(FavouriteProducts);
