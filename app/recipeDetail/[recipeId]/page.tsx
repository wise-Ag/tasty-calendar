import { getRecipeDetail } from "@/app/_api";
import RecipeDetail from "@/app/_components/RecipeDetail";

interface PageProps {
  params: Promise<{ recipeId: string }>;
}

const RecipeDetailPage = async ({ params }: PageProps) => {
  const { recipeId } = await params;
  const recipeDetailData = await getRecipeDetail(recipeId);

  // return <>{recipeDetailData && <RecipeDetail data={recipeDetailData} />}</>;
};

export default RecipeDetailPage;
