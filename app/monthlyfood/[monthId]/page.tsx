"use client";
const MonthlyFood = async () => {
  const res = await fetch(
    `https://api.nongsaro.go.kr/service/monthFd/monthFdmtLst/?apiKey=20250903O4UYV81YYUL9F90I6GIUTQ&thisYear=2018&thisMonth=1`,
    { method: "GET", headers: { "Content-Type": "application/json" } }
  );
  const data = res.json();
  console.log(data);

  return (
    <div>
      data fetch test
      <div>data</div>;
    </div>
  );
};

export default MonthlyFood;
