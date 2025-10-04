const MonthFoodSkeleton = () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="flex-1 relative w-full lg:h-200 md:h-200 sm:h-900 overflow-hidden">
      <div className=" animate-pulse absolute inset-0 grid sm:grid-cols-1 sm:grid-row-1 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 gap-15">
        {arr.map((v, i) => (
          <div key={i}>
            <div className="relative w-full aspect-[4/3] bg-gray-200" />

            <div className="mt-3 w-full h-6 bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthFoodSkeleton;
