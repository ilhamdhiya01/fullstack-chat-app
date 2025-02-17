import { Loader } from "lucide-react";

const LoadingScreen = () => (
  <div className="flex h-screen w-screen items-center justify-center">
    <Loader className="animate-spin size-10" />
  </div>
);

export default LoadingScreen;
