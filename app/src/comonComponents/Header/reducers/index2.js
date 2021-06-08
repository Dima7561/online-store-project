import { handleActions } from "redux-actions";
import * as actions from "../actions";

const initialState = {
  seccess: false,
  message: null,
  isLoading: false,
};

const signUpReducer = handleActions(
  {
    [actions.SIGN_UP_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.SIGN_UP_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      seccess: payload.response,
    }),
    [actions.SIGN_UP_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: true,
      errors: payload.response,
    }),
  },
  initialState
);

export default signUpReducer;
