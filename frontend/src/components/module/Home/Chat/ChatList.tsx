/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-underscore-dangle */

import classNames from "classnames";
import { isSameDay, parseISO } from "date-fns";

import useMessage from "../../../../hooks/message";
import useMessageStore from "../../../../stores/message/useMessageStore";
import { formatMessageTime } from "../../../../utils/helpers";

import ChatItem from "./ChatItem";
import DateDivider from "./DateDivider";

const ChatList = () => {
  const { userSelected } = useMessageStore();
  const { messagesData } = useMessage();
  const renderDateDivider = (currentDate: string, prevDate?: string) => {
    if (!prevDate) return true;

    const currentMessageDate = parseISO(currentDate);
    const prevMessageDate = parseISO(prevDate);

    return !isSameDay(currentMessageDate, prevMessageDate);
  };
  return (
    <>
      {messagesData?.map((item, index) => {
        const isFirstMessage =
          index === 0 || messagesData[index - 1].senderId !== item.senderId;
        const isSenderChanged =
          index > 0 && messagesData[index - 1].senderId !== item.senderId;
        const showDateDivider = renderDateDivider(
          item.createdAt,
          index > 0 ? messagesData[index - 1].createdAt : undefined,
        );

        return (
          <>
            {showDateDivider && <DateDivider date={item.createdAt} />}
            <div
              key={item._id}
              className={classNames("px-6 md:px-8", {
                "mt-10": isSenderChanged,
                "mt-1": !isSenderChanged,
              })}
            >
              <ChatItem
                isSender={item.senderId === userSelected?._id}
                message={item.text}
                time={formatMessageTime(item.createdAt)}
                isFirstMessage={isFirstMessage}
              />
            </div>
          </>
        );
      })}
    </>
  );
};

export default ChatList;
