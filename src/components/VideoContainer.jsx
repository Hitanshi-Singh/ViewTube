// import React from 'react'

import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../assets/utilities/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [video, setvideo] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setvideo(json.items);
  };

  return (
    <div className="flex flex-wrap">{video.length > 0 && video.map((v,index) => <VideoCard info={v} key={index}/>)}</div>
  );
};

export default VideoContainer;
