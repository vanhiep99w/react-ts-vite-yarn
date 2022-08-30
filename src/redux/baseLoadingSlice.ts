import {
  ActionReducerMapBuilder,
  AsyncThunk,
  createSlice,
  CreateSliceOptions,
  isPending,
  isRejectedWithValue
} from "@reduxjs/toolkit";
import { NoInfer } from "@reduxjs/toolkit/src/tsHelpers";

/**
 * Base state with isLoading and Error properties
 */
export interface LoadingAndErrorState {
  isLoading: boolean;
  error: string | null;
}

/**
 * Config object of @link createAsyncThunk function
 */
export type AsyncThunkConfig<T> = {
  state: T;
  rejectValue: string;
};

type ThunkArray<State> = [
  AsyncThunk<any, any, AsyncThunkConfig<State>>,
  ...AsyncThunk<any, any, AsyncThunkConfig<State>>[]
];

type SliceOptions<State extends LoadingAndErrorState> = Omit<
  CreateSliceOptions<State>,
  "extraReducers"
> & {
  /**
   * any custom extraReduces
   * @param builder
   */
  extraReducers?: (builder: ActionReducerMapBuilder<NoInfer<State>>) => void;

  /**
   * baseThunks is the AsyncThunk Action
   *
   * + when pending will set isLoading to true
   * + when rejected will set error and Loading to false
   */
  baseThunks?: ThunkArray<State>;
};

/**
 * Create a slice with State have isLoading and Error
 * any Thunk action fill in baseThunks will be
 * auto set isLoading and Error when pending to false when rejected
 * @param config
 */
export const buildSliceWithLoadingAndError = <
  State extends LoadingAndErrorState
>(
  config: SliceOptions<State>
) => {
  const { extraReducers: extraReducersConfig, ...other } = config;

  return createSlice({
    ...other,
    extraReducers: (builder) => {
      if (extraReducersConfig) {
        extraReducersConfig(builder);
      }
      const { baseThunks } = config;
      if (baseThunks) {
        builder
          .addMatcher(isPending(...baseThunks), (state) => {
            state.isLoading = true;
          })
          .addMatcher(
            isRejectedWithValue(...baseThunks),
            (state, { payload }) => {
              state.isLoading = false;
              state.error = payload;
            }
          );
      }
    }
  });
};
