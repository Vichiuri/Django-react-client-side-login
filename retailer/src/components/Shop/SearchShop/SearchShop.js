import React, { Component } from "react";
import { connect } from "react-redux";
import SimpleBackdrop from "../../../../../frontend/src/widgets/SimpleBackDrop";
import RetailerSnackBar from "../../../widgets/RetailerSnackBar";
import {
  searchRetailerProduct,
  fetchRetailerCategories,
  fetchRetailerSubCategories,
} from "../../../redux/Actions/RetailerProduct";
import { addProductToCart } from "../../../redux/Actions/RetailerCart";
import ViewSearchShop from "./ViewSearchShop";
import "../shop.css";

class SearchShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: { vertical: "top", horizontal: "center" },
      currentCategory: null,
      viewQuery: "",
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
      const view_id = this.props.match.params.id;
      const query = this.props.match.params.query;
      this.setState({
        currentCategory: view_id != "n" ? view_id : null,
        viewQuery: query != "all" ? query : "",
      });

      this.props.searchRetailerProduct(
        distributor,
        1,
        query != "all" ? query : null,
        view_id != "n" ? view_id : null
      );
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
      productsReducer,
      addProductToCart,
      cartReducer,
      searchRetailerProduct,
      auth,
      fetchRetailerSubCategories,
    } = this.props;
    const { isLoading, search_product, categories, sub_categories } =
      productsReducer;
    const { account } = auth;
    const {
      openSnackBar,
      isError,
      responseMessage,
      snackPosition,
      currentCategory,
      viewQuery,
    } = this.state;
    const snackValues = {
      isError,
      responseMessage,
      openSnackBar,
      snackPosition,
    };
    return (
      <main id="maincontent" class="page-main">
        <SimpleBackdrop open={isLoading || cartReducer.isLoading} />
        <ViewSearchShop
          products={search_product}
          addProductToCart={addProductToCart}
          categories={categories}
          distributor={account.default_distributor}
          searchRetailerProduct={searchRetailerProduct}
          fetchRetailerSubCategories={fetchRetailerSubCategories}
          sub_categories={sub_categories}
          currentCategory={currentCategory}
          viewQuery={viewQuery}
        />
        <RetailerSnackBar
          values={snackValues}
          closeSnackBar={this.closeSnackBar}
        />
        <br />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  productsReducer: state.retailerProductsReducer,
  cartReducer: state.retailerCartReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** Shop View for searched prodcuts */
export default connect(mapStateToProps, {
  searchRetailerProduct,
  fetchRetailerCategories,
  fetchRetailerSubCategories,
  addProductToCart,
})(SearchShop);
