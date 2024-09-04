// import React from 'react'
import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className={`w-full px-6  ${isMenuOpen ? `ml-64` : `ml-16`}`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
