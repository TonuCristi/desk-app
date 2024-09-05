import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ResetPassword, ResetPasswordSchema } from "../../../types/Auth.types";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../common/Button";
import HidePassInput from "../../common/HidePassInput";
import Message from "../../common/Message";

const inputs = [
  {
    name: "newPassword",
    label: "New password",
    placeholder: "New password",
    type: "password",
  },
  {
    name: "confirmNewPassword",
    label: "Confirm new password",
    placeholder: "Confirm new password",
    type: "password",
  },
] as const;

export default function ResetPasswordForm() {
  const methods = useForm<ResetPassword>({
    resolver: zodResolver(ResetPasswordSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<ResetPassword> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-2"
      >
        {inputs.map(({ name, label, placeholder }) => (
          <div key={name} className="flex flex-col gap-1">
            <label htmlFor={name}>{label}</label>
            <HidePassInput key={name} name={name} placeholder={placeholder} />
            {errors[name] && (
              <Message variant="error">{errors[name].message}</Message>
            )}
          </div>
        ))}

        <div className="mt-4">
          <Button>Reset password</Button>
        </div>
      </form>
    </FormProvider>
  );
}
