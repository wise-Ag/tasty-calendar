import ThisMonthFood from "@/app/_components/ThisMonthFood";
import { getMFYear } from "@/app/_api";

export default async function Home() {
  const data = await getMFYear();
  return (
    <div>
      <ThisMonthFood />
    </div>
  );
}
