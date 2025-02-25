/* eslint-disable react/button-has-type */
import { X } from "lucide-react";

import useMessageStore from "../../../../stores/message/useMessageStore";
import Avatar from "../../../shared/Avatar";

const ChatHeader = () => {
  const { userSelected, setShowSidebar } = useMessageStore();
  return (
    <div className="px-6 py-2.5 border-b border-base-300 bg-base-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <Avatar image={userSelected?.profilePic as string} size="sm" />

          {/* User info */}
          <div>
            <h3 className="font-medium">{userSelected?.fullName}</h3>
            <p className="text-sm text-base-content/70">Online</p>
          </div>
        </div>

        {/* Close button */}
        <button className="md:hidden" onClick={() => setShowSidebar(true)}>
          <X />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
