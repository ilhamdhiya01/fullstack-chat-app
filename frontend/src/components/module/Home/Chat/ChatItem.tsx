import classNames from "classnames";
import { CheckCheck } from "lucide-react";

interface ChatItemProps {
  isSender: boolean;
  message: string;
  time: string;
  isFirstMessage?: boolean;
}

const ChatItem = ({
  isSender,
  message,
  time,
  isFirstMessage,
}: ChatItemProps) => (
  <div
    className={classNames("flex flex-col", {
      "items-end": isSender,
      "items-start": !isSender,
    })}
  >
    <div className="flex items-end gap-1">
      {isSender && (
        <span className="text-xs text-base-content/60 min-w-[33px]">
          {time}
        </span>
      )}

      <div
        className={classNames("max-w-full px-3 py-2 rounded-md relative", {
          "before:content-[''] before:absolute  before:-top-[6px] before:w-3 before:h-3 before:border-[6px] before:border-solid before:border-t-transparent before:border-l-transparent before:rotate-45":
            isFirstMessage,
          "before:border-primary before:right-[-6px] bg-primary text-primary-content":
            isSender,
          "before:border-base-200 before:left-[-6px] bg-base-200": !isSender,
        })}
      >
        <div className="flex items-end justify-end gap-1">
          <p className="text-sm">{message}</p>
          {isSender && <CheckCheck size={16} />}
        </div>
      </div>
      {!isSender && (
        <span className="text-xs text-base-content/60 min-w-[45px]">
          {time}
        </span>
      )}
    </div>
  </div>
);

export default ChatItem;
