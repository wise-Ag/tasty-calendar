"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getImagePath } from "@/app/_utils/getImagePath";
import { MonthlyFoodType } from "@/app/_types";
import Link from "next/link";
import clsx from "clsx";
import MonthFoodSkeleton from "@/app/_components/MonthFoodSkeleton";

const MonthFood = ({ data }: { data: MonthlyFoodType[] }) => {
  const PAGE_SIZE = 8;

  const [foodList, setFoodList] = useState<MonthlyFoodType[][]>();
  const [page, setPage] = useState<number>(0);

  const [prevPage, setPrevPage] = useState<number>(0);
  const [direction, setDirection] = useState<"left" | "right" | "none">("none");

  const MAX_PAGE =
    data.length % PAGE_SIZE
      ? Math.floor(data.length / PAGE_SIZE)
      : data.length / PAGE_SIZE - 1;

  const getNextPage = () => {
    setPrevPage(page);
    page === MAX_PAGE ? setPage(0) : setPage(page + 1);
    setDirection("right");
  };

  const getPrevPage = () => {
    setPrevPage(page);
    page === 0 ? setPage(MAX_PAGE) : setPage(page - 1);
    setDirection("left");
  };

  useEffect(() => {
    const foodListData = [];
    for (let pageIndex = 0; pageIndex < MAX_PAGE + 1; pageIndex++) {
      foodListData.push(
        data.slice(pageIndex * PAGE_SIZE, pageIndex * PAGE_SIZE + PAGE_SIZE)
      );
    }
    setFoodList(foodListData);
  }, []);

  return (
    <div>
      <div className="justify-content-left text-3xl ml-30 mb-5">
        이달의 음식
      </div>
      <div className="flex flex-col justify-content-center items-center">
        <div className="flex w-full h-full justify-content-center items-center">
          {MAX_PAGE !== 0 && (
            <button
              className={"cursor-pointer m-10 w-10"}
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
          {!foodList ? (
            <MonthFoodSkeleton />
          ) : (
            <div className="flex-1 relative w-full lg:h-200 md:h-200 sm:h-900 overflow-hidden">
              {foodList?.map((list, i) => {
                let position = "-translate-x-full";

                if (page === i)
                  position =
                    direction === "left"
                      ? "animate-slide-left"
                      : "animate-slide-right";
                if (prevPage === i)
                  position =
                    direction === "left"
                      ? "animate-slideout-left"
                      : "animate-slideout-right";

                return (
                  <div
                    key={i}
                    className={clsx(
                      `absolute inset-0 grid sm:grid-cols-1 sm:grid-row-1 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 gap-15 `,
                      direction === "none" && page === i ? "" : position
                    )}
                  >
                    {list?.map((v) => {
                      if (!v) return;
                      const imgURL = v.rtnThumbFileNm[0]
                        ? getImagePath(v.rtnFileCours[0], v.rtnThumbFileNm[0])
                        : "/icons/no-food-img.png";
                      return (
                        <div key={v.cntntsNo[0]}>
                          <Link href={`/foodDetail/${v.cntntsNo}`}>
                            <div className="relative w-full aspect-[4/3]">
                              <Image
                                src={imgURL}
                                fill
                                sizes="w-100 h-auto"
                                alt={"식재료 이미지"}
                                className={
                                  "rounded-xl cursor-pointer sm:width-full"
                                }
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                              />
                            </div>
                          </Link>
                          <div className={"text-center p-3"}>{v.fdmtNm[0]}</div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          )}
          {MAX_PAGE !== 0 && (
            <button
              className={"cursor-pointer m-10 w-10"}
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
