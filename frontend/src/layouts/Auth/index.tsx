import { Outlet } from "react-router-dom";

import useThemeStore from "../../stores/theme/useThemeStore";

const AuthLayout = () => {
  const { theme } = useThemeStore();
  return (
    <div data-theme={theme} className="min-h-screen">
      <div className="container mx-auto px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
