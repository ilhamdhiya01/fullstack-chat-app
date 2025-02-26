import useMessage from "../../../../hooks/message";

import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatList from "./ChatList";
import ChatLoading from "./ChatLoading";

const ChatContent = () => {
  const { isLoadingMessages } = useMessage();

  return (
    <>
      {isLoadingMessages && <ChatLoading />}
      <ChatHeader />
      <div className="flex-1 overflow-y-auto  md:py-6">
        <ChatList />
      </div>
      <div className="p-2 md:p-4 w-full bg-base-200">
        <ChatInput />
      </div>
    </>
  );
};

export default ChatContent;
