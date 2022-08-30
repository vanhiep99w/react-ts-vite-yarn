import { createAsyncThunk } from "@reduxjs/toolkit";
import { Order, Pagination, TableQuery } from "@/models";
import { fetchOrders } from "@/services";
import { FETCH_ORDERS_ERROR } from "@/constants";
import { AsyncThunkConfig } from "../baseLoadingSlice";

export const fetchOrdersTable = createAsyncThunk<
  Pagination<Order>,
  TableQuery,
  AsyncThunkConfig<any>
>("orders/fetchOrders", async (query: TableQuery, { rejectWithValue }) => {
  try {
    const orders = await fetchOrders(query);
    return orders;
  } catch (error) {
    return rejectWithValue(FETCH_ORDERS_ERROR);
  }
});
