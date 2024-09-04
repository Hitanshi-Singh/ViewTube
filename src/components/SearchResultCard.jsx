/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";

const SearchResultCard = ({ info }) => {
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
  const { snippet } = info;
  const { thumbnails, title } = snippet;
  return (
    <div className={` mb-6 cursor-pointer hover:scale-105 transition-all ${isMenuOpen?`w-72`:`w-[19rem]`}`}>
      <img src={thumbnails?.high?.url} alt="" className="w-full h-40 object-cover rounded-lg "/>
      <h3 className="font-bold">{title}</h3>
    </div>
  );
};

export default SearchResultCard;
