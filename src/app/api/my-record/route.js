import { NextResponse } from "next/server";

const data = {
  bodyRecordDataChart: {
    dayData: {
      labels: ["6時", "7時", "8時", "9時", "10時", "11時", "12時", "1時", "2時", "3時", "4時", "5時"],
      datasets: [
        {
          label: "Body weight",
          data: [12, 21, 14, 19, 22, 17, 16, 22, 25, 11, 23, 12],
          backgroundColor: "#FFCC21",
          borderColor: "#FFCC21",
        },
        {
          label: "Body fat",
          data: [23, 21, 32, 21, 11, 31, 19, 18, 15, 17, 20, 15],
          backgroundColor: "#8FE9D0",
          borderColor: "#8FE9D0",
        },
      ],
    },
    weekData: {
      labels: ["月曜", "火曜", "火曜", "水曜", "木曜", "金曜", "土曜", "日曜"],
      datasets: [
        {
          label: "Body weight",
          data: [17, 16, 22, 25, 11, 23, 12],
          backgroundColor: "#FFCC21",
          borderColor: "#FFCC21",
        },
        {
          label: "Body fat",
          data: [23, 21, 32, 21, 20, 15],
          backgroundColor: "#8FE9D0",
          borderColor: "#8FE9D0",
        },
      ],
    },
    monthData: {
      labels: ["1週目", "2週目", "3週目", "4週目"],
      datasets: [
        {
          label: "Body weight",
          data: [25, 11, 23, 12],
          backgroundColor: "#FFCC21",
          borderColor: "#FFCC21",
        },
        {
          label: "Body fat",
          data: [32, 21, 20, 15],
          backgroundColor: "#8FE9D0",
          borderColor: "#8FE9D0",
        },
      ],
    },
    yearData: {
      labels: ["6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月"],
      datasets: [
        {
          label: "Body weight",
          data: [45, 46, 44, 48, 50, 44, 43, 47, 47, 50, 49, 47],
          backgroundColor: "#FFCC21",
          borderColor: "#FFCC21",
        },
        {
          label: "Body fat",
          data: [55, 54, 34, 32, 43, 34, 23, 57, 60, 54, 43, 45],
          backgroundColor: "#8FE9D0",
          borderColor: "#8FE9D0",
        },
      ],
    }
  },
  exerciseData: {
    date: "2021.05.21",
    exercises: [
      {
        id: 1,
        task: "家事全般（立位・軽い）",
        kcal: 26,
        time: 10
      },
      {
        id: 2,
        task: "家事全般（立位・軽い）",
        kcal: 26,
        time: 10
      },
      {
        id: 3,
        task: "家事全般（立位・軽い）",
        kcal: 26,
        time: 10
      },
      {
        id: 4,
        task: "家事全般（立位・軽い）",
        kcal: 26,
        time: 10
      },
      {
        id: 5,
        task: "家事全般（立位・軽い）",
        kcal: 26,
        time: 10
      },
      {
        id: 6,
        task: "家事全般（立位・軽い）",
        kcal: 26,
        time: 10
      },
      {
        id: 7,
        task: "家事全般（立位・軽い）",
        kcal: 26,
        time: 10
      },
      {
        id: 8,
        task: "家事全般（立位・軽い）",
        kcal: 26,
        time: 10
      },
      {
        id: 9,
        task: "家事全般（立位・軽い）",
        kcal: 26,
        time: 10
      },
      {
        id: 10,
        task: "家事全般（立位・軽い）",
        kcal: 26,
        time: 10
      },
      {
        id: 11,
        task: "家事全般（立位・軽い）",
        kcal: 26,
        time: 10
      },
      {
        id: 12,
        task: "家事全般（立位・軽い）",
        kcal: 26,
        time: 10
      },
      {
        id: 13,
        task: "家事全般（立位・軽い）",
        kcal: 26,
        time: 10
      },
      {
        id: 14,
        task: "家事全般（立位・軽い）",
        kcal: 26,
        time: 10
      },
      {
        id: 15,
        task: "家事全般（立位・軽い）",
        kcal: 26,
        time: 10
      }
    ]
  },
  diaryData: [
    {
      id: 1,
      date: "2021.05.21",
      at: "23:25",
      content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
    },
    {
      id: 2,
      date: "2021.05.21",
      at: "23:25",
      content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
    },
    {
      id: 3,
      date: "2021.05.21",
      at: "23:25",
      content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
    },
    {
      id: 4,
      date: "2021.05.21",
      at: "23:25",
      content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
    },
    {
      id: 5,
      date: "2021.05.21",
      at: "23:25",
      content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
    },
    {
      id: 6,
      date: "2021.05.21",
      at: "23:25",
      content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
    },
    {
      id: 7,
      date: "2021.05.21",
      at: "23:25",
      content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
    },
    {
      id: 8,
      date: "2021.05.21",
      at: "23:25",
      content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
    }
  ]
}

export async function GET() {
  return NextResponse.json(data);
}