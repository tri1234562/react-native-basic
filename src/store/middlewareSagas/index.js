import { all, takeLatest } from "redux-saga/effects";

import {
  INCREASE_DATA_REQUEST,
  DECREASE_DATA_REQUEST,
  RESET_DATA_REQUEST,
  SIGN_UP_REQUEST,
} from "../actionsType";
import testReduxMiddleware from "./testMiddlewareSaga";
import signUpMiddleware from "./signUpMiddlewareSaga";

function* testChangeData() {
  yield takeLatest(INCREASE_DATA_REQUEST, testReduxMiddleware.handleUpdateData);
}

function* handleDecreaseCount() {
  yield takeLatest(
    DECREASE_DATA_REQUEST,
    testReduxMiddleware.handleDecreaseCount
  );
}

function* handleResetCount() {
  yield takeLatest(RESET_DATA_REQUEST, testReduxMiddleware.handleResetCount);
}

//Sign up middleware

function* handleSignUpRequest() {
  yield takeLatest(SIGN_UP_REQUEST, signUpMiddleware.handleSignUpRequest);
}

export default function* rootSaga() {
  yield all([
    testChangeData(),
    handleDecreaseCount(),
    handleResetCount(),
    handleSignUpRequest(),
  ]);
}
