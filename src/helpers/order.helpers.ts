import { Order } from "@/models";
import { ORDER_STATUS } from "@/constants";
import { convertAccount } from "./account.helpers";

/**
 * Convert input to Order object
 * @param input
 * @return Order
 */
export const convertOrder = (input: any): Order => {
  const {
    id,
    account,
    orderDate,
    orderStatus: orderStatusId,
    createDate,
    modifiedDate,
    totalFormatted
  } = input;
  const orderStatus = ORDER_STATUS.find(
    (status) => status.code === orderStatusId
  )!;
  return {
    id,
    account: convertAccount(account),
    createDate: new Date(createDate),
    orderDate: new Date(orderDate),
    orderStatusInfo: orderStatus,
    modifiedDate: new Date(modifiedDate),
    price: totalFormatted
  };
};
