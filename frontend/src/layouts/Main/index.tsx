import { Outlet } from "react-router-dom";

import Navbar from "../../components/shared/Navbar";

const MainLayout = () => (
  <>
    <Navbar />
    <div className="min-h-screen">
      <div className="container mx-auto px-4">
        <Outlet />
      </div>
    </div>
  </>
);

export default MainLayout;
