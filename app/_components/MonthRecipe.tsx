"use client";
import { useEffect, useState } from "react";
import { RecipeType } from "@/app/_types";
import Image from "next/image";
import { getImagePath } from "@/app/_utils/getImagePath";
import Link from "next/link";

const MonthRecipe = ({ data }: { data: RecipeType[] }) => {
  const [recipeData, setRecipeData] = useState<RecipeType[]>();
  const [page, setPage] = useState<number>(0);
  const PAGE_SIZE = 9;
  const MAX_PAGE = Math.floor(data.length / PAGE_SIZE);

  const getMoreData = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    setRecipeData(data.slice(0, page * PAGE_SIZE + PAGE_SIZE));
  }, [page]);

  return (
    <div className="bg-orange-100">
      <div className="flex text-3xl pl-10 pt-20">이달의 레시피</div>
      <div className="flex flex-col justify-content-center items-center">
        <div className={"grid grid-cols-3 grid-rows-2 gap-15 p-4 "}>
          {recipeData?.map((v) => {
            if (!v) return;
            const imgURL = getImagePath(v.rtnFileCours[0], v.rtnThumbFileNm[0]);
            return (
              <div
                key={v.cntntsNo[0]}
                className="flex flex-col justify-content-center items-center"
              >
                <Link href={`/recipeDetail/${v.cntntsNo}`}>
                  <Image
                    src={imgURL}
                    width={400}
                    height={200}
                    alt={"식재료 이미지"}
                    className="rounded-xl cursor-pointer"
                  />
                </Link>
                <div className="pt-3">{v.fdNm[0]}</div>
              </div>
            );
          })}
        </div>
        {MAX_PAGE !== page && (
          <button
            className="cursor-pointer w-60 rounded-xl bg-orange-300 p-2 pr-5 pl-5 text-white font-size-20px"
            onClick={() => getMoreData()}
          >
            더보기
          </button>
        )}
      </div>
    </div>
  );
};

export default MonthRecipe;
