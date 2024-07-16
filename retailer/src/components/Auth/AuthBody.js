import React, { Component } from "react";
import "./Auth.css";
import SimpleBackdrop from "../../../../frontend/src/widgets/SimpleBackDrop";
import { connect } from "react-redux";
import {
  retailerLogin,
  retailerForgotPassword,
} from "../../redux/Actions/RetailerAuth";
import { Redirect } from "react-router";
import RetailerLogin from "./RetailerLogin";
import RetailerSnackBar from "../../widgets/RetailerSnackBar";

class AuthBody extends Component {
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
    if (error !== prevProps.error) {
      if (error.status === 401) {
        let responseMessage = {
          message: "Authentication details are not correct",
        };
        let isError = true;
        this.setResponse({ responseMessage, isError });
      } else this.setResponse(error);
    } else if (message !== prevProps.message) this.setResponse(message);
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
    const { auth, retailerLogin, retailerForgotPassword } = this.props;
    const { openSnackBar, isError, responseMessage, snackPosition } =
      this.state;
    const snackValues = {
      isError,
      responseMessage,
      openSnackBar,
      snackPosition,
    };

    if (auth.isAuthenticated && auth.account) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <SimpleBackdrop open={auth.isLoading} />
        <RetailerLogin
          login={retailerLogin}
          forgotPassword={retailerForgotPassword}
          setResponse={this.setResponse}
        />
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
});

/** Login view for customers and redirect for authentication */
export default connect(mapStateToProps, {
  retailerLogin,
  retailerForgotPassword,
})(AuthBody);
