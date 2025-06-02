"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { contactFormSchema, submitContactForm, type ContactFormState } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { AlertTriangle, CheckCircle } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactForm() {
  const initialState: ContactFormState = { message: "", success: false };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
          variant: "default",
          action: <CheckCircle className="text-green-500" />,
        });
        formRef.current?.reset(); // Reset form on success
      } else {
         toast({
          title: "Error",
          description: state.message || "Something went wrong.",
          variant: "destructive",
          action: <AlertTriangle className="text-red-500" />,
        });
      }
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6 max-w-xl mx-auto">
      <div>
        <Label htmlFor="name" className="font-semibold">Full Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="mt-1"
          defaultValue={state.fields?.name}
        />
        {state.issues?.find(issue => issue.includes("Name")) && (
          <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.includes("Name"))}</p>
        )}
      </div>
      <div>
        <Label htmlFor="email" className="font-semibold">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          required
          className="mt-1"
          defaultValue={state.fields?.email}
        />
         {state.issues?.find(issue => issue.includes("email")) && (
          <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.includes("email"))}</p>
        )}
      </div>
      <div>
        <Label htmlFor="message" className="font-semibold">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message..."
          required
          rows={6}
          className="mt-1"
          defaultValue={state.fields?.message}
        />
        {state.issues?.find(issue => issue.includes("Message")) && (
          <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.includes("Message"))}</p>
        )}
      </div>
      <SubmitButton />
    </form>
  );
}
