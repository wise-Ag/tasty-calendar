import MonthFood from "@/app/_components/MonthFood";
import MonthRecipe from "@/app/_components/MonthRecipe";
import { getMonthlyFood, getRecipe } from "@/app/_api";
import { getThisMonth } from "@/app/_utils/getThisMonth";
import IntroBanner from "@/app/_components/IntroBanner";

export default async function Home() {
  const thisMonth = getThisMonth();
  const foodData = await getMonthlyFood(thisMonth);
  const recipeData = await getRecipe(thisMonth);

  return (
    <div>
      {recipeData && <IntroBanner recipeData={recipeData} />}
      {foodData && <MonthFood data={foodData} />}
      {recipeData && <MonthRecipe data={recipeData} />}
    </div>
  );
}
