import Image from "next/image";
import Link from "next/link";
import backSvg from "../assets/back.svg";

async function fetchCountryData(name) {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${name}`);
  const countryRes = await response.json();
  return countryRes;
}

const Country = async ({ countryId }) => {
  const countryData = await fetchCountryData(countryId);

  return (
    <section className="pt-[130px] overflow-hidden dark:text-white">
      <Link href="/">
        <div className="bg-white dark:bg-darkBlue shadow-input-shadow w-[7.5rem] ml-5 cursor-pointer lg:ml-[4rem]">
          <div className="flex py-3 justify-center gap-3 font-semibold">
            <Image src={backSvg} alt="backSvg" width={20} height={20} />
            <p>Back</p>
          </div>
        </div>
      </Link>

      <div>
        <div className="mt-10 ">
          <Image
            className="mx-auto lg:ml-[4rem] lg:scale-[1.1] xl:scale-[1.3] lg:translate-y-[50%] xl:translate-x-[3rem]"
            src={countryData[0].flags.png}
            alt={countryData[0].name.common}
            width={350}
            height={350}
            priority
          />
        </div>
        <div className="lg:translate-x-[50%] lg:translate-y-[-50%] xl:scale-110">
          <div className="lg:flex lg:gap-2">
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-bold mt-5 pt-3 pb-3 ml-6">
                {countryData[0].name.common}
              </h1>
              <p className="ml-6">
                <span className="font-semibold">Official Name:</span>{" "}
                {countryData[0].name.official}
              </p>
              <p className="ml-6">
                <span className="font-semibold">Population:</span>{" "}
                {countryData[0].population.toLocaleString()}
              </p>
              <p className="ml-6">
                <span className="font-semibold">Region:</span>{" "}
                {countryData[0].region}
              </p>
              <p className="ml-6">
                <span className="font-semibold">Sub Region:</span>{" "}
                {countryData[0].subregion}
              </p>
              <p className="ml-6">
                <span className="font-semibold">Capital:</span>{" "}
                {countryData[0].capital}
              </p>
            </div>
            <div className="flex flex-col gap-3 mt-10 lg:mt-[5.5rem]">
              <p className="ml-6">
                <span className="font-semibold">Top Level Domain:</span>{" "}
                {countryData[0].tld}
              </p>
              <p className="ml-6">
                <span className="font-semibold">Currencies:</span>{" "}
                {countryData[0]?.currencies &&
                  Object.values(countryData[0].currencies).map(
                    (currency) => currency.name
                  )}
              </p>
              <p className="ml-6 h-[3rem] w-[18rem] flex gap-1">
                <span className="font-semibold">Languages:</span>{" "}
                {countryData[0].languages &&
                  Object.values(countryData[0].languages).map(
                    (language) => `${language}, `
                  )}
              </p>
            </div>
          </div>
          <div className="ml-6 mt-8 pb-9 lg:flex lg:gap-3">
            <h2 className="text-lg font-semibold lg:my-auto">
              Border Countries:
            </h2>
            <div className="mt-4 mb-3 grid grid-cols-3 gap-2 lg:grid-cols-3">
              {countryData[0].borders?.map((border) => (
                <Link href={`/${border}`}>
                  <div className="dark:bg-darkBlue bg-white shadow-input-shadow w-[6rem]">
                    <p className="text-center py-[5px]">{border}</p>
                  </div>
                </Link>
              ))}
              {!countryData[0].borders && (
                <span className="absolute font-bold lg:translate-x-0 lg:translate-y-[-0.8rem] translate-y-[-2.6rem] translate-x-[9.5rem]">
                  No border countries.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Country;
