/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Account } from "@/models/Account.model";
import { getLastWeekDate } from "@/helpers/date.helpers";
import { DEFAULT_PAGE_SIZE } from "@/constants";

interface FilterState {
  isLoading: boolean;
  selectedAccount: Account[];
  startDate: Date;
  endDate: Date;
  page: number;
  pageSize: number;
  error: string | null;
}

const initialState: FilterState = {
  isLoading: false,
  selectedAccount: [],
  startDate: getLastWeekDate(new Date()),
  endDate: new Date(),
  page: 0,
  pageSize: DEFAULT_PAGE_SIZE,
  error: null
};

export type FilterDateName = "startDate" | "endDate";

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    selectAccounts(state, { payload }: PayloadAction<Account[]>) {
      state.selectedAccount = payload;
    },
    unselectAccount(state, { payload: accountId }: PayloadAction<number>) {
      const selectedIndex = state.selectedAccount.findIndex(
        (account) => account.id === accountId
      );
      if (selectedIndex !== -1) {
        state.selectedAccount.splice(selectedIndex, 1);
      }
    },
    setDateFilter(
      state,
      { payload }: PayloadAction<{ name: FilterDateName; value: Date }>
    ) {
      const { name, value } = payload;
      if (name === "startDate") {
        state[name] = new Date(
          value.getFullYear(),
          value.getMonth(),
          value.getDate()
        );
      } else {
        state[name] = new Date(
          value.getFullYear(),
          value.getMonth(),
          value.getDate(),
          23,
          59,
          59
        );
      }
    },
    setPage(state, { payload }: PayloadAction<number>) {
      state.page = payload;
    },
    setPageSize(state, { payload }: PayloadAction<number>) {
      state.pageSize = payload;
    }
  }
});

export const { reducer: filterReducer } = filterSlice;
export const { selectAccounts, setDateFilter, setPage, setPageSize } =
  filterSlice.actions;
