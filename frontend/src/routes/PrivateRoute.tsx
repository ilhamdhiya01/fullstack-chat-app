import React, { Suspense } from "react";
import { Navigate } from "react-router-dom";

import LoadingScreen from "../components/shared/LoadingScreen";
import ROUTES from "../constants/routes";
import useAuth from "../hooks/auth";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { userAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!userAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <Suspense fallback={<LoadingScreen />}>{children}</Suspense>;
};

export default PrivateRoute;
