import { RecipeDetailType } from "@/app/_types";
import { getImagePath, getNImagePath } from "@/app/_utils/getImagePath";
import Image from "next/image";

const RecipeMethod = ({ data }: { data: RecipeDetailType }) => {
  const recipeSequence = data.ckngMthInfo[0].split(/\d+\.\s/).filter(Boolean);

  return (
    <section>
      <h2 className="text-xl font-medium">만드는 법</h2>
      <ol className="mt-4 space-y-6">
        {recipeSequence.map((v, i) => {
          return (
            <li key={i} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-400 text-white flex items-center justify-center font-semibold">
                {i + 1}
              </div>
              <div className="flex-1">
                <p className="text-slate-700 mb-2">{v}</p>
              </div>
              {i === recipeSequence.length - 1 ? (
                <Image
                  src={getImagePath(
                    data.rtnFileCours[0],
                    data.rtnThumbFileNm[0]
                  )}
                  width={500}
                  height={500}
                  alt="레시피 완성사진"
                  className="rounded-3xl"
                  placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                />
              ) : (
                <Image
                  src={
                    getNImagePath(
                      data.rtnFileCours[0],
                      data.rtnThumbFileNm[0],
                      i + 2
                    ) ?? "/icons/no-recipe-img.png"
                  }
                  width={500}
                  height={500}
                  alt="레시피 완성사진"
                  className="rounded-3xl"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                />
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default RecipeMethod;
