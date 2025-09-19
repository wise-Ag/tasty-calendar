import IngredientTable from "@/app/_components/IngredientTable";
import NutrientTable from "@/app/_components/NutrientTable";
import { RecipeDetailType } from "@/app/_types";
import { getImagePath, getNImagePath } from "@/app/_utils/getImagePath";
import Image from "next/image";

const RecipeDetail = ({ data }: { data: RecipeDetailType }) => {
  const recipeSequence = data.ckngMthInfo[0].split(/\d+\./).filter(Boolean);

  return (
    <div className="md:col-span-2 p-6 flex flex-col gap-4 lg:pl-20 lg:pr-20">
      <header className="flex flex-col items-center gap-4">
        <Image
          src={getImagePath(data.rtnFileCours[0], data.rtnThumbFileNm[0])}
          width={300}
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
        {/* <Image
          src={getNImagePath(data.rtnFileCours[0], data.rtnThumbFileNm[0], 1)}
          width={500}
          height={500}
          alt="레시피 완성사진"
          className="rounded-3xl"
        /> */}
        <NutrientTable data={data} />
      </section>
      {recipeSequence.map((v, i) => {
        return (
          <div key={i}>
            {i + 1}. {v}
            {i === recipeSequence.length - 1 ? (
              <Image
                src={getImagePath(data.rtnFileCours[0], data.rtnThumbFileNm[0])}
                width={500}
                height={500}
                alt="레시피 완성사진"
                className="rounded-3xl"
              />
            ) : (
              <Image
                src={getNImagePath(
                  data.rtnFileCours[0],
                  data.rtnThumbFileNm[0],
                  i + 2
                )}
                width={500}
                height={500}
                alt="레시피 완성사진"
                className="rounded-3xl"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RecipeDetail;
