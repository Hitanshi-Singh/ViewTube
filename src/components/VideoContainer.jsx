import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../assets/utilities/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

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
    <div className="flex flex-wrap justify-between">
      {video.length > 0 &&
        video.map((v, index) => (
          <Link to={"/watch?v=" + v.id} key={index}>
            <VideoCard info={v} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
