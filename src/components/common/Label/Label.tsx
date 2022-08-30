import { Typography } from "@mui/material";
import React from "react";

interface Props {
  title: string;
}

const Label: React.FC<Props> = ({ title }) => {
  return (
    <Typography variant="h6" color="app.main">
      {title}
    </Typography>
  );
};

export default Label;
