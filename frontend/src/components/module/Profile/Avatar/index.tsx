import classNames from "classnames";
import { Camera } from "lucide-react";

interface AvatarProps {
  picture: string;
  disabled: boolean;
  isLaoding: boolean;
  handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Avatar = ({
  picture,
  handleImageUpload,
  disabled,
  isLaoding,
}: AvatarProps) => (
  <div className="flex flex-col items-center gap-4">
    <div className="relative">
      <img
        src={picture}
        alt="Profile"
        className="size-24 md:size-32 rounded-full object-cover border-4 border-base-content"
      />
      <label
        htmlFor="avatar-upload"
        className={classNames(
          "absolute bottom-0 right-0 p-2 rounded-full  transition-all duration-200",
          {
            "hover:scale-105 cursor-pointer bg-base-content": !disabled,
            "cursor-not-allowed bg-base-content/50": disabled,
          },
        )}
      >
        <Camera className="w-4 h-4 md:w-5 md:h-5 text-base-200" />
        <input
          type="file"
          id="avatar-upload"
          className="hidden"
          accept="image/*"
          onChange={handleImageUpload}
          disabled={disabled}
        />
      </label>
    </div>
    <p className="text-sm text-base-content/70 text-center ">
      {isLaoding
        ? "Uploading..."
        : "Click the camera icon to update your photo"}
    </p>
  </div>
);

export default Avatar;
