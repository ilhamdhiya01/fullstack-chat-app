import Avatar from "../Avatar";

interface UserTriggerProps {
  picture: string;
  fullName: string;
  email: string;
}

const UserTrigger = ({ picture, fullName, email }: UserTriggerProps) => (
  <div className="cursor-pointer inline-flex items-center gap-2">
    <Avatar image={picture} size="sm" />
    <div className="flex flex-col">
      <span className="text-sm">{fullName}</span>
      <span className="text-xs text-base-content/60">{email}</span>
    </div>
  </div>
);

export default UserTrigger;
