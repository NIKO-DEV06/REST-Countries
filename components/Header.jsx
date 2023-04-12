"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import Image from "next/image";
import moonSvg from "../assets/moon.svg";
import sunSvg from "../assets/sun.svg";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="dark:text-white fixed flex h-[6rem] items-center shadow-header-shadow bg-white dark:bg-darkBlue dark:border-darkBlue border-t-[1px] text-veryDarkBlueLightText w-full z-50">
      <div className="flex justify-between mx-5 md:mx-[4rem] w-full">
        <Link href="/">
          <h1 className="font-extrabold text-[1.1rem] md:text-[1.5rem] cursor-pointer">
            Where in the world?
          </h1>
        </Link>

        <div
          onClick={handleThemeSwitch}
          className="flex gap-2 font-[600] cursor-pointer"
        >
          <span className="pt-1">
            <Image
              src={theme === "dark" ? moonSvg : sunSvg}
              alt="theme-mode"
              width={16}
              height={16}
            />
          </span>
          {theme === "light" ? "Light Mode" : "Dark Mode"}
        </div>
      </div>
    </header>
  );
};

export default Header;
