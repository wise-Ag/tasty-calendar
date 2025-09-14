import MonthFood from "@/app/_components/MonthFood";
import MonthRecipe from "@/app/_components/MonthRecipe";
import { getMonthlyFood } from "@/app/_api";
import { getThisMonth } from "@/app/_utils/getThisMonth";
import Image from "next/image";
import { getImagePath } from "@/app/_utils/getImagePath";

export default async function Home() {
  const thisMonth = getThisMonth();
  const foodData = await getMonthlyFood(thisMonth);
  return (
    <div>
      <MonthFood data={foodData} />
      <MonthRecipe />
    </div>
  );
}
