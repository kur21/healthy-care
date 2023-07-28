"use client"

import { HexButton } from "@/components";
import { mealHistoryButtons } from "@/constants";

const FilterHistory = ({setTypeMeal}) => {
  return (
    <div className="flex justify-center items-center gap-16 py-6 max-sm:gap-4">
        {mealHistoryButtons.map((item) => (
          <HexButton data={item} key={item.id} handleClick={() => setTypeMeal(item.value)}/>
        ))}
      </div>
  );
};
export default FilterHistory;
