import { combineReducers } from "@reduxjs/toolkit";
import fetchDataSlice from "./slices/fetchDataSlice";

const rootReducer = combineReducers({
  data: fetchDataSlice
});

export default rootReducer;
