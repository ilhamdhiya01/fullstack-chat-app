import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { tv } from "tailwind-variants";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined" | "ghost" | "link";
  size?: "xs" | "sm" | "md" | "lg";
  type?: "button" | "submit";
  color?: "primary" | "neutral" | "error" | "warning" | "info" | "success";
  label?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  fullWidth?: boolean;
  isIconButton?: boolean;
  withAnimation?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  to?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      label,
      color = "primary",
      variant = "contained",
      size = "md",
      type = "button",
      isLoading = false,
      isDisabled = false,
      fullWidth = false,
      isIconButton = false,
      withAnimation = false,
      startIcon,
      endIcon,
      to,
      ...props
    },
    ref,
  ) => {
    const navigate = useNavigate();

    const button = tv({
      base: "btn",
      variants: {
        variant: {
          contained: "",
          outlined: "btn-outline",
          ghost: "btn-ghost",
          link: "btn-link",
        },
        size: {
          xs: "btn-xs",
          sm: "btn-sm",
          md: "",
          lg: "btn-lg",
        },
        color: {
          primary: "btn-primary",
          neutral: "btn-neutral",
          error: "btn-error",
          warning: "btn-warning",
          info: "btn-info",
          success: "btn-success",
        },
        fullWidth: {
          true: "w-full btn-block",
          false: "w-fit",
        },
        withAnimation: {
          true: "",
          false: "no-animation",
        },
      },
      defaultVariants: {
        variant: "contained",
        size: "md",
        fullWidth: false,
        withAnimation: false,
      },
    });

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (to && variant === "link") {
        e.preventDefault();
        navigate(to);
      }
      props.onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type={type}
        {...props}
        className={button({
          variant,
          size,
          color,
          fullWidth,
          withAnimation,
          className,
        })}
        onClick={handleClick}
        disabled={isDisabled || isLoading}
      >
        {isLoading ? (
          <span className="loading loading-spinner" />
        ) : (
          <>
            {startIcon && <div className="mr-1">{startIcon}</div>}
            {label || null}
            {endIcon && <div className="ml-1">{endIcon}</div>}
            {children}
          </>
        )}
      </button>
    );
  },
);

export default Button;
