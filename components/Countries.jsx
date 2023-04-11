"use client";
import { Fragment, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import searchSvg from "../assets/search.svg";
import downSvg from "../assets/down.svg";

const Countries = ({ countries }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("All Regions");
  const [isFilterShowing, setIsFilterShowing] = useState(false);

  const toggleFilter = () => {
    setIsFilterShowing(!isFilterShowing);
  };

  return (
    <Fragment>
      <section className="w-full md:flex md:justify-between text-veryDarkBlueLightText">
        <div className="relative flex my-7 justify-center">
          <input
            placeholder="Search for a country..."
            className="w-full mx-5 h-[3.75rem] shadow-input-shadow rounded-lg outline-none pl-[5rem] box-border font-[600] text-darkGrayLightInput md:w-[25rem] md:mx-[4rem]"
            type="text"
            onChange={(event) => setSearchTerm(event.target.value)}
            style={{
              WebkitAppearance: "none",
            }}
          />

          <Image
            className="absolute left-0 translate-x-[3.2rem] md:translate-x-[6rem] top-1/2 transform -translate-y-1/2"
            src={searchSvg}
            alt="search"
            width={22}
            height={22}
          />
        </div>
        <div className="ml-5 z-10">
          <div
            onClick={toggleFilter}
            className="w-[13rem] h-[3.5rem] shadow-input-shadow rounded-md flex justify-center items-center gap-[3rem] font-[600] text-veryDarkBlueLightText cursor-pointer md:mr-[4rem] md:mt-7"
          >
            {selectedOption}
            <Image src={downSvg} alt="dropdown" width={25} height={25} />
          </div>
          {isFilterShowing && (
            <div className="w-[13rem] shadow-input-shadow mt-2 font-[600] flex flex-col gap-3 rounded-md absolute bg-white">
              <p
                onClick={() => setSelectedOption("All Regions")}
                className="ml-6 mt-5 cursor-pointer"
              >
                All Regions
              </p>
              <p
                onClick={() => setSelectedOption("Africa")}
                className="ml-6 cursor-pointer"
              >
                Africa
              </p>
              <p
                onClick={() => setSelectedOption("Americas")}
                className="ml-6 cursor-pointer"
              >
                America
              </p>
              <p
                onClick={() => setSelectedOption("Asia")}
                className="ml-6 cursor-pointer"
              >
                Asia
              </p>
              <p
                onClick={() => setSelectedOption("Europe")}
                className="ml-6 cursor-pointer"
              >
                Europe
              </p>
              <p
                onClick={() => setSelectedOption("Oceania")}
                className="ml-6 mb-5 cursor-pointer"
              >
                Oceania
              </p>
            </div>
          )}
        </div>
      </section>
      <div className="z-0 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:mx-[3rem]">
        {countries

          .sort((a, b) => a.name.common.localeCompare(b.name.common))
          .filter((country) => {
            if (
              country.name.common
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) &&
              selectedOption === "All Regions"
            ) {
              return country;
            } else if (
              country.name.common
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) &&
              country.region === selectedOption
            ) {
              return country;
            }
          })
          .map((country) => (
            <div
              key={country.cca3}
              className="bg-white w-[18rem] h-[25rem] mx-auto  shadow-input-shadow my-10 rounded-lg lg:hover:translate-y-[-2rem] duration-300"
            >
              <div className="">
                <Link href={`/${country.name.common}`}>
                  <Image
                    className="rounded-t-lg cursor-pointer object-cover object-top h-[12.5rem]"
                    src={country.flags.png}
                    alt={country.flags.alt}
                    width={300}
                    height={300}
                  />
                </Link>
              </div>
              <div className="ml-4">
                <h3 className="font-[800] text-[1.45rem] my-6">
                  {country.name.common}
                </h3>
                <div className="flex flex-col gap-2 my-5">
                  <p>
                    <span className="font-semibold">Population: </span>
                    {country.population.toLocaleString()}
                  </p>
                  <p>
                    <span className="font-semibold">Region: </span>
                    {country.region}
                  </p>
                  <p>
                    <span className="font-semibold">Capital: </span>
                    {country.capital}
                  </p>
                </div>
              </div>
            </div>
          ))}
        {countries.filter((country) => {
          if (
            country.name.common
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) &&
            selectedOption === "All Regions"
          ) {
            return country;
          } else if (
            country.name.common
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) &&
            country.region === selectedOption
          ) {
            return country;
          }
        }).length === 0 && (
          <p className="text-center font-bold mt-10">
            No countries match your search criteria.
          </p>
        )}
      </div>
    </Fragment>
  );
};

export default Countries;
