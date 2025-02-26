import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { CHECK_USER } from "../../constants/queryKey";
import { ROUTES } from "../../constants/routes";
import { checkUser, logout } from "../../services/fetcher/auth";
import useSocket from "../socket";

export const useAuth = () => {
  const {
    data: userAuthenticated,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [CHECK_USER],
    queryFn: checkUser,
  });

  return { userAuthenticated, isLoading, refetch };
};

export const useLogout = () => {
  const { refetch } = useAuth();
  const { disconnectSocket } = useSocket();

  return useMutation({
    mutationFn: logout,
    onSuccess: async (res) => {
      // Clear any cached data
      await refetch();
      disconnectSocket();

      // Force navigation to login
      window.location.href = ROUTES.LOGIN;
      toast.success(res.message);
    },
    onError: (error: any) => {
      toast.error(error.response?.data.message);
    },
  });
};
