import Countries from "@/components/Countries";

async function fetchCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const countries = await response.json();
  return countries;
}

const Home = async () => {
  const countries = await fetchCountries();
  return (
    <main className="pt-[6rem]">
      <Countries countries={countries} />
    </main>
  );
};

export default Home;
