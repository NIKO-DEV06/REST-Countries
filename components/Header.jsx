// "use client";

import Image from "next/image";
import moonSvg from "../assets/moon.svg";

const Header = () => {
  return (
    <header className="flex h-[6rem] items-center  shadow-lg bg-white">
      <div className="flex justify-between mx-5 w-full">
        <div>
          <h1 className="font-extrabold text-[1.1rem] cursor-pointer">
            Where in the world?
          </h1>
        </div>

        <div className="flex gap-2 font-[600] cursor-pointer">
          <span className="pt-1">
            <Image src={moonSvg} alt="" width={16} height={16} />
          </span>
          Dark Mode
        </div>
      </div>
    </header>
  );
};

export default Header;
