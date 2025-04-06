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
  onlineUsersId: Array<string>;
  messages: Array<MessageResponse>;
}

interface MessageActions {
  setUserSelected: (data: User) => void;
  setShowSidebar: (show: boolean) => void;
  setOnlineUsersId: (usersId: Array<string>) => void;
  setMessages: (messages: Array<MessageResponse>) => void;
}

type MessageStore = MessageState & MessageActions;
