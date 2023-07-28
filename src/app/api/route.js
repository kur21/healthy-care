import { NextResponse } from "next/server";
const data = {
  achievementRate: {
    percentage: 75,
    date: "05/21",
  },
  mealHistory: [
    {
      id: 1,
      type: "morning",
      date: "05.21",
      image: "/assets/images/meal/meal-02.jpg",
    },
    {
      id: 2,
      type: "lunch",
      date: "05.21",
      image: "/assets/images/meal/meal-03.jpg",
    },
    {
      id: 3,
      type: "dinner",
      date: "05.21",
      image: "/assets/images/meal/meal-01.jpg",
    },
    {
      id: 4,
      type: "snack",
      date: "05.21",
      image: "/assets/images/meal/meal-05.jpg",
    },
    {
      id: 5,
      type: "morning",
      date: "05.20",
      image: "/assets/images/meal/meal-02.jpg",
    },
    {
      id: 6,
      type: "lunch",
      date: "05.20",
      image: "/assets/images/meal/meal-06.jpg",
    },
    {
      id: 7,
      type: "dinner",
      date: "05.20",
      image: "/assets/images/meal/meal-07.jpg",
    },
    {
      id: 8,
      type: "snack",
      date: "05.20",
      image: "/assets/images/meal/meal-08.jpg",
    },
  ],
  dataYear: {
    labels: [
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
    ],
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
  },
};

export async function GET() {
  return NextResponse.json(data);
}
