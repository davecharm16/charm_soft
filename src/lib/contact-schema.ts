import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(200),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  service: z.string().trim().min(1, "Please choose a service").max(60),
  message: z
    .string()
    .trim()
    .min(10, "Please share at least a few details")
    .max(4000),
  // Honeypot — humans leave this empty. Validated permissively so the
  // route handler can silently accept-and-discard, hiding the trap.
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
