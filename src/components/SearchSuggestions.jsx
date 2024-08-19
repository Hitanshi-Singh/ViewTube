import { Search } from "lucide-react";

/* eslint-disable react/prop-types */
const SearchSuggestions = ({ list }) => {
  console.log("Inside the suggest componenet" + list);
  return (
    <div className="absolute flex flex-col top-10 left-0 w-4/5 rounded-lg overflow-hidden bg-white shadow-md shadow-gray-700">
      {list.map((e, index) => (
        <div key={index} className="flex items-center p-2 space-x-2 cursor-pointer hover:bg-gray-200">
            <Search strokeWidth={1.25}/>
            <div className="w-full" >
          {e}
        </div>
        </div>
      ))}
    </div>
  );
};

export default SearchSuggestions;
