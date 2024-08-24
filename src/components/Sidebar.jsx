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
import { useLocation } from "react-router-dom";
import SidebarItems from "./SidebarItems";
import CollapsedSidebar from "./CollapsedSidebar";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const route = useLocation();
  const path = route.pathname;
  const primaryList = [
    {
      name: "Home",
      logo: <Home strokeWidth={1.25} />,
    },
    {
      name: "Shorts",
      logo: <Zap strokeWidth={1.25} />,
    },
    {
      name: "Subscriptions",
      logo: <TvMinimalPlay strokeWidth={1.25} />,
    },
  ];
  const secondaryList = [
    {
      name: "Your channel",
      logo: <ContactRound strokeWidth={1.25} />,
    },
    {
      name: "History",
      logo: <History strokeWidth={1.25} />,
    },
    {
      name: "Playlists",
      logo: <ListVideo strokeWidth={1.25} />,
    },
    {
      name: "Your videos",
      logo: <Youtube strokeWidth={1.25} />,
    },
    {
      name: "Watch later",
      logo: <Clock4 strokeWidth={1.25} />,
    },
    {
      name: "Liked videos",
      logo: <ThumbsUp strokeWidth={1.25} />,
    },
  ];
  //early return
  if (!isMenuOpen && path === "/watch") return;
  return (
    <div
      className={`${isMenuOpen ? `w-64` : `w-20`} sticky ${
        path === `/watch` && `absolute bg-white shadow-lg shadow-gray-700`
      }`}
    >
      {isMenuOpen && (
        <div className="p-3 ml-1">
          <ul>
            {primaryList.map((e, index) => (
              <SidebarItems
                name={e.name}
                logo={e.logo}
                key={index}
                link={"/"}
              />
            ))}
          </ul>
          <hr />
        </div>
      )}
      {!isMenuOpen && (
        <div className="p-3 w-[4.7rem]">
          <ul>
            {primaryList.map((e,index) => (
              <CollapsedSidebar name={e.name} logo={e.logo} key={index} />
            ))}
          </ul>
        </div>
      )}
      {isMenuOpen && (
        <div className="p-3 ml-1">
          <h3 className="mx-2">You ›</h3>
          <ul>
            {secondaryList.map((e,index) => (
              <SidebarItems name={e.name} logo={e.logo} key={index} link={"/"} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
