//공공데이터 가공

import { MonthlyFoodType, RecipeType } from "@/app/_types";
import { parseStringPromise } from "xml2js";
// let yearData: string[] = [];
const BASE_URL = process.env.MONTHLY_FOOD_DATA_URL;

//이달의 음식 등록된 년도 가져오기
export const getMFYear = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/monthFdYearLst?apiKey=${process.env.MONTHLY_FOOD_DATA_KEY}`,
      { method: "GET", headers: { Accept: "application/xml" } }
    );
    const xml = await res.text();
    const json = await parseStringPromise(xml, {});

    const yearArr = json.response.body[0].items[0].item;
    const yearData: string[] = yearArr.map(
      (v: { year: string[] }) => v.year[0]
    );

    return yearData;
  } catch (err) {
    console.log("err", err);
  }
};

//요청 월 식재료, 레시피 가져오기
export const getMonthlyFood = async (month: string | number) => {
  try {
    const yearData = await getMFYear();
    if (!yearData) return;
    const rawData = await Promise.all(
      yearData.map(async (v) => {
        const json = await fetch(
          `${BASE_URL}/monthFdmtLst?apiKey=${process.env.MONTHLY_FOOD_DATA_KEY}&thisYear=${v}&thisMonth=${month}`
        )
          .then(async (res) => await res.text())
          .then(async (xml) => await parseStringPromise(xml, {}));

        return json?.response.body[0]?.items[0]?.item;
      })
    );

    const data: MonthlyFoodType[] = rawData.flat();
    return data;
  } catch (err) {
    console.log("err", err);
    return null;
  }
};

export const getRecipe = async (month: string) => {
  try {
    const yearData = await getMFYear();
    if (!yearData) return;
    const rawData = await Promise.all(
      yearData.map(async (year) => {
        const json = await fetch(
          `${BASE_URL}/monthNewFdLst?apiKey=${process.env.MONTHLY_FOOD_DATA_KEY}&thisYear=${year}&thisMonth=${month}`
        )
          .then(async (res) => await res.text())
          .then(async (xml) => await parseStringPromise(xml, {}));

        return json?.response.body[0]?.items[0]?.item;
      })
    );

    const data:RecipeType[] = rawData.flat();

    return data;
  } catch (err) {
    console.error("err", err);
  }
};

export const getMonthlyFoodDetail = async () => {
  try {
    const json = await fetch(
      `${BASE_URL}/monthFdmtDtl?apiKey=${process.env.MONTHLY_FOOD_DATA_KEY}&cntntsNo=98818`
    )
      .then(async (res) => await res.text())
      .then(async (xml) => await parseStringPromise(xml, {}));
    return json?.response;
  } catch (err) {
    console.error("err", err);
  }
};
