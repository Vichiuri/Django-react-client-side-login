import {
  RETAILER_DIST_DETAILS,
  RETAILER_DIST_ERROR,
  RETAILER_DIST_LOADED,
  RETAILER_DIST_LOADING,
} from "../Actions/types";

const initialState = {
  isLoading: false,
  distributors: [],
  distributor_view: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RETAILER_DIST_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case RETAILER_DIST_LOADED:
      return {
        ...state,
        isLoading: false,
        distributors: action.payload.distributors,
      };

    case RETAILER_DIST_DETAILS:
      return {
        ...state,
        isLoading: false,
        distributor_view: action.payload.distributor,
      };

    case RETAILER_DIST_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
