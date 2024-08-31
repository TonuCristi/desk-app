import { ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const messageVariants = cva([], {
  variants: {
    variant: {
      error: "text-red-500",
      success: "text-green-500",
    },
  },
});

type Props = VariantProps<typeof messageVariants> & {
  children: ReactNode;
  className?: string;
};

export default function Message({ children, variant, className }: Props) {
  return (
    <p className={twMerge(messageVariants({ variant }), className)}>
      {children}
    </p>
  );
}
