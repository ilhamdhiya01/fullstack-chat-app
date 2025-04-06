/* eslint-disable no-underscore-dangle */
import classNames from "classnames";
import { useMemo } from "react";

import useMessage from "../../../../hooks/message";
import useSocket from "../../../../hooks/socket";
import useMessageStore from "../../../../stores/message/useMessageStore";

import SidebarHeader from "./SidebarHeader";
import UserItem from "./UserItem";

const Sidebar = () => {
  const { usersData = [] } = useMessage();
  const { setUserSelected, userSelected, showSidebar, setShowSidebar } =
    useMessageStore();
  const { onlineUsersId } = useSocket();

  const handleClickUser = (user: User) => {
    setUserSelected(user);
    setShowSidebar(false);
  };

  // Sort users: online users first, then offline
  const sortedUsers = useMemo(
    () =>
      [...usersData].sort((a, b) => {
        const isAOnline = onlineUsersId.includes(a._id);
        const isBOnline = onlineUsersId.includes(b._id);

        if (isAOnline && !isBOnline) return -1;
        if (!isAOnline && isBOnline) return 1;
        return 0;
      }),
    [usersData, onlineUsersId],
  );

  return (
    <aside
      className={classNames(
        "fixed md:relative h-full lg:w-96 border-r border-base-300 flex flex-col transition-transform duration-300 bg-base-200 mt-16 md:mt-0",
        {
          "-translate-x-full md:translate-x-0 w-0 md:w-auto": !showSidebar,
          "translate-x-0 w-full md:w-auto": showSidebar,
        },
      )}
    >
      <SidebarHeader />
      <div className="overflow-y-auto w-full">
        {sortedUsers.map((user) => (
          <UserItem
            key={user._id}
            user={user}
            isSelected={user._id === userSelected?._id}
            onSelected={() => handleClickUser(user)}
            isOnline={onlineUsersId.includes(user._id)}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
