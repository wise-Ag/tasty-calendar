import { getMonthlyFood, getRecipe, getMonthlyFoodDetail } from "@/app/_api";

const MonthlyFood = async () => {
  //   const data = await getRecipe();
  const foodDetail = await getMonthlyFoodDetail();
  //   const recipe = await getRecipe();
  //   console.log(data);
  console.log("re", foodDetail);
  return (
    <div>
      data fetch test
      <div>data</div>;
    </div>
  );
};

export default MonthlyFood;
