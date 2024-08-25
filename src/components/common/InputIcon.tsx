import clsx from "clsx";
import { ReactNode } from "react";

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
      className={clsx(className)}
    >
      {children}
    </button>
  );
}
