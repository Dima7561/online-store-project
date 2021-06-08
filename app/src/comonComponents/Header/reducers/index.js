import { handleActions } from "redux-actions";

import * as asctions from "../actions";

const defaultState = {
  isLoading: false,
  isAuth: false,
  errors: null,
  token: null,
  username: null,
};

const authReducer = handleActions(
  {
    [asctions.SIGN_IN_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [asctions.SIGN_IN_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      isAuth: true,
      token: payload.response.accessToken,
      username: payload.response.firstName,
    }),
    [asctions.SIGN_IN_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response.message,
    }),
  },
  defaultState
);
export default authReducer;
