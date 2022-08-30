/**
 * build a account param like '{key}/any(x:(x eq {values[1]}) or ...)'
 * @param key
 * @param values
 */
import { DateParam } from "@/models";

export const buildFilterParam = (...params: string[]) => {
  return params.filter((param) => param.trim().length !== 0).join(" and ");
};

export const buildAccountIdsParam = (
  key: string,
  values: (string | number)[]
): string => {
  if (values.length <= 0) {
    return "";
  }
  const equalFilter = values.map((value) => `(x eq ${value})`).join(" or ");
  return `(${key}/any(x:${equalFilter}))`;
};

/**
 * build a date param like '(createDate ge {value})+and+(createDate le {value})'
 * @param start
 * @param end
 */
export const buildDateRangeFilterParam = (
  start: DateParam | null,
  end: DateParam | null
) => {
  if (!start && !end) {
    return "";
  }
  const greaterThan = start?.value
    ? `(${start.key} gt ${start.value.toISOString()})`
    : "";
  const lessThan = end?.value
    ? `(${end.key} lt ${end.value.toISOString()})`
    : "";
  return `${greaterThan} and ${lessThan}`;
};
