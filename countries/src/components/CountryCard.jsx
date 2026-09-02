function CountryCard({ country }) {
  return (
    <article className="country-card">
      <img
        src={country.flags.svg}
        alt={`${country.name} flag`}
      />

      <div className="country-info">
        <h2>{country.name}</h2>

        <p>
          <strong>Population:</strong>{" "}
          {country.population.toLocaleString()}
        </p>

        <p>
          <strong>Region:</strong>{" "}
          {country.region}
        </p>

        <p>
          <strong>Capital:</strong>{" "}
          {country.capital || "No capital"}
        </p>
      </div>
    </article>
  );
}

export default CountryCard;