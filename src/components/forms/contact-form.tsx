"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { contactContent } from "@/content/contact";
import { servicesContent } from "@/content/services";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

const inputClasses =
  "w-full px-4 py-3 bg-input-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-muted-foreground/60";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (data: ContactInput) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(json.error ?? "Something went wrong");
      }

      toast.success(contactContent.form.success.title, {
        description: contactContent.form.success.description,
      });
      setSubmitted(true);
      reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Please try again";
      toast.error("Couldn't send your message", { description: message });
    }
  };

  if (submitted) {
    return (
      <div className="p-8 bg-primary/10 border border-primary/20 rounded-xl text-center">
        <CheckCircle2 className="text-primary mx-auto mb-4" size={48} />
        <h3 className="text-xl font-semibold mb-2">
          {contactContent.form.success.title}
        </h3>
        <p className="text-muted-foreground mb-6">
          {contactContent.form.success.description}
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-primary hover:text-primary/80 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid md:grid-cols-2 gap-6">
        <Field id="name" label="Full Name" required error={errors.name?.message}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="John Doe"
            className={cn(inputClasses, errors.name && "border-destructive")}
            {...register("name")}
          />
        </Field>
        <Field id="email" label="Email Address" required error={errors.email?.message}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="john@example.com"
            className={cn(inputClasses, errors.email && "border-destructive")}
            {...register("email")}
          />
        </Field>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Field id="company" label="Company Name" error={errors.company?.message}>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            placeholder="Your Company"
            className={inputClasses}
            {...register("company")}
          />
        </Field>
        <Field id="phone" label="Phone Number" error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 (555) 123-4567"
            className={inputClasses}
            {...register("phone")}
          />
        </Field>
      </div>

      <Field
        id="service"
        label="Service Interested In"
        required
        error={errors.service?.message}
      >
        <select
          id="service"
          className={cn(inputClasses, errors.service && "border-destructive")}
          defaultValue=""
          {...register("service")}
        >
          <option value="" disabled>
            Select a service
          </option>
          {servicesContent.serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Message" required error={errors.message?.message}>
        <textarea
          id="message"
          rows={6}
          placeholder="Tell us about your project..."
          className={cn(
            inputClasses,
            "resize-none",
            errors.message && "border-destructive",
          )}
          {...register("message")}
        />
      </Field>

      {/* Honeypot — visually hidden, real users leave it empty */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-3 bg-primary hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed text-primary-foreground rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        <Send size={20} />
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block mb-2">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-2 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
