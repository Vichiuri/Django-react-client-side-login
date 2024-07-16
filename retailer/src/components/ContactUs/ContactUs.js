import React, { Component } from "react";
import { connect } from "react-redux";
import SimpleBackdrop from "../../../../frontend/src/widgets/SimpleBackDrop";
import {
  fetchRetailerDistView,
  sendDistributorMessage,
} from "../../redux/Actions/RetailerDistributors";
import RetailerSnackBar from "../../widgets/RetailerSnackBar";
import "./ContactUs.css";
import ViewContactUs from "./ViewContactUs";

class ContactUs extends Component {
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
    if (account?.default_distributor?.id)
      this.props.fetchRetailerDistView(account?.default_distributor?.id);
  }

  changePage(page) {
    if (page == 2) {
      this.props.fetchCategories();
      this.props.fetchProductUnits();
    }
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
    const { distReducer, sendDistributorMessage } = this.props;
    const { distributor_view, isLoading } = distReducer;
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
          marginTop: "10px",
        }}
      >
        <SimpleBackdrop open={isLoading} />
        <ViewContactUs
          distributor={distributor_view}
          setResponse={this.setResponse}
          sendDistributorMessage={sendDistributorMessage}
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
  distReducer: state.retailerDistReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** send contact us message page */
export default connect(mapStateToProps, {
  fetchRetailerDistView,
  sendDistributorMessage,
})(ContactUs);
