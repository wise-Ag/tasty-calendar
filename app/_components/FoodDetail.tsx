import { FoodDetailType } from "@/app/_types";
import Image from "next/image";
import { getImagePath } from "@/app/_utils/getImagePath";

const prettySentence = (paragraph: string) => {
  return paragraph.replaceAll("■", "·");
};

const InfoContainer = ({ title, data }: { title: string; data: string }) => {
  return (
    <div className="flex flex-col whitespace-pre-line gap-3">
      <span className="flex margin-[10] font-[700] text-[27px] text-slate-800">
        {title}
      </span>
      <p className="text-slate-700">{prettySentence(data)}</p>
    </div>
  );
};

const FoodDetail = ({ data }: { data: FoodDetailType }) => {
  const imgURL = data.rtnThumbFileNm[0]
    ? getImagePath(data.rtnFileCours[0], data.rtnThumbFileNm[0])
    : "/icons/no-food-img.png";

  return (
    <div className="flex flex-col justify-content-center items-center p-10 lg:pl-50 lg:pr-50 md:pl-20 md:pr-20 font-[500] gap-[50] break-keep leading-[1.8]">
      <div
        id="container"
        className="flex lg:flex-row md:flex-col sm:flex-col gap-[50px] items-center "
      >
        <div className="w-full h-full shadow-lg sm:w-90">
          <Image
            src={imgURL}
            width={500}
            height={300}
            alt={"식재료 이미지"}
            className={"rounded-xl sm:w-full object-cover"}
          />
        </div>
        <div>
          <div className="text-[40px] font-[800] mb-[20]">{data.fdmtNm}</div>
          <p className="whitespace-pre-line">{data.cstdyMthDtl}</p>
        </div>
      </div>

      <div className="flex flex-col gap-[50]">
        <hr className="border-0 h-px bg-gradient-to-r from-transparent via-black/75 to-transparent mt-10" />
        <InfoContainer title="섭취정보" data={data.ntkMthDtl[0]} />
        <InfoContainer title="영양성분 & 효능" data={data.ntrIrdntEfcyDtl[0]} />
        <InfoContainer title="특징 & 구입요령" data={data.prchCheatDtl[0]} />
        <InfoContainer title="기타 정보" data={data.etcInfoDtl[0]} />
        <InfoContainer title="유래" data={data.ctvtIndcDtl[0]} />
        <InfoContainer title="관련 연구 정보" data={data.rltRsrchInfoDtl[0]} />
        <InfoContainer title="소비량" data={data.cnsmpqyDtl[0]} />
      </div>
    </div>
  );
};

export default FoodDetail;
