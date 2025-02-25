/* eslint-disable no-underscore-dangle */
import { useQuery } from "@tanstack/react-query";

import { MESSAGES, USERS_MESSAGE } from "../../constants/queryKey";
import { getMessages, users } from "../../services/fetcher/message";
import useMessageStore from "../../stores/message/useMessageStore";

const useMessage = () => {
  const { userSelected } = useMessageStore();
  const { data: usersData, isLoading: isLoadingUsers } = useQuery({
    queryKey: [USERS_MESSAGE],
    queryFn: users,
  });
  const { data: messagesData, isLoading: isLoadingMessages } = useQuery({
    queryKey: [MESSAGES, userSelected?._id],
    queryFn: () => getMessages(userSelected?._id as string),
    enabled: !!userSelected?._id,
  });

  return {
    usersData,
    messagesData,
    isLoadingUsers,
    isLoadingMessages,
  };
};

export default useMessage;
