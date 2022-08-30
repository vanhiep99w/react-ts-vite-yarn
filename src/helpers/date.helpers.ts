/**
 * get Date object of 7 day ago
 * @param date
 * @return date
 */
export const getLastWeekDate = (date: Date) => {
  return new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
};

/**
 * Convert Date to String YYYY/MM/DD
 * @param date
 * @return string
 */
export const formatDate = (date: Date, delimiter: string = "/") => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (
    date.getFullYear() +
    delimiter +
    (month.toString().length === 1 ? `0${month}` : month) +
    delimiter +
    (day.toString().length === 1 ? `0${day}` : day)
  );
};
