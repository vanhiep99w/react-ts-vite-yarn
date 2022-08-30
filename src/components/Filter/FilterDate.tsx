import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { FilterDateName, setDateFilter } from "@/redux/filter";
import { DateInput } from "@/components/common";

const FilterDate = () => {
  const { startDate, endDate } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const onDateInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: Date
  ) => {
    const inputName = event.target.name as FilterDateName;
    dispatch(setDateFilter({ name: inputName, value }));
  };
  return (
    <>
      <DateInput
        name="startDate"
        value={startDate}
        onChange={onDateInputChange}
        label="Start Date"
        sx={{ mr: 1 }}
        max={endDate}
      />
      <DateInput
        name="endDate"
        value={endDate}
        onChange={onDateInputChange}
        label="End Date"
        min={startDate}
      />
    </>
  );
};
export default FilterDate;
