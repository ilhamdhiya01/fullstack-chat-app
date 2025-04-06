import { Outlet } from "react-router-dom";

import Navbar from "../../components/shared/Navbar";
import useThemeStore from "../../stores/theme/useThemeStore";

const MainLayout = () => {
  const { theme } = useThemeStore();
  return (
    <div data-theme={theme}>
      <Navbar />
      <div className="min-h-screen">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
