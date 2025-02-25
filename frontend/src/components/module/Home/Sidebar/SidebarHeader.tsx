import { Users } from "lucide-react";

const SidebarHeader = () => (
  <div className="border-b border-base-300 w-full p-5 mt-8 md:mt-0">
    <div className="flex items-center gap-2">
      <Users className="size-6" />
      <span className="font-medium block">Users</span>
    </div>
  </div>
);

export default SidebarHeader;
