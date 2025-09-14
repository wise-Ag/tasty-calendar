import { RecipeDetailType } from "@/app/_types";

const RecipeDetail = ({ data }: { data: RecipeDetailType }) => {
  return <div>{data.fdNm}</div>;
};

export default RecipeDetail;
