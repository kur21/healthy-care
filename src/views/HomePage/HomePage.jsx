import {
  AchievementRate,
  WeightChart,
  MealHistory,
} from "./sections";

const HomePage = ({ data }) => {
  const { achievementRate, mealHistory, dataYear } = data;
  return (
    <>
      <div className="flex max-h-[320px] max-[860px]:flex-col max-[860px]:max-h-full">
        <AchievementRate data={achievementRate} />
        <WeightChart data={dataYear} />
      </div>

      <div className="wrapper">
        <MealHistory data={mealHistory} />
      </div>
    </>
  );
};
export default HomePage;
