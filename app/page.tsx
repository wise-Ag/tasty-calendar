import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Image
        src={"/icons/tasty_calendar-logo.png"}
        width={100}
        height={100}
        alt="메인로고"
      />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>한글 글꼴도 테스트</div>
        <div className="w-10 h-10 border-l-[15px] border-r-[20px]">
          First tailwind
        </div>
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>
      </main>
    </div>
  );
}
