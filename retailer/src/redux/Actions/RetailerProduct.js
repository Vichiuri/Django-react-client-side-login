import Axios from "axios";
import {
  createErrorMessage,
  createSuccessMessage,
} from "../../../../frontend/src/redux/Actions/Messages";
import TokenConfig from "../../../../frontend/src/utils/TokenConfig";
import {
  RETAILER_CATEGORIES_LOADED,
  RETAILER_FAV_PRODUCT,
  RETAILER_ADD_FAV_PRODUCT,
  RETAILER_DELETE_FAV_PRODUCT,
  RETAILER_PRODUCTS_ERROR,
  RETAILER_PRODUCTS_LOADED,
  RETAILER_PRODUCTS_LOADING,
  RETAILER_PRODUCT_DETAIL,
  RETAILER_SUB_CATEGORIES_LOADED,
  RETAILER_CLEAR_FAV_PRODUCT,
  RETAILER_PRODUCTS_SLABS,
  RETAILER_OFFERS_DETAILS,
  RETAILER_OFFERS_LOADING,
  RETAILER_OFFERS_LOADED,
  RETAILER_OFFERS_ERROR,
  RETAILER_PRODUCTS_SEARCHED,
} from "./types";

export const fetchViewProducts =
  (distributor_id, page, category_id, price_range) => (dispatch, getState) => {
    dispatch({ type: RETAILER_PRODUCTS_LOADING });
    const config = TokenConfig(getState);
    let url = `/api/retailer_view_product/?distributor_id=${distributor_id}&page=${page}`;

    if (category_id) {
      url = url + `&category_id=${category_id}`;
    }

    if (price_range) {
      url = url + `&price_range=${price_range}`;
    }

    Axios.get(url, config)
      .then((res) => {
        dispatch({
          type: RETAILER_PRODUCTS_LOADED,
          payload: res.data,
        });
      })
      .catch((error) => {
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };
        dispatch(createErrorMessage(errors));
        dispatch({ type: RETAILER_PRODUCTS_ERROR });
      });
  };

export const searchRetailerProduct =
  (distributor_id, page, query, category_id, price_range) =>
  (dispatch, getState) => {
    dispatch({ type: RETAILER_PRODUCTS_LOADING });
    const config = TokenConfig(getState);

    let url = `/api/retailer_search_product/?distributor_id=${distributor_id}&page=${page}`;
    if (category_id) {
      url = url + `&category_id=${category_id}`;
    }

    if (query) {
      url = url + `&query=${query}`;
    }
    if (price_range) {
      url = url + `&price_range=${price_range}`;
    }

    Axios.get(url, config)
      .then((res) => {
        dispatch({
          type: RETAILER_PRODUCTS_SEARCHED,
          payload: res.data,
        });
      })
      .catch((error) => {
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };
        dispatch(createErrorMessage(errors));
        dispatch({ type: RETAILER_PRODUCTS_ERROR });
      });
  };

export const fetchProductDetails = (id) => (dispatch, getState) => {
  dispatch({ type: RETAILER_PRODUCTS_LOADING });
  const config = TokenConfig(getState);

  Axios.get(`/api/retailer_product_detail/?product_id=${id}`, config)
    .then((res) => {
      dispatch({
        type: RETAILER_PRODUCT_DETAIL,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };
      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_PRODUCTS_ERROR });
    });
};

export const fetchRetailerCategories =
  (distributor_id, page) => (dispatch, getState) => {
    dispatch({ type: RETAILER_PRODUCTS_LOADING });
    const config = TokenConfig(getState);

    Axios.get(
      `/api/retailer_view_category/?distributor_id=${distributor_id}&page=${page}`,
      config
    )
      .then((res) => {
        dispatch({
          type: RETAILER_CATEGORIES_LOADED,
          payload: { categories: res.data.categories },
        });
      })
      .catch((error) => {
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };
        dispatch(createErrorMessage(errors));
        dispatch({ type: RETAILER_PRODUCTS_ERROR });
      });
  };

