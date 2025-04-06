import { create } from "zustand";

import { INITIAL_MESSAGE_STORE } from "../../constants/initialValue";

const useMessageStore = create<MessageStore>((set) => ({
  ...INITIAL_MESSAGE_STORE,
  setUserSelected: (user: User | null) => set({ userSelected: user }),
  setShowSidebar: (show: boolean) => set({ showSidebar: show }),
  setOnlineUsersId: (usersId: Array<string>) => set({ onlineUsersId: usersId }),
  setMessages: (messages: Array<MessageResponse>) => set({ messages }),
}));

export default useMessageStore;
