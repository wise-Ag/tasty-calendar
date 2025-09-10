//공공데이터 가공

import { parseStringPromise } from "xml2js";
let yearData: string[] = [];
const BASE_URL = process.env.MONTHLY_FOOD_DATA_URL;

export const getMFYear = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/monthFdYearLst?apiKey=${process.env.MONTHLY_FOOD_DATA_KEY}`,
      { method: "GET", headers: { Accept: "application/xml" } }
    );
    const xml = await res.text();
    const json = await parseStringPromise(xml, {});

    const yearArr = json.response.body[0].items[0].item;
    yearData = [];
    yearArr.forEach((v: { year: Array<string> }) => {
      yearData.push(v.year[0]);
    });

    return yearData;
  } catch (err) {
    console.log("err", err);
  }
};
