import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const logoVariants = cva(
  ["py-2 px-4 rounded-full uppercase font-semibold text-xl "],
  {
    variants: {
      variant: {
        primary: "bg-slate-950 text-slate-50",
        secondary: "bg-slate-50 text-slate-950",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

type Props = VariantProps<typeof logoVariants>;

export default function Logo({ variant }: Props) {
  return <div className={twMerge(logoVariants({ variant }))}>Desk</div>;
}
