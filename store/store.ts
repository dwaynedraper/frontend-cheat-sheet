import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "../components/auth/authSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
