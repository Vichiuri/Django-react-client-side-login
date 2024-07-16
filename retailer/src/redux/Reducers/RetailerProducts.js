import {
  RETAILER_ADD_FAV_PRODUCT,
  RETAILER_CATEGORIES_LOADED,
  RETAILER_CLEAR_FAV_PRODUCT,
  RETAILER_DELETE_FAV_PRODUCT,
  RETAILER_FAV_PRODUCT,
  RETAILER_NEW_ARRIVALS,
  RETAILER_PRODUCTS_ERROR,
  RETAILER_PRODUCTS_LOADED,
  RETAILER_PRODUCTS_LOADING,
  RETAILER_PRODUCTS_SEARCHED,
  RETAILER_PRODUCTS_SLABS,
  RETAILER_PRODUCT_DETAIL,
  RETAILER_SUB_CATEGORIES_LOADED,
} from "../Actions/types";

const initialState = {
  isLoading: false,
  products: [],
  categories: [],
  sub_categories: [],
  new_arrivals: [],
  related_products: [],
  product_detail: null,
  fav_prods: [],
  fav_prods_current_page: 1,
  fav_prods_last_page: 1,
  product_slabs: [],
  product_slabs_current_page: 1,
  product_slabs_last_page: 1,
  search_product: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RETAILER_PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case RETAILER_CATEGORIES_LOADED:
      return {
        ...state,
        isLoading: false,
        categories: action.payload.categories,
      };

    case RETAILER_SUB_CATEGORIES_LOADED:
      let sub_array = state.sub_categories;
      if (
        action?.payload?.sub_categories &&
        action.payload.sub_categories.length > 0
      ) {
        sub_array = action.payload.sub_categories;
      }

      return {
        ...state,
        isLoading: false,
        sub_categories: action.payload.isSub
          ? sub_array
          : action.payload.sub_categories,
      };

    case RETAILER_PRODUCTS_LOADED:
      return {
        ...state,
        isLoading: false,
        products: action.payload.products,
      };

    case RETAILER_PRODUCT_DETAIL:
      return {
        ...state,
        isLoading: false,
        product_detail: action.payload.detail,
        related_products: action.payload.related_products,
      };

    case RETAILER_NEW_ARRIVALS:
      return {
        ...state,
        isLoading: false,
        new_arrivals: action.payload.products,
      };

    case RETAILER_FAV_PRODUCT:
      return {
        ...state,
        isLoading: false,
        fav_prods: action.payload.fav_prods,
        fav_prods_current_page: action.payload.currentPage,
        fav_prods_last_page: action.payload.lastPage,
      };

    case RETAILER_ADD_FAV_PRODUCT:
      return {
        ...state,
        isLoading: false,
        fav_prods: [action.payload.fav_prod, ...state.fav_prods],
      };

    case RETAILER_DELETE_FAV_PRODUCT:
      return {
        ...state,
        isLoading: false,
        fav_prods: [
          ...state.fav_prods.filter((item) => item.id != action.payload),
        ],
      };

    case RETAILER_CLEAR_FAV_PRODUCT:
      return {
        ...state,
        isLoading: false,
        fav_prods: [],
      };

    case RETAILER_PRODUCTS_SLABS:
      return {
        ...state,
        isLoading: false,
        product_slabs: action.payload.price_list,
        product_slabs_current_page: action.payload.currentPage,
        product_slabs_last_page: action.payload.lastPage,
      };

    case RETAILER_PRODUCTS_SEARCHED:
      return {
        ...state,
        isLoading: false,
        search_product: action.payload.products,
      };

    case RETAILER_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
