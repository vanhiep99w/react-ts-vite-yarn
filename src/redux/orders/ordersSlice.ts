import { Order, Pagination } from "@/models";
import { initPagination } from "@/helpers";
import {
  buildSliceWithLoadingAndError,
  LoadingAndErrorState
} from "../baseLoadingSlice";
import { fetchOrdersTable } from "./ordersThunks";

interface OrdersState extends LoadingAndErrorState {
  orders: Pagination<Order>;
}

const initialState: OrdersState = {
  isLoading: false,
  orders: initPagination<Order>(),
  error: null
};

const ordersSlice = buildSliceWithLoadingAndError<OrdersState>({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrdersTable.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.isLoading = false;
    });
  },
  baseThunks: [fetchOrdersTable]
});

export const { reducer: ordersReducer } = ordersSlice;
