import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex lg:flex-row sm:flex-col sm:items-center sm:gap-3 justify-between p-10 bg-gray-500">
      <section className="flex flex-col sm:items-center">
        <div className="flex items-center gap-2">
          <Image
            src={"/icons/tasty_calendar-logo.png"}
            width={50}
            height={50}
            alt="메인로고"
          />
          <span className="font-bold text-md text-gray-100">맛달력</span>
        </div>
        <p className="text-gray-300 text-sm">
          매달 제철 음식과 레시피를 한눈에 확인하세요.
        </p>
      </section>
      <section className="flex-col justify-center">
        <h4 className="font-semibold mb-3 text-center">contact.</h4>
        <p className="text-sm text-gray-300 mb-3">📧 wiseag@naver.com</p>

        <Link href={"https://github.com/wise-Ag/tasty-calendar"}>
          <Image
            src={"/icons/github-logo.png"}
            width={30}
            height={30}
            alt="깃허브"
          />
        </Link>
      </section>
      <section>
        <div className=" border-t border-gray-700 pt-6 text-center text-sm text-gray-300">
          © 2025 맛달력. All rights reserved.
        </div>
      </section>
    </footer>
  );
};

export default Footer;
