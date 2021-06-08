import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { handleActions } from "redux-actions";
import { calculateCartItemPrice } from "../../../helpers/globalUtils";
import { GET_PRODUCTS_SUCCESS } from "../../ProductsPage/actions";
import productsDataReducer from "../../ProductsPage/reducers";
import * as actions from "../actions";
import { initialState1 } from "../../ProductsPage/reducers";

const initialState = {
  cartPokemon: [],
  isLoading: false,
  errors: null,
};

const CartReducers = handleActions(
  {
    [actions.GET_CART_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_CART_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      cartPokemon: [...state.cartPokemon, payload],
    }),
    [actions.GET_CART_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
    [actions.REMOVE_FROM_CART](state, { payload }) {
      const cartCopy = [...state.cartPokemon];
      const itemIndexToRemove = cartCopy.findIndex(
        (area) => area.id === payload
      );

      cartCopy.splice(itemIndexToRemove, 1);
      return { ...state, cartPokemon: cartCopy };
    },

    [actions.SUM_CART](state, { payload }) {
      const { id, value, fieldToEdit, cartPokemon, allPokemon } = payload;
      const cartCopy = [...state.cartPokemon];
      const itemToEdit = cartCopy.find((area) => area.id === id);

      if (fieldToEdit === "quantity") {
        const initialPrice = cartCopy.find((area) => area.id === id).price;
        itemToEdit[fieldToEdit] = +value;

        itemToEdit.price = +calculateCartItemPrice(
          itemToEdit.quantity,
          initialPrice
        );
        return { ...state, cartPokemon: cartCopy };
      } else {
        itemToEdit[fieldToEdit] = value;
        return { ...state, cartPokemon: cartCopy };
      }
    },
  },

  initialState
);

export default CartReducers;

// [actions.INCR_CART]: (state, { payload }) => {
//   const copy = [...state.cartPokemon];
//   const foundCounter = copy.find((area) => area.id === payload).price;
//   foundCounter.price = foundCounter.price + 1;

//   return {
//     ...state,
//     cartPokemon: copy,
//   };
// },
