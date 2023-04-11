// "use client";
import Link from "next/link";

import Image from "next/image";
import moonSvg from "../assets/moon.svg";

const Header = () => {
  return (
    <header className="fixed flex h-[6rem] items-center shadow-header-shadow bg-white border-t-[1px] text-veryDarkBlueLightText w-full z-50">
      <div className="flex justify-between mx-5 md:mx-[4rem] w-full">
        <Link href="/">
          <h1 className="font-extrabold text-[1.1rem] md:text-[1.5rem] cursor-pointer">
            Where in the world?
          </h1>
        </Link>

        <div className="flex gap-2 font-[600] cursor-pointer">
          <span className="pt-1">
            <Image src={moonSvg} alt="theme-mode" width={16} height={16} />
          </span>
          Dark Mode
        </div>
      </div>
    </header>
  );
};

export default Header;
