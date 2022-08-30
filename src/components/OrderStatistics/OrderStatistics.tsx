import { Box, Stack } from "@mui/material";
import { PipeChart, TableOrder } from "@/components";
import { useAppDispatch } from "@/hooks";
import { useEffect } from "react";
import { fetchOrdersTable } from "@/redux/orders";

import Filter from "@/components/Filter/Filter";
import ErrorAlert from "@/components/ErrorAlert/ErrorAlert";

const OrderStatistics = () => {
  return (
    <Box>
      <Filter />
      <Stack direction={{ sm: "column", md: "row" }} spacing={2}>
        <Box>
          <PipeChart />
        </Box>
        <Box flexGrow={2}>
          <TableOrder />
        </Box>
      </Stack>
      <ErrorAlert />
    </Box>
  );
};

export default OrderStatistics;
