import React, { Component } from "react";
import { connect } from "react-redux";
import SimpleBackdrop from "../../../../frontend/src/widgets/SimpleBackDrop";
import {
  fetchRetailerOrders,
  fetchRetailerDistOrders,
  confirmRetailerDelivery,
  reOrderRetailOrders,
  cancelRetailerOrders,
} from "../../redux/Actions/RetailerCart";
import RetailerSnackBar from "../../widgets/RetailerSnackBar";
import ViewRetailerOrders from "./ViewRetailerOrders";
import "./Orders.css";
import ViewDistOrders from "./ViewDistOrders";

class RetailerOrders extends Component {
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
    this.viewOrderDetailsPage = this.viewOrderDetailsPage.bind(this);
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
    this.props.fetchRetailerOrders(1);
  }

  changePage(page) {
    this.setState({ currentPage: page });
  }

  viewOrderDetailsPage(ret_id) {
    this.props.fetchRetailerDistOrders(ret_id, 1);
    this.setState({ currentPage: 2 });
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
      confirmRetailerDelivery,
      reOrderRetailOrders,
      cancelRetailerOrders,
    } = this.props;
    const { isLoading, view_orders, dist_orders } = cartReducer;
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
      <div>
        <main
          id="maincontent"
          class="page-main"
          style={{
            margin: "10px auto",
          }}
        >
          <SimpleBackdrop open={isLoading} />
          {currentPage == 1 ? (
            <ViewRetailerOrders
              orders={view_orders}
              viewOrderDetailsPage={this.viewOrderDetailsPage}
              confirmRetailerDelivery={confirmRetailerDelivery}
              reOrderRetailOrders={reOrderRetailOrders}
              cancelRetailerOrders={cancelRetailerOrders}
            />
          ) : (
            <ViewDistOrders
              dist_orders={dist_orders}
              changePage={this.changePage}
            />
          )}
          <RetailerSnackBar
            values={snackValues}
            closeSnackBar={this.closeSnackBar}
          />
        </main>
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartReducer: state.retailerCartReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** View retailer orders and status */
export default connect(mapStateToProps, {
  fetchRetailerOrders,
  fetchRetailerDistOrders,
  confirmRetailerDelivery,
  reOrderRetailOrders,
  cancelRetailerOrders,
})(RetailerOrders);
