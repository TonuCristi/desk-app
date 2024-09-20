import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import SmallLoader from "./SmallLoader";

const buttonVariants = cva([], {
  variants: {
    variant: {
      primary:
        "bg-primary text-secondary px-2.5 py-2 hover:bg-primary-hover transition-colors rounded-full disabled:bg-primary-disabled",
      empty: "",
    },
    w: {
      full: "w-full",
      auto: "w-auto",
      half: "w-1/2",
    },
  },
  defaultVariants: {
    variant: "primary",
    w: "full",
  },
});

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  VariantProps<typeof buttonVariants> & {
    children: ReactNode;
    isLoading?: boolean;
  };

export default function Button({
  variant,
  w,
  children,
  className,
  isLoading,
  ...props
}: Props) {
  return (
    <button
      className={twMerge(buttonVariants({ variant, w }), className)}
      {...props}
    >
      {isLoading ? (
        <span className="relative">
          <span>{children}</span>

          <div className="absolute left-full top-1/2 ml-2 -translate-y-1/2">
            <SmallLoader />
          </div>
        </span>
      ) : (
        children
      )}
    </button>
  );
}
