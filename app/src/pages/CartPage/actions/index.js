import { createAction } from "redux-actions";

export const GET_CART_REQUEST = createAction("GET_CART_REQUEST");
export const GET_CART_SUCCESS = createAction("GET_CART_SUCCESS");
export const GET_CART_FAIL = createAction("GET_CART_FAIL");

export const REMOVE_FROM_CART = createAction("REMOVE_FROM_CART");
export const SUM_CART = createAction("SUM_CART");

export const INCR_CART = createAction("INCR_CART");
export const DECR_CART = createAction("DECR_CART");
