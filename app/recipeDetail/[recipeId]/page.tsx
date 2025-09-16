import { getRecipeDetail } from "@/app/_api";
import RecipeDetail from "@/app/_components/RecipeDetail";

interface PageProps {
  params: { recipeId: string };
}

const RecipeDetailPage = async ({ params }: PageProps) => {
  const recipeDetailData = await getRecipeDetail(params.recipeId);

  // return <>{recipeDetailData && <RecipeDetail data={recipeDetailData} />}</>;
};

export default RecipeDetailPage;
