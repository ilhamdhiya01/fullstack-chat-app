/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { tv } from "tailwind-variants";

interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
  image: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  ({ image, size, className, ...props }, ref) => {
    const avatar = tv({
      base: "rounded-full object-cover",
      variants: {
        size: {
          sm: "size-10",
          md: "size-12",
          lg: "size-14",
          xl: "size-16",
        },
      },
    });

    return (
      <img
        ref={ref}
        src={image || "/avatar.png"}
        alt={image}
        className={avatar({ size, className })}
        {...props}
      />
    );
  },
);

export default Avatar;
