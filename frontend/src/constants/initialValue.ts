export const INITIAL_THEME_STORE: ThemeState = {
  theme:
    (typeof window !== "undefined" &&
      (localStorage.getItem("chat-theme") as Theme)) ||
    "coffee",
};
