import React from "react";
import Country from "@/components/Country";

const CountryPage = async ({ params: { countryId } }) => {
  return <Country countryId={countryId} />;
};

export default CountryPage;
