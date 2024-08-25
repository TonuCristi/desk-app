import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { useFormContext } from "react-hook-form";

import Input from "./Input";
import { HiMiniEye, HiMiniEyeSlash } from "react-icons/hi2";

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string;
};

export default function HidePassInput({ name, ...props }: Props) {
  const { register } = useFormContext();
  const [isHidden, setIsHidden] = useState<boolean>(true);

  return (
    <Input
      type={isHidden ? "password" : "text"}
      id={name}
      {...props}
      {...register(name)}
      rightIcon={
        isHidden ? (
          <HiMiniEye className="text-slate-950" />
        ) : (
          <HiMiniEyeSlash className="text-slate-950" />
        )
      }
      onRightIconClick={() => setIsHidden((prev) => !prev)}
    />
  );
}
