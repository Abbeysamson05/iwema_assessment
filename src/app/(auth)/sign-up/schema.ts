import { z } from "zod";

export const signupSchema = z
  .object({
    businessName: z.string().min(2, "Business name should be greater than 2"),
    houseNumber: z.string(),
    street: z.string().min(2, "Street should be greater than 2"),
    state: z.string({
      required_error: "Please select a country.",
    }),
    city: z.string().min(2, "City should be greater than 2"),
    contactName: z.string().min(2, "Invalid name provided"),
    businessCategory: z
      .string({
        required_error: "Select business category",
      })
      .min(1, "Select a valid business category"),
    accountNumber: z
      .string()
      .regex(/^\d+$/, "Account number must be numbers only")
      .min(9, { message: "Account number must be at least 9" }),
    businessPhonenumber: z
      .string()
      .regex(
        /^[+]?(\d{1,3})?[-.\s]?\(?(\d{1,4})\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
        "Invalid phone number format"
      ),
    contactNumber: z
      .string()
      .regex(
        /^[+]?(\d{1,3})?[-.\s]?\(?(\d{1,4})\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
        "Invalid phone number format"
      ),
    businessEmail: z.string().email("Invalid email provided"),
    contactEmail: z.string().email("Invalid email provided"),
    password: z.string().min(8, "Password should be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type SignupSchemaType = z.infer<typeof signupSchema>;
