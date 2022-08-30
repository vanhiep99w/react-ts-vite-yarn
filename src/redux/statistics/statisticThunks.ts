import { createAsyncThunk } from "@reduxjs/toolkit";
import { StatisticQuery, StatusStatistic } from "@/models";
import { getStatusStatistic } from "@/services";
import { FETCH_STATUS_STATISTICS_ERROR } from "@/constants";
import { AsyncThunkConfig } from "../baseLoadingSlice";

export const fetchStatusStatisticsInfo = createAsyncThunk<
  StatusStatistic,
  StatisticQuery,
  AsyncThunkConfig<any>
>(
  "statistics/fetchStatusStatisticsInfo",
  async (query: StatisticQuery, { rejectWithValue }) => {
    try {
      const res = getStatusStatistic(query);
      return res;
    } catch (error) {
      return rejectWithValue(FETCH_STATUS_STATISTICS_ERROR);
    }
  }
);
