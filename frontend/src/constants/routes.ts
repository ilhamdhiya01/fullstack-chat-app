export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  PROFILE: "/profile",
  SETTINGS: "/settings",
  SIGNUP: "/signup",
} as const;

// API Routes Auth
export const PATH_API_BE_CHECK_USER = "/auth/check";
export const PATH_API_BE_LOGIN = "/auth/login";
export const PATH_API_BE_LOGOUT = "/auth/logout";
export const PATH_API_BE_SIGNUP = "/auth/signup";
export const PATH_API_BE_UPDATE_PROFILE = "/auth/update-profile";

// API Routes Chat
export const PATH_API_BE_GET_USERS = "/messages/users";
export const PATH_API_BE_GET_MESSAGES = "/messages/:id";
export const PATH_API_BE_SEND_MESSAGE = "/messages/send/:id";
