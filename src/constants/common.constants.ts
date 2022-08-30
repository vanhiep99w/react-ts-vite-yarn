import {
  ACCOUNT_KEY,
  CREATE_DATE_KEY,
  ID_KEY,
  MODIFIED_DATE_KEY,
  ORDER_DATE_KEY,
  ORDER_STATUS_KEY,
  PRICE_KEY
} from "@/constants/key.constants";
import { OrderStatus } from "@/models";

export const TABLE_TITLES = [
  ID_KEY,
  ORDER_DATE_KEY,
  ORDER_STATUS_KEY,
  ACCOUNT_KEY,
  PRICE_KEY,
  CREATE_DATE_KEY,
  MODIFIED_DATE_KEY
];

export const ERROR_ALERT_DURATION = 5000;

export const ROW_PER_PAGE_OPTIONS = [4, 8, 20, 40, 80];

export const DEFAULT_PAGE_SIZE = 20;

export const ORDER_STATUS: OrderStatus[] = [
  { code: 0, label: "COMPLETED", color: "#4BB5F9" },
  { code: 1, label: "PENDING", color: "#A3A6DD" },
  { code: 2, label: "OPEN", color: "#B95F89" },
  { code: 6, label: "IN_PROGRESS", color: "#DFFFD6" },
  { code: 8, label: "CANCELLED", color: "#E8D7FF" },
  { code: 10, label: "PROCESSING", color: "#FFD7D5" },
  { code: 14, label: "PARTIALLY_SHIPPED", color: "#FFD7D5" },
  { code: 15, label: "SHIPPED", color: "#F9DF74" },
  { code: 20, label: "ON_HOLD", color: "#F9EDCC" }
];
