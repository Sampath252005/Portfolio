import { PageHeader } from "@/components/shared/page-header";
import { ContactForm } from "@/components/contact/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get In Touch"
        subtitle="I'd love to hear from you! Whether you have a question, a project idea, or just want to connect."
      />
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-headline text-3xl font-bold text-primary mb-6">Contact Information</h2>
            <p className="text-foreground/80 mb-8">
              Feel free to reach out through the form, or connect with me via the details below. I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary">Email</h3>
                  <a href="mailto:sampath@example.com" className="text-foreground/80 hover:text-accent transition-colors">
                    sampath@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary">Phone</h3>
                  <a href="tel:+1234567890" className="text-foreground/80 hover:text-accent transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary">Location</h3>
                  <p className="text-foreground/80">Your City, Your Country (Remote)</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
