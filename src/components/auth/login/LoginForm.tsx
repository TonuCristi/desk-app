import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { Link } from "react-router-dom";
import Input from "../../common/Input";
import Button from "../../common/Button";
import HidePassInput from "../../common/HidePassInput";
import Message from "../../common/Message";

import { Login, LoginSchema } from "../../../types/Auth.types";
import { useLogin } from "../hooks/useLogin";

const inputs = [
  {
    name: "email",
    label: "Email",
    placeholder: "Email",
    type: "text",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Password",
    type: "password",
  },
] as const;

export default function LoginForm() {
  const methods = useForm<Login>({
    defaultValues: {
      email: "testare@example.com",
      password: "Test@re1234",
    },
    resolver: zodResolver(LoginSchema),
  });
  const { isLoading, error, login } = useLogin();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<Login> = (data) => login(data);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-2"
      >
        {inputs.map(({ name, label, placeholder, type }) =>
          type === "text" ? (
            <div key={name} className="flex flex-col gap-1">
              <label htmlFor={name}>{label}</label>
              <Input
                type={type}
                id={name}
                placeholder={placeholder}
                {...register(name)}
              />
              {errors[name] && (
                <Message variant="error">{errors[name].message}</Message>
              )}
            </div>
          ) : (
            <div key={name} className="flex flex-col gap-1">
              <label htmlFor={name}>{label}</label>
              <HidePassInput key={name} name={name} placeholder={placeholder} />
              {errors[name] && (
                <Message variant="error">{errors[name].message}</Message>
              )}
            </div>
          ),
        )}

        <Link
          to="/forgotPassword"
          className="mb-3 self-center border-b border-b-transparent transition-all duration-100 hover:border-primary xsm:self-end"
        >
          Forgot your password?
        </Link>

        <Button disabled={isLoading} isLoading={isLoading}>
          Login
        </Button>

        {error && (
          <div className="text-center">
            <Message variant="error">{error}</Message>
          </div>
        )}
      </form>
    </FormProvider>
  );
}
