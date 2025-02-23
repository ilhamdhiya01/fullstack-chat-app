import { LogOut, Menu, MessageSquare, Settings, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ROUTES } from "../../../constants/routes";
import { useAuth, useLogout } from "../../../hooks/auth";
import Dropdown from "../../ui/Dropdown";

import MobileMenu from "./MobileMenu";
import UserTrigger from "./UserTrigger";

const Navbar = () => {
  const { userAuthenticated } = useAuth();
  const logoutMutation = useLogout();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-10
backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="navbar">
          <div className="flex-1">
            <Link
              to={ROUTES.HOME}
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <h1 className="text-sm md:text-lg font-bold">Chasyk</h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <Dropdown
              triggerChildren={
                <UserTrigger
                  picture={userAuthenticated?.profilePic || ""}
                  fullName={userAuthenticated?.fullName || ""}
                  email={userAuthenticated?.email || ""}
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
                  onSelect: () => {
                    navigate(ROUTES.SETTINGS);
                  },
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

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden btn btn-ghost btn-circle"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        user={userAuthenticated}
        onNavigate={navigate}
      />
    </header>
  );
};

export default Navbar;
