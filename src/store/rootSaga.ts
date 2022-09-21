import createSagaMiddleware from "redux-saga";
import { all, call } from "redux-saga/effects";
import watchGetData from "./sagas/fetchDataSaga";

// create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// create a root saga that combines all sagas.
// use all() to combine them by passing sagas into an array as an argument
export function* rootSaga() {
  yield all([call(watchGetData)]);
}

export default sagaMiddleware;
