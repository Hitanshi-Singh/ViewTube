import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../assets/utilities/chatSlice";
import { generate, generate2 } from "../assets/utilities/helper";
import { SendHorizontal } from "lucide-react";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const generateMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //api polling
      dispatch(
        addMessage({
          name: generate(),
          message: generate2(),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  });

  return (
    <div className="w-full h-[28rem]  border-gray-200 border-2 m-3 mb-2">
      <h1 className="font-bold mt-3 mx-3">Live chat</h1>
      <div className="overflow-y-scroll h-[22rem] flex flex-col-reverse">
        {generateMessage.map((e, i) => (
          <ChatMessage key={i} name={e.name} message={e.message} />
        ))}
      </div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Hitanshi Singh",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
        className="flex items-center px-3 space-x-4"
      >
        <input
          type="text"
          placeholder="type here"
          className=" py-1 px-2 w-10/12 my-2 rounded-lg outline-1 outline-gray-200 shadow-inner"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          type="submit"
          className="flex items-center justify-center text-green-600 bg-green-100 px-3 py-1 rounded-lg w-16"
        >
          <SendHorizontal size={24} strokeWidth={1.25} />
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
