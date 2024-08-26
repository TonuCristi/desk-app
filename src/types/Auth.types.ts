import { z } from "zod";

import { EmailSchema } from "../schemas/Email.schema";
import { PasswordSchema } from "../schemas/Password.schema";
import { UsernameSchema } from "../schemas/Username.schema";

export const LoginSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema,
});

export type Login = z.infer<typeof LoginSchema>;

export const SignupSchema = z.object({
  username: UsernameSchema,
  email: EmailSchema,
  password: PasswordSchema,
});

export type Signup = z.infer<typeof SignupSchema>;

export const ForgotPasswordSchema = z.object({
  email: EmailSchema,
});

export type ForgotPassword = z.infer<typeof ForgotPasswordSchema>;

export const ResetPasswordSchema = z.object({
  newPassword: PasswordSchema,
  confirmNewPassword: PasswordSchema,
});

export type ResetPassword = z.infer<typeof ResetPasswordSchema>;

export type User = {
  username: string;
  email: string;
  createdAt: string;
};
