import React, { Component } from "react";
import ViewRetailerShop from "./ViewRetailerShop";
import "./shop.css";
import SimpleBackdrop from "../../../../frontend/src/widgets/SimpleBackDrop";
import { connect } from "react-redux";
import {
  fetchViewProducts,
  fetchRetailerCategories,
  fetchRetailerSubCategories,
} from "../../redux/Actions/RetailerProduct";
import { addProductToCart } from "../../redux/Actions/RetailerCart";
import RetailerSnackBar from "../../widgets/RetailerSnackBar";

class RetailerShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: { vertical: "top", horizontal: "center" },
      currentPage: 1,
      currentCategory: null,
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
      this.setState({ currentCategory: view_id });

      this.props.fetchViewProducts(
        distributor,
        1,
        view_id != "all" ? view_id : null
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
      fetchViewProducts,
      auth,
      fetchRetailerSubCategories,
    } = this.props;
    const { isLoading, products, categories, sub_categories } = productsReducer;
    const { account } = auth;
    const {
      openSnackBar,
      isError,
      responseMessage,
      snackPosition,
      currentCategory,
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
        <ViewRetailerShop
          products={products}
          addProductToCart={addProductToCart}
          categories={categories}
          distributor={account.default_distributor}
          fetchViewProducts={fetchViewProducts}
          fetchRetailerSubCategories={fetchRetailerSubCategories}
          sub_categories={sub_categories}
          currentCategory={currentCategory}
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

/** Shop view for products */
export default connect(mapStateToProps, {
  fetchViewProducts,
  addProductToCart,
  fetchRetailerCategories,
  fetchRetailerSubCategories,
})(RetailerShop);
