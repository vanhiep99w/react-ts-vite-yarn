import { OrderStatus } from "@/models";
import { Box } from "@mui/material";
import { statusSX } from "./Status.style";

interface Props {
  status: OrderStatus;
}

const Status = ({ status }: Props) => {
  const { color, label } = status;
  return (
    <Box sx={{ border: `1px solid ${color}`, color, ...statusSX }}>{label}</Box>
  );
};

export default Status;
