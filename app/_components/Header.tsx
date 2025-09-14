import HeaderMonth from "@/app/_components/HeaderMonth";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center space-between ">
      <Link href="/">
        <Image
          src={"/icons/tasty_calendar-logo.png"}
          width={120}
          height={120}
          alt="메인로고"
          priority
        />
      </Link>
      <HeaderMonth />
    </div>
  );
};

export default Header;
