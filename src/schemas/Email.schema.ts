import { z } from "zod";

export const EmailSchema = z
  .string()
  .trim()
  .min(1, { message: "This field should't be empty!" })
  .email({ message: "Not a valid email!" });
