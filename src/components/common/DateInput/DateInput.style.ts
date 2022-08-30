import { inputBaseClasses, SxProps } from "@mui/material";

export const textFieldSx = {
  minWidth: {
    md: 200,
    sm: 150
  },
  [`& .${inputBaseClasses.input}`]: {
    padding: "15px"
  }
};
