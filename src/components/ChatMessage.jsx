/* eslint-disable react/prop-types */
import { CircleUserRound } from "lucide-react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="mx-2 my-1 p-2 flex space-x-2 bg-gray-200 rounded-lg">
      <CircleUserRound strokeWidth={1.25}/>
      <p className="font-bold">{name}</p>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;
