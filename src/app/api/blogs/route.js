import { NextResponse } from "next/server";
const data = [
  {
    id: 1,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリットット",
    createAt: "2021.05.17 23:25",
    url: "#",
    thumb: "/assets/images/blog/thumb-01.jpg",
    tags: [
      {
        id: 1,
        tag: "#魚料理",
        url: "#",
      },
      {
        id: 2,
        tag: "#和食",
        url: "#",
      },
      {
        id: 3,
        tag: "#DHA",
        url: "#",
      },
    ],
  },
  {
    id: 2,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    createAt: "2021.05.17 23:25",
    url: "#",
    thumb: "/assets/images/blog/thumb-02.jpg",
    tags: [
      {
        id: 1,
        tag: "#魚料理",
        url: "#",
      },
      {
        id: 2,
        tag: "#和食",
        url: "#",
      },
      {
        id: 3,
        tag: "#DHA",
        url: "#",
      },
    ],
  },
  {
    id: 3,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    createAt: "2021.05.17 23:25",
    url: "#",
    thumb: "/assets/images/blog/thumb-03.jpg",
    tags: [
      {
        id: 1,
        tag: "#魚料理",
        url: "#",
      },
      {
        id: 2,
        tag: "#和食",
        url: "#",
      },
      {
        id: 3,
        tag: "#DHA",
        url: "#",
      },
    ],
  },
  {
    id: 4,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    createAt: "2021.05.17 23:25",
    url: "#",
    thumb: "/assets/images/blog/thumb-04.jpg",
    tags: [
      {
        id: 1,
        tag: "#魚料理",
        url: "#",
      },
      {
        id: 2,
        tag: "#和食",
        url: "#",
      },
      {
        id: 3,
        tag: "#DHA",
        url: "#",
      },
    ],
  },
  {
    id: 5,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    createAt: "2021.05.17 23:25",
    url: "#",
    thumb: "/assets/images/blog/thumb-05.jpg",
    tags: [
      {
        id: 1,
        tag: "#魚料理",
        url: "#",
      },
      {
        id: 2,
        tag: "#和食",
        url: "#",
      },
      {
        id: 3,
        tag: "#DHA",
        url: "#",
      },
    ],
  },
  {
    id: 6,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    createAt: "2021.05.17 23:25",
    url: "#",
    thumb: "/assets/images/blog/thumb-06.jpg",
    tags: [
      {
        id: 1,
        tag: "#魚料理",
        url: "#",
      },
      {
        id: 2,
        tag: "#和食",
        url: "#",
      },
      {
        id: 3,
        tag: "#DHA",
        url: "#",
      },
    ],
  },
  {
    id: 7,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    createAt: "2021.05.17 23:25",
    url: "#",
    thumb: "/assets/images/blog/thumb-07.jpg",
    tags: [
      {
        id: 1,
        tag: "#魚料理",
        url: "#",
      },
      {
        id: 2,
        tag: "#和食",
        url: "#",
      },
      {
        id: 3,
        tag: "#DHA",
        url: "#",
      },
    ],
  },
  {
    id: 8,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    createAt: "2021.05.17 23:25",
    url: "#",
    thumb: "/assets/images/blog/thumb-08.jpg",
    tags: [
      {
        id: 1,
        tag: "#魚料理",
        url: "#",
      },
      {
        id: 2,
        tag: "#和食",
        url: "#",
      },
      {
        id: 3,
        tag: "#DHA",
        url: "#",
      },
    ],
  },
];

export async function GET() {
  return NextResponse.json(data);
}
