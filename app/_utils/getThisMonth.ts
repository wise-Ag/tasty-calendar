export const getThisMonth = () => {
  const date = new Date();
  const thisMonth = String(date.getMonth() + 1).padStart(2, "0");
  return thisMonth;
};
