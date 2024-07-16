import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchViewRetailerOffers,
  fetchRetailerCategories,
  fetchRetailerSubCategories,
} from "../../../redux/Actions/RetailerProduct";
import { addProductToCart } from "../../../redux/Actions/RetailerCart";
import SimpleBackdrop from "../../../../../frontend/src/widgets/SimpleBackDrop";
import RetailerSnackBar from "../../../widgets/RetailerSnackBar";
import ViewOffersShop from "./ViewOffersShop";
import "../shop.css";

class OffersShop extends Component {
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
    const { account } = this.props.auth;
    if (account.default_distributor != null) {
      const distributor = account.default_distributor.id;

      this.props.fetchViewRetailerOffers(distributor, 1);
      this.props.fetchRetailerCategories(distributor, 1);
    }
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
      offersReducer,
      productsReducer,
      auth,
      fetchViewRetailerOffers,
      fetchRetailerSubCategories,
      addProductToCart,
    } = this.props;
    const { offers, isLoading } = offersReducer;
    const { account } = auth;
    const { openSnackBar, isError, responseMessage, snackPosition } =
      this.state;
    const snackValues = {
      isError,
      responseMessage,
      openSnackBar,
      snackPosition,
    };
    return (
      <main id="maincontent" class="page-main">
        <SimpleBackdrop open={isLoading || productsReducer.isLoading} />
        <ViewOffersShop
          offers={offers}
          categories={productsReducer.categories}
          distributor={account.default_distributor}
          fetchViewRetailerOffers={fetchViewRetailerOffers}
          fetchRetailerSubCategories={fetchRetailerSubCategories}
          sub_categories={productsReducer.sub_categories}
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
  auth: state.authReducer,
  productsReducer: state.retailerProductsReducer,
  offersReducer: state.retailerOffersReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** shop view for all offers */
export default connect(mapStateToProps, {
  fetchViewRetailerOffers,
  fetchRetailerCategories,
  fetchRetailerSubCategories,
  addProductToCart,
})(OffersShop);
