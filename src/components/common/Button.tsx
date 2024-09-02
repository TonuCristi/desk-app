import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva([], {
  variants: {
    variant: {
      primary:
        "bg-slate-950 text-slate-50 px-2.5 py-2 hover:bg-slate-800 transition-colors rounded-full disabled:bg-slate-800",
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
  };

export default function Button({
  variant,
  w,
  children,
  className,
  ...props
}: Props) {
  return (
    <button
      className={twMerge(buttonVariants({ variant, w }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
