import React, { Component } from "react";
import Hero from "../Hero/Hero";
import FlashDeals from "../Products/FlashDeals/FlashDeals";
import TopCategories from "../Categories/TopCategories/TopCategories";
import TopOffers from "../Offers/TopOffers/TopOffers";
import { connect } from "react-redux";
import { retailerDashBoardItems } from "../../redux/Actions/RetailerDashBoard";
import { fetchRetailerCart } from "../../redux/Actions/RetailerCart";
import NewArrivals from "../Products/NewArrivals/NewArrivals";
import RetailerSnackBar from "../../widgets/RetailerSnackBar";

class RetailerDashboard extends Component {
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
    if (account.default_distributor != null)
      this.props.retailerDashBoardItems(account.default_distributor.id);
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
        <main id="maincontent" className="page-main">
          <div className="columns">
            <div className="column main">
              <Hero />
              <TopCategories />
              <NewArrivals />
              <TopOffers />
              <FlashDeals />
              <br />
            </div>
          </div>
        </main>
        <RetailerSnackBar
          values={snackValues}
          closeSnackBar={this.closeSnackBar}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
  productReducer: state.retailerProductsReducer,
});

/** Main Dashboard view on authentication */
export default connect(mapStateToProps, {
  retailerDashBoardItems,
  fetchRetailerCart,
})(RetailerDashboard);
