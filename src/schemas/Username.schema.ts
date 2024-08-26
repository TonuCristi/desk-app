import { z } from "zod";

export const UsernameSchema = z
  .string()
  .trim()
  .min(1, { message: "This field should't be empty!" })
  .max(30, { message: "Your username is too long!" });
