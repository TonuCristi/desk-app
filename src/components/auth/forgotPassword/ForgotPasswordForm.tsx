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
import { useForgotPassword } from "../hooks/useForgotPassword";

export default function ForgotPasswordForm() {
  const methods = useForm<ForgotPassword>({
    defaultValues: {
      email: "chrisdev2002@gmail.com",
    },
    resolver: zodResolver(ForgotPasswordSchema),
  });
  const forgotPassword = useForgotPassword();
  const [isSent, setIsSent] = useState<boolean>(false);
  // const [isLoading,setIsLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<ForgotPassword> = (data) => {
    function cb() {
      setIsSent(true);
      // setIsLoading(false);
    }

    forgotPassword(data.email, cb);
  };

  return isSent ? (
    <div className="flex flex-col items-center gap-3">
      <p className="text-center font-semibold">
        We sent you a password reset link!
      </p>
      <Button onClick={() => setIsSent(false)}>Retry</Button>
    </div>
  ) : (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-2"
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
