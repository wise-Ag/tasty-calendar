import { RecipeDetailType } from "@/app/_types";
import { getNImagePath } from "@/app/_utils/getImagePath";
import Image from "next/image";

const IngredientTable = ({ data }: { data: RecipeDetailType }) => {
  const rareData = data.matrlInfo[0].split("▶");
  rareData.shift();

  const groupIng = rareData.filter(Boolean).map((v) => v.split(":"));
  const Ing = groupIng.map((v) =>
    v.map((v: string, i: number) => {
      if (i == 0) return [v];
      return v
        .replace(/[\r\n]+/g, "")
        .split(",")
        .map((v) => v.trim());
    })
  );
  const ingredient: { category: string; items: string[] }[] = [];
  Ing.forEach((v) => {
    ingredient.push({ category: v[0][0], items: v[1] });
  });

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="lg:text-[28px] md:text-[25px] sm:text-[20px] font-500 mb-3">
          재료
        </h2>
        <Image
          src={
            getNImagePath(data.rtnFileCours[0], data.rtnThumbFileNm[0], 1) ??
            "/icons/no-recipe-img.png"
          }
          width={200}
          height={200}
          alt="레시피 완성사진"
          className="rounded-3xl"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        />
      </div>

      {ingredient.map((group, idx) => (
        <div key={idx} className="mb-4">
          <p className="font-semibold text-slate-700 mb-1">{group.category}</p>
          <ul className="space-y-1">
            {group.items.map((item, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-slate-50 p-2 rounded-md"
              >
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default IngredientTable;
