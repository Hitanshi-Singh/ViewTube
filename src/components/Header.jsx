// import React from 'react'

import { useDispatch } from "react-redux";
import { LOGO } from "../assets/utilities/imageLinks";
import { ToggleMenu } from "../assets/utilities/appslice";
import { CircleUserRound, Menu, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../assets/utilities/constants";
import SearchSuggestions from "./SearchSuggestions";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionList, setsuggestionList] = useState([]);
  const [showSuggestionList, setShowSuggestionList] = useState(false);
  const dispatch = useDispatch();
  const onClickMenuHandler = () => {
    dispatch(ToggleMenu());
  };
  // console.log(searchQuery);
  const getSearchSuggestions = async () => {
    console.log("API call - "+ searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setsuggestionList(json[1])
  };
  useEffect(() => {
    const timer=setTimeout(() => {
      getSearchSuggestions();
    }, 200);
    return ()=>{
      clearTimeout(timer)
    }
  }, [searchQuery]);
  return (
    <header className="flex items-center justify-between h-20 shadow-md px-2">
      <div className="flex items-center space-x-4">
        <Menu
          strokeWidth={1.25}
          onClick={() => onClickMenuHandler()}
          className="ml-2"
        />
        <img src={LOGO} alt="logo" className="w-32" />
      </div>

      <div className="flex items-center w-2/5 relative">
        <input
          type="text"
          placeholder="Search here"
          className="w-4/5 h-9 rounded-l-2xl outline outline-1 outline-slate-300 p-2 pl-4"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggestionList(true)}
          onBlur={()=>setShowSuggestionList(false)}
        />
        <button className="rounded-r-2xl bg-gray-50 h-9 w-16 outline outline-1 outline-gray-300 hover:bg-gray-100">
          <Search strokeWidth={1.25} className="m-auto" />
        </button>
        {searchQuery.length>0 && (showSuggestionList && <SearchSuggestions list={suggestionList}/>)}
      </div>

      <div className="flex justify-end w-1/12">
        <CircleUserRound strokeWidth={1.25} size={26} className="mr-2" />
      </div>
    </header>
  );
};

export default Header;
