import { takeEvery } from "redux-saga/effects";
import launchSaga from "../../../helpers/requests/launchSaga";
import { SIGN_IN_SUCCESS } from "../actions";

function* loginWatcher() {
  yield takeEvery(SIGN_IN_SUCCESS, launchSaga);
}
export default loginWatcher;
