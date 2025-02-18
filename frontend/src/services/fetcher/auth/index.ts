import type { AxiosError } from "axios";

import {
  PATH_API_BE_CHECK_USER,
  PATH_API_BE_LOGIN,
  PATH_API_BE_SIGNUP,
} from "../../../constants/routes";
import type { LoginFormData } from "../../../constants/schema/LoginSchema";
import type { SignupFormData } from "../../../constants/schema/SignupSchema";
import api from "../../../lib/axios";

export const checkUser = async () => {
  try {
    const response = await api.get(PATH_API_BE_CHECK_USER);
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError;
    console.log("Error fetching user", err.response?.data);
    throw err;
  }
};

export const signup = async (data: SignupFormData) => {
  try {
    const response = await api.post(PATH_API_BE_SIGNUP, data);
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError;
    console.log("Error signing up", err.response?.data);
    throw err;
  }
};

export const login = async (data: LoginFormData) => {
  try {
    const response = await api.post(PATH_API_BE_LOGIN, data);
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError;
    console.log("Error login", err.response?.data);
    throw err;
  }
};
