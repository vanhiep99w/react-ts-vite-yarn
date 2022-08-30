import { createAsyncThunk } from "@reduxjs/toolkit";
import { queryAccountsByName } from "@/services";
import format from "string-template";
import { FETCH_ACCOUNT_ERROR_WITH_X } from "@/constants";
import { Account } from "@/models";
import { AsyncThunkConfig } from "../baseLoadingSlice";

export const fetchAccountByName = createAsyncThunk<
  Account[],
  string,
  AsyncThunkConfig<any>
>("accounts/fetchAccountsByName", async (name: string, { rejectWithValue }) => {
  try {
    const accounts = await queryAccountsByName(name, {
      page: 1,
      pageSize: 5
    });
    return accounts;
  } catch (error) {
    return rejectWithValue(format(FETCH_ACCOUNT_ERROR_WITH_X, [name]));
  }
});
