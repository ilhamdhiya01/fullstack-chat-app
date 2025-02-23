import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { ROUTES } from "../../../constants/routes";
import { useAuth, useLogout } from "../../../hooks/auth";
import Dropdown from "../../ui/Dropdown";

import UserTrigger from "./UserTrigger";

const Navbar = () => {
  const { userAuthenticated } = useAuth();
  const logoutMutation = useLogout();
  const navigate = useNavigate();

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
backdrop-blur-lg bg-base-100/80"
    >
      <nav className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link
              to={ROUTES.HOME}
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">Chatty</h1>
            </Link>
          </div>

          <Dropdown
            align="end"
            triggerChildren={
              <UserTrigger
                picture={userAuthenticated?.profilePic || ""}
                fullName={userAuthenticated?.fullName || ""}
              />
            }
            menuItems={[
              {
                label: "Profile",
                type: "item",
                icon: <User width={16} height={16} />,
                onSelect: () => {
                  navigate(ROUTES.PROFILE);
                },
              },
              {
                label: "Settings",
                type: "item",
                icon: <Settings width={16} height={16} />,
              },
              {
                type: "separator",
              },
              {
                label: "Logout",
                type: "item",
                icon: <LogOut width={16} height={16} />,
                onSelect: () => {
                  logoutMutation.mutateAsync();
                },
              },
            ]}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
