interface ThemeState {
  theme: Theme;
}

interface ThemeActions {
  setTheme: (theme: Theme) => void;
}

type ThemeStore = ThemeState & ThemeActions;

interface MessageState {
  userSelected: User | null;
  showSidebar: boolean;
}

interface MessageActions {
  setUserSelected: (data: User) => void;
  setShowSidebar: (show: boolean) => void;
}

type MessageStore = MessageState & MessageActions;
