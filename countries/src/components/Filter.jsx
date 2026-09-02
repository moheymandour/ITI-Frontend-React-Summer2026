import { useCountry } from "../hooks/useCountry";

function Filter() {
  const { region, setRegion } = useCountry();

  return (
    <select
      value={region}
      onChange={(e) => setRegion(e.target.value)}
    >
      <option value="All">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}

export default Filter;