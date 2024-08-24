import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CloseMenu } from "../assets/utilities/appslice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  useEffect(() => {
    dispatch(CloseMenu());
  }, [dispatch]);

  return (
    <div className="w-full flex">
      <div className="w-full">
        <div className="w-[57.1rem] p-3">
          <iframe
            width="900"
            height="450"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?si=uAfCbAuaLrKXG0ga"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-[57.1rem]">
          <CommentsContainer />
        </div>
      </div>
      <LiveChat />
    </div>
  );
};

export default WatchPage;
