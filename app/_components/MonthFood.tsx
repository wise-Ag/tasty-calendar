"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getImagePath } from "@/app/_utils/getImagePath";
import { MonthlyFoodType } from "@/app/_types";

const MonthFood = ({ data }: { data: MonthlyFoodType[] }) => {
  const [foodData, setFoodData] = useState<MonthlyFoodType[]>([]);
  const [page, setPage] = useState<number>(0);
  const PAGE_SIZE = 8;
  const MAX_PAGE = Math.floor(data.length / PAGE_SIZE);

  const getNextPage = () => {
    page === MAX_PAGE ? setPage(0) : setPage(page + 1);
  };

  const getPrevPage = () => {
    page === 0 ? setPage(MAX_PAGE) : setPage(page - 1);
  };

  useEffect(() => {
    setFoodData(data.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE));
  }, [page]);

  return (
    <div className={"flex justify-content-center items-center w-full"}>
      {MAX_PAGE !== 0 && (
        <button className={"cursor-pointer"} onClick={() => getPrevPage()}>
          <Image
            src={"/icons/left-arrow-icon.png"}
            width={50}
            height={50}
            alt={"왼쪽 화살표"}
          />
        </button>
      )}
      <div className={"grid grid-cols-4 grid-rows-2 gap-10 p-2"}>
        {foodData?.map((v) => {
          if (!v) return;
          const imgURL = getImagePath(v.rtnFileCours[0], v.rtnThumbFileNm[0]);
          return (
            <div key={v.cntntsNo[0]}>
              <Image
                src={imgURL}
                width={300}
                height={200}
                alt={"식재료 이미지"}
                className={"rounded-xl cursor-pointer"}
              />
              <div className={"text-center p-5"}>{v.fdmtNm[0]}</div>
            </div>
          );
        })}
      </div>
      {MAX_PAGE !== 0 && (
        <button className={"cursor-pointer"} onClick={() => getNextPage()}>
          <Image
            src={"/icons/right-arrow-icon.png"}
            width={50}
            height={50}
            alt={"오른쪽 화살표"}
          />
        </button>
      )}
    </div>
  );
};

export default MonthFood;
