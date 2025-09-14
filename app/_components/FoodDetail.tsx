import { FoodDetailType } from "@/app/_types";
import Image from "next/image";
import { getImagePath } from "@/app/_utils/getImagePath";

const FoodDetail = ({ data }: { data: FoodDetailType }) => {
  return (
    <div>
      <span>{data.fdmtNm}</span>
      <Image
        src={getImagePath(data.rtnFileCours[0], data.rtnThumbFileNm[0])}
        width={400}
        height={300}
        alt={"식재료 이미지"}
        className={"rounded-xl cursor-pointer sm:width-full"}
      />
      <p>{data.etcInfoDtl}</p>
      <p>{data.cnsmpqyDtl}</p>
      <p>{data.cstdyMthDtl}</p>
    </div>
  );
};

export default FoodDetail;
