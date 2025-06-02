
"use server";

import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data.",
      fields: formData as Record<string, string>,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  // Simulate API call or email sending
  console.log("Form data submitted:", parsed.data);
  await new Promise(resolve => setTimeout(resolve, 1000));


  // In a real app, you would send an email or save to a database here.
  // For example:
  // try {
  //   await sendEmail({ name: parsed.data.name, email: parsed.data.email, message: parsed.data.message });
  //   return { message: "Thank you! Your message has been sent successfully.", success: true };
  // } catch (error) {
  //   return { message: "Failed to send message. Please try again later.", success: false };
  // }
  
  return { message: "Thank you! Your message has been received. I'll get back to you soon.", success: true };
}
