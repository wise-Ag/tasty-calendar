import { getRecipe } from "@/app/_api";
import { getThisMonth } from "@/app/_utils/getThisMonth";
import Image from "next/image";
import { getImagePath } from "@/app/_utils/getImagePath";

const MonthRecipe = async () => {
  const thisMonth = getThisMonth();
  const data = await getRecipe(thisMonth);

  return (
    <div className={"grid grid-cols-3 grid-rows-2 gap-4 p-4"}>
      {data?.map((v) => {
        if (!v) return;
        const imgURL = getImagePath(v.rtnFileCours[0], v.rtnThumbFileNm[0]);
        return (
          <div key={v.cntntsNo[0]}>
            <Image
              src={imgURL}
              width={300}
              height={200}
              alt={"식재료 이미지"}
            />
            <div>{v.fdNm[0]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MonthRecipe;
