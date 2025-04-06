/* eslint-disable no-underscore-dangle */
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";

import { MESSAGES, USERS_MESSAGE } from "../../constants/queryKey";
import { getMessages, users } from "../../services/fetcher/message";
import useMessageStore from "../../stores/message/useMessageStore";
import useSocket from "../socket";

const useMessage = () => {
  const { userSelected, setMessages, messages } = useMessageStore();
  const { socket } = useSocket();
  const queryClient = useQueryClient();

  const { data: usersData, isLoading: isLoadingUsers } = useQuery({
    queryKey: [USERS_MESSAGE],
    queryFn: users,
  });
  const { data: messagesData, isLoading: isLoadingMessages } = useQuery({
    queryKey: [MESSAGES, userSelected?._id],
    queryFn: () => getMessages(userSelected?._id as string),
    enabled: !!userSelected?._id,
  });

  useEffect(() => {
    if (messagesData) {
      setMessages(messagesData);
    }
  }, [messagesData, setMessages]);

  // Memoize handler to prevent recreation on every render
  const handleNewMessage = useCallback(
    (message: MessageResponse) => {
      if (!userSelected?._id) return;

      // Check if message is from/to selected user
      const isMessageFromSelectedUser = message.senderId === userSelected._id;
      const isMessageToSelectedUser = message.receiverId === userSelected._id;

      if (!isMessageFromSelectedUser && !isMessageToSelectedUser) return;

      // Update zustand store using callback to avoid race conditions
      setMessages([...messages, message]);

      // Update react-query cache
      queryClient.setQueryData(
        [MESSAGES, userSelected._id],
        (oldData: Array<MessageResponse> = []) => [...oldData, message],
      );
    },
    [userSelected?._id, setMessages, messages, queryClient],
  );

  // Listen for new messages via socket
  useEffect(() => {
    if (!socket || !userSelected?._id) return;

    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, [socket, userSelected?._id, handleNewMessage]);

  return {
    usersData,
    messagesData,
    isLoadingUsers,
    isLoadingMessages,
  };
};

export default useMessage;
