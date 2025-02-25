import { MessageSquare } from "lucide-react";

const ChatLoading = () => (
  <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[2px] bg-base-content/10 z-50">
    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-bounce">
      <MessageSquare className="w-8 h-8 text-primary" />
    </div>
  </div>
);

export default ChatLoading;
