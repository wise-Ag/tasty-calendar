import { RecipeDetailType } from "@/app/_types";

interface IngredientType {
  category: string;
  items: string[];
}
const IngredientTable = ({ data }: { data: RecipeDetailType }) => {
  const groupIng = data.matrlInfo[0]
    .split("▶")
    .filter(Boolean)
    .map((v) => v.split(":"));
  const Ing = groupIng.map((v) =>
    v.map((v, i) => {
      if (i == 0) return v;
      return v
        .replace(/[\r\n]+/g, "")
        .split(",")
        .map((v) => v.trim());
    })
  );
  const ingredient: { category: string; items: string[] }[] = [];
  Ing.forEach((v) => {
    ingredient.push({ category: v[0], items: v[1] });
  });

  return (
    <div>
      <h2 className="text-l font-500 mb-3">재료</h2>
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
