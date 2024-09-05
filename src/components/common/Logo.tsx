import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import { COMMON } from "../../constants/common";

const logoVariants = cva(
  ["py-2 px-4 rounded-full uppercase font-semibold text-xl"],
  {
    variants: {
      variant: {
        primary: "bg-primary text-secondary",
        secondary: "bg-secondary text-primary",
        empty: "",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type Props = VariantProps<typeof logoVariants> & {
  className?: string;
};

export default function Logo({ variant, className }: Props) {
  return (
    <div className={twMerge(logoVariants({ variant }), className)}>
      {COMMON.APP_TITLE}
    </div>
  );
}
