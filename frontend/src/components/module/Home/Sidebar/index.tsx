/* eslint-disable no-underscore-dangle */
import classNames from "classnames";

import useMessage from "../../../../hooks/message";
import useMessageStore from "../../../../stores/message/useMessageStore";

import SidebarHeader from "./SidebarHeader";
import UserItem from "./UserItem";

const Sidebar = () => {
  const { usersData = [] } = useMessage();
  const { setUserSelected, userSelected, showSidebar, setShowSidebar } =
    useMessageStore();

  const handleCLlickUser = (user: User) => {
    setUserSelected(user);
    setShowSidebar(false);
  };

  return (
    <aside
      className={classNames(
        "fixed md:relative h-full lg:w-96 border-r border-base-300 flex flex-col transition-transform duration-300 bg-base-200",
        {
          "-translate-x-full md:translate-x-0 w-0 md:w-auto": !showSidebar,
          "translate-x-0 w-full md:w-auto": showSidebar,
        },
      )}
    >
      <SidebarHeader />
      <div className="overflow-y-auto w-full">
        {usersData.map((user) => (
          <UserItem
            key={user._id}
            user={user}
            isSelected={user._id === userSelected?._id}
            onSelected={() => handleCLlickUser(user)}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
