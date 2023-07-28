"use client"

import { useState } from "react"
import { Button, Card } from "@/components";
import FilterHistory from "./FilterHistory";

const MealHistory = ({ data = [] }) => {
  const [typeMeal, setTypeMeal] = useState("")
  const dataMeal = typeMeal ? data.filter(meal => meal.type === typeMeal) : data

  return (
    <>
      <FilterHistory setTypeMeal={setTypeMeal}/>

      <div className="mb-16">
        <div className="grid grid-cols-4 gap-2 max-sm:grid-cols-2 max-md:grid-cols-3">
          {dataMeal.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </div>
        <div className="mt-7 flex justify-center">
          <Button title="記録をもっと見る" />
        </div>
      </div>
    </>
  );
};
export default MealHistory;
