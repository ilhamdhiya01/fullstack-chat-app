export const INITIAL_THEME_STORE: ThemeState = {
  theme:
    (typeof window !== "undefined" &&
      (localStorage.getItem("chat-theme") as Theme)) ||
    "coffee",
};

export const INITIAL_MESSAGE_STORE: MessageState = {
  userSelected: null,
  showSidebar: false,
  onlineUsersId: [],
  messages: [],
};
