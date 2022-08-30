export interface Pagination<T> {
  lastPage: number;
  page: number;
  pageSize: number;
  totalCount: number;
  items: T[];
}
