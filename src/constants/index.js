import { PAGE_NAVIGATION } from "@/configs";

export const mainNavigation = [
  {
    id: 1,
    name: "自分の記録",
    url: PAGE_NAVIGATION.MY_RECORD,
    icon: "/assets/icons/memo.svg",
    alt: "record icon",
  },
  {
    id: 2,
    name: "チャレンジ",
    url: "#",
    icon: "/assets/icons/award.svg",
    alt: "challenge icon",
  },
  {
    id: 3,
    name: "お知らせ",
    url: "#",
    icon: "/assets/icons/info.svg",
    alt: "info icon",
  },
];

export const dropdownNavigation = [
  {
    id: 1,
    name: "自分の記録",
    url: PAGE_NAVIGATION.MY_RECORD,
  },
  {
    id: 2,
    name: "体重グラフ",
    url: "#",
  },
  {
    id: 3,
    name: "目標",
    url: "#",
  },
  {
    id: 4,
    name: "選択中のコース",
    url: "#",
  },
  {
    id: 5,
    name: "コラム一覧",
    url: PAGE_NAVIGATION.BLOGS,
  },
  {
    id: 6,
    name: "設定",
    url: "#",
  },
];

export const footerNavigation = [
  {
    id: 1,
    name: "会員登録",
    url: "#",
  },
  {
    id: 2,
    name: "運営会社",
    url: "#",
  },
  {
    id: 3,
    name: "利用規約",
    url: "#",
  },
  {
    id: 4,
    name: "個人情報の取扱について",
    url: "#",
  },
  {
    id: 5,
    name: "特定商取引法に基づく表記",
    url: "#",
  },
  {
    id: 6,
    name: "お問い合わせ",
    url: "#",
  },
];

export const mealHistoryButtons = [
  {
    id: 1,
    name: "Morning",
    value: "morning",
    icon: "/assets/icons/knife.svg",
  },
  {
    id: 2,
    name: "Lunch",
    value: "lunch",
    icon: "/assets/icons/knife.svg",
  },
  {
    id: 3,
    name: "Dinner",
    value: "dinner",
    icon: "/assets/icons/knife.svg",
  },
  {
    id: 4,
    name: "Snack",
    value: "snack",
    icon: "/assets/icons/cup.svg",
  },
];

export const recordButtons = [
  {
    id: 1,
    title: 'body record',
    desc: '自分のカラダの記録',
    image: "/assets/images/record/MyRecommend-1.jpg",
    sectionId: "body_record"
  },
  {
    id: 2,
    title: 'my exercise',
    desc: '自分の運動の記録',
    image: "/assets/images/record/MyRecommend-2.jpg",
    sectionId: "my_exercise"
  },
  {
    id: 3,
    title: 'my diary',
    desc: '自分の日記',
    image: "/assets/images/record/MyRecommend-3.jpg",
    sectionId: "my_diary"
  },
]

export const recommendButtons = [
  {
    id: 1,
    title: 'recommended column',
    desc: 'オススメ',
    url: "#"
  },
  {
    id: 2,
    title: 'recommended diet',
    desc: 'ダイエット',
    url: "#"
  },
  {
    id: 3,
    title: 'recommended beauty',
    desc: '美容',
    url: "#"
  },
  {
    id: 4,
    title: 'recommended health',
    desc: '健康',
    url: "#"
  },
]