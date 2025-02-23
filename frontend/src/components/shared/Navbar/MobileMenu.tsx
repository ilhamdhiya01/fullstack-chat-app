/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as Portal from "@radix-ui/react-portal";
import { LogOut, Settings, User, X } from "lucide-react";
import { useEffect } from "react";
import { tv } from "tailwind-variants";

import { ROUTES } from "../../../constants/routes";
import { useLogout } from "../../../hooks/auth";
import useThemeStore from "../../../stores/theme/useThemeStore";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  user?: User;
  onNavigate: (path: string) => void;
}

const sidebar = tv({
  base: "fixed inset-y-0 right-0 w-64 bg-base-200 shadow-xl transform transition-transform duration-300 ease-in-out z-30",
  variants: {
    isOpen: {
      true: "translate-x-0",
      false: "translate-x-full",
    },
  },
});

const overlay = tv({
  base: "fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-20",
  variants: {
    isOpen: {
      true: "opacity-50 pointer-events-auto",
      false: "opacity-0 pointer-events-none",
    },
  },
});

const MobileMenu = ({ isOpen, onClose, user, onNavigate }: MobileMenuProps) => {
  const logoutMutation = useLogout();
  const { theme } = useThemeStore();

  // Prevent scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleNavigate = (path: string) => {
    onNavigate(path);
    onClose();
  };

  return (
    <Portal.Root>
      {/* Overlay */}
      <div className={overlay({ isOpen })} onClick={onClose} />

      {/* Sidebar */}
      <div data-theme={theme} className={sidebar({ isOpen })}>
        <div className="relative">
          <div className="absolute right-2 top-2">
            <button
              type="button"
              onClick={onClose}
              className=" p-2 hover:bg-base-300 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* User Info */}
          <div className="border-b border-base-content/20 p-3 bg-base-300 pt-8">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="aspect-square rounded-full w-10 h-10 border border-base-content relative">
                <img
                  src={user?.profilePic || "/avatar.png"}
                  alt="User"
                  className="rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-1 w-2 h-2 border border-white bg-green-500 rounded-full" />
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold">{user?.fullName}</span>
                <span className="text-sm text-base-content/60">
                  {user?.email}
                </span>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="p-3 space-y-2">
            <div
              className="flex items-center gap-3 p-3 hover:bg-base-content/20 rounded-lg cursor-pointer"
              onClick={() => handleNavigate(ROUTES.PROFILE)}
            >
              <User size={18} />
              <span>Profile</span>
            </div>
            <div
              className="flex items-center gap-3 p-3 hover:bg-base-content/20 rounded-lg cursor-pointer"
              onClick={() => handleNavigate(ROUTES.SETTINGS)}
            >
              <Settings size={18} />
              <span>Settings</span>
            </div>
            <div
              className="flex items-center gap-3 p-3 hover:bg-base-content/20 rounded-lg cursor-pointer text-error"
              onClick={() => logoutMutation.mutateAsync()}
            >
              <LogOut size={18} />
              <span>Logout</span>
            </div>
          </nav>
        </div>
      </div>
    </Portal.Root>
  );
};

export default MobileMenu;
