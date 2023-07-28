"use client"

import { useState } from "react";
import { ChartLine } from "@/components"

const BodyRecord = ({ data }) => {
  const { dayData, weekData, monthData, yearData } = data
  const [selected, setSelected] = useState('year')

  let chartData
  if(selected === 'day') {
    chartData = dayData
  }
  if(selected === 'week') {
    chartData = weekData
  }
  if(selected === 'month') {
    chartData = monthData
  }
  if(selected === 'year') {
    chartData = yearData
  }

  return (
    <div id="body_record" className="pt-14">
      <div className="bg-dark-500 py-4 px-6">
        <div className="flex gap-8 items-start text-light font-normal font-inter">
          <p className="text-[15px] leading-[1.2]">BODY<br/>RECORD</p>
          <p className="tex-2xl">2021.05.21</p>
        </div>

        <div className="h-[220px]">
          <ChartLine data={chartData}/>
        </div>

        <div className="flex gap-2 mt-2">
          <button className={selected === "day" ? "btn_rounded_active" : "btn_rounded"} onClick={() => setSelected('day')}>日</button>
          <button className={selected === "week" ? "btn_rounded_active" : "btn_rounded"} onClick={() => setSelected('week')}>週</button>
          <button className={selected === "month" ? "btn_rounded_active" : "btn_rounded"} onClick={() => setSelected('month')}>月</button>
          <button className={selected === "year" ? "btn_rounded_active" : "btn_rounded"} onClick={() => setSelected('year')}>年</button>
        </div>
      </div>
    </div>
  )
}
export default BodyRecord