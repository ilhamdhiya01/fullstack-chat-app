interface UserTriggerProps {
  picture: string;
  fullName: string;
}

const UserTrigger = ({ picture, fullName }: UserTriggerProps) => (
  <div className="cursor-pointer inline-flex items-center gap-2">
    <img
      src={picture || "/avatar.png"}
      alt="User"
      className="size-10 rounded-full object-cover border "
    />
    <span className="text-sm">{fullName}</span>
  </div>
);

export default UserTrigger;
