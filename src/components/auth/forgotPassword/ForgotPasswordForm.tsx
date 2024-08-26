import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import Input from "../../common/Input";
import Message from "../../common/Message";
import Button from "../../common/Button";

import {
  ForgotPassword,
  ForgotPasswordSchema,
} from "../../../types/Auth.types";

export default function ForgotPasswordForm() {
  const methods = useForm<ForgotPassword>({
    resolver: zodResolver(ForgotPasswordSchema),
  });
  const [isSent, setIsSent] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<ForgotPassword> = (data) => {
    setIsSent(true);
    console.log(data);
  };

  return isSent ? (
    <div className="flex items-center flex-col gap-3">
      <p className="font-semibold text-center">
        We sent you a password reset link!
      </p>
      <Button onClick={() => setIsSent(false)}>Retry</Button>
    </div>
  ) : (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 w-full"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <Input
          type="text"
          id="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && (
          <Message variant="error">{errors.email.message}</Message>
        )}
      </div>

      <div className="mt-4">
        <Button>Send</Button>
      </div>
    </form>
  );
}
