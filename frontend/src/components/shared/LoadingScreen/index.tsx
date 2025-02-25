import { MessageSquare } from "lucide-react";

import useThemeStore from "../../../stores/theme/useThemeStore";

const LoadingScreen = () => {
  const { theme } = useThemeStore();
  return (
    <div
      data-theme={theme}
      className="flex h-screen w-screen items-center justify-center"
    >
      <div className="flex justify-center gap-4 mb-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-bounce">
            <MessageSquare className="w-8 h-8 text-primary " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
