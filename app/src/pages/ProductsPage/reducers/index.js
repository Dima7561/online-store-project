import { handleActions } from "redux-actions";
import * as actions from "../actions";

export const initialState1 = {
  allPokemon: [],
  isLoading: false,
  errors: null,
  page: 1,
};

const productsDataReducer = handleActions(
  {
    [actions.GET_PRODUCTS_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_PRODUCTS_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      allPokemon: payload.response,
      page: payload.actionPayload,
    }),
    [actions.GET_PRODUCTS_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
    // [actions.INCREMENT_COUNTER]: (state, { payload }) => {
    //   const copy = [...state.allPokemon];
    //   const foundCounter = copy[payload];
    //   foundCounter.quantityInCart = foundCounter.quantityInCart + 1;
    //   return {
    //     ...state,
    //     allPokemon: copy,
    //   };
    // },
  },
  initialState1
);
export default productsDataReducer;
