import { useQuery } from "@tanstack/react-query";

import { CHECK_USER } from "../../constants/queryKey";
import { checkUser } from "../../services/fetcher/auth";

const useAuth = () => {
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

export default useAuth;
