import { configureStore } from "@reduxjs/toolkit";
import { reduxApi } from "./reduxApi";

export const store = configureStore({
  reducer: {
    [reduxApi.reducerPath]: reduxApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reduxApi.middleware),
});
