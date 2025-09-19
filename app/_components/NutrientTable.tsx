import { RecipeDetailType } from "@/app/_types";

const NutrientTable = ({ data }: { data: RecipeDetailType }) => {
  const tools = data.ckngmhrlsUntInfo[0].split(",");
  const nutrients: { label: string; rate: string }[] = [
    { label: "에너지(kcal)", rate: `${data.energyQy[0]}` },
    { label: "탄수화물(g)", rate: `${data.crbQy[0]}` },
    { label: "지질(g)", rate: `${data.ntrfsQy[0]}` },
    { label: "단백질(g)", rate: `${data.protQy[0]}` },
    { label: "식이섬유(g)", rate: `${data.edblfibrQy[0]}` },
    { label: "비타민A(ug RE)", rate: `${data.vtmaQy[0]}` },
    { label: "비타민E(mg)", rate: `${data.vteQy[0]}` },
    { label: "비타민C(mg)", rate: `${data.vtcQy[0]}` },
    { label: "티아민(mg)", rate: `${data.thiaQy[0]}` },
    { label: "리보플라빈(mg)", rate: `${data.niboplaQy[0]}` },
    { label: "칼슘(mg)", rate: `${data.clciQy[0]}` },
    { label: "나트륨(mg)", rate: `${data.naQy[0]}` },
    { label: "칼륨(mg)", rate: `${data.ptssQy[0]}` },
    { label: "철(mg)", rate: `${data.irnQy[0]}` }
  ];

  return (
    <div>
      <h2 className="text-600 font-medium mb-3">조리도구</h2>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, i) => (
          <span
            key={i}
            className="text-sm px-3 py-1 bg-blue-50 text-blue-700 rounded-full"
          >
            {tool}
          </span>
        ))}
      </div>

      <h3 className="text-md font-medium mt-6">영양정보 (1인분 기준)</h3>
      <table className="w-full mt-2 text-[18px]">
        <tbody>
          {nutrients.map((v, i) => (
            <tr className="border-t" key={i}>
              <td className="py-2">{v.label}</td>
              <td className="text-right font-medium">{v.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NutrientTable;
