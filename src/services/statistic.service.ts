import { headlessConfig } from "@/configs";
import { StatisticQuery, StatusStatistic } from "@/models";

const STATISTIC_URL = "statistics/v1.0/status-statistics";

export const getStatusStatistic = async (
  query: StatisticQuery
): Promise<StatusStatistic> => {
  const { accountIds, startDate, endDate } = query;
  const { data } = await headlessConfig.get<StatusStatistic>(STATISTIC_URL, {
    params: {
      accountIds: accountIds?.join("-"),
      startDate: startDate ? startDate.getTime() : "",
      endDate: endDate ? endDate.getTime() : ""
    }
  });
  return data;
};
