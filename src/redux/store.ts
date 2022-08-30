import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filter";
import { accountReducer } from "./accounts";
import { ordersReducer } from "./orders";
import { statisticsReducer } from "./statistics";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    orders: ordersReducer,
    accounts: accountReducer,
    statistics: statisticsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
