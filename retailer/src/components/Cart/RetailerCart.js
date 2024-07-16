import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchRetailerCart,
  deleteProductInCart,
  addProductToCart,
  checkOutCart,
  clearProductsInCart,
} from "../../redux/Actions/RetailerCart";
import ViewRetailerCart from "./ViewRetailerCart";
import "./Cart.css";
import SimpleBackdrop from "../../../../frontend/src/widgets/SimpleBackDrop";
import RetailerSnackBar from "../../widgets/RetailerSnackBar";

class RetailerCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: { vertical: "top", horizontal: "center" },
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
    this.props.fetchRetailerCart();
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
      cartReducer,
      deleteProductInCart,
      addProductToCart,
      checkOutCart,
      clearProductsInCart,
    } = this.props;
    const { view_cart, isLoading } = cartReducer;

    const { openSnackBar, isError, responseMessage, snackPosition } =
      this.state;
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
          backgroundColor: "white",
          margin: "10px auto",
        }}
      >
        <SimpleBackdrop open={isLoading} />
        <ViewRetailerCart
          cart={view_cart}
          deleteProductInCart={deleteProductInCart}
          addProductToCart={addProductToCart}
          checkOutCart={checkOutCart}
          clearProductsInCart={clearProductsInCart}
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
  cartReducer: state.retailerCartReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** Cart view for viewing and adjusting  */
export default connect(mapStateToProps, {
  fetchRetailerCart,
  deleteProductInCart,
  addProductToCart,
  checkOutCart,
  clearProductsInCart,
})(RetailerCart);
