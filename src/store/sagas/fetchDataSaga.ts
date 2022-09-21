import {
  getData,
  getDataSuccess,
  getDataError
} from "../slices/fetchDataSlice";
import { all, fork, call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { getActivity } from "../../api/server";

function* fetchData() {
  try {
    const response: AxiosResponse = yield call(getActivity);
    yield put(getDataSuccess(response.data));
  } catch (error) {
    console.error(error);
    yield put(getDataError(error));
  }
}

// create a function that detect the getData action
// this function will watch the getData action
// when the action is executed, call the generator function passed in the second argument of takeLatest effect fuction
function* watchGetData() {
  yield takeLatest(getData, fetchData);
}

export default watchGetData;
