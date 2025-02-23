import { Loader } from "lucide-react";

import useThemeStore from "../../../stores/theme/useThemeStore";

const LoadingScreen = () => {
  const { theme } = useThemeStore();
  return (
    <div
      data-theme={theme}
      className="flex h-screen w-screen items-center justify-center"
    >
      <Loader className="animate-spin size-10 text-base-content" />
    </div>
  );
};

export default LoadingScreen;
