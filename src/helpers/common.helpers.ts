import { Pagination } from "@/models";
import { DEFAULT_PAGE_SIZE } from "@/constants";

/**
 * create new default Pagination object
 */
export const initPagination = <T>(): Pagination<T> => {
  return {
    lastPage: 0,
    page: 1,
    pageSize: DEFAULT_PAGE_SIZE,
    totalCount: 0,
    items: []
  };
};

/**
 * Convert data from source like axios to Pagination object
 * @param input
 * @param itemConverter  convert function to convert input["items"]
 * @return Pagination<T>
 */
export const convertPagination = <T>(
  input: any,
  itemConverter: (item: any) => T
): Pagination<T> => {
  if (!input) {
    return initPagination();
  }

  const {
    lastPage = 0,
    page = 1,
    pageSize = DEFAULT_PAGE_SIZE,
    totalCount = 0,
    items
  } = input;
  const convertedItems = items
    ? items.map((item: any) => itemConverter(item))
    : [];

  return {
    lastPage,
    page,
    pageSize,
    totalCount,
    items: convertedItems
  };
};
