import {
  RETAILER_OFFERS_DETAILS,
  RETAILER_OFFERS_ERROR,
  RETAILER_OFFERS_LOADED,
  RETAILER_OFFERS_LOADING,
} from "../Actions/types";

const initialState = {
  isLoading: false,
  offers: [],
  offer_details: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RETAILER_OFFERS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case RETAILER_OFFERS_LOADED:
      return {
        ...state,
        isLoading: false,
        offers: action.payload.offers,
      };

    case RETAILER_OFFERS_DETAILS:
      return {
        ...state,
        isLoading: false,
        offer_details: action.payload.offer,
      };

    case RETAILER_OFFERS_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
