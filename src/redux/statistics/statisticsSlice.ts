import { StatusStatistic } from "@/models";
import {
  buildSliceWithLoadingAndError,
  LoadingAndErrorState
} from "../baseLoadingSlice";
import { fetchStatusStatisticsInfo } from "./statisticThunks";

interface StatisticsState extends LoadingAndErrorState {
  data: StatusStatistic | null;
}

const initialState: StatisticsState = {
  data: null,
  isLoading: false,
  error: null
};

const statisticsSlice = buildSliceWithLoadingAndError<StatisticsState>({
  name: "statistics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchStatusStatisticsInfo.fulfilled,
      (state, { payload }) => {
        state.isLoading = false;
        state.data = payload;
      }
    );
  },
  baseThunks: [fetchStatusStatisticsInfo]
});

export const { reducer: statisticsReducer } = statisticsSlice;
