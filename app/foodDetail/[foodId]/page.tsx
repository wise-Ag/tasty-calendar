import { getFoodDetail } from "@/app/_api";
import FoodDetail from "@/app/_components/FoodDetail";

interface PageProps {
  params: Promise<{ foodId: string }>;
}

const FoodDetailPage = async ({ params }: PageProps) => {
  const { foodId } = await params;
  const foodDetailData = await getFoodDetail(foodId);

  return <>{foodDetailData && <FoodDetail data={foodDetailData} />}</>;
};

export default FoodDetailPage;
