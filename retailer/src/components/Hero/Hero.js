import React, { Component } from "react";
import { connect } from "react-redux";
import CarouselView from "./CarouselView";
import InfoSection from "./InfoSection";
import "./Hero.css";

class Hero extends Component {
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
    else if (message !== prevProps.message) {
      if (message.status == 201) {
        this.setState({ currentPage: 1 });
      }
      this.setResponse(message);
    }
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
    const { bannerReducer, offersReducer } = this.props;
    const { banners } = bannerReducer;
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
        <CarouselView banners={banners} offers={offersReducer.offers} />
        {/* <br /> */}
        {/* <InfoSection /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bannerReducer: state.retailerBannerReducer,
  offersReducer: state.retailerOffersReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** Carousel and banner images page */
export default connect(mapStateToProps)(Hero);
