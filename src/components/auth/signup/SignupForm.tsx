import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../../common/Input";
import Message from "../../common/Message";
import HidePassInput from "../../common/HidePassInput";
import Button from "../../common/Button";

import { Signup, SignupSchema } from "../../../types/Auth.types";
import { useSignup } from "../hooks/useSignup";

const inputs = [
  {
    name: "username",
    label: "Username",
    placeholder: "Username",
    type: "text",
  },
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

export default function SignupForm() {
  const methods = useForm<Signup>({
    defaultValues: {
      username: "testare",
      email: "testare@example.com",
      password: "P@rola1234",
    },
    resolver: zodResolver(SignupSchema),
  });
  const { isLoading, error, signup } = useSignup();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<Signup> = (data) => signup(data);

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
              <HidePassInput key={name} name={name} placeholder={label} />
              {errors[name] && (
                <Message variant="error">{errors[name].message}</Message>
              )}
            </div>
          ),
        )}

        <div className="mt-4">
          <Button disabled={isLoading}>Sign up</Button>
        </div>

        {error && (
          <div className="text-center">
            <Message variant="error">{error}</Message>
          </div>
        )}
      </form>
    </FormProvider>
  );
}
