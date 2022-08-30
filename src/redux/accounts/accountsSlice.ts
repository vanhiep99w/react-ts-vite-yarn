import { Account } from "@/models";
import {
  buildSliceWithLoadingAndError,
  LoadingAndErrorState
} from "../baseLoadingSlice";
import { fetchAccountByName } from "./accountsThunks";

interface AccountState extends LoadingAndErrorState {
  accounts: Account[];
}

const initialState: AccountState = {
  isLoading: false,
  accounts: [],
  error: null
};

const accountsSlice = buildSliceWithLoadingAndError<AccountState>({
  name: "accounts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAccountByName.fulfilled, (state, { payload }) => {
      state.accounts = payload;
      state.isLoading = false;
    });
  },
  baseThunks: [fetchAccountByName]
});

export const { reducer: accountReducer } = accountsSlice;
