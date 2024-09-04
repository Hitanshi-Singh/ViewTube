import { useDispatch, useSelector } from "react-redux";
import { ToggleMenu } from "../assets/utilities/appslice";
import { CircleUserRound, Menu, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../assets/utilities/constants";
import SearchSuggestions from "./SearchSuggestions";
import { cacheResults } from "../assets/utilities/searchSlice";
import viewTube from "../assets/utilities/Viewtube.png";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionList, setsuggestionList] = useState([]);
  const [showSuggestionList, setShowSuggestionList] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const onClickMenuHandler = () => {
    dispatch(ToggleMenu());
  };
  // console.log(searchQuery);
  const getSearchSuggestions = async () => {
    const data = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        YOUTUBE_SEARCH_API + searchQuery
      )}`
    );
    const result = await data.json();
    const suggestions = JSON.parse(result.contents);
    console.log(suggestions);
    setsuggestionList(suggestions[1]);
    dispatch(
      cacheResults({
        [searchQuery]: suggestions[1],
      })
    );
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setsuggestionList(searchCache[searchQuery]);
      } else getSearchSuggestions();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  return (
    <header className="flex items-center justify-between h-[4.2rem] shadow-md px-2 fixed bg-white w-full z-10">
      <div className="flex items-center space-x-4">
        <Menu
          strokeWidth={1.25}
          onClick={() => onClickMenuHandler()}
          className="ml-2 cursor-pointer"
        />
        <img src={viewTube} alt="logo" className="w-32 cursor-pointer" />
      </div>

      <div className="flex items-center w-2/5 relative">
        <input
          type="text"
          placeholder="Search here"
          className="w-4/5 h-9 rounded-l-2xl outline outline-1 outline-slate-300 p-2 pl-4"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestionList(true)}
          
        />
        <button className="rounded-r-2xl bg-gray-50 h-9 w-16 outline outline-1 outline-gray-300 hover:bg-gray-100">
          <Search strokeWidth={1.25} className="m-auto cursor-pointer" />
        </button>
        {searchQuery && showSuggestionList && (
          <SearchSuggestions list={suggestionList} />
        )}
      </div>

      <div className="flex justify-end w-1/12">
        <CircleUserRound
          strokeWidth={1.25}
          size={26}
          className="mr-2 cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
