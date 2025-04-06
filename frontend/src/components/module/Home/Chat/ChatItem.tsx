/* eslint-disable jsx-a11y/img-redundant-alt */
import classNames from "classnames";
import { CheckCheck } from "lucide-react";

interface ChatItemProps {
  isSender: boolean;
  message: string;
  time: string;
  isFirstMessage?: boolean;
  imageUrl?: string;
}

const ChatItem = ({
  isSender,
  message,
  time,
  isFirstMessage,
  imageUrl,
}: ChatItemProps) => (
  <div
    className={classNames("flex flex-col", {
      "items-end": isSender,
      "items-start": !isSender,
    })}
  >
    <div className="flex items-end gap-1">
      <div
        className={classNames("max-w-full px-3 py-2 rounded-lg relative", {
          "before:content-[''] before:absolute  before:-top-[6px] before:w-3 before:h-3 before:border-[6px] before:border-solid before:border-t-transparent before:border-l-transparent before:rotate-45":
            isFirstMessage,
          "before:border-primary before:right-[-6px] bg-primary text-primary-content":
            isSender,
          "before:border-base-200 before:left-[-6px] bg-base-200": !isSender,
        })}
      >
        {imageUrl && (
          <div className="relative w-[200px] sm:w-[250px] md:w-[300px] rounded-lg overflow-hidden">
            <img
              src={imageUrl}
              alt="Chat image"
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div
          className={classNames("flex flex-col gap-1", {
            "max-w-[200px] sm:max-w-[250px] md:max-w-[300px] pt-2 px-2":
              imageUrl,
            "max-w-[250px] sm:max-w-[350px] md:max-w-[450px]": !imageUrl,
          })}
        >
          <p className="text-sm break-words">{message}</p>
          <div className="flex justify-end">
            <div className="flex items-center gap-1">
              <span className="text-xs min-w-[33px]">{time}</span>
              {isSender && <CheckCheck size={16} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ChatItem;
