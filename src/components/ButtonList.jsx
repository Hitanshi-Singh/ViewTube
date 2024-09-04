// import React from 'react'

const ButtonList = () => {
  const list = [
    "All",
    "Podcasts",
    "Sports",
    "News",
    "Music",
    "Coding",
    "Cooking",
    "Shark Tank",
    "Painting",
  ];
  return (
    <div className="flex space-x-3 fixed bg-white py-2 w-full">
      {list.map((elem, index) => (
        <button
          className="bg-gray-100 rounded-lg my-2 px-4 py-1 hover:bg-gray-200"
          key={index}
        >
          {elem}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
