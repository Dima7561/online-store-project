import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";
import watchRequest from "../helpers/requests/watchRequest";
import launchSaga from "../helpers/requests/launchSaga";
import loginWatcher from "../comonComponents/Header/sagas/loginWatcher";

function* rootSaga() {
  yield all([launchSaga(), watchRequest(), loginWatcher()]);
}
export default rootSaga;
