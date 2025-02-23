/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/display-name */

import classNames from "classnames";
import type { MouseEventHandler } from "react";
import React, { forwardRef } from "react";
import { tv } from "tailwind-variants";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  inputSize?: "xs" | "sm" | "md" | "lg";
  placeholder?: string;
  fullWidth?: boolean;
  inputVariant?: "default" | "ghost" | "primary" | "error";
  inputPrefix?: string | React.ReactElement;
  inputSuffix?: string | React.ReactElement;
  prefixOnClick?: MouseEventHandler | undefined;
  suffixOnClick?: MouseEventHandler | undefined;
  isRequired?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      // className,
      type = "text",
      inputSize = "md",
      label,
      errorMessage,
      placeholder,
      fullWidth = false,
      inputVariant = "default",
      inputPrefix,
      inputSuffix,
      prefixOnClick,
      suffixOnClick,
      isRequired = false,
      ...props
    },
    ref,
  ) => {
    const input = tv({
      base: "input",
      variants: {
        size: {
          xs: "input-xs",
          sm: "input-sm",
          md: "input-md",
          lg: "input-lg",
        },
        variant: {
          default: "input-bordered",
          ghost: "input-ghost",
          primary: "input-bordered input-primary",
          error: "input-bordered input-error",
        },
        fullWidth: {
          true: "w-full",
          false: "w-full max-w-xs",
        },
      },
      defaultVariants: {
        size: "md",
        variant: "default",
        fullWidth: false,
      },
    });
    return (
      <div
        className={classNames("form-control w-full", {
          "max-w-xs": !fullWidth,
        })}
      >
        {label && (
          <label className="label">
            <span className="label-text font-medium flex items-center gap-1">
              {label}
              {isRequired && <span className="text-red-500">*</span>}
            </span>
          </label>
        )}
        <div
          className={input({
            size: inputSize,
            variant: inputVariant,
            fullWidth,
            className: "flex items-center gap-2",
          })}
        >
          {inputPrefix && (
            <div
              className={classNames({
                "pointer-events-none": !prefixOnClick,
                "cursor-pointer": prefixOnClick,
              })}
              onClick={prefixOnClick}
            >
              {inputPrefix}
            </div>
          )}
          <input
            ref={ref}
            {...props}
            type={type}
            placeholder={placeholder}
            className="w-full placeholder:text-base-content/50"
          />
          {inputSuffix && (
            <div
              className={classNames({
                "pointer-events-none": !suffixOnClick,
                "cursor-pointer": suffixOnClick,
              })}
              onClick={suffixOnClick}
            >
              {inputSuffix}
            </div>
          )}
        </div>
        {errorMessage && (
          <div className="label">
            <span className="label-text-alt text-red-500">{errorMessage}</span>
          </div>
        )}
      </div>
    );
  },
);

export default Input;
