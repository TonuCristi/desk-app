import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

const buttonVariants = cva([], {
  variants: {
    variant: {
      primary:
        "bg-slate-950 text-slate-50 px-2.5 py-2 hover:bg-slate-800 transition-colors rounded-full",
    },
    size: {
      full: "w-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "full",
  },
});

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  VariantProps<typeof buttonVariants> & {
    children: ReactNode;
  };

export default function Button({
  variant,
  size,
  children,
  className,
  ...props
}: Props) {
  return (
    <button
      className={clsx(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
