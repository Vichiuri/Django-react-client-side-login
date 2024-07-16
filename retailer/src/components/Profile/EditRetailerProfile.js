import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateRetailUser,
  logOutRetailer,
} from "../../redux/Actions/RetailerAuth";
import SimpleBackdrop from "../../../../frontend/src/widgets/SimpleBackDrop";
import RetailerSnackBar from "../../widgets/RetailerSnackBar";
import EditRetailerForm from "./EditRetailerForm";
import "./Profile.css";

class EditRetailerProfile extends Component {
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
    else if (message !== prevProps.message) this.setResponse(message);
  }

  componentDidMount() {}

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
    const { auth, updateRetailUser, logOutRetailer } = this.props;
    const { isLoading, account } = auth;
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
          margin: "10px auto",
        }}
      >
        <SimpleBackdrop open={isLoading} />
        <EditRetailerForm
          retailer={account.retailer}
          setResponse={this.setResponse}
          updateRetailUser={updateRetailUser}
          logOutRetailer={logOutRetailer}
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
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** Edit form for retailer profile */
export default connect(mapStateToProps, { updateRetailUser, logOutRetailer })(
  EditRetailerProfile
);
