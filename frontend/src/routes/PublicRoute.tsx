import React, { Suspense } from "react";
import { Navigate } from "react-router-dom";

import LoadingScreen from "../components/shared/LoadingScreen";
import ROUTES from "../constants/routes";
import useAuth from "../hooks/auth";

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const { userAuthenticated } = useAuth();

  if (userAuthenticated) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return <Suspense fallback={<LoadingScreen />}>{children}</Suspense>;
};

export default PublicRoute;
