import { getMonthlyFood, getRecipe } from "@/app/_api";
import MonthFood from "@/app/_components/MonthFood";
import MonthRecipe from "@/app/_components/MonthRecipe";

interface PageProps {
  params: Promise<{ monthId: string }>;
}

const MonthlyFoodPage = async ({ params }: PageProps) => {
  const monthIdParam = await params;
  const monthId = monthIdParam.monthId.padStart(2, "0");
  const foodData = await getMonthlyFood(monthId);
  const recipeData = await getRecipe(monthId);

  return (
    <div>
      {foodData && <MonthFood data={foodData} />}
      {recipeData && <MonthRecipe data={recipeData} />}
    </div>
  );
};

export default MonthlyFoodPage;
