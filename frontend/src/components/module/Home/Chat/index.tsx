import { useEffect, useRef } from "react";

import useMessage from "../../../../hooks/message";
import useMessageStore from "../../../../stores/message/useMessageStore";

import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatList from "./ChatList";
import ChatLoading from "./ChatLoading";

const ChatContent = () => {
  const { isLoadingMessages } = useMessage();
  const { messages, userSelected } = useMessageStore();
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages or user changes
  useEffect(() => {
    if (chatContainerRef.current && !isLoadingMessages) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, userSelected, isLoadingMessages]);

  return (
    <>
      {isLoadingMessages && <ChatLoading />}
      <ChatHeader />
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto  md:py-6">
        <ChatList />
      </div>
      <div className="p-2 md:p-4 w-full bg-base-200">
        <ChatInput />
      </div>
    </>
  );
};

export default ChatContent;
