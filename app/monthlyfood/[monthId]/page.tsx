const MonthlyFood = async () => {
  const res = await fetch(
    `http://api.nongsaro.go.kr/service/monthFd/monthNewFdLst/?apiKey=20250908CQKM6OXUVP569KHIARHHA&thisYear=2018&thisMonth=1`,
    { method: "GET", headers: { "Content-Type": "application/json" } }
  );
  const data = res.json();
  console.log(data);

  return (
    <div>
      data fetch test
      <div>{data}</div>;
    </div>
  );
};

export default MonthlyFood;
