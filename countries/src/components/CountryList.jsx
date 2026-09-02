import { Link } from "react-router";
import { useCountry } from "../hooks/useCountry";

function CountryList() {
  const { filteredCountries, loading } = useCountry();

  if (loading) return <p className="message">Loading...</p>;

  if (filteredCountries.length === 0) {
    return <p className="message">No countries found</p>;
  }

  return (
    <div className="countries-grid">
      {filteredCountries.map((country) => (
        <div
          key={country.name}
          className="country-card"
        >
          <Link to={`/country/${country.name}`}>
            <img src={country.flags.svg} alt={country.name} />
          </Link>
          <div className="country-info">
            <p>{country.region}</p>
            <h2>{country.name}</h2>
            <p>Population: {country.population}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CountryList;