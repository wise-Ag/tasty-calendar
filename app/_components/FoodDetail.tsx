import { FoodDetailType } from "@/app/_types";
import Image from "next/image";
import { getImagePath } from "@/app/_utils/getImagePath";

const prettySentence = (paragraph: string) => {
  return paragraph.replaceAll("■", "·");
};

const InfoContainer = ({ title, data }: { title: string; data: string }) => {
  return (
    <div className="flex flex-col whitespace-pre-line">
      <span className="flex margin-[10] font-[700] text-[27px] text-orange-700">
        <Image
          src={"/icons/star-point-icon.png"}
          width={50}
          height={50}
          alt="제목 아이콘"
        />
        {title}
      </span>
      <p>{prettySentence(data)}</p>
    </div>
  );
};

const FoodDetail = ({ data }: { data: FoodDetailType }) => {
  return (
    <div className="flex flex-col justify-content-center items-center p-10 pl-50 pr-50 font-[500] gap-[50]">
      <span className="text-[40px] font-[800]">{data.fdmtNm}</span>
      <div id="container" className="flex gap-[50px] items-center">
        <div className="width-[70px] height-[70px]">
          <Image
            src={getImagePath(data.rtnFileCours[0], data.rtnThumbFileNm[0])}
            width={500}
            height={300}
            alt={"식재료 이미지"}
            className={"rounded-xl sm:width-full "}
          />
        </div>
        <div>
          <div className="whitespace-pre-line">
            {prettySentence(data.ntkMthDtl[0])}
          </div>
          <br />
          <p className="whitespace-pre-line">{data.cstdyMthDtl}</p>
        </div>
      </div>
      <div className="flex flex-col gap-[50]">
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
