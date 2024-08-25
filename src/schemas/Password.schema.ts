import { z } from "zod";

export const PasswordSchema = z
  .string()
  .trim()
  .min(8, { message: "Must have at least 8 characters!" })
  .max(20, { message: "Must have less than 20 characters!" })
  .refine((password) => /[A-Z]/.test(password), {
    message: "Must contain at least one uppercase letter!",
  })
  .refine((password) => /[a-z]/.test(password), {
    message: "Must contain at least one lowercase letter!",
  })
  .refine((password) => /[0-9]/.test(password), {
    message: "Must contain at least one number!",
  })
  .refine((password) => /[!@#$%^&*]/.test(password), {
    message: "Must contain at least one special character!",
  });
