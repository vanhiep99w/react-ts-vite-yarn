import { Typography } from "@mui/material";
import React from "react";

interface IProps {
  title: string;
}

const Label: React.FC<IProps> = ({ title }) => {
  return (
    <Typography variant="h6" color="app.main">
      {title}
    </Typography>
  );
};

export default Label;
