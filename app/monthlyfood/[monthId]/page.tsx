import { getMFYear } from "@/app/_api";

const MonthlyFood = async () => {
  const data = await getMFYear();
  console.log(data);
  return (
    <div>
      data fetch test
      <div>data</div>;
    </div>
  );
};

export default MonthlyFood;
