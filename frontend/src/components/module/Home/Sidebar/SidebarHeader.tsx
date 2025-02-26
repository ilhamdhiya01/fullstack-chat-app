import { Users } from "lucide-react";

const SidebarHeader = () => (
  <div className="border-b border-base-300 w-full p-5">
    <div className="flex items-center gap-2">
      <Users className="size-6" />
      <h2 className="font-medium">Users</h2>
    </div>
  </div>
);

export default SidebarHeader;
