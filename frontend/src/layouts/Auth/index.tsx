import { Outlet } from "react-router-dom";

const AuthLayout = () => (
  <div className="min-h-screen">
    <div className="container mx-auto px-4">
      <Outlet />
    </div>
  </div>
);

export default AuthLayout;
