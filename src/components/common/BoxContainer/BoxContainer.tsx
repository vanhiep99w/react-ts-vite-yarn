import React from "react";
import { Paper, SxProps } from "@mui/material";
import BoxContainerTop from "./BoxContainerTop";

interface Props {
  children: React.ReactNode;
  sx?: SxProps;
}

const BoxContainer = ({ children, sx }: Props) => {
  return (
    <Paper elevation={1} sx={{ p: 2, ...sx }}>
      {children}
    </Paper>
  );
};

export default BoxContainer;

BoxContainer.Top = BoxContainerTop;

BoxContainer.defaultProps = {
  sx: {}
};
