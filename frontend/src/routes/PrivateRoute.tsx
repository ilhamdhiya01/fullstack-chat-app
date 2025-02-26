import React, { Suspense } from "react";
import { Navigate } from "react-router-dom";

import LoadingScreen from "../components/shared/LoadingScreen";
import { ROUTES } from "../constants/routes";
import { useAuth } from "../hooks/auth";
import useSocket from "../hooks/socket";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { userAuthenticated, isLoading } = useAuth();
  const { connectSocket } = useSocket();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!userAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  connectSocket();

  return <Suspense fallback={<LoadingScreen />}>{children}</Suspense>;
};

export default PrivateRoute;
