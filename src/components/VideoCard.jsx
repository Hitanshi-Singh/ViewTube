import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { viewCount, likeCount } = statistics;
  const { channelTitle, thumbnails, title } = snippet;
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const computeViews = (x) => {
    let a = Math.trunc(x / 1000);
    if (a > 999) return a / 1000 + "M";
    else return a + "K";
  };
  return (
    <div className={isMenuOpen ? "w-[25rem]" : "w-[21.5rem]"}>
      <img
        src={thumbnails?.maxres?.url}
        alt=""
        className={`${isMenuOpen ? "w-[25rem]" : "w-80"} rounded-lg `}
      />
      <div className="my-2 flex">
        <img
          src={thumbnails?.maxres?.url}
          alt=""
          className="w-10 h-10 object-cover rounded-full mr-2"
        />
        <div>
          {" "}
          <h3 className="font-bold ">{title}</h3>
          <p className="text-gray-500 text-sm">{channelTitle}</p>
          <div className="flex space-x-3">
            <p className="text-gray-500 text-sm">
              {computeViews(viewCount)} views
            </p>
            <p className="text-gray-500 text-sm">
              {computeViews(likeCount)} likes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
