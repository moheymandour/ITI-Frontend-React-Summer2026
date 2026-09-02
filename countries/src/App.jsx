import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";
import { CountriesProvider } from "./context/CountriesProvider";
import "./App.css";

function Layout() {
  return (
    <CountriesProvider>
      <Outlet />
    </CountriesProvider>
  );
}

function Home() {
  return (
    <main className="container">
      <h1>Where in the world?</h1>

      <div className="controls">
        <SearchBar />
        <Filter />
      </div>

      <CountryList />
    </main>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/country/:name", element: <CountryDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;