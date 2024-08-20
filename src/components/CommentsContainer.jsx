/* eslint-disable react/prop-types */
import { ChevronDown, ChevronUp, CircleUserRound } from "lucide-react";
import { commentsData } from "../assets/utilities/constants";
import { useState } from "react";

const Comment = ({ data }) => {
  const { name, text, reply } = data;
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const onClickReplyBox = () => {
    setIsReplyOpen(!isReplyOpen);
  };
  return (
    <div className="w-90 p-1 m-1 rounded-r-md">
      <div className="flex w-90 bg-gray-100 space-x-2 rounded-r-md p-1">
        <CircleUserRound size={32} strokeWidth={1.25} />
        <div className="w-full">
          <div className="flex space-x-3 items-end">
            <p className="font-bold">{name}</p>
            <p className="text-gray-500 text-[0.8rem]">3 hours ago</p>
          </div>
          <p>{text}</p>
          <div className="flex space-x-4">
            <p className="text-gray-500 text-[0.8rem] cursor-pointer">Like</p>
            <p className="text-gray-500 text-sm text-[0.8rem] cursor-pointer">
              Reply
            </p>
          </div>
          {reply.length > 0 && !isReplyOpen && (
            <p
              className="flex cursor-pointer items-end text-sm"
              onClick={onClickReplyBox}
            >
              view replies({reply.length})
              <ChevronDown strokeWidth={1.25} size={20} />
            </p>
          )}
          {isReplyOpen && (
            <div
              onClick={onClickReplyBox}
              className="flex cursor-pointer text-sm items-end"
            >
              hide replies
              <ChevronUp size={20} strokeWidth={1.25} />
            </div>
          )}
        </div>
      </div>
      {reply.length > 0 && isReplyOpen && (
        <div className="ml-5 border-l-2 border-gray-400 w-full">
          <CommentsList list={reply} />
        </div>
      )}
    </div>
  );
};

const CommentsList = ({ list }) => {
  return list.map((comment, index) => {
    return (
      <div key={index} className=" rounded-md overflow-hidden">
        <Comment data={comment} />
      </div>
    );
  });
};
const CommentsContainer = () => {
  return (
    <div className="w-full">
      <h1 className="text-xl font-bold mx-3">Comments:</h1>
      <div className="pl-2">
        <CommentsList list={commentsData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
