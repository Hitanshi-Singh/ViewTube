// import React from 'react'

import { useDispatch } from "react-redux";
import {
  HAMBURGER_MENU,
  LOGO,
  SEARCH_ICON,
  USER_ICON,
} from "../assets/utilities/imageLinks";
import { ToggleMenu } from "../assets/utilities/appslice";

const Header = () => {
const dispatch=useDispatch();
  const onClickMenuHandler=()=>{
    dispatch(ToggleMenu());
  }

  return (
    <header className="flex items-center justify-between h-20 shadow-md px-2">
      <div className="flex items-center space-x-4">
        <img src={HAMBURGER_MENU} alt="menu" className="w-9" onClick={()=>onClickMenuHandler()}/>
        <img src={LOGO} alt="logo" className="w-32" />
      </div>

      <div className="flex items-center w-2/5">
        <input
          type="text"
          placeholder="Search here"
          className="w-4/5 h-9 rounded-l-2xl outline outline-1 outline-slate-300 p-2"
        />
        <button className="rounded-r-2xl bg-gray-50 h-9 w-16 outline outline-1 outline-gray-300 hover:bg-gray-100">
          <img src={SEARCH_ICON} alt="" className="w-8 m-auto" />
        </button>
      </div>

      <div className="flex justify-end w-1/12">
        <img src={USER_ICON} alt="User Icon" className="w-14" />
      </div>
    </header>
  );
};

export default Header;
