import React from "react";
import { ThemeProvider as ThemeProviderMUI } from "@mui/material";
import { customTheme } from "@/configs";

interface IProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: IProps) => {
  return <ThemeProviderMUI theme={customTheme}>{children}</ThemeProviderMUI>;
};

export default ThemeProvider;
