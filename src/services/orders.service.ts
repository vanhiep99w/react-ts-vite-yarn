import { headlessConfig } from "@/configs";
import {
  buildAccountIdsParam,
  buildDateRangeFilterParam,
  buildFilterParam,
  convertOrder,
  convertPagination
} from "@/helpers";
import { Order, TableQuery } from "@/models";
import { ACCOUNT_ID_KEY, CREATE_DATE_PARAM_KEY } from "@/constants";

const ORDERS_URL =
  "headless-commerce-admin-order/v1.0/orders?nestedFields=account";

export const fetchOrders = async (query: TableQuery) => {
  const { page = 0, pageSize, accountIds = [], startDate, endDate } = query;
  const accountIdsParam = buildAccountIdsParam(ACCOUNT_ID_KEY, accountIds);
  const startDateParam = startDate
    ? {
        key: CREATE_DATE_PARAM_KEY,
        value: startDate
      }
    : null;
  const endDateParam = endDate
    ? { key: CREATE_DATE_PARAM_KEY, value: endDate }
    : null;
  const dateRangeParam = buildDateRangeFilterParam(
    startDateParam,
    endDateParam
  );

  const { data } = await headlessConfig.get<any>(ORDERS_URL, {
    params: {
      page: page + 1,
      pageSize,
      filter: buildFilterParam(accountIdsParam, dateRangeParam)
    }
  });

  return convertPagination<Order>(data, convertOrder);
};
