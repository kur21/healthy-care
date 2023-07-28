"use client";

import { ChartLine } from "@/components";

const WeightChart = ({ data = [] }) => {
  return (
    <div className="flex-1 bg-dark-600 flex items-center justify-center max-[860px]:p-5">
      <div className="w-full h-full max-h-[294px] max-w-[589px]">
        <ChartLine data={data} />
      </div>
    </div>
  );
};
export default WeightChart;
