import type { AxiosError } from "axios";

import {
  PATH_API_BE_CHECK_USER,
  PATH_API_BE_LOGIN,
  PATH_API_BE_LOGOUT,
  PATH_API_BE_SIGNUP,
  PATH_API_BE_UPDATE_PROFILE,
} from "../../../constants/routes";
import type { LoginFormData } from "../../../constants/schema/LoginSchema";
import type { ProfileFormData } from "../../../constants/schema/ProfileSchema";
import type { SignupFormData } from "../../../constants/schema/SignupSchema";
import api from "../../../lib/axios";

export const checkUser = async (): Promise<CheckUserResponse> => {
  try {
    const response = await api.get<CheckUserResponse>(PATH_API_BE_CHECK_USER);
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError;
    console.log("Error fetching user", err.response?.data);
    throw err;
  }
};

export const signup = async (data: SignupFormData): Promise<SignupResponse> => {
  try {
    const response = await api.post<SignupResponse>(PATH_API_BE_SIGNUP, data);
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError;
    console.log("Error signing up", err.response?.data);
    throw err;
  }
};

export const login = async (data: LoginFormData): Promise<LoginResponse> => {
  try {
    const response = await api.post<LoginResponse>(PATH_API_BE_LOGIN, data);
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError;
    console.log("Error login", err.response?.data);
    throw err;
  }
};

export const logout = async () => {
  try {
    const response = await api.post(PATH_API_BE_LOGOUT);
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError;
    console.log("Error logout", err.response?.data);
    throw err;
  }
};

export const updateProfile = async (data: ProfileFormData) => {
  try {
    const response = await api.put(PATH_API_BE_UPDATE_PROFILE, data);
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError;
    console.log("Error updating profile", err.response?.data);
    throw err;
  }
};
