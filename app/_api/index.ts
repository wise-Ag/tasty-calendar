//공공데이터 가공

import { MonthlyFood } from "@/app/_types";
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
    const yearData: string[] = [];
    yearArr.forEach((v: { year: Array<string> }) => {
      yearData.push(v.year[0]);
    });

    return yearData;
  } catch (err) {
    console.log("err", err);
  }
};

//요청 월 식재료, 레시피 가져오기
export const getMonthlyFood = async (month: number) => {
  try {
    const yearData = await getMFYear();
    if (yearData)
      yearData.forEach(async (v) => {
        const foodRes = await fetch(
          `${BASE_URL}/monthFdmtLst?apiKey=${process.env.MONTHLY_FOOD_DATA_KEY}&thisYear=${v}&thisMonth=${month}`
        );
      });
    const foodRes = await fetch(
      `${BASE_URL}/monthFdmtLst?apiKey=${process.env.MONTHLY_FOOD_DATA_KEY}`
    );
  } catch (err) {}
};

export const test = async () => {
  try {
    const yearData = await getMFYear();
    if (!yearData) return;
    const rawData = await Promise.all(
      yearData.map(async (v) => {
        const json = await fetch(
          `${BASE_URL}/monthFdmtLst?apiKey=${process.env.MONTHLY_FOOD_DATA_KEY}&thisYear=${v}&thisMonth=07`
        )
          .then(async (res) => await res.text())
          .then(async (xml) => await parseStringPromise(xml, {}));

        return json?.response.body[0]?.items[0]?.item;
      })
    );

    const data: MonthlyFood[] = rawData.flat();
    return data;

  } catch (err) {
    console.log("err", err);
  }
};

export const getRecipe = async () => {
  try {
    const json = await fetch(
      `${BASE_URL}/monthNewFdLst?apiKey=${process.env.MONTHLY_FOOD_DATA_KEY}&thisYear=2015&thisMonth=07`
    )
      .then(async (res) => await res.text())
      .then(async (xml) => await parseStringPromise(xml, {}));

    console.log(json);
  } catch (err) {
    console.error("err", err);
  }
};
