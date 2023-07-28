"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

import chartConfigs from "@/libs/chatjs/chartConfig";

const ChartLine = ({data}) => {
    return (
    <div className="w-full h-full">
      <Line options={chartConfigs} data={data} height={"100%"} width={"100%"} />
    </div>
  );
};
export default ChartLine;
