import { headlessConfig } from "@/configs/headlessConfig";
import { convertOrder } from "@/helpers";
import { Order, Pagination, TableQuery } from "@/entities";
import { convertPagination } from "@/helpers/helpers";

const ORDERS_BASE_URL =
  "headless-commerce-admin-order/v1.0/orders?nestedFields=account";

export const fetchOrders = async (query: TableQuery) => {
  const { data } = await headlessConfig.get<any>(ORDERS_BASE_URL);

  return convertPagination<Order>(data, convertOrder);
};
