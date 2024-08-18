// import React from 'react'

const ButtonList = () => {
  const list = ["All", "Podcasts", "Sports", "News", "Music", "Coding"];
  return (
    <div className="flex ">
      {list.map((elem,index) => (
        <button className="bg-gray-200 rounded-lg m-2 px-4 py-1" key={index}>{elem}</button>
      ))}
    </div>
  );
};

export default ButtonList;
