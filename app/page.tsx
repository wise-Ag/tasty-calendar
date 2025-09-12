import ThisMonthFood from "@/app/_components/ThisMonthFood";
import { getMonthlyFood } from "@/app/_api";
import { getThisMonth } from "@/app/_utils/getThisMonth";
import Image from "next/image";
import { getImagePath } from "@/app/_utils/getImagePath";

export default async function Home() {
  const thisMonth = getThisMonth();
  const data = await getMonthlyFood(thisMonth);
  console.log(data);
  return (
    <div>
      {data?.map((v) => {
        if (!v) return;
        const imgURL = getImagePath(v.rtnFileCours[0], v.rtnThumbFileNm[0]);
        return (
          <div className={"flex"} key={v.cntntsNo}>
            <div>{v.fdmtNm[0]}</div>
            <Image
              src={`${process.env.MONTHLY_FOOD_IMG_URL}/${imgURL}`}
              width={100}
              height={100}
              alt={"식재료 이미지"}
            />
          </div>
        );
      })}
      <ThisMonthFood />
    </div>
  );
}
