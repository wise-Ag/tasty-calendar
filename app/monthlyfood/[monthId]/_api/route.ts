import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const URL = process.env.MONTHLY_FOOD_DATA_URL;
}
