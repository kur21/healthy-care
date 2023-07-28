import dynamic from "next/dynamic";
import { getHomeData } from "@/core/services";

const HomePage = dynamic(() => import("@/views/HomePage"));

export default async function Home() {
  const data = await getHomeData();

  return (
    <section className="home_page">
      <HomePage data={data} />
    </section>
  );
}
