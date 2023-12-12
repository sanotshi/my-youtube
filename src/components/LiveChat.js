import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utilities/chatSlice";
import { generateRandomNames, makeRandomMessage } from "../utilities/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();

  const ChatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);
    return () => clearInterval(timer);
  });
  return (
    <>
      <div className="ml-2 p-2 border border-black h-[750px] bg-zinc-200 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {ChatMessage.map((chat, index) => (
          <ChatMessages key={index} name={chat.name} message={chat.message} />
        ))}
      </div>
      <form
        className="px-2 ml-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "santu",
              message: liveMessage,
            })
          );
          setLiveMessage("")
        }}
      >
        <input
          type="text"
          className="p-1 border border-black w-96"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
      />
        <button className="px-2 mx-1 p-1 bg-green-100">Submit</button>
      </form>
    </>
  );
};

export default LiveChat;
