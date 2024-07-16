import Axios from "axios";
import {
  createErrorMessage,
  createSuccessMessage,
} from "../../../../frontend/src/redux/Actions/Messages";
import TokenConfig from "../../../../frontend/src/utils/TokenConfig";
import {
  RETAILER_CART_LOADING,
  RETAILER_CART_LOADED,
  RETAILER_CART_ERROR,
  RETAILER_CART_ADDED,
  RETAILER_CART_DELETE,
  RETAILER_CART_CHECKOUT,
  RETAILER_VIEW_ORDERS,
  RETAILER_VIEW_DIST_ORDERS,
  RETAILER_ORDER_CONFIRMATION,
  RETAILER_ORDER_CANCELLATION,
  RETAILER_CART_CLEAR,
} from "./types";

export const fetchRetailerCart = () => (dispatch, getState) => {
  dispatch({ type: RETAILER_CART_LOADING });
  const config = TokenConfig(getState);

  Axios.get("/api/retailer_cart_view/", config)
    .then((res) => {
      dispatch({ type: RETAILER_CART_LOADED, payload: res.data });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };
      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_CART_ERROR });
    });
};

export const addProductToCart = (body) => (dispatch, getState) => {
  dispatch({ type: RETAILER_CART_LOADING });
  const config = TokenConfig(getState);

  Axios.post("/api/retailer_cart_view/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data));
      dispatch({ type: RETAILER_CART_ADDED, payload: res.data });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };
      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_CART_ERROR });
    });
};

export const deleteProductInCart = (order_id) => (dispatch, getState) => {
  dispatch({ type: RETAILER_CART_LOADING });
  const config = TokenConfig(getState);

  Axios.delete(`/api/retailer_cart_view/?order_id=${order_id}`, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data));

      dispatch({
        type: RETAILER_CART_DELETE,
        payload: order_id,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };
      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_CART_ERROR });
    });
};

export const clearProductsInCart = (cart_id) => (dispatch, getState) => {
  dispatch({ type: RETAILER_CART_LOADING });
  const config = TokenConfig(getState);

  Axios.put("/api/retailer_cart_view/", { cart_id }, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data));
      dispatch({
        type: RETAILER_CART_CLEAR,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };
      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_CART_ERROR });
    });
};

export const fetchRetailerOrders =
  (page, rows, query) => (dispatch, getState) => {
    dispatch({ type: RETAILER_CART_LOADING });
    const config = TokenConfig(getState);
    let url = `api/retailer_check_out/?page=${page}`;

    if (rows) {
      url = url + `&rows=${rows}`;
    }

    if (query) {
      url = url + `&query=${query}`;
    }

    Axios.get(url, config)
      .then((res) => {
        dispatch({
          type: RETAILER_VIEW_ORDERS,
          payload: {
            orders: res.data.orders,
            currentPage: page,
            lastPage: res.data.last_page,
          },
        });
      })
      .catch((error) => {
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };
        dispatch(createErrorMessage(errors));
        dispatch({ type: RETAILER_CART_ERROR });
      });
  };

export const fetchRetailerDistOrders =
  (ret_id, page, query, rows) => (dispatch, getState) => {
    dispatch({ type: RETAILER_CART_LOADING });
    const config = TokenConfig(getState);

    let url = `api/retailer_view_orders/?page=${page}&ret_id=${ret_id}`;
    if (rows) {
      url = url + `&rows=${rows}`;
    }

    if (query) {
      url = url + `&query=${query}`;
    }

    Axios.get(url, config)
      .then((res) => {
        console.log(res.data)
        dispatch({
          type: RETAILER_VIEW_DIST_ORDERS,
          payload: res.data,
        });
      })
      .catch((error) => {
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };
        dispatch(createErrorMessage(errors));
        dispatch({ type: RETAILER_CART_ERROR });
      });
  };

export const checkOutCart = (note) => (dispatch, getState) => {
  dispatch({ type: RETAILER_CART_LOADING });
  const config = TokenConfig(getState);

  Axios.post("api/retailer_check_out/", { note }, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data));
      dispatch({
        type: RETAILER_CART_CHECKOUT,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };
      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_CART_ERROR });
    });
};

export const confirmRetailerDelivery = (order_id) => (dispatch, getState) => {
  dispatch({ type: RETAILER_CART_LOADING });
  const config = TokenConfig(getState);

  Axios.patch("api/retailer_check_out/", { order_id }, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data));
      dispatch({
        type: RETAILER_ORDER_CONFIRMATION,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };
      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_CART_ERROR });
    });
};

export const reOrderRetailOrders = (order_id) => (dispatch, getState) => {
  dispatch({ type: RETAILER_CART_LOADING });
  const config = TokenConfig(getState);

  Axios.put("api/retailer_check_out/", { order_id }, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data));
      dispatch({ type: RETAILER_CART_LOADED, payload: res.data });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };
      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_CART_ERROR });
    });
};

export const cancelRetailerOrders = (order_id) => (dispatch, getState) => {
  dispatch({ type: RETAILER_CART_LOADING });
  const config = TokenConfig(getState);

  Axios.delete(`api/retailer_check_out/?order_id=${order_id}`, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data));
      dispatch({
        type: RETAILER_ORDER_CANCELLATION,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };
      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_CART_ERROR });
    });
};
