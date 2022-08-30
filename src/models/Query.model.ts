export interface DateParam {
  key: string;
  value: Date;
}

export interface StatisticQuery {
  accountIds?: number[];
  startDate?: Date;
  endDate?: Date;
}

export interface Pageable {
  page?: number;
  pageSize?: number;
}

export type TableQuery = StatisticQuery & Pageable;
