"use client";
import { RecipeType } from "@/app/_types";
import Link from "next/link";

const IntroBanner = ({ recipeData }: { recipeData: RecipeType[] }) => {
  const date = new Date();
  const thisMonth = date.getMonth() + 1;

  // 랜덤 레시피
  const randomIndex = Math.floor(Math.random() * recipeData.length);
  const randomRecipe = recipeData[randomIndex].cntntsNo[0];

  return (
    <section className="mx-auto max-w-8xl px-5 pt-2 lg:pb-10 md:pb-10 sm:pb-5">
      <div className="grid md:grid-cols-2 gap-6 items-center rounded-3xl bg-white shadow-md lg:p-7 sm:p-5">
        <div>
          <h1 className="lg:text-5xl md:text-3xl sm:text-2xl font-extrabold leading-snug text-stone-800">
            {thisMonth}월의 <span className="text-orange-500">제철 음식</span>
            은?
          </h1>
          <p className="mt-4 text-stone-600 lg:text-2xl sm:text-lg">
            신선한 제철 재료로 더 맛있고 건강한 한 끼를 준비해보세요.
          </p>

          <Link
            suppressHydrationWarning
            href={`/recipeDetail/${randomRecipe}`}
            className="lg:text-2xl sm:text-lg mt-6 inline-block rounded-2xl bg-orange-400 px-5 py-3 font-semibold text-white shadow hover:bg-orange-500 transition"
          >
            추천 레시피 보기
          </Link>
        </div>

        {/* 오른쪽 일러스트 느낌의 카드 */}
        <div className="flex items-center justify-center gap-4 md:gap-6"></div>
      </div>
    </section>
  );
};

export default IntroBanner;
