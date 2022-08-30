import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { formatDateWithDash } from "./helpers";
import { textFieldSx } from "./DateInput.style";

type Props = {
  value: Date;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: Date) => void;
  min?: Date | null;
  max?: Date | null;
} & Omit<TextFieldProps, "value" | "onChange">;

const DateInput = ({
  value,
  onChange,
  min,
  max,
  inputProps,
  sx,
  ...otherProps
}: Props) => {
  const minMaxProps = {
    min: min ? formatDateWithDash(min) : "",
    max: max ? formatDateWithDash(max) : ""
  };

  const onDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = event.target.value;
    if (dateValue) {
      onChange(event, new Date(dateValue));
    }
  };
  return (
    <TextField
      type="date"
      onChange={onDateChange}
      value={formatDateWithDash(value)}
      size="medium"
      inputProps={{ ...minMaxProps, ...inputProps }}
      sx={{ ...textFieldSx, ...sx }}
      {...otherProps}
    />
  );
};

export default DateInput;

DateInput.defaultProps = {
  min: null,
  max: null
};
