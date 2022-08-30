import { MailInformation, StatisticQuery } from "@/models";
import { headlessConfig } from "@/configs";

const ORDERS_URL = "statistics/v1.0/report";

export const sendReport = async (
  query: StatisticQuery,
  mailInformation: MailInformation
) => {
  const { accountIds, startDate, endDate } = query;
  await headlessConfig.post(
    ORDERS_URL,
    { ...mailInformation },
    {
      params: {
        accountIds: accountIds?.join("-"),
        startDate: startDate ? startDate.getTime() : "",
        endDate: endDate ? endDate.getTime() : ""
      }
    }
  );
};
