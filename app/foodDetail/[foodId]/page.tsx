import { getFoodDetail } from "@/app/_api";
import FoodDetail from "@/app/_components/FoodDetail";

interface PageProps {
  params: { foodId: string };
}

const FoodDetailPage = async ({ params }: PageProps) => {
  const foodDetailData = await getFoodDetail(params.foodId);
  console.log("food", foodDetailData);

  return <>{foodDetailData &&<FoodDetail data={foodDetailData}/>}</>;
};

export default FoodDetailPage;
