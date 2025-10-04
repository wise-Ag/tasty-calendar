"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const HeaderMonth = () => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const pathname = usePathname();

  return (
    <div>
      {months.map((v) => {
        return (
          <Link
            className={clsx(
              "mr-5 lg:text-[25px] sm:text-[20px]",
              pathname === `/monthlyfood/${v}`
                ? "text-orange-400"
                : "text-gray-600"
            )}
            href={`/monthlyfood/${v}`}
            key={v}
          >
            {v}월
          </Link>
        );
      })}
    </div>
  );
};
export default HeaderMonth;
