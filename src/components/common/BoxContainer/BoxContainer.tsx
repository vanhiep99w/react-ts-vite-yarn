import React from "react";
import { Paper } from "@mui/material";
import BoxContainerTop from "@/components/common/BoxContainer/BoxContainerTop";

interface IProps {
  children: React.ReactNode | React.ReactComponentElement;
}
type VerticalAligment = "top" | "center" | "bottom";
type HorizintalAligment = "left" | "center" | "right";

type Aligment =
  | Exclude<`${VerticalAligment}-${HorizintalAligment}`, "center-center">
  | "center";

const BoxContainer = ({ children }: IProps) => {
  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      {children}
    </Paper>
  );
};

export default BoxContainer;

BoxContainer.Top = BoxContainerTop;
