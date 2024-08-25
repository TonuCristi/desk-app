import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import Input from "../../common/Input";
import Button from "../../common/Button";

import { Login, LoginSchema } from "../../../types/Auth.types";
import { Link } from "react-router-dom";
import HidePassInput from "../../common/HidePassInput";
import Message from "../../common/Message";

const inputs = [
  {
    name: "email",
    label: "Email",
    type: "text",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
] as const;

export default function LoginForm() {
  const methods = useForm<Login>({
    resolver: zodResolver(LoginSchema),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<Login> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 w-full"
      >
        {inputs.map(({ name, label, type }) =>
          type === "text" ? (
            <div key={name} className="flex flex-col gap-1">
              <label htmlFor={name}>{label}</label>
              <Input
                type={type}
                id={name}
                placeholder={label}
                {...register(name)}
              />
              {errors[name] && (
                <Message variant="error">{errors[name].message}</Message>
              )}
            </div>
          ) : (
            <div key={name} className="flex flex-col gap-1">
              <label htmlFor={name}>{label}</label>
              <HidePassInput key={name} name={name} placeholder={label} />
              {errors[name] && (
                <Message variant="error">{errors[name].message}</Message>
              )}
            </div>
          )
        )}

        <Link
          to="/forgotPassword"
          className="self-end border-b border-b-transparent hover:border-slate-950 transition-all duration-100 mb-3"
        >
          Forgot your password?
        </Link>

        <Button>Login</Button>
      </form>
    </FormProvider>
  );
}
