import { StatusStatistic } from "@/models";
import { ChartData } from "chart.js";
import { ORDER_STATUS } from "@/constants";

const defaultDataChart = {
  labels: ["Status"],
  datasets: [
    {
      data: [1],
      backgroundColor: ["#DFFFD6"]
    }
  ]
};

export const convertDataChart = (
  input: StatusStatistic | null
): ChartData<"pie", number[], string> => {
  if (input && input.status) {
    const data: number[] = [];
    const backgroundColor: string[] = [];
    const labels: string[] = [];
    Object.entries(input.status).forEach(([key, value]) => {
      if (value && value > 0) {
        const statusId = parseInt(key, 10);
        if (!Number.isNaN(statusId)) {
          const orderStatus = ORDER_STATUS.find(
            (status) => status.code === statusId
          );
          if (orderStatus) {
            backgroundColor.push(orderStatus.color);
            labels.push(orderStatus.label);
            data.push(value);
          }
        }
      }
    });
    if (data.length) {
      return { labels, datasets: [{ data, backgroundColor, borderWidth: 1 }] };
    }
  }
  return defaultDataChart;
};
