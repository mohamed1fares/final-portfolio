import z from "zod";

/**
 * Contact form validation schema
 */
export const ContactFormSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address"),
  subject: z.string().trim().min(1, "Please enter a subject").max(200, "Subject is too long"),
  message: z.string().trim().min(1, "Please enter a message").max(5000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

