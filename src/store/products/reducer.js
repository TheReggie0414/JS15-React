import { PRODUCTS_LOADING, PRODUCTS_SUCCESS, PRODUCTS_FAIL } from "./action";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_LOADING:
      return { ...state, loading: true };
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: null,
      };
    case PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
