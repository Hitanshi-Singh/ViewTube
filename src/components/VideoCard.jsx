/* eslint-disable react/prop-types */
const VideoCard = ({ info }) => {
  console.log(info);

  const { snippet, statistics } = info;
  const { viewCount, likeCount } = statistics;
  const { channelTitle, thumbnails, title } = snippet;
  const computeViews = (x) => {
    let a = Math.trunc(x / 1000);
    if (a > 999) return a / 1000 + "M";
    else return a + "K";
  };
  return (
    <div className="w-96 m-3">
      <img src={thumbnails.maxres.url} alt="" className="w-96 rounded-lg" />
      <div className="my-2 flex">
        <img
          src={thumbnails.maxres.url}
          alt=""
          className="w-10 h-10 object-cover rounded-full mr-2"
        />
        <div>
          {" "}
          <h3 className="font-bold ">{title}</h3>
          <p className="text-gray-500 text-sm">{channelTitle}</p>
          <div className="flex">
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
