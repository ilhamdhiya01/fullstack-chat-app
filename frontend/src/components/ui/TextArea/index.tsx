/* eslint-disable react/display-name */
import classNames from "classnames";
import { forwardRef } from "react";
import { tv } from "tailwind-variants";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  errorMessage?: string;
  inputSize?: "xs" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  isRequired?: boolean;
  placeholder?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      errorMessage,
      inputSize,
      fullWidth,
      isRequired,
      className,
      placeholder,
      ...props
    },
    ref,
  ) => {
    const textarea = tv({
      base: "textarea",
      variants: {
        inputSize: {
          xs: "textarea-xs",
          sm: "textarea-sm",
          md: "textarea-md",
          lg: "textarea-lg",
        },
      },
      defaultVariants: {
        inputSize: "sm",
      },
    });

    return (
      <div
        className={classNames("form-control w-full", {
          "max-w-xs": !fullWidth,
        })}
      >
        {label && (
          <div className="label">
            <span className="label-text">{label}</span>
            {isRequired && <span className="text-red-500">*</span>}
          </div>
        )}
        <textarea
          ref={ref}
          {...props}
          placeholder={placeholder}
          className={textarea({
            inputSize,
            className,
          })}
        />
        {errorMessage && (
          <div className="label">
            <span className="label-text-alt text-error">{errorMessage}</span>
          </div>
        )}
      </div>
    );
  },
);

export default TextArea;
