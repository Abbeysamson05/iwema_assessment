import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email provided"),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
