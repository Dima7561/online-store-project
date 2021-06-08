import { createAction } from "redux-actions";

export const SIGN_IN_REQUEST = createAction("SIGN_IP_REQUEST");
export const SIGN_IN_SUCCESS = createAction("SIGN_IP_SUCCESS");
export const SIGN_IN_FAIL = createAction("SIGN_IP_FAIL");

export const SIGN_UP_REQUEST = createAction("SIGN_UP_REQUEST");
export const SIGN_UP_SUCCESS = createAction("SIGN_UP_SUCCESS");
export const SIGN_UP_FAIL = createAction("SIGN_UP_FAIL");
