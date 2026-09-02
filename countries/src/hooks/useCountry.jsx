import { useContext } from "react";

import { CountriesContext } from "../context/CountriesContext";

export function useCountry() {

    const context = useContext(CountriesContext)

    if (!context) {
        throw new Error("useCountry must be used inside CountriesProvider")
    }
    return context;
}
    