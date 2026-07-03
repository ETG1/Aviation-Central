"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Loader2, Mail, MapPin, MessageSquare } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const subject = watch("subject");

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    // Stub: simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-16 px-6">
        <div className="w-16 h-16 rounded-full bg-sky/10 flex items-center justify-center mb-6">
          <CheckCircle2 className="w-9 h-9 text-sky" />
        </div>
        <h3 className="text-2xl font-sora font-bold text-navy dark:text-cloud mb-3">Message Sent!</h3>
        <p className="text-muted-foreground max-w-sm">
          Thank you for reaching out. We'll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="Johan van der Merwe"
            {...register("name")}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && (
            <p className="text-destructive text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register("email")}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-destructive text-sm">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Select value={subject} onValueChange={(val) => setValue("subject", val, { shouldValidate: true })}>
          <SelectTrigger id="subject" className={errors.subject ? "border-destructive" : ""}>
            <SelectValue placeholder="Select a topic..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="event-listing">Event Listing Request</SelectItem>
            <SelectItem value="correction">Date / Info Correction</SelectItem>
            <SelectItem value="partnership">Partnership / Advertising</SelectItem>
            <SelectItem value="general">General Enquiry</SelectItem>
          </SelectContent>
        </Select>
        {errors.subject && (
          <p className="text-destructive text-sm">{errors.subject.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us how we can help..."
          rows={6}
          {...register("message")}
          className={errors.message ? "border-destructive" : ""}
        />
        {errors.message && (
          <p className="text-destructive text-sm">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full h-12 bg-amber text-navy hover:bg-amber/90 font-semibold text-base"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <MessageSquare className="w-5 h-5 mr-2" /> Send Message
          </>
        )}
      </Button>
    </form>
  );
}

export function ContactSidebar() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-sora font-bold text-xl text-navy dark:text-cloud mb-4">Get in Touch</h3>
        <p className="text-muted-foreground leading-relaxed">
          Have a question about an upcoming airshow, want to list your event, or spotted something out-of-date? We'd love to hear from you.
        </p>
      </div>

      <div className="space-y-5">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-sky/10 flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5 text-sky" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1 font-medium">Email</p>
            <a
              href="mailto:info@aviationcentral.co.za"
              className="text-foreground font-semibold hover:text-sky transition-colors"
            >
              info@aviationcentral.co.za
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-sky/10 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-sky" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1 font-medium">Based In</p>
            <p className="text-foreground font-semibold">Gauteng, South Africa</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-sky/10 flex items-center justify-center shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-sky"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1 font-medium">Facebook</p>
            <a
              href="https://web.facebook.com/AviationSA/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-semibold hover:text-sky transition-colors"
            >
              @AviationSA
            </a>
          </div>
        </div>
      </div>

      <div className="bg-cloud dark:bg-muted rounded-xl p-5 border border-border">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Response time:</strong> We typically respond within 2 business days. For urgent event corrections, please mention it in your subject line.
        </p>
      </div>
    </div>
  );
}
