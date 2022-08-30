import React, { useEffect } from "react";
import { BoxContainer } from "@/components/common";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Box, Stack } from "@mui/material";
import { fetchStatusStatisticsInfo } from "@/redux/statistics";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { convertDataChart } from "./helpers";

ChartJS.register(ArcElement, Tooltip, Legend);

const PipeChart = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.statistics);
  const { selectedAccount, endDate, startDate } = useAppSelector(
    (state) => state.filter
  );
  useEffect(() => {
    const accountIds = selectedAccount.map((account) => account.id);
    dispatch(fetchStatusStatisticsInfo({ accountIds, startDate, endDate }));
  }, [endDate, startDate, JSON.stringify(selectedAccount)]);

  return (
    <BoxContainer>
      <BoxContainer.Top title="Order status" />
      <Stack alignItems="center">
        <Box width={500}>
          <Pie data={convertDataChart(data)} />
        </Box>
      </Stack>
    </BoxContainer>
  );
};

export default PipeChart;
