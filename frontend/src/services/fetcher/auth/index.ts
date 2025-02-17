import type { AxiosError } from "axios";
import api from "../../../lib/axios";
import { SignupFormData } from "../../../constants/schema/SignupSchema";
import { LoginFormData } from "../../../constants/schema/LoginSchema";

export const checkUser = async () => {
  try {
    const response = await api.get("/auth/check");
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError;
    console.log("Error fetching user", err.response?.data);
    throw err;
  }
};

export const signup = async (data: SignupFormData) => {
  try {
    const response = await api.post("/auth/signup", data);
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError;
    console.log("Error signing up", err.response?.data);
    throw err;
  }
};

export const login = async (data: LoginFormData) => {
  try {
    const response = await api.post("/auth/login", data);
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError;
    console.log("Error login", err.response?.data);
    throw err;
  }
};