export const fetchRetailerSubCategories =
  (category_id, page, isSub) => (dispatch, getState) => {
    dispatch({ type: RETAILER_PRODUCTS_LOADING });
    const config = TokenConfig(getState);

    Axios.get(
      `api/retailer_view_sub_categories/?category_id=${category_id}&page=${page}`,
      config
    )
      .then((res) => {
        dispatch({
          type: RETAILER_SUB_CATEGORIES_LOADED,
          payload: { sub_categories: res.data.sub_categories, isSub: isSub },
        });
      })
      .catch((error) => {
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };
        dispatch(createErrorMessage(errors));
        dispatch({ type: RETAILER_PRODUCTS_ERROR });
      });
  };

export const fetchFavouriteProducts = (page) => (dispatch, getState) => {
  dispatch({ type: RETAILER_PRODUCTS_LOADING });
  const config = TokenConfig(getState);

  Axios.get("api/retailer_prod_fav/", config)
    .then((res) => {
      dispatch({
        type: RETAILER_FAV_PRODUCT,
        payload: {
          fav_prods: res.data.fav_prods,
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
      dispatch({ type: RETAILER_PRODUCTS_ERROR });
    });
};

export const addFavouriteProducts = (product_id) => (dispatch, getState) => {
  dispatch({ type: RETAILER_PRODUCTS_LOADING });
  const config = TokenConfig(getState);

  Axios.post("api/retailer_prod_fav/", { product_id }, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data));
      dispatch({ type: RETAILER_ADD_FAV_PRODUCT, payload: res.data });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };
      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_PRODUCTS_ERROR });
    });
};

export const removeFavouriteProducts = (product_id) => (dispatch, getState) => {
  dispatch({ type: RETAILER_PRODUCTS_LOADING });
  const config = TokenConfig(getState);

  Axios.patch("api/retailer_prod_fav/", { product_id }, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data));
      dispatch({ type: RETAILER_DELETE_FAV_PRODUCT, payload: product_id });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };
      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_PRODUCTS_ERROR });
    });
};

export const clearFavouriteProducts = () => (dispatch, getState) => {
  dispatch({ type: RETAILER_PRODUCTS_LOADING });
  const config = TokenConfig(getState);

  Axios.delete("api/retailer_prod_fav/", config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({ type: RETAILER_CLEAR_FAV_PRODUCT });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };
      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_PRODUCTS_ERROR });
    });
};

export const fetchPriceSlabs = (product_id, page,variation_id) => (dispatch, getState) => {
  dispatch({ type: RETAILER_PRODUCTS_LOADING });
  const config = TokenConfig(getState);
  let url = `api/retailer_slabs/?product_id=${product_id}&page=${page}`;

  if (variation_id) {
    url = url + `&variation_id=${variation_id}`;
  }

  Axios.get(url, config)
    .then((res) => {
      dispatch({
        type: RETAILER_PRODUCTS_SLABS,
        payload: {
          price_list: res.data.price_list,
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
      dispatch({ type: RETAILER_PRODUCTS_ERROR });
    });
};

export const fetchViewRetailerOffers =
  (distributor_id, page) => (dispatch, getState) => {
    dispatch({ type: RETAILER_OFFERS_LOADING });
    const config = TokenConfig(getState);

    Axios.get(
      `/api/retailer_offers/?page=${page}&distributor_id=${distributor_id}`,
      config
    )
      .then((res) => {
        dispatch({
          type: RETAILER_OFFERS_LOADED,
          payload: res.data,
        });
      })
      .catch((error) => {
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };
        dispatch(createErrorMessage(errors));
        dispatch({ type: RETAILER_OFFERS_LOADED });
      });
  };

export const fetchPriceOffers = (offer_id) => (dispatch, getState) => {
  dispatch({ type: RETAILER_OFFERS_LOADING });
  const config = TokenConfig(getState);
  Axios.get(`api/offer_details/?offer_id=${offer_id}`, config)
    .then((res) => {
      dispatch({
        type: RETAILER_OFFERS_DETAILS,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };
      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_OFFERS_ERROR });
    });
};
