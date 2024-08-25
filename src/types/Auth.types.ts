import { z } from "zod";

import { EmailSchema } from "../schemas/Email.schema";
import { PasswordSchema } from "../schemas/Password.schema";

export const LoginSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema,
});

export type Login = z.infer<typeof LoginSchema>;
