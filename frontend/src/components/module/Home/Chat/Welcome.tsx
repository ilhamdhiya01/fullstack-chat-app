import { MessageSquare } from "lucide-react";

import useMessageStore from "../../../../stores/message/useMessageStore";
import Button from "../../../ui/Button";

const Welcome = () => {
  const { setShowSidebar } = useMessageStore();
  return (
    <div className="w-full h-full flex flex-1 flex-col items-center justify-center p-16 bg-base-300">
      <div className="max-w-md text-center space-y-3">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-bounce">
              <MessageSquare className="w-8 h-8 text-primary " />
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold">Welcome to Chatty!</h2>
        <p className="text-base-content/60">
          Select a conversation from the sidebar to start chatting
        </p>
        <div className="block md:hidden pt-5">
          <Button
            onClick={() => setShowSidebar(true)}
            variant="outlined"
            label="Start a new conversation"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
