import { handleActions } from "redux-actions";
import * as actions from "../actions";

const initialState = {
  pokemonInfo: {},
  isLoading: false,
  errors: null,
};

const ProductsDetalisReducers = handleActions(
  {
    [actions.GET_PRODUCTS_DETALIS_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_PRODUCTS_DETALIS_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      pokemonInfo: { ...payload.response },
    }),
    [actions.GET_PRODUCTS_DETALIS_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: { ...payload.response },
    }),
  },
  initialState
);

export default ProductsDetalisReducers;
