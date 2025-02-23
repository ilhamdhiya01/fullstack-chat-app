/* eslint-disable react/button-has-type */
import classNames from "classnames";
import { Send } from "lucide-react";

import { PREVIEW_MESSAGES } from "../../../../constants/mock";

const MockChat = () => (
  <>
    {/* Mock Chat UI */}
    <div className="bg-base-100 rounded-xl shadow-sm overflow-hidden">
      {/* Chat Header */}
      <div className="px-4 py-3 border-b border-base-300 bg-base-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium">
            J
          </div>
          <div>
            <h3 className="font-medium text-sm">John Doe</h3>
            <p className="text-xs text-base-content/70">Online</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-base-100">
        {PREVIEW_MESSAGES.map((message) => (
          <div
            key={message.id}
            className={classNames("flex", {
              "justify-end": message.isSent,
              "justify-start": !message.isSent,
            })}
          >
            <div
              className={classNames("max-w-[80%] rounded-xl p-3 shadow-sm", {
                "bg-primary text-primary-content": message.isSent,
                "bg-base-200": !message.isSent,
              })}
            >
              <p className="text-sm">{message.content}</p>
              <p
                className={classNames("text-[10px] mt-1.5", {
                  "text-primary-content/70": message.isSent,
                  "text-base-content/70": !message.isSent,
                })}
              >
                12:00 PM
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="p-4 border-t border-base-300 bg-base-100">
        <div className="flex gap-2">
          <input
            type="text"
            className="input input-bordered flex-1 text-sm h-10"
            placeholder="Type a message..."
            value="This is a preview"
            readOnly
          />
          <button className="btn btn-primary h-10 min-h-0">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  </>
);

export default MockChat;
