import React, { Component } from "react";
import { connect } from "react-redux";
import ViewNewArrivals from "./ViewNewArrivals";
import { retailerNewArrivalProducts } from "../../../redux/Actions/RetailerDashBoard";
import { addProductToCart } from "../../../redux/Actions/RetailerCart";
import "../Products.css";
import { addFavouriteProducts } from "../../../redux/Actions/RetailerProduct";

class NewArrivals extends Component {
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
    const { account } = this.props.auth;
    if (account.default_distributor != null)
      this.props.retailerNewArrivalProducts(account.default_distributor.id);
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
    const { productsReducer, addProductToCart, addFavouriteProducts } =
      this.props;
    const { new_arrivals } = productsReducer;
    const { openSnackBar, isError, responseMessage, snackPosition } =
      this.state;
    const snackValues = {
      isError,
      responseMessage,
      openSnackBar,
      snackPosition,
    };
    return (
      <div>
        {new_arrivals?.length > 0 ? (
          <ViewNewArrivals
            products={new_arrivals}
            addProductToCart={addProductToCart}
            addFavouriteProducts={addFavouriteProducts}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  productsReducer: state.retailerProductsReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** View new arrival products */
export default connect(mapStateToProps, {
  retailerNewArrivalProducts,
  addProductToCart,
  addFavouriteProducts,
})(NewArrivals);
