import { useQuery } from "@tanstack/react-query";

import { checkUser } from "../../services/fetcher/auth";

const useAuth = () => {
  const {
    data: userAuthenticated,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["check-user"],
    queryFn: checkUser,
  });

  return { userAuthenticated, isLoading, refetch };
};

export default useAuth;
