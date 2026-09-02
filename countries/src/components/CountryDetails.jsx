import { useParams, Link } from "react-router";
import { useCountry } from "../hooks/useCountry";

function CountryDetails() {
  const { name } = useParams();
  const { countries, loading } = useCountry();

  if (loading) return <p className="message">Loading...</p>;

  const country = countries.find((country) => country.name === name);

  if (!country) {
    return <p className="message">Country not found</p>;
  }

  return (
    <div className="country-details">
      <Link to="/" className="back-btn">
        ← Back
      </Link>
      <div className="details-content">
        <div className="details-image">

          <img src={country.flags.svg} alt={country.name} />
        </div>
        <div className="details-info">
          <h1>{country.name}</h1>
          <p><strong>Population:</strong> {country.population}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Capital:</strong> {country.capital}</p>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;