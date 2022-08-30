import { OrderStatus } from "./OrderStatus.model";
import { Account } from "./Account.model";

export interface Order {
  id: number;
  orderDate: Date;
  orderStatusInfo: OrderStatus;
  account: Account;
  createDate: Date;
  modifiedDate: Date;
  price: string;
}
