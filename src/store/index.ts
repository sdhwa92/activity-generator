import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import rootReducer from "./rootReducer";
import sagaMiddleware, { rootSaga } from "./rootSaga";

export const store = configureStore({
  reducer: rootReducer,
  // register sagaMiddleware
  middleware: [sagaMiddleware]
});

// execute rootSaga
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
