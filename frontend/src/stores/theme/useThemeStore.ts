import { create } from "zustand";

import { INITIAL_THEME_STORE } from "../../constants/initialValue";

const useThemeStore = create<ThemeStore>((set) => ({
  ...INITIAL_THEME_STORE,
  setTheme: (theme: Theme) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("chat-theme", theme);
    }
    set({ theme });
  },
}));

export default useThemeStore;
