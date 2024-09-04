import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SEARCH_RESULTS_API } from "../assets/utilities/constants";
import SearchResultCard from "./SearchResultCard";
import { useSelector } from "react-redux";

const SearchResultsPage = () => {
  const [queryResults, setqueryResults] = useState([]);
  const { query } = useParams();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const fetchResults = async () => {
    // const data = await fetch(
    //   `https://api.allorigins.win/get?url=${encodeURIComponent(
    //     SEARCH_RESULTS_API + query + `&key=` + import.meta.env.VITE_API_KEY
    //   )}`
    // );
    const data = await fetch(
      SEARCH_RESULTS_API + query + `&key=` + import.meta.env.VITE_API_KEY
    );
    const json = await data.json();
    console.log(json);
    setqueryResults(json.items);
  };
  useEffect(() => {
    fetchResults();
  }, [query]);
  return (
    <div
      className={`flex flex-wrap justify-between m-5 rounded-lg ${
        isMenuOpen ? `ml-64` : `ml-36`
      }`}
    >
      {queryResults &&
        queryResults.map((e, i) => (
          <Link key={i} to={"/watch?v=" + e?.id?.videoId}>
            <SearchResultCard info={e} />
          </Link>
        ))}
    </div>
  );
};

export default SearchResultsPage;
