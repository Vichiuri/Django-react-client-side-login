import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPriceOffers } from "../../../redux/Actions/RetailerProduct";
import { addProductToCart } from "../../../redux/Actions/RetailerCart";
import RetailerSnackBar from "../../../widgets/RetailerSnackBar";
import SimpleBackdrop from "../../../../../frontend/src/widgets/SimpleBackDrop";
import ViewOfferDetails from "./ViewOfferDetails";
import "../../Products/Products.css";

class OfferDetails extends Component {
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
    else if (message !== prevProps.message) this.setResponse(message);
  }

  componentDidMount() {
    const view_id = this.props.match.params.id;
    if (view_id) this.props.fetchPriceOffers(view_id);
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
    const { offersReducer, cartReducer, addProductToCart } = this.props;
    const { isLoading, offer_details } = offersReducer;
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
        <SimpleBackdrop open={isLoading || cartReducer.isLoading} />
        <ViewOfferDetails
          offer={offer_details}
          addProductToCart={addProductToCart}
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
  offersReducer: state.retailerOffersReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** Offer details view for specific products */
export default connect(mapStateToProps, { fetchPriceOffers, addProductToCart })(
  OfferDetails
);
