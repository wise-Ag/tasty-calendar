import IngredientTable from "@/app/_components/IngredientTable";
import NutrientTable from "@/app/_components/NutrientTable";
import RecipeMethod from "@/app/_components/RecipeMethod";
import { RecipeDetailType } from "@/app/_types";
import { getImagePath, getNImagePath } from "@/app/_utils/getImagePath";
import Image from "next/image";

const RecipeDetail = ({ data }: { data: RecipeDetailType }) => {
  return (
    <div className="md:col-span-2 p-6 flex flex-col gap-4 lg:pl-20 lg:pr-20">
      <header className="flex flex-col items-center gap-4">
        <Image
          src={getImagePath(data.rtnFileCours[0], data.rtnThumbFileNm[0])}
          width={400}
          height={300}
          alt="레시피 완성사진"
          className="rounded-3xl"
        />
        <div>
          <h1 className="text-3xl font-semibold">{data.fdNm[0]}</h1>

          <div className="mt-4 flex flex-wrap gap-3 items-center text-sm text-slate-600">
            <span className="inline-flex items-center gap-2 py-1 px-2 rounded-full bg-slate-100">
              🍽 {data.phphmntNm[0]}
            </span>
          </div>
        </div>
      </header>
      <section className="grid md:grid-cols-2 gap-6 mt-2">
        <IngredientTable data={data} />
        <NutrientTable data={data} />
      </section>
      <RecipeMethod data={data} />
    </div>
  );
};

export default RecipeDetail;
