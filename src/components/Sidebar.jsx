// import React from 'react'
import {
  Clock4,
  ContactRound,
  History,
  Home,
  ListVideo,
  ThumbsUp,
  TvMinimalPlay,
  Youtube,
  Zap,
} from "lucide-react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //early return
  // if (!isMenuOpen) return;
  return (
    <div className={`${isMenuOpen ? `w-56` : `w-28`}`}>
      {isMenuOpen && (
        <div className="p-3">
          <ul>
            <li className="flex h-10 my-2  rounded-lg items-center justify-between hover:bg-gray-100 cursor-pointer px-1">
              <Home strokeWidth={1.25} />
              <p className="w-9/12">Home</p>
            </li>
            <li className="flex h-10 my-2  rounded-lg items-center justify-between hover:bg-gray-100 cursor-pointer px-1">
              <Zap strokeWidth={1.25} />
              <p className="w-9/12">Shorts</p>
            </li>
            <li className="flex h-10 my-2  rounded-lg items-center justify-between hover:bg-gray-100 cursor-pointer px-1">
              <TvMinimalPlay strokeWidth={1.25} />
              <p className="w-9/12">Subscriptions</p>
            </li>
          </ul>
          <hr />
        </div>
      )}
      {!isMenuOpen && (
        <div className="p-3 w-16">
          <ul>
            <li className="flex h-14 mb-5 mt-2  rounded-lg items-center justify-center hover:bg-gray-100 cursor-pointer flex-col">
              <Home strokeWidth={1.25} />
              <p className="text-[0.7rem]">Home</p>
            </li>
            <li className="flex h-14 my-5  rounded-lg items-center justify-center hover:bg-gray-100 cursor-pointer flex-col">
              <Zap strokeWidth={1.25} />
              <p className="text-[0.7rem]">Shorts</p>
            </li>
            <li className="flex h-14 my-5  rounded-lg items-center justify-center hover:bg-gray-100 cursor-pointer flex-col">
              <TvMinimalPlay strokeWidth={1.25} />
              <p className="text-[0.7rem]">Subscriptions</p>
            </li>
          </ul>
        </div>
      )}
      {isMenuOpen && (
        <div className="p-3">
          <h3 className="mx-2">You ›</h3>
          <ul>
            <li className="flex h-10 my-2 rounded-lg items-center justify-between hover:bg-gray-100 cursor-pointer px-1">
              <ContactRound strokeWidth={1.25} />
              <p className="w-9/12">Your channel</p>
            </li>
            <li className="flex h-10 my-2 rounded-lg items-center justify-between hover:bg-gray-100 cursor-pointer px-1">
              <History strokeWidth={1.25} />
              <p className="w-9/12">History</p>
            </li>
            <li className="flex h-10 my-2 rounded-lg items-center justify-between hover:bg-gray-100 cursor-pointer px-1">
              <ListVideo strokeWidth={1.25} />
              <p className="w-9/12">Playlists</p>
            </li>
            <li className="flex h-10 my-2 rounded-lg items-center justify-between hover:bg-gray-100 cursor-pointer px-1">
              <Youtube strokeWidth={1.25} />
              <p className="w-9/12">Your videos</p>
            </li>
            <li className="flex h-10 my-2 rounded-lg items-center justify-between hover:bg-gray-100 cursor-pointer px-1">
              <Clock4 strokeWidth={1.25} />
              <p className="w-9/12">Watch later</p>
            </li>
            <li className="flex h-10 my-2 rounded-lg items-center justify-between hover:bg-gray-100 cursor-pointer px-1">
              <ThumbsUp strokeWidth={1.25} />
              <p className="w-9/12">Liked videos</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
