import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const SearchSuggestions = ({ list }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    if (e.length != 0) navigate(`/search/${e}`);
    console.log("Handler called");
  };
  return (
    <div className="absolute flex flex-col top-10 left-0 w-4/5 rounded-lg overflow-hidden bg-white shadow-md shadow-gray-700">
      {list.map((e, index) => (
        <div
          key={index}
          className="flex items-center p-2 space-x-2 cursor-pointer hover:bg-gray-200 z-20"
          onClick={() => {
            handleClick(e);
          }}
        >
          <Search strokeWidth={1.25} />
          <div className="w-full ">{e}</div>
        </div>
      ))}
    </div>
  );
};

export default SearchSuggestions;
