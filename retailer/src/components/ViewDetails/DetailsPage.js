import React, { Component } from "react";
import { connect } from "react-redux";
import ViewDetailsPage from "./ViewDetailsPage";

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: { vertical: "top", horizontal: "center" },
      currentPage: 1,
      viewType: null,
    };
    this.closeSnackBar = this.closeSnackBar.bind(this);
    this.setResponse = this.setResponse.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { error, message } = this.props;
    const type = this.props.match.params.type;
    if (error !== prevProps.error) this.setResponse(error);
    else if (message !== prevProps.message) {
      if (message.status == 201) {
        this.setState({ currentPage: 1 });
      }
      this.setResponse(message);
    }
    if (prevProps.match.params.type !== type) this.setState({ viewType: type });
  }

  componentDidMount() {
    const type = this.props.match.params.type;
    this.setState({ viewType: type });
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
    const { auth } = this.props;
    const { openSnackBar, isError, responseMessage, snackPosition, viewType } =
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
          background: "white",
          marginTop: "20px",
        }}
      >
        <div className="columns">
          <div className="column main">
            <ViewDetailsPage
              type={viewType}
              dist_options={auth?.account?.default_distributor?.dist_options}
            />
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

/** view for about us and terms description */
export default connect(mapStateToProps)(DetailsPage);
