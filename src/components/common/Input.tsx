import {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import InputIcon from "./InputIcon";

const containerVariants = cva([], {
  variants: {
    variant: {
      primary:
        "flex items-center border-2 border-slate-200 rounded-full overflow-hidden",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const inputVariants = cva(["outline-none"], {
  variants: {
    variant: {
      primary: "px-2.5 py-2",
    },
    w: {
      full: "w-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    w: "full",
  },
});

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  VariantProps<typeof inputVariants> & {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    onLeftIconClick?: () => void;
    onRightIconClick?: () => void;
  };

const Input = forwardRef<HTMLInputElement, Props>(function Input(
  {
    variant,
    leftIcon,
    rightIcon,
    onLeftIconClick,
    onRightIconClick,
    className,
    ...props
  },
  ref
) {
  return (
    <div className={twMerge(containerVariants({ variant }))}>
      {leftIcon && (
        <InputIcon onClick={onLeftIconClick} className="pl-2.5">
          {leftIcon}
        </InputIcon>
      )}

      <input
        ref={ref}
        className={twMerge(inputVariants({ variant }), className)}
        {...props}
      />

      {rightIcon && (
        <InputIcon onClick={onRightIconClick} className="pr-2.5">
          {rightIcon}
        </InputIcon>
      )}
    </div>
  );
});

export default Input;
