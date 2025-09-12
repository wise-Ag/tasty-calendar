import { getRecipe, test } from "@/app/_api";
const MonthlyFood = async () => {
  const data = await test();
  //   const recipe = await getRecipe();
  //   console.log(data);
  console.log("re", data);
  return (
    <div>
      data fetch test
      <div>data</div>;
    </div>
  );
};

export default MonthlyFood;
