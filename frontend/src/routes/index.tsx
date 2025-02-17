import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import ROUTES from "../constants/routes";
import AuthLayout from "../layouts/Auth";
import MainLayout from "../layouts/Main";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import LoadingScreen from "../components/shared/LoadingScreen";

const HomePage = lazy(() => import("../pages/Home"));
const LoginPage = lazy(() => import("../pages/Login"));
const ProfilePage = lazy(() => import("../pages/Profile"));
const SettingsPage = lazy(() => import("../pages/Settings"));
const SignupPage = lazy(() => import("../pages/Signup"));

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <PrivateRoute>
        <Suspense fallback={<LoadingScreen />}>
          <MainLayout />
        </Suspense>
      </PrivateRoute>
    ),
    children: [
      {
        path: ROUTES.HOME,
        element: <HomePage />,
      },
      {
        path: ROUTES.PROFILE,
        element: <ProfilePage />,
      },
      {
        path: ROUTES.SETTINGS,
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: "",
    element: (
      <PublicRoute>
        <Suspense fallback={<LoadingScreen />}>
          <AuthLayout />
        </Suspense>
      </PublicRoute>
    ),
    children: [
      {
        path: ROUTES.SIGNUP,
        element: <SignupPage />,
      },
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
