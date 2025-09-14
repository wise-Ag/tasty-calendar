import { getMonthlyFood, getRecipe } from "@/app/_api";
import MonthFood from "@/app/_components/MonthFood";
import MonthRecipe from "@/app/_components/MonthRecipe";

interface PageProps {
  params: { monthId: string };
}

const MonthlyFood = async ({ params }: PageProps) => {
  const monthId = params.monthId.padStart(2, "0");
  const foodData = await getMonthlyFood(monthId);
  const recipeData = await getRecipe(monthId);

  return (
    <div>
      {foodData && <MonthFood data={foodData} />}
      {recipeData && <MonthRecipe data={recipeData} />}
    </div>
  );
};

export default MonthlyFood;
