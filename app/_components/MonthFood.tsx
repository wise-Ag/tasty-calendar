"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getImagePath } from "@/app/_utils/getImagePath";
import { MonthlyFoodType } from "@/app/_types";
import Link from "next/link";

const MonthFood = ({ data }: { data: MonthlyFoodType[] }) => {
  const PAGE_SIZE = 8;
  const [foodData, setFoodData] = useState<MonthlyFoodType[]>(
    data.slice(0, PAGE_SIZE)
  );
  const [page, setPage] = useState<number>(0);

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
    <div>
      <div className="justify-content-left text-3xl ml-30 mb-5">
        이달의 음식
      </div>
      <div className="flex flex-col justify-content-center items-center">
        <div className="flex  justify-content-center items-center">
          {MAX_PAGE !== 0 && (
            <button
              className={"cursor-pointer m-10"}
              onClick={() => getPrevPage()}
            >
              <Image
                src={"/icons/left-arrow-icon.png"}
                width={50}
                height={50}
                alt={"왼쪽 화살표"}
              />
            </button>
          )}
          <div
            className={
              "grid sm:grid-cols-1 sm:grid-row-1 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 gap-15 "
            }
          >
            {foodData?.map((v) => {
              if (!v) return;
              const imgURL = getImagePath(
                v.rtnFileCours[0],
                v.rtnThumbFileNm[0]
              );
              return (
                <div key={v.cntntsNo[0]}>
                  <div className="relative w-70 h-60">
                    <Link href={`/foodDetail/${v.cntntsNo}`}>
                      <Image
                        src={imgURL}
                        fill
                        alt={"식재료 이미지"}
                        className={"rounded-xl cursor-pointer sm:width-full"}
                      />
                    </Link>
                  </div>
                  <div className={"text-center p-3"}>{v.fdmtNm[0]}</div>
                </div>
              );
            })}
          </div>
          {MAX_PAGE !== 0 && (
            <button
              className={"cursor-pointer m-10"}
              onClick={() => getNextPage()}
            >
              <Image
                src={"/icons/right-arrow-icon.png"}
                width={50}
                height={50}
                alt={"오른쪽 화살표"}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MonthFood;
