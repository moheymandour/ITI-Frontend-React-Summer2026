import { useEffect, useState } from "react";
import { CountriesContext } from "./CountriesContext";
import { useSearchParams } from "react-router";

export function CountriesProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  function setSearch(value) {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (value) {
        newParams.set("search", value);
      } else {
        newParams.delete("search");
      }
      return newParams;
    });
  }

  const region = searchParams.get("region") || "All";

  function setRegion(value) {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (value && value !== "All") {
        newParams.set("region", value);
      } else {
        newParams.delete("region");
      }
      return newParams;
    });
  }

  useEffect(() => {
    fetch("https://countries.dev/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const filteredCountries = countries.filter((country) => {
    const countryName = country.name?.toLowerCase() || "";
    const searchMatch = countryName.includes(search.toLowerCase());
    const regionMatch = region === "All" || country.region === region;
    return searchMatch && regionMatch;
  });

  return (
    <CountriesContext.Provider
      value={{
        countries,
        filteredCountries,
        search,
        setSearch,
        region,
        setRegion,
        loading,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}