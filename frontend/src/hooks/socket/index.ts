/* eslint-disable no-underscore-dangle */
import { useEffect, useRef } from "react";
import type { Socket } from "socket.io-client";
import { io } from "socket.io-client";

import { useAuth } from "../auth";

const useSocket = () => {
  const { userAuthenticated } = useAuth();
  const socketRef = useRef<Socket | null>(null);
  const BASE_URL = "http://localhost:5001";

  const connectSocket = () => {
    if (!userAuthenticated || socketRef.current?.connected) return;

    try {
      const socket = io(BASE_URL, {
        query: {
          userId: userAuthenticated._id,
        },
      });

      socket.connect();
      socketRef.current = socket;

      // Handle connection events
      socket.on("connect", () => {
        console.log("Socket connected!");
      });

      socket.on("connect_error", (error) => {
        console.error("Socket connection error:", error);
      });

      socket.on("getOnlineUsers", (users) => {
        console.log("Online users:", users);
      });
    } catch (error) {
      console.error("Error creating socket:", error);
    }
  };

  const disconnectSocket = () => {
    if (socketRef.current?.connected) {
      socketRef.current.disconnect();
      socketRef.current = null;
    }
  };

  // Cleanup on unmount
  useEffect(
    () => () => {
      disconnectSocket();
    },
    [],
  );

  return { socket: socketRef.current, connectSocket, disconnectSocket };
};

export default useSocket;
