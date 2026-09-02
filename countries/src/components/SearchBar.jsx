import { useCountry } from "../hooks/useCountry";

function SearchBar() {
    const { search, setSearch } = useCountry();

    return (
        <div className="search-box">
            <span>🔍</span>

            <input
                type="text"
                placeholder="Search for a country..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;