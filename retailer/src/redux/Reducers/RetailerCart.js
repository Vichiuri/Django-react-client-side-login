import {
  RETAILER_CART_ADDED,
  RETAILER_CART_CHECKOUT,
  RETAILER_CART_CLEAR,
  RETAILER_CART_DELETE,
  RETAILER_CART_ERROR,
  RETAILER_CART_LOADED,
  RETAILER_CART_LOADING,
  RETAILER_CART_UPDATE_TOTAL,
  RETAILER_ORDER_CANCELLATION,
  RETAILER_ORDER_CONFIRMATION,
  RETAILER_ORDER_REFRESH,
  RETAILER_VIEW_DIST_ORDERS,
  RETAILER_VIEW_ORDERS,
} from "../Actions/types";

const initialState = {
  isLoading: false,
  view_cart: null,
  view_orders: [],
  dist_orders: [],
  current_page: 1,
  last_page: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RETAILER_CART_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case RETAILER_CART_LOADED:
      return {
        ...state,
        isLoading: false,
        view_cart: action.payload.cart,
      };

    case RETAILER_CART_ADDED:
      let current_cart = state.view_cart;
      if (current_cart && current_cart.orders) {
        let cart_orders = current_cart.orders;
        cart_orders = cart_orders.filter(
          (cart_item) => cart_item.id != action.payload.order.id
        );

        current_cart.orders = [action.payload.order, ...cart_orders];
        current_cart.total = action.payload.total;
      }
      return {
        ...state,
        isLoading: false,
        view_cart: current_cart,
      };

    case RETAILER_CART_UPDATE_TOTAL:
      let total_cart = state.view_cart;
      total_cart.total_cart = action.payload.total;

      return {
        ...state,
        isLoading: false,
        view_cart: total_cart,
      };

    case RETAILER_CART_DELETE:
      let delete_cart = state.view_cart;
      if (delete_cart && delete_cart.orders) {
        let delete_orders = delete_cart.orders;
        delete_cart.orders = delete_orders.filter(
          (delete_item) => delete_item.id != action.payload
        );
        delete_cart.total = action.payload.total;
      }
      return { ...state, isLoading: false, view_cart: delete_cart };

    case RETAILER_CART_CLEAR:
      return {
        ...state,
        isLoading: false,
        view_cart: null,
      };

    case RETAILER_CART_CHECKOUT:
      return {
        ...state,
        isLoading: false,
        view_cart: null,
      };

    case RETAILER_VIEW_ORDERS:
      return {
        ...state,
        isLoading: false,
        view_orders: action.payload.orders,
        current_page: action.payload.currentPage,
        last_page: action.payload.lastPage,
      };

    case RETAILER_VIEW_DIST_ORDERS:
      return {
        ...state,
        isLoading: false,
        dist_orders: action.payload.dist_orders,
      };

    case RETAILER_ORDER_CONFIRMATION:
      const confirmation_array = state.view_orders.filter(
        (c_item) => c_item.id != action.payload.order.id
      );
      return {
        ...state,
        isLoading: false,
        view_orders: [action.payload.order, ...confirmation_array],
      };

    case RETAILER_ORDER_REFRESH:
      return {
        ...state,
        isLoading: false,
      };

    case RETAILER_ORDER_CANCELLATION:
      const delete_array = state.view_orders.filter(
        (d_item) => d_item.id != action.payload.order.id
      );
      return {
        ...state,
        isLoading: false,
        view_orders: [action.payload.order, ...delete_array],
      };

    case RETAILER_CART_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
