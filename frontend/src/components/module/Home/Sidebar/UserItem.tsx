/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from "classnames";

import Avatar from "../../../shared/Avatar";

interface UserItemProps {
  user: User;
  isSelected?: boolean;
  onSelected: () => void;
  isOnline: boolean;
}

const UserItem = ({
  user,
  isSelected = false,
  onSelected,
  isOnline,
}: UserItemProps) => (
  <div
    className={classNames(
      "w-full p-3 flex items-center gap-3 transition-colors ring-1 ring-base-300",
      {
        "bg-base-content/10": isSelected,
        "hover:bg-base-content/5 cursor-pointer": !isSelected,
      },
    )}
    onClick={onSelected}
  >
    <div className="relative">
      <Avatar image={user.profilePic} className="size-11" />
      <span
        className={classNames(
          "absolute bottom-1 right-1 size-2  rounded-full ring-1 ring-zinc-900",
          { "bg-green-500": isOnline, "bg-red-500": !isOnline },
        )}
      />
    </div>

    <div className="flex-1 min-w-0">
      <div className="text-sm font-semibold truncate">{user.fullName}</div>
      {!isOnline ? (
        <span className="text-xs text-base-content/60 block">Offline</span>
      ) : (
        <p className="text-xs text-base-content/60 truncate">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          nostrum minus repudiandae qui non, eveniet voluptate nulla quaerat
          repellendus perferendis.
        </p>
      )}
    </div>
  </div>
);

export default UserItem;
