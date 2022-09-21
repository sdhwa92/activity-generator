import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ActivityType =
  | "education"
  | "recreational"
  | "social"
  | "diy"
  | "charity"
  | "cooking"
  | "relaxation"
  | "music"
  | "busywork";

export interface DataInterface {
  activity: string;
  type: ActivityType | null;
  participants: number;
  price: number;
  link: string;
  key: number;
  accessibility: number;
}

export interface StateInterface {
  isLoading: boolean;
  data?: DataInterface;
  error: boolean;
}

const initialState: StateInterface = {
  isLoading: false,
  data: undefined,
  error: false
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // action to execute API call
    getData: (state) => {
      state.isLoading = true;
    },
    // action to be called when API success
    getDataSuccess: (state, action: PayloadAction<DataInterface>) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    // action to be called when API failed
    getDataError: (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.data = action.payload;
    }
  }
});

export const { getData, getDataSuccess, getDataError } = dataSlice.actions;
export default dataSlice.reducer;
