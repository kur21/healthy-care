import { RecommendItem } from "@/components";
import { recommendButtons } from "@/constants";

const ListRecommended = () => {
  return (
    <div className="pt-14 grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-md:gap-4 max-md:pt-4">
      {recommendButtons.map((rcm) => (
        <RecommendItem key={rcm.id} data={rcm} />
      ))}
    </div>
  );
};
export default ListRecommended;
