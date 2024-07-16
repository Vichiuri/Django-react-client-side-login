import Axios from "axios";
import {
  createErrorMessage,
  createSuccessMessage,
} from "../../../../frontend/src/redux/Actions/Messages";
import TokenConfig from "../../../../frontend/src/utils/TokenConfig";
import {
  RETAILER_DIST_LOADING,
  RETAILER_DIST_LOADED,
  RETAILER_DIST_ERROR,
  UPDATE_ACCOUNT,
  RETAILER_DIST_DETAILS,
} from "../Actions/types";

export const fetchRetailerDist = () => (dispatch, getState) => {
  dispatch({ type: RETAILER_DIST_LOADING });
  const config = TokenConfig(getState);

  Axios.get("/api/retailer_dist_view/", config)
    .then((res) => {
      dispatch({ type: RETAILER_DIST_LOADED, payload: res.data });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };
      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_DIST_ERROR });
    });
};

export const updateRetailerDistributor = (id) => (dispatch, getState) => {
  dispatch({ type: RETAILER_DIST_LOADING });
  const config = TokenConfig(getState);

  Axios.patch("/api/retailer_dist_view/", { id }, config)
    .then((res) => {
      dispatch({ type: UPDATE_ACCOUNT, payload: res.data });
      window.location.reload();
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };
      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_DIST_ERROR });
    });
};

export const fetchRetailerDistView = (id) => (dispatch, getState) => {
  dispatch({ type: RETAILER_DIST_LOADING });
  const config = TokenConfig(getState);

  Axios.get(`/api/view_dist_details/?distributor_id=${id}`, config)
    .then((res) => {
      dispatch({
        type: RETAILER_DIST_DETAILS,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };
      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_DIST_ERROR });
    });
};

export const sendDistributorMessage = (body) => (dispatch, getState) => {
  dispatch({ type: RETAILER_DIST_LOADING });
  const config = TokenConfig(getState);

  Axios.post("/api/view_dist_details/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({ type: RETAILER_DIST_ERROR });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };
      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_DIST_ERROR });
    });
};
