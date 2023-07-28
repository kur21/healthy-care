"use client";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AchievementRate = ({ data }) => {
  const { percentage, date } = data;
  return (
    <div className="flex justify-center items-center bg-achievement-rate bg-cover bg-center w-full h-full min-h-[320px] max-w-[540px] bg-blend-soft-light max-[860px]:min-h-[200px] max-[860px]:max-w-full">
      <div className="w-[181px] h-[181px] max-[860px]:w-[160px] max-[860px]:h-[160px]">
        <CircularProgressbarWithChildren
          value={percentage}
          strokeWidth={2}
          styles={buildStyles({
            strokeLinecap: "butt",
            pathColor: "#FFF",
            trailColor: "transparent",
          })}
          className="drop-shadow-primary"
        >
          <div className="flex items-baseline gap-1 text-light font-inter font-normal drop-shadow-primary">
            <span className="text-lg">{date}</span>
            <span className="text-2xl">{percentage}%</span>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};
export default AchievementRate;
