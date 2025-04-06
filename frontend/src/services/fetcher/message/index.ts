import type { AxiosError } from "axios";

import {
  PATH_API_BE_GET_MESSAGES,
  PATH_API_BE_GET_USERS,
  PATH_API_BE_SEND_MESSAGE,
} from "../../../constants/routes";
import api from "../../../lib/axios";
import { replaceString } from "../../../utils/helpers";

export const users = async (): Promise<Array<User>> => {
  try {
    const response = await api.get<Array<User>>(PATH_API_BE_GET_USERS);
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError;
    console.log("Error fetching users", err.response?.data);
    throw err;
  }
};

export const getMessages = async (
  id: string,
): Promise<Array<MessageResponse>> => {
  try {
    const response = await api.get<Array<MessageResponse>>(
      replaceString(PATH_API_BE_GET_MESSAGES, {
        ":id": id,
      }),
    );
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError;
    console.log("Error fetching messages", err.response?.data);
    throw err;
  }
};

export const sendMessage = async (data: any): Promise<MessageResponse> => {
  try {
    const { id, ...body } = data;
    const response = await api.post<MessageResponse>(
      replaceString(PATH_API_BE_SEND_MESSAGE, {
        ":id": id,
      }),
      body,
    );
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError;
    console.log("Error sending message", err.response?.data);
    throw err;
  }
};
