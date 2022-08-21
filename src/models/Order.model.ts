import { OrderStatus } from "@/entities/OrderStatus";
import { Account } from "@/entities/Account";

export interface Order {
  id: number;
  orderDate: Date;
  orderStatusInfo: OrderStatus;
  account: Account;
  createDate: Date;
  modifiedDate: Date;
  price: string;
}
