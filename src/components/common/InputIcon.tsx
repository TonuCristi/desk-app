import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  className: string;
};

export default function InputIcon({ children, onClick, className }: Props) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
      className={twMerge(className)}
    >
      {children}
    </button>
  );
}
